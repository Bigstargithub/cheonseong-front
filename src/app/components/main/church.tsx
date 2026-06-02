import Image from "next/image";
import Link from "next/link";

export default function MainChurchArea({
  churchImage,
}: {
  churchImage: string;
}) {
  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse lg:flex-row relative">
        <div className="lg:w-1/2 flex flex-wrap justify-center content-center py-12 lg:py-16">
          <div className="text-center">
            <h3 className="lg:text-5xl text-3xl font-bold text-blue-500">
              교회사역
            </h3>
            <p className="text-sm tracking-tight mt-2">
              장년부 주일 학교, 가정 예배 등 교회 주요 사역
            </p>
            <Link
              href=""
              className="btn btn-primary block mt-3"
            >
              바로가기
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${churchImage}`}
            width={500}
            height={0}
            alt="교회사역"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
