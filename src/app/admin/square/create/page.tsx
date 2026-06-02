"use client";

import AdminHeaderComponent from "@/app/components/admin/admin_header";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type SquareDataType = {
  thumbnail?: string;
  title?: string;
  description?: string;
  link?: string;
};

export default function AdminSquareCreatePage() {
  const [squareThumbnailPreview, setSquareThumbnailPreview] = useState("");
  const [squareData, setSquareData] = useState<SquareDataType>({});
  const router = useRouter();
  const searchParam = useSearchParams();
  const id = searchParam.get("id");

  useEffect(() => {
    if (id) {
      const getSquareDetail = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/square/detail?id=${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const resJson = await res.json();
        if (resJson.status === 200) {
          const squareData = resJson.squareData;
          setSquareThumbnailPreview(
            `${process.env.NEXT_PUBLIC_SERVER_URL}${squareData?.thumbnail}`
          );
          setSquareData(squareData);
        }
      };

      getSquareDetail();
    }
  }, [id]);

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    if (!id) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/square`, {
        method: "POST",
        body: formData,
      });

      const resJson = await res.json();
      alert(resJson.message);

      if (resJson.status === 200) {
        router.push("/admin/square");
      }
    } else {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/square`, {
        method: "PATCH",
        body: formData,
      });

      const resJson = await res.json();

      alert(resJson.message);
      if (resJson.status === 200) return router.refresh();
    }
  };

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">주복광장 {id ? "수정" : "등록"}</h1>
        <form className="mt-4" onSubmit={formSubmit}>
          {id && (
            <input
              type="hidden"
              id="square_id"
              name="square_id"
              defaultValue={id}
            />
          )}
          <div className="setting-area">
            <h3>주복광장 썸네일</h3>
            <input
              type="file"
              name="square_thumbnail"
              id="square_thumbnail"
              accept="image/*"
            />
            {squareThumbnailPreview && (
              <Image
                src={squareThumbnailPreview}
                width={200}
                height={0}
                alt="주복광장 썸네일"
                className="h-auto"
              />
            )}
          </div>
          <div className="setting-area">
            <h3>주복광장 제목</h3>
            <input
              type="text"
              name="square_title"
              id="square_title"
              className="border-1 rounded-sm w-1/2 p-2"
              maxLength={100}
              defaultValue={squareData?.title ?? ""}
            />
          </div>
          <div className="setting-area">
            <h3>주복광장 설명</h3>
            <textarea
              name="square_description"
              id="square_description"
              className="border-1 rounded-sm w-1/2 h-[100px] resize-none p-2"
              defaultValue={squareData.description ?? ""}
            />
          </div>
          <div className="setting-area">
            <h3>주복광장 링크</h3>
            <input
              type="file"
              name="square_link"
              id="square_link"
              accept=".pdf"
              defaultValue={squareData.link ?? ""}
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
