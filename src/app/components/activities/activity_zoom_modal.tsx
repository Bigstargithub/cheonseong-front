"use client";

import { useEffect } from "react";
import ActivityImageSwiper from "./activity_image_swiper";

export default function ActivityZoomModal({
  imageUrls,
  initialIndex,
  onClose,
}: {
  imageUrls: string[];
  initialIndex: number;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <section
      className="fixed top-0 left-0 w-full h-full z-50"
      onClick={onClose}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative z-10 h-full flex items-center justify-center px-0 lg:px-2">
        <div className="w-full h-full bg-black/85 relative lg:w-[90vw] lg:h-[90vh] lg:rounded-sm lg:overflow-hidden">
          <div className="absolute top-3 right-3 z-20 lg:hidden">
            <button
              type="button"
              onClick={onClose}
              className="text-white border border-white px-3 py-1 bg-black/40"
            >
              닫기
            </button>
          </div>
          <div
            className="h-full lg:h-[calc(100%-56px)]"
            onClick={(event) => event.stopPropagation()}
          >
            <ActivityImageSwiper
              key={`zoom_swiper_${initialIndex}`}
              imageUrls={imageUrls}
              initialSlide={initialIndex}
              isZoomMode={true}
            />
          </div>
          <div className="hidden lg:block px-4 pb-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 text-white border border-white cursor-pointer rounded-sm"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
