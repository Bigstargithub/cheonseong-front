import Image from "next/image";

export default function ChurchIntro() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-5">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">주복교회</h2>
          <p className="mt-1 text-gray-400 text-lg tracking-widest">Joobok church</p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          주복교회(주님이 복 주신 교회)는 2002년 8월 4일 서범석 목사가 첫 예배를
          드림으로 창립되었습니다.
        </p>
        <p className="text-gray-700 leading-relaxed">
          개척 시부터 예전과 영성 중심으로 성도와 교회를 세워나가기 위해
          전심전력해 왔습니다.
        </p>
        <p className="text-gray-700 leading-relaxed">
          교회 창립 이후 지금까지 모든 교인들은 하나님 안에서 생명의 풍성함과
          행복함을 누리는 삶, 그리스도를 닮아가는 제자로 무장시키기 위해서
          훈련하고 있습니다.
        </p>
      </div>
      <div className="flex-shrink-0 w-full lg:w-auto">
        <Image
          src="/intro_main.avif"
          width={520}
          height={400}
          alt="주복교회 소개"
          className="rounded-xl w-full lg:w-auto object-cover"
        />
      </div>
    </section>
  );
}
