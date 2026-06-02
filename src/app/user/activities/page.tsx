"use client";

import ActivityCardComponent from "@/app/components/activities/activity_card";
import { useEffect, useState } from "react";

type GalleryListType = {
  id: number;
  title: string;
  description: string;
};

type GalleryDetailType = {
  image_url: string;
};

type ActivityCardType = GalleryListType & {
  thumbnailUrl?: string;
};

export default function UserActivitiesListPage() {
  const [activities, setActivities] = useState<ActivityCardType[]>([]);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const listRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/gallery`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const listJson = await listRes.json();

        if (listJson.status !== 200) {
          return;
        }

        const galleryList = (listJson.galleryList ?? []) as GalleryListType[];
        const enriched = await Promise.all(
          galleryList.map(async (gallery) => {
            try {
              const detailRes = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/gallery/${gallery.id}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const detailJson = await detailRes.json();
              const imageList = (detailJson.galleryImageList ?? []) as GalleryDetailType[];

              return {
                ...gallery,
                thumbnailUrl: imageList[0]?.image_url,
              };
            } catch (error) {
              console.error(error);
              return gallery;
            }
          })
        );

        setActivities(enriched);
      } catch (error) {
        console.error(error);
      }
    };

    loadActivities();
  }, []);

  return (
    <main>
      <h3 className="text-center lg:text-5xl text-3xl font-bold">
        우리들의 추억
      </h3>
      <div className="lg:mt-10 mt-5">
        {activities.map((activity) => (
          <ActivityCardComponent
            key={`activity_${activity.id}`}
            id={activity.id}
            title={activity.title}
            description={activity.description}
            thumbnailUrl={activity.thumbnailUrl}
          />
        ))}
      </div>
    </main>
  );
}

