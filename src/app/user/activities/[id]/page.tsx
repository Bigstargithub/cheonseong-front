"use client";

import ActivityImageSwiper from "@/app/components/activities/activity_image_swiper";
import ActivityZoomModal from "@/app/components/activities/activity_zoom_modal";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type GalleryDataType = {
  title: string;
  description: string;
};

type GalleryImageType = {
  image_url: string;
};

export default function UserActivityDetailPage() {
  const params = useParams<{ id: string }>();
  const activityId = useMemo(() => Number(params.id), [params.id]);

  const [galleryData, setGalleryData] = useState<GalleryDataType | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!Number.isFinite(activityId) || activityId <= 0) return;

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/gallery/${activityId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status !== 200) return;

      setGalleryData(jsonData.galleryData);
      const galleryImageList = (jsonData.galleryImageList ?? []) as GalleryImageType[];
      setImageUrls(galleryImageList.map((image) => image.image_url));
    });
  }, [activityId]);

  return (
    <main className="lg:w-4/5 w-9/10 m-auto py-8">
      <h2 className="text-3xl font-semibold">{galleryData?.title ?? "우리들의 활동"}</h2>
      <p className="mt-4 text-gray-700 whitespace-pre-wrap">
        {galleryData?.description ?? ""}
      </p>

      <div className="mt-8">
        <ActivityImageSwiper imageUrls={imageUrls} onImageClick={setZoomIndex} />
      </div>

      {zoomIndex !== null && (
        <ActivityZoomModal
          imageUrls={imageUrls}
          initialIndex={zoomIndex}
          onClose={() => setZoomIndex(null)}
        />
      )}
    </main>
  );
}

