"use client";

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { resolveGalleryImageSrc } from "./image_utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ActivityImageSwiper({
  imageUrls,
  initialSlide = 0,
  onImageClick,
  isZoomMode = false,
}: {
  imageUrls: string[];
  initialSlide?: number;
  onImageClick?: (index: number) => void;
  isZoomMode?: boolean;
}) {
  if (imageUrls.length === 0) {
    return (
      <div className="w-full h-[420px] bg-gray-100 flex items-center justify-center text-gray-500">
        등록된 이미지가 없습니다.
      </div>
    );
  }

  return (
    <Swiper
      initialSlide={initialSlide}
      loop={imageUrls.length > 1}
      spaceBetween={12}
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation={
        imageUrls.length > 1
          ? {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }
          : false
      }
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        type: "bullets",
      }}
      className={isZoomMode ? "w-full h-full" : "w-full"}
    >
      {imageUrls.map((imageUrl, index) => (
        <SwiperSlide
          key={`${imageUrl}_${index}`}
          className={isZoomMode ? "h-full !flex items-center justify-center" : ""}
        >
          <button
            type="button"
            className={`w-full ${
              isZoomMode
                ? "h-full cursor-default flex items-center justify-center"
                : "cursor-zoom-in"
            }`}
            onClick={() => onImageClick?.(index)}
          >
            <Image
              src={resolveGalleryImageSrc(imageUrl)}
              width={1280}
              height={720}
              alt={`활동 이미지 ${index + 1}`}
              className={
                isZoomMode
                  ? "w-auto max-w-full max-h-[620px] object-contain mx-auto"
                  : "w-full max-h-[620px] object-contain"
              }
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
