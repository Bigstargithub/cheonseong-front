"use client";

import AdminHeaderComponent from "@/app/components/admin/admin_header";
import AdminSquareItemComponent from "@/app/components/admin/sqaure/square_admin_item";
import Link from "next/link";
import { useEffect, useState } from "react";

type SquareDataType = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  created_at: string;
};

export default function SquareListAdminPage() {
  const [squareList, setSqaureList] = useState<SquareDataType[]>([]);

  const getSquareList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/square`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resJson = await res.json();
    if (resJson.status === 200) {
      setSqaureList(resJson.squareList);
    }
  };

  useEffect(() => {
    getSquareList();
  }, []);

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">주복광장 리스트</h1>
        <div className="flex justify-end">
          <Link
            href="/admin/square/create"
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
            {squareList.length > 0 &&
              squareList.map((square) => (
                <AdminSquareItemComponent
                  key={`square_${square.id}`}
                  id={square.id}
                  thumbnail={square.thumbnail}
                  title={square.title}
                  description={square.description}
                  createdAt={square.created_at}
                />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
