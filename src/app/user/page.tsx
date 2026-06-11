"use client";

import Image from "next/image";
import MainYoutubeArea from "../components/main/youtube";
import MainHighlights from "../components/main/highlights";
import { useEffect, useState } from "react";
import { PopupDataType } from "../common/constant";

type MainDataType = {
  main_banner: string;
  youtube_link: string;
  worship_image: string;
  church_image: string;
};

export default function Home() {
  const [mainData, setMainData] = useState<MainDataType>();
  const [popups, setPopups] = useState<PopupDataType[]>([]);
  const [popupIndex, setPopupIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mainRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/main`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const jsonData = await mainRes.json();
        setMainData(jsonData);
      } catch (error) {
        console.error("메인 데이터 로드 실패:", error);
      }

      try {
        const popupRes = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/main/popup?is_open=Y`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const jsonData = await popupRes.json();
        if (jsonData.popupList) {
          const closePopups = JSON.parse(localStorage.getItem("closePopups") ?? "{}");
          const visible = jsonData.popupList.filter((popup: PopupDataType) => {
            const closeDate = new Date(closePopups[popup.id!]);
            return !(closeDate && closeDate >= new Date());
          });
          setPopups(visible);
        }
      } catch (error) {
        console.error("팝업 데이터 로드 실패:", error);
      }
    };

    void fetchData();
  }, []);

  const currentPopup = popups[popupIndex];

  const next = () => setPopupIndex((prev) => prev + 1);

  const closeToday = () => {
    const closePopups = JSON.parse(localStorage.getItem("closePopups") ?? "{}");
    const id = currentPopup?.id?.toString();
    if (id) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      closePopups[id] = new Date(
        tomorrow.getFullYear(),
        tomorrow.getMonth(),
        tomorrow.getDate(),
        23, 59, 59
      );
      localStorage.setItem("closePopups", JSON.stringify(closePopups));
    }
    next();
  };

  return (
    <main className="lg:w-screen!">
      {/* 팝업 모달 */}
      {currentPopup?.image_url && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="flex flex-col bg-white shadow-2xl">
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}${currentPopup.image_url}`}
              width={0}
              height={0}
              sizes="90vw"
              alt="팝업 이미지"
              className="max-w-[90vw] max-h-[50vh] w-auto h-auto cursor-pointer"
              onClick={() => currentPopup.link && window.open(currentPopup.link, "_blank")}
            />
            <div className="flex justify-between items-center bg-white px-3 py-2 text-sm border-t border-gray-100">
              <button className="cursor-pointer" onClick={next}>
                닫기
              </button>
              <button className="cursor-pointer" onClick={closeToday}>
                오늘 하루 그만 보기
              </button>
            </div>
          </div>
        </div>
      )}

      {mainData?.main_banner && (
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${mainData.main_banner}`}
          width={1024}
          height={0}
          alt="천성교회"
          className="w-full aspect-[16/5] object-cover"
        />
      )}
      {mainData?.youtube_link && (
        <MainYoutubeArea youtubeLink={mainData.youtube_link} />
      )}
      <MainHighlights />
    </main>
  );
}
