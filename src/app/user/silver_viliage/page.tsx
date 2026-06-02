import Image from "next/image";

export default function UserSilverViliagePage() {
  return (
    <main>
      {/* 정보 패널 + 메인 이미지 */}
      <div className="lg:flex relative w-full">
        <div className="lg:w-3/10 bg-slate-600 py-10">
          <h3 className="text-center lg:text-5xl text-3xl text-white font-bold leading-tight">
            실버마을
            <br />
            공동체
          </h3>
          <div className="w-4/5 m-auto lg:mt-10 mt-6">

            {/* 교육 정보 */}
            <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-3">
              교육 정보
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">대상</p>
                <p className="text-white lg:text-lg text-base">70세 이상</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">시간</p>
                <p className="text-white lg:text-lg text-base">주일 오전 12:00~13:00</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">장소</p>
                <p className="text-white lg:text-lg text-base">해당장소</p>
              </div>
            </div>

            {/* 공동체 소개 */}
            <div className="border-t border-white/30 pt-5 mt-6">
              <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-4">
                공동체 소개
              </span>
              <p className="text-white lg:text-lg text-base leading-relaxed">
                은혜의 자리를 지킴으로 믿음의 본을 보여주는 공동체
              </p>
            </div>

          </div>
        </div>
        <div className="lg:w-7/10">
          <Image
            src="/silver_viliage_main.avif"
            width={2000}
            height={0}
            alt="실버마을 공동체 메인"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 갤러리 섹션 */}
      <div className="flex flex-col lg:flex-row w-full mt-4 lg:mt-1 gap-1">
        <div className="lg:w-1/2">
          <Image
            src="/silver_viliage_image_1.avif"
            width={2000}
            height={0}
            alt="실버마을 공동체 사진"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/silver_viliage_image_2.avif"
            width={2000}
            height={0}
            alt="실버마을 공동체 사진"
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}
