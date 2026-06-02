import Image from "next/image";

export default function UserSundaySchoolPage() {
  return (
    <main>
      {/* 정보 패널 + 메인 이미지 */}
      <div className="lg:flex relative w-full">
        <div className="lg:w-3/10 bg-blue-700 py-10">
          <h3 className="text-center lg:text-5xl text-3xl text-white font-bold leading-tight">
            장년부
            <br />
            주일학교
          </h3>
          <div className="w-4/5 m-auto lg:mt-10 mt-6">

            {/* 교육 정보 */}
            <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-3">
              교육 정보
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">대상</p>
                <p className="text-white lg:text-lg text-base">20세 이상의 기혼 남녀</p>
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
                말씀을 삶으로 살아낸 은혜들을 나누고 누리고 치유하는 도전받는 공동체
              </p>
              <p className="text-white lg:text-lg text-base leading-relaxed mt-3">
                예수님의 이야기로 행복한 믿음의 공동체
              </p>
            </div>

          </div>
        </div>
        <div className="lg:w-7/10">
          <Image
            src="/sunday_school_main.avif"
            width={2000}
            height={0}
            alt="장년부 주일학교 메인"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 갤러리 섹션 */}
      <div className="w-full mt-4 lg:mt-1">
        <Image
          src="/sunday_school_image.avif"
          width={2000}
          height={0}
          alt="장년부 주일학교 사진"
          className="w-full"
        />
      </div>
    </main>
  );
}
