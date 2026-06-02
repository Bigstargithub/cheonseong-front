"use client";

import AdminHeaderComponent from "@/app/components/admin/admin_header";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type GalleryImageType = {
  image_url: string;
};

const MAX_IMAGE_COUNT = 10;
const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;

const normalizeImagePath = (imageUrl: string) => imageUrl.replace(/\\/g, "/");

const ensureLeadingSlash = (imageUrl: string) => {
  const normalized = normalizeImagePath(imageUrl);
  return normalized.startsWith("/") ? normalized : `/${normalized}`;
};

const isAbsoluteUrl = (imageUrl: string) =>
  imageUrl.startsWith("http://") || imageUrl.startsWith("https://");

const getUrlOrigin = (url?: string) => {
  if (!url) return "";

  try {
    return new URL(url).origin;
  } catch {
    return "";
  }
};

const getAbsoluteImageSrc = (imageUrl: string) => {
  const normalized = normalizeImagePath(imageUrl);

  if (isAbsoluteUrl(normalized)) {
    return normalized;
  }

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL ?? "";
  if (!serverUrl) {
    return ensureLeadingSlash(normalized);
  }

  return `${serverUrl}${ensureLeadingSlash(normalized)}`;
};

const getUploadedImageSrc = (imageUrl: string, uploadEndpoint: string) => {
  const normalized = normalizeImagePath(imageUrl);

  if (isAbsoluteUrl(normalized)) {
    return normalized;
  }

  const uploadOrigin = getUrlOrigin(uploadEndpoint);
  if (uploadOrigin) {
    return `${uploadOrigin}${ensureLeadingSlash(normalized)}`;
  }

  return getAbsoluteImageSrc(normalized);
};

const toPayloadImageUrl = (imageUrl: string, uploadEndpoint: string) => {
  const normalized = normalizeImagePath(imageUrl);

  if (!isAbsoluteUrl(normalized)) {
    return ensureLeadingSlash(normalized);
  }

  try {
    const parsedUrl = new URL(normalized);
    const knownOrigins = [
      getUrlOrigin(process.env.NEXT_PUBLIC_SERVER_URL),
      getUrlOrigin(uploadEndpoint),
    ].filter(Boolean);

    if (knownOrigins.includes(parsedUrl.origin)) {
      return `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`;
    }
  } catch {
    return normalized;
  }

  return normalized;
};

const pickUrlValue = (value: unknown): string | null => {
  if (typeof value === "string") {
    return value.replace(/\\/g, "/");
  }

  if (!value || typeof value !== "object") {
    return null;
  }

  const obj = value as Record<string, unknown>;
  const candidate =
    obj.url ??
    obj.image_url ??
    obj.file_path ??
    obj.path ??
    obj.location ??
    obj.src;

  if (typeof candidate === "string") {
    return candidate.replace(/\\/g, "/");
  }

  if (typeof obj.filename === "string") {
    return `/uploads/gallery/${obj.filename}`;
  }

  return null;
};

const extractUploadedUrls = (payload: unknown): string[] => {
  if (!payload || typeof payload !== "object") {
    return [];
  }

  const body = payload as Record<string, unknown>;
  const dataBody =
    body.data && typeof body.data === "object"
      ? (body.data as Record<string, unknown>)
      : undefined;
  const listCandidate =
    body.urls ??
    body.image_urls ??
    body.imageUrls ??
    body.files ??
    dataBody?.urls ??
    dataBody?.image_urls ??
    dataBody?.imageUrls ??
    dataBody?.files;

  if (Array.isArray(listCandidate)) {
    return listCandidate
      .map((item) => pickUrlValue(item))
      .filter((item): item is string => Boolean(item));
  }

  const singleUrl =
    pickUrlValue(body.url) ??
    pickUrlValue(body.image_url) ??
    pickUrlValue(body.file_path) ??
    pickUrlValue(dataBody?.url) ??
    pickUrlValue(dataBody?.image_url) ??
    pickUrlValue(dataBody?.file_path);

  return singleUrl ? [singleUrl] : [];
};

