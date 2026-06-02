"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PopupDataType } from "@/app/common/constant";

const BUTTON_HEIGHT = 36;

export default function UserPopupPage() {
  const [popupData, setPopupData] = useState<PopupDataType>();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/main/popup/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status === 200) {
        setPopupData(jsonData.popupData);
      } else {
        alert(jsonData.message);
      }
    });
  }, []);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    const maxW = Math.round(window.screen.availWidth * 0.9);
    const maxH = Math.round(window.screen.availHeight * 0.9);
    const scale = Math.min(maxW / naturalWidth, maxH / (naturalHeight + BUTTON_HEIGHT), 1);
    window.resizeTo(
      Math.round(naturalWidth * scale),
      Math.round((naturalHeight + BUTTON_HEIGHT) * scale)
    );
  };

  const closeToday = () => {
    const now = new Date();
    now.setDate(now.getDate() + 1);

    const closePopups = JSON.parse(localStorage.getItem("closePopups") ?? "[]");
    const id = popupData?.id?.toString();
    if (id) {
      const expires = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59
      );
      closePopups[id] = expires;
      localStorage.setItem("closePopups", JSON.stringify(closePopups));
    }

    return window.close();
  };

  return (
    <div className="flex flex-col">
      {popupData && popupData.image_url && (
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${popupData.image_url}`}
          width={0}
          height={0}
          sizes="100vw"
          alt="팝업 이미지"
          className="w-full h-auto cursor-pointer"
          onLoad={handleImageLoad}
          onClick={() => window.open(popupData.link)}
        />
      )}
      <button
        className="h-9 w-full text-right pr-3 text-sm cursor-pointer bg-white border-t border-gray-200"
        onClick={closeToday}
      >
        X 오늘 하루 그만 보기
      </button>
    </div>
  );
}
