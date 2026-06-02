import Image from "next/image";

export default function UserTeenagerPage() {
  return (
    <main>
      {/* 성경구절 섹션 */}
      <div className="bg-blue-50 px-5 py-12 lg:px-10 flex justify-center items-center flex-col">
        <p className="text-5xl text-blue-200 font-serif leading-none select-none mb-2">&ldquo;</p>
        <h3 className="font-bold lg:text-2xl text-xl text-blue-700 text-center leading-relaxed">
          구하는 이마다 받을 것이요 찾는 이마다 찾아낼 것이요 두드리는 이에게는 열릴 것이니라
        </h3>
        <p className="font-medium text-center mt-4 text-blue-500">
          (마태복음 7장 8절)
        </p>
      </div>

      {/* 정보 패널 + 메인 이미지 */}
      <div className="lg:flex relative w-full">
        <div className="lg:w-3/10 bg-blue-500 py-10">
          <h3 className="text-center lg:text-5xl text-3xl text-white font-bold">
            중 고 등 부
          </h3>
          <div className="w-4/5 m-auto lg:mt-10 mt-6">

            {/* 교육 정보 */}
            <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-3">
              교육 정보
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">대상</p>
                <p className="text-white lg:text-lg text-base">중학생 1학년 ~ 고등학생 3학년</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">시간</p>
                <p className="text-white lg:text-lg text-base">주일 오전 11:00~12:30</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">장소</p>
                <p className="text-white lg:text-lg text-base">4층 예배홀</p>
              </div>
            </div>

            {/* 표어 & 말씀 */}
            <div className="border-t border-white/30 pt-5 mt-6">
              <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-3">
                표어 &amp; 말씀
              </span>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">표어</p>
                  <p className="text-white lg:text-lg text-base">하나님의 꿈을 실천하라</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">말씀</p>
                  <p className="text-white lg:text-lg text-base leading-relaxed">구하는 이마다 받을 것이요 찾는 이마다 찾아낼 것이요 두드리는 이에게는 열릴 것이니라 (마태복음 7:8)</p>
                </div>
              </div>
            </div>

            {/* 교육 목표 */}
            <div className="border-t border-white/30 pt-5 mt-6">
              <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-3">
                교육 목표
              </span>
              <ol className="space-y-3">
                <li className="text-white lg:text-lg text-base leading-relaxed flex gap-2">
                  <span className="font-bold shrink-0">1.</span>
                  <span>기획예배(전통, 예전, 찬양예배 등)를 통해 예배 가운데 계신 하나님을 만나요.</span>
                </li>
                <li className="text-white lg:text-lg text-base leading-relaxed flex gap-2">
                  <span className="font-bold shrink-0">2.</span>
                  <span>선생님과 나누는 삶의 과제를 실천함으로써 삶에서 계신 예수님을 만나요.</span>
                </li>
                <li className="text-white lg:text-lg text-base leading-relaxed flex gap-2">
                  <span className="font-bold shrink-0">3.</span>
                  <span>말씀 후 통성기도를 통해 우리를 변화시키실 성령님을 만나요.</span>
                </li>
              </ol>
            </div>

          </div>
        </div>
        <div className="lg:w-7/10">
          <Image
            src="/teenager_main.avif"
            width={2000}
            height={0}
            alt="중고등부 메인"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 갤러리 섹션 */}
      <div className="flex flex-col lg:flex-row w-full mt-4 lg:mt-1 gap-1">
        <div className="lg:w-1/2">
          <Image
            src="/teenager_image_1.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="중고등부 사진"
          />
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/teenager_image_2.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="중고등부 사진"
          />
        </div>
      </div>
    </main>
  );
}
