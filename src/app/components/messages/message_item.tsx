import Image from "next/image";

export default function MessageItemComponent({
  image,
  title,
  desc,
  isSelected,
  onClick,
}: {
  image: string;
  title: string;
  desc: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`cursor-pointer rounded-xl overflow-hidden border transition-all duration-200 group ${
        isSelected
          ? "border-blue-500 shadow-md"
          : "border-slate-100 shadow-sm hover:shadow-md"
      }`}
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${image}`}
          width={640}
          height={360}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3
          className={`font-semibold text-base leading-snug line-clamp-2 ${
            isSelected ? "text-blue-600" : "text-slate-800"
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-500 line-clamp-2">{desc}</p>
      </div>
    </div>
  );
}
