"use client";

import Link from "next/link";

export default function ActivityItemComponent({
  id,
  title,
  description,
  createdAt,
}: {
  id: number;
  title: string;
  description: string;
  createdAt?: string;
}) {
  const convertCreatedAt = createdAt
    ? new Date(createdAt).toISOString().split("T")[0]
    : "-";

  const deleteGalleryData = async () => {
    if (confirm("정말 우리들의 활동 데이터를 삭제하시겠습니까?")) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/gallery/admin/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const jsonData = await res.json();
      alert(jsonData.message);

      if (jsonData.status === 200) location.reload();
    }
  };

  return (
    <tr>
      <td className="w-20">{id}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td className="w-40">{convertCreatedAt}</td>
      <td className="w-50">
        <Link
          href={`/admin/activities/create?id=${id}`}
          className="mr-3 cursor-pointer"
        >
          수정
        </Link>
        <button
          onClick={deleteGalleryData}
          className="text-red-500 text-medium cursor-pointer"
        >
          삭제
        </button>
      </td>
    </tr>
  );
}
