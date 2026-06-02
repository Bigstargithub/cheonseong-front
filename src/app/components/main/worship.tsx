import Image from "next/image";
import Link from "next/link";

export default function MainWorshipArea({
  worshipImage,
}: {
  worshipImage: string;
}) {
  return (
    <section className="bg-slate-50">
      <div className="lg:flex block relative">
        <div className="lg:w-1/2 w-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${worshipImage}`}
            width={500}
            height={0}
            alt="예배와모임"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 flex flex-wrap justify-center content-center py-12 lg:py-16 w-full">
          <div className="text-center">
            <h3 className="lg:text-5xl text-3xl font-bold text-blue-500">
              예배와 모임
            </h3>
            <p className="text-sm tracking-tight mt-2">
              각 교육부서 예배 및 행사 안내
            </p>
            <Link
              href="/user/infant"
              className="btn btn-primary block mt-3 w-full lg:w-auto"
            >
              바로가기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
