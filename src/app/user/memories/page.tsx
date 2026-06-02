"use client";

import PhotoDetailComponent from "@/app/components/photos/photo_detail";
import UserPhotoItemComponent from "@/app/components/photos/photo_item";
import { useEffect, useState } from "react";

type PhotoType = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
};

export default function MemoriesPage() {
  const [photoList, setPhotoList] = useState<PhotoType[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/photo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status === 200) setPhotoList(jsonData.photoList);
    });
  }, []);

  return (
    <main>
      <h3 className="text-center lg:text-4xl test-3xl font-semibold">
        우리들의 추억
      </h3>
      <div className="lg:mt-10 mt-5">
        {photoList.length > 0 &&
          photoList.map((photo) => (
            <UserPhotoItemComponent
              key={`photo_${photo.id}`}
              id={photo.id}
              title={photo.title}
              desc={photo.description}
              thumbnail={photo.thumbnail}
              setSelectedPhoto={setSelectedPhoto}
            />
          ))}
        {selectedPhoto > 0 && (
          <PhotoDetailComponent
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
          />
        )}
      </div>
    </main>
  );
}
