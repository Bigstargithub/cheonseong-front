import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-48 lg:h-72 overflow-hidden">
      <Image
        src="/kakaotalk-photo-2026-06-02-220159-002.jpeg"
        fill
        alt="교회소개 배너"
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-3xl lg:text-5xl font-bold tracking-wide">교회소개</h1>
        <p className="mt-2 text-base lg:text-xl tracking-widest text-gray-300">
          Cheonsung Church
        </p>
      </div>
    </div>
  );
}
