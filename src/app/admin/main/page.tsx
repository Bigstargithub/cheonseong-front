"use client";

import AdminHeaderComponent from "@/app/components/admin/admin_header";
import Image from "next/image";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export default function AdminMainSettingPage() {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [mainBannerPreview, setMainBannerPreview] = useState("");
  const [worshipImagePreview, setWorshipImagePreview] = useState("");
  const [churchImagePreview, setchurchImagePreview] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/main`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();

      setYoutubeLink(
        jsonData.youtube_link === undefined ? "" : jsonData.youtube_link
      );
      setMainBannerPreview(
        jsonData.main_banner === undefined
          ? ""
          : `${process.env.NEXT_PUBLIC_SERVER_URL}${jsonData.main_banner}`
      );
      setWorshipImagePreview(
        jsonData.worship_image === undefined
          ? ""
          : `${process.env.NEXT_PUBLIC_SERVER_URL}${jsonData.worship_image}`
      );
      setchurchImagePreview(
        jsonData.church_image === undefined
          ? ""
          : `${process.env.NEXT_PUBLIC_SERVER_URL}${jsonData.church_image}`
      );
    });
  }, []);

  const onfileChange = (
    event: ChangeEvent<HTMLInputElement>,
    setPreviewState: Dispatch<SetStateAction<string>>
  ) => {
    const inputFile = event.target.files?.[0];

    if (inputFile && inputFile?.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(inputFile);
      setPreviewState(imageURL);
    }
  };

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/main`, {
      method: "POST",
      body: formData,
    });

    const resJson = await res.json();

    if (resJson.status === 200) {
      alert(resJson.message);
    }
  };

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">메인 페이지 등록</h1>
        <form onSubmit={formSubmit} className="mt-4">
          <div className="setting-area">
            <h3 className="text-xl font-medium mr-5">메인 배너 이미지</h3>
            <input
              type="file"
              name="main_banner_image"
              id="main_banner_image"
              onChange={(e) => onfileChange(e, setMainBannerPreview)}
            />
            {mainBannerPreview > "" && (
              <Image
                src={mainBannerPreview}
                width={200}
                height={0}
                alt="메인배너 이미지"
                className="h-auto"
              />
            )}
          </div>
          <div className="setting-area">
            <h3 className="text-xl font-medium mr-5">메인 유튜브 링크</h3>
            <input
              type="text"
              name="main_youtube_link"
              id="main_youtube_link"
              className="border-1 rounded-sm w-1/2"
              value={youtubeLink === undefined ? "" : youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
            />
          </div>
          <div className="setting-area">
            <h3 className="text-xl font-medium mr-5">예배와 모임 이미지</h3>
            <input
              type="file"
              name="worship_image"
              id="worship_image"
              onChange={(e) => onfileChange(e, setWorshipImagePreview)}
            />
            {worshipImagePreview > "" && (
              <Image
                src={worshipImagePreview}
                width={200}
                height={0}
                alt="예배와 모임 이미지"
                className="h-auto"
              />
            )}
          </div>
          <div className="setting-area">
            <h3 className="text-xl font-medium mr-5">교회 사역 이미지</h3>
            <input
              type="file"
              name="church_image"
              id="church_image"
              onChange={(e) => onfileChange(e, setchurchImagePreview)}
            />
            {churchImagePreview > "" && (
              <Image
                src={churchImagePreview}
                width={200}
                height={0}
                alt="교회사역 이미지"
                className="h-auto"
              />
            )}
          </div>
          <button>저장</button>
        </form>
      </div>
    </section>
  );
}
