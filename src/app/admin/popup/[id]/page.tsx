"use client";

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { redirect, useParams, useRouter } from "next/navigation";
import { PopupDataType } from "@/app/common/constant";
import AdminHeaderComponent from "@/app/components/admin/admin_header";

export default function AdminPopupPage() {
  const [popupImagePreview, setPopupImagePreview] = useState("");
  const [popupData, setPopupData] = useState<PopupDataType>({});
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/main/popup/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status !== 200) {
        alert(jsonData.message);
        return redirect("/admin");
      }

      if (jsonData.popupData) {
        const popupData = jsonData.popupData;
        setPopupData(popupData);

        if (popupData?.image_url) {
          setPopupImagePreview(
            `${process.env.NEXT_PUBLIC_SERVER_URL}${popupData.image_url}`
          );
        }
      }
    });
  }, []);

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/main/popup/${id}`,
      {
        method: "PATCH",
        body: formData,
      }
    );

    const resJson = await res.json();
    alert(resJson.message);
    if (resJson.status === 200) {
      router.refresh();
    }
  };

  const onFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<string>>
  ) => {
    const inputFile = event.target.files?.[0];

    if (inputFile && inputFile?.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(inputFile);
      setState(imageURL);
    }
  };

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">팝업 수정</h1>
        <form className="mt-4" onSubmit={formSubmit}>
          <div className="setting-area">
            <h3>팝업 이미지 파일</h3>
            <input
              type="file"
              name="popup_image"
              id="popup_image"
              onChange={(e) => onFileChange(e, setPopupImagePreview)}
            />
            {popupImagePreview && (
              <Image
                src={popupImagePreview}
                width={200}
                height={0}
                alt="팝업 썸네일"
                className="h-auto"
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
              defaultValue={popupData?.link}
            />
          </div>
          <div className="setting-area">
            <h3>팝업 시작시간</h3>
            <input
              type="date"
              name="popup_start_date"
              id="popup_start_date"
              defaultValue={
                popupData?.start_date ? popupData?.start_date.split("T")[0] : ""
              }
            />
          </div>
          <div className="setting-area">
            <h3>팝업 종료시간</h3>
            <input
              type="date"
              name="popup_end_date"
              id="popup_end_date"
              defaultValue={
                popupData?.end_date ? popupData?.end_date.split("T")[0] : ""
              }
            />
          </div>
          <button className="px-4 py-2 text-white bg-black mt-5 cursor-pointer">
            등록
          </button>
        </form>
      </div>
    </section>
  );
}
