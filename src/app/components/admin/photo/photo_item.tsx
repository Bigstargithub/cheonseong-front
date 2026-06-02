import Image from "next/image";
import Link from "next/link";

export default function PhotoItemComponent({
  id,
  thumbnail,
  title,
  description,
  createdAt,
}: {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  createdAt: string;
}) {
  const convertCreatedAt = new Date(createdAt).toISOString().split("T")[0];

  const deletePhotoData = async () => {
    if (confirm("정말 우리들의 추억 데이터를 삭제하시겠습니까?")) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/photo/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const jsonData = await res.json();
      alert(jsonData.message);

      if (jsonData.status === 200) return location.reload();
    }
  };

  return (
    <tr>
      <td className="w-20">{id}</td>
      <td className="w-[200px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${thumbnail}`}
          width={200}
          height={100}
          alt={title}
        />
      </td>
      <td>{title}</td>
      <td>{description}</td>
      <td className="w-40">{convertCreatedAt}</td>
      <td className="w-50">
        <Link
          href={`/admin/photos/create?id=${id}`}
          className="mr-3 cursor-pointer"
        >
          수정
        </Link>
        <button
          onClick={deletePhotoData}
          className="text-red-500 text-medium cursor-pointer"
        >
          삭제
        </button>
      </td>
    </tr>
  );
}
