import Image from "next/image";
import Link from "next/link";
import { PopupDataType } from "@/app/common/constant";

export default function PopupItemComponent({
  popup,
}: {
  popup: PopupDataType;
}) {
  const deletePopupData = async () => {
    if (confirm("정말 팝업을 삭제하시겠습니까?")) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/main/popup/${popup.id}`,
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
      <td className="w-20">{popup.id}</td>
      <td className="w-[200px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${popup.image_url ?? ""}`}
          alt={"이미지"}
          width={200}
          height={100}
        />
      </td>
      <td>{popup.link}</td>
      <td>{popup.start_date}</td>
      <td>{popup.end_date}</td>
      <td className="w-50">
        <Link href={`/admin/popup/${popup.id}`} className="mr-3 cursor-pointer">
          수정
        </Link>
      </td>
      <td className="w-50">
        <button
          onClick={deletePopupData}
          className="text-red-500 text-medium cursor-pointer"
        >
          삭제
        </button>
      </td>
    </tr>
  );
}
