"use client";

import AdminHeaderComponent from "@/app/components/admin/admin_header";
import ActivityItemComponent from "@/app/components/admin/activity/activity_item";
import Link from "next/link";
import { useEffect, useState } from "react";

type ActivityType = {
  id: number;
  title: string;
  description: string;
  created_at?: string;
};

export default function AdminActivitiesListPage() {
  const [activityList, setActivityList] = useState<ActivityType[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/gallery`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status === 200) {
        setActivityList(jsonData.galleryList ?? []);
      } else {
        alert(jsonData.message);
      }
    });
  }, []);

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">우리들의 활동 리스트</h1>
        <div className="flex justify-end">
          <Link
            href="/admin/activities/create"
            className="border-1 cursor-pointer bg-black text-white px-10 py-4"
          >
            등록
          </Link>
        </div>
        <table className="relative w-full mt-5 admin-list-table">
          <thead>
            <tr>
              <td className="w-20">번호</td>
              <td>제목</td>
              <td>설명</td>
              <td className="w-30">생성일시</td>
              <td className="w-50">수정/삭제</td>
            </tr>
          </thead>
          <tbody>
            {activityList.length > 0 &&
              activityList.map((activity) => (
                <ActivityItemComponent
                  key={`activity_${activity.id}`}
                  id={activity.id}
                  title={activity.title}
                  description={activity.description}
                  createdAt={activity.created_at}
                />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
