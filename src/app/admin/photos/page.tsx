"use client";

import AdminHeaderComponent from "@/app/components/admin/admin_header";
import PhotoItemComponent from "@/app/components/admin/photo/photo_item";
import Link from "next/link";
import { useEffect, useState } from "react";

type PhotoType = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  created_at: string;
};

export default function AdminPhotosListPage() {
  const [photoList, setPhotoList] = useState<PhotoType[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/photo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status === 200) {
        setPhotoList(jsonData.photoList);
      } else {
        alert(jsonData.message);
      }
    });
  }, []);

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">우리들의 추억 리스트</h1>
        <div className="flex justify-end">
          <Link
            href="/admin/photos/create"
            className="border-1 cursor-pointer bg-black text-white px-10 py-4"
          >
            등록
          </Link>
        </div>
        <table className="relative w-full mt-5 admin-list-table">
          <thead>
            <tr>
              <td className="w-20">번호</td>
              <td className="w-[200px]">썸네일</td>
              <td>제목</td>
              <td>설명</td>
              <td className="w-30">생성일시</td>
              <td className="w-50">수정/삭제</td>
            </tr>
          </thead>
          <tbody>
            {photoList.length > 0 &&
              photoList.map((photo) => (
                <PhotoItemComponent
                  key={`photo_${photo.id}`}
                  id={photo.id}
                  thumbnail={photo.thumbnail}
                  title={photo.title}
                  description={photo.description}
                  createdAt={photo.created_at}
                />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