export default function AdminActivitiesCreatePage() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const id = searchParam.get("id");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const uploadEndpoint = useMemo(() => {
    if (process.env.NEXT_PUBLIC_GALLERY_UPLOAD_URL) {
      return process.env.NEXT_PUBLIC_GALLERY_UPLOAD_URL;
    }

    if (process.env.NEXT_PUBLIC_SERVER_URL) {
      return `${process.env.NEXT_PUBLIC_SERVER_URL}/gallery/admin/images`;
    }

    return "";
  }, []);

  useEffect(() => {
    if (!id) return;

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/gallery/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status !== 200) {
        alert(jsonData.message ?? "우리들의 활동 조회 중 오류가 발생했습니다.");
        return;
      }

      setTitle(jsonData.galleryData?.title ?? "");
      setDescription(jsonData.galleryData?.description ?? "");
      const imageList = (jsonData.galleryImageList ?? []) as GalleryImageType[];
      setImageUrls(imageList.map((image) => image.image_url));
    });
  }, [id]);

  const uploadFiles = async (files: FileList) => {
    if (!files || files.length === 0) {
      alert("업로드할 이미지를 선택해 주세요.");
      return;
    }

    if (imageUrls.length >= MAX_IMAGE_COUNT) {
      alert(`이미지는 최대 ${MAX_IMAGE_COUNT}개까지 등록할 수 있습니다.`);
      if (fileRef.current) {
        fileRef.current.value = "";
      }
      return;
    }

    const selectedFiles = Array.from(files);
    const remainingImageCount = MAX_IMAGE_COUNT - imageUrls.length;

    if (selectedFiles.length > remainingImageCount) {
      alert(`이미지는 최대 ${MAX_IMAGE_COUNT}개까지 등록할 수 있습니다.`);
      if (fileRef.current) {
        fileRef.current.value = "";
      }
      return;
    }

    const oversizedFile = selectedFiles.find(
      (file) => file.size > MAX_IMAGE_SIZE_BYTES
    );
    if (oversizedFile) {
      alert("이미지 파일 크기는 5MB 이하만 업로드할 수 있습니다.");
      if (fileRef.current) {
        fileRef.current.value = "";
      }
      return;
    }

    if (!uploadEndpoint) {
      alert("업로드 API 경로가 설정되지 않았습니다.");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("gallery_images", file);
    });

    setIsUploading(true);

    try {
      const res = await fetch(uploadEndpoint, {
        method: "POST",
        body: formData,
      });
      const jsonData = await res.json();

      if (!res.ok) {
        alert(jsonData.message ?? "이미지 업로드에 실패했습니다.");
        return;
      }

      if (
        typeof jsonData?.status === "number" &&
        jsonData.status !== 200 &&
        jsonData.status !== 201
      ) {
        alert(jsonData.message ?? "이미지 업로드에 실패했습니다.");
        return;
      }

      const uploadedUrls = extractUploadedUrls(jsonData).map((url) =>
        getUploadedImageSrc(url, uploadEndpoint)
      );

      if (uploadedUrls.length === 0) {
        alert(
          "업로드 응답에서 이미지 URL을 찾지 못했습니다. 응답 형식을 확인해 주세요."
        );
        return;
      }

      setImageUrls((prev) => [...prev, ...uploadedUrls]);
      if (fileRef.current) {
        fileRef.current.value = "";
      }
    } catch (error) {
      console.error(error);
      alert("이미지 업로드 중 오류가 발생했습니다.");
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = (index: number) => {
    setImageUrls((prev) => prev.filter((_, currentIndex) => currentIndex !== index));
  };

  const onDropImage = (targetIndex: number) => {
    if (dragIndex === null || dragIndex === targetIndex) {
      setDragIndex(null);
      return;
    }

    setImageUrls((prev) => {
      const copied = [...prev];
      const [dragged] = copied.splice(dragIndex, 1);
      copied.splice(targetIndex, 0, dragged);
      return copied;
    });
    setDragIndex(null);
  };

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (title.trim() === "") return alert("제목을 입력해 주세요.");
    if (description.trim() === "") return alert("설명을 입력해 주세요.");
    if (imageUrls.length === 0) return alert("이미지를 최소 1개 등록해 주세요.");
    if (imageUrls.length > MAX_IMAGE_COUNT) {
      return alert(`이미지는 최대 ${MAX_IMAGE_COUNT}개까지 등록할 수 있습니다.`);
    }

    setIsSubmitting(true);

    try {
      const requestURL = id
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/gallery/admin/${id}`
        : `${process.env.NEXT_PUBLIC_SERVER_URL}/gallery/admin`;

      const res = await fetch(requestURL, {
        method: id ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          image_urls: imageUrls.map((imageUrl) =>
            toPayloadImageUrl(imageUrl, uploadEndpoint)
          ),
        }),
      });

      const resJson = await res.json();
      alert(resJson.message);

      if (resJson.status === 200) {
        router.push("/admin/activities");
      }
    } catch (error) {
      console.error(error);
      alert("우리들의 활동 저장 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">우리들의 활동 등록/수정</h1>
        <form onSubmit={formSubmit} className="mt-4">
          <div className="setting-area">
            <h3>우리들의 활동 제목</h3>
            <input
              type="text"
              name="gallery_title"
              id="gallery_title"
              className="border-1 rounded-sm w-1/2 p-2"
              maxLength={100}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="setting-area">
            <h3>우리들의 활동 설명</h3>
            <textarea
              name="gallery_description"
              id="gallery_description"
              className="border-1 rounded-sm w-1/2 h-[100px] resize-none p-2"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <div className="setting-area">
            <h3>이미지 업로드</h3>
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="file"
                ref={fileRef}
                accept="image/*"
                multiple
                disabled={isUploading || isSubmitting}
                onChange={(event) => {
                  if (event.target.files && event.target.files.length > 0) {
                    uploadFiles(event.target.files);
                  }
                }}
              />
              <span className="text-sm text-gray-500">
                파일 선택 시 자동 업로드됩니다. 최대 10개, 파일당 5MB까지 등록할 수
                있으며 첫 번째 이미지가 대표 이미지로 노출됩니다.
              </span>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-medium">등록 이미지 ({imageUrls.length})</h3>
            <ul className="mt-3 flex gap-4 overflow-x-auto pb-2">
              {imageUrls.map((imageUrl, index) => (
                <li
                  key={`${imageUrl}_${index}`}
                  draggable={!isSubmitting}
                  onDragStart={() => setDragIndex(index)}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={() => onDropImage(index)}
                  onDragEnd={() => setDragIndex(null)}
                  className={`border p-2 w-[260px] shrink-0 ${
                    dragIndex === index ? "opacity-40" : "opacity-100"
                  }`}
                >
                  <Image
                    src={getAbsoluteImageSrc(imageUrl)}
                    width={260}
                    height={180}
                    alt={`활동 이미지 ${index + 1}`}
                    className="h-[180px] w-full object-cover"
                  />
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-xs text-blue-600">
                      {index === 0 ? "대표 이미지" : ""}
                    </span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        disabled={isSubmitting}
                        className="px-3 py-1 border text-red-500 cursor-pointer disabled:opacity-50"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-gray-500">
              이미지를 좌우로 드래그해서 순서를 변경하세요.
            </p>
          </div>

          <button
            className="px-4 py-2 text-white bg-black mt-5 cursor-pointer disabled:bg-gray-400"
            disabled={isSubmitting || isUploading}
          >
            {isSubmitting ? "저장 중..." : "저장"}
          </button>
        </form>
      </div>
    </section>
  );
}
