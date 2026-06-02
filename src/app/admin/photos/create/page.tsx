"use client";

import AdminHeaderComponent from "@/app/components/admin/admin_header";
import { onFileChange } from "@/app/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";

export default function AdminPhotosCreatePage() {
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoDes, setPhotoDes] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const searchParam = useSearchParams();
  const id = searchParam.get("id");

  useEffect(() => {
    if (id) {
      console.log("id: ", id);
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/photo/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (data) => {
        const jsonData = await data.json();
        if (jsonData.status === 200) {
          setThumbnail(
            `${process.env.NEXT_PUBLIC_SERVER_URL}${jsonData.photoData?.thumbnail}`
          );
          setPhotoTitle(jsonData.photoData.title);
          setPhotoDes(jsonData.photoData.description);
        }
      });
    }
  }, [id]);

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      fileRef.current &&
      fileRef.current.files &&
      fileRef.current?.files.length > 100
    )
      return alert("파일 이미지는 100개 이하만 가능합니다.");

    if (thumbnail === "") return alert("썸네일을 등록하시기 바랍니다.");

    const formData = new FormData(event.currentTarget);

    if (!id) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/photo`, {
        method: "POST",
        body: formData,
      });

      const resJson = await res.json();

      alert(resJson.message);
      if (resJson.status === 200) {
        return redirect("/admin/photos");
      }
    } else {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/photo/${id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      const resJson = await res.json();

      alert(resJson.message);
      if (resJson.status === 200) return location.reload();
    }
  };

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">우리들의 추억 등록</h1>
        <form onSubmit={formSubmit} className="mt-4">
          {id && (
            <input
              type="hidden"
              name="photo_id"
              id="photo_id"
              defaultValue={id}
            />
          )}
          <div className="setting-area">
            <h3>우리들의 추억 썸네일</h3>
            <input
              type="file"
              name="photo_thumbnail"
              id="photo_thumbnail"
              onChange={(e) => onFileChange(e, setThumbnail)}
            />
            {thumbnail && (
              <Image
                src={thumbnail}
                width={200}
                height={0}
                alt="우리들의 추억 썸네일"
                className="h-auto"
              />
            )}
          </div>
          <div className="setting-area">
            <h3>우리들의 추억 제목</h3>
            <input
              type="text"
              name="photo_title"
              id="photo_title"
              className="border-1 rounded-sm w-1/2 p-2"
              maxLength={100}
              defaultValue={photoTitle}
            />
          </div>
          <div className="setting-area">
            <h3>우리들의 추억 설명</h3>
            <textarea
              name="photo_description"
              id="photo_description"
              className="border-1 rounded-sm w-1/2 h-[100px] resize-none p-2"
              defaultValue={photoDes}
            />
          </div>
          <div className="setting-area">
            <h3>우리들의 추억 이미지 파일</h3>
            <input
              type="file"
              name="photo_files"
              id="photo_files"
              accept="image/*"
              multiple
              ref={fileRef}
            />
          </div>
          <button className="px-4 py-2 text-white bg-black mt-5 cursor-pointer">
            등록
          </button>
        </form>
      </div>
    </section>
  );
}
