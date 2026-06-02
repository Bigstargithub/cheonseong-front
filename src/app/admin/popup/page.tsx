"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PopupDataType } from "@/app/common/constant";
import AdminHeaderComponent from "@/app/components/admin/admin_header";
import PopupItemComponent from "@/app/components/admin/popup/popup_item";

export default function AdminPopupListPage() {
  const [popupList, setPopupList] = useState<PopupDataType[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/main/popup/admin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status === 200) {
        setPopupList(jsonData.popupList);
      } else {
        alert(jsonData.message);
      }
    });
  }, []);

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">팝업 리스트</h1>
        <div className="flex justify-end">
          <Link
            href="/admin/popup/create"
            className="border-1 cursor-pointer bg-black text-white px-10 py-4"
          >
            등록
          </Link>
        </div>
        <table className="relative w-full mt-5 admin-list-table">
          <thead>
            <tr>
              <td className="w-20">번호</td>
              <td className="w-[200px]">이미지</td>
              <td>링크</td>
              <td>시작일</td>
              <td>종료일</td>
              <td className="w-50">수정/삭제</td>
            </tr>
          </thead>
          <tbody>
            {popupList.length > 0 &&
              popupList.map((popup) => (
                <PopupItemComponent key={`popup_${popup.id}`} popup={popup} />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
