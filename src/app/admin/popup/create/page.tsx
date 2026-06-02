"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AdminHeaderComponent from "@/app/components/admin/admin_header";

export default function AdminPopupCreatePage() {
  const router = useRouter();
  const [popupImagePreview, setPopupImagePreview] = useState("");
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputFile = event.target.files?.[0];

    if (inputFile && inputFile?.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(inputFile);
      setPopupImagePreview(imageURL);
    }
  };

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/main/popup`,
      {
        method: "POST",
        body: formData,
      }
    );
    const resJson = await res.json();
    alert(resJson.message);
    if (resJson.status === 200) {
      return router.push("/admin/popup");
    }
  };
  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">팝업 등록</h1>
        <form className="mt-4" onSubmit={formSubmit}>
          <div className="setting-area">
            <h3>팝업 이미지</h3>
            <input
              type="file"
              name="popup_image"
              id="popup_image"
              onChange={(e) => onFileChange(e)}
            />
            {popupImagePreview && (
              <Image
                src={popupImagePreview}
                width={200}
                height={0}
                alt="팝업 이미지"
              />
            )}
          </div>
          <div className="setting-area">
            <h3>팝업 링크</h3>
            <input
              type="text"
              name="popup_link"
              id="popup_link"
              className="border-1 rounded-sm w-1/2 p-2"
              maxLength={256}
            />
          </div>
          <div className="setting-area">
            <h3>팝업 시작일</h3>
            <input type="date" name="popup_start_date" id="popup_start_date" />
          </div>
          <div className="setting-area">
            <h3>팝업 종료일</h3>
            <input type="date" name="popup_end_date" id="popup_end_date" />
          </div>
          <button className="px-4 py-2 text-white bg-black mt-5 cursor-pointer">
            등록
          </button>
        </form>
      </div>
    </section>
  );
}
