import Image from "next/image";

export default function UserHomeWorshipPage() {
  return (
    <main>
      {/* 정보 패널 + 메인 이미지 */}
      <div className="lg:flex relative w-full">
        <div className="lg:w-3/10 bg-indigo-600 py-10">
          <h3 className="text-center lg:text-5xl text-3xl text-white font-bold">
            가정예배
          </h3>
          <div className="w-4/5 m-auto lg:mt-10 mt-6">

            {/* 교육 정보 */}
            <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-3">
              교육 정보
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">대상</p>
                <p className="text-white lg:text-lg text-base">각 가정의 식구들</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">시간</p>
                <p className="text-white lg:text-lg text-base">매주 토요일 오후 18:00</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">장소</p>
                <p className="text-white lg:text-lg text-base">각 가정</p>
              </div>
            </div>

            {/* 소개 */}
            <div className="border-t border-white/30 pt-5 mt-6">
              <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-4">
                소개
              </span>
              <p className="text-white lg:text-lg text-base leading-relaxed">
                설교가 없는 거룩한 식탁예배로 예전기도문과 말씀화답, 서로의 축복문으로 가정의 신앙 유산을 만들어 갑니다.
              </p>
              <p className="text-white lg:text-lg text-base leading-relaxed mt-4">
                열린 질문지로 나누며 가정 안에서 행복한 이야기가 끊이지 않는 신앙문화를 만들어갑니다.
              </p>
            </div>

          </div>
        </div>
        <div className="lg:w-7/10">
          <Image
            src="/home_worship_main.avif"
            width={2000}
            height={0}
            alt="가정예배 메인"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 갤러리 섹션 */}
      <div className="flex flex-col lg:flex-row w-full mt-4 lg:mt-1 gap-1">
        <div className="lg:w-1/3">
          <Image
            src="/home_worship_image_1.avif"
            width={2000}
            height={0}
            alt="가정예배 사진"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:w-1/3">
          <Image
            src="/home_worship_image_2.avif"
            width={2000}
            height={0}
            alt="가정예배 사진"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:w-1/3">
          <Image
            src="/home_worship_image_3.avif"
            width={2000}
            height={0}
            alt="가정예배 사진"
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}
