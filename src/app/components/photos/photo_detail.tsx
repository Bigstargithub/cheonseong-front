"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type PhotoFileType = {
  id?: number;
  file_path: string;
  photo_id?: number;
};

export default function PhotoDetailComponent({
  selectedPhoto,
  setSelectedPhoto,
}: {
  selectedPhoto: number;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [photoFilesList, setPhotoFilesList] = useState<PhotoFileType[]>([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (selectedPhoto > 0) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/photo/${selectedPhoto}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (data) => {
        const jsonData = await data.json();
        if (jsonData.status === 200) setPhotoFilesList(jsonData.photoFilesList);
      });
    }
  }, [selectedPhoto]);

  return (
    <section className="fixed top-0 left-0 w-full h-full z-12">
      <div
        className="absolute w-full top-0 left-0 opacity-70 h-full bg-black"
        onClick={() => setSelectedPhoto(0)}
      ></div>
      <div className="z-15 h-full">
        <Swiper
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          centeredSlides={true}
          className="h-full w-full flex flex-wrap justify-center"
          onClick={() => setSelectedPhoto(0)}
        >
          {photoFilesList.length > 0 &&
            photoFilesList.map((photoFile) => (
              <SwiperSlide
                key={`photo_file_${photoFile.id}`}
                className="flex! flex-wrap items-center justify-center"
              >
                <div className="lg:w-2/3 w-full mx-auto">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER_URL}${photoFile.file_path}`}
                    width={300}
                    height={0}
                    alt="사진"
                    className="w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          <div className="lg:flex hidden flex-wrap content-center z-20 h-full static">
            <button
              ref={nextRef}
              className="swiper_prev z-10 absolute right-1/10 top-1/2 -translate-y-1/2"
            >
              <Image
                src="/arrow_right.svg"
                width={40}
                height={40}
                alt={"Next"}
                className="cursor-pointer bg-black rounded-4xl "
              />
            </button>
            <button
              ref={prevRef}
              className="swiper_next absolute left-1/10 z-10  top-1/2 -translate-y-1/2"
            >
              <Image
                src="/arrow_left.svg"
                width={40}
                height={40}
                alt={"Prev"}
                className=" cursor-pointer bg-black rounded-4xl"
              />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
