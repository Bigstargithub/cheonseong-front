import Image from "next/image";

export default function UserYouthPage() {
  return (
    <main>
      {/* 성경구절 섹션 */}
      <div className="bg-blue-50 px-5 py-12 lg:px-10 flex justify-center items-center flex-col">
        <p className="text-5xl text-blue-200 font-serif leading-none select-none mb-2">&ldquo;</p>
        <h3 className="font-bold lg:text-2xl text-xl text-blue-700 text-center leading-relaxed">
          주의 영이 계신 곳에는 자유가 있느니라
        </h3>
        <p className="font-medium text-center mt-4 text-blue-500">
          (고린도후서 3장 17절)
        </p>
      </div>

      {/* 정보 패널 + 메인 이미지 */}
      <div className="lg:flex relative w-full">
        <div className="lg:w-3/10 bg-blue-600 py-10">
          <h3 className="text-center lg:text-5xl text-3xl text-white font-bold">
            청 년 부
          </h3>
          <div className="w-4/5 m-auto lg:mt-10 mt-6">

            {/* 교육 정보 */}
            <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-3">
              교육 정보
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">대상</p>
                <p className="text-white lg:text-lg text-base">20세 이상의 미혼 청년</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">시간</p>
                <p className="text-white lg:text-lg text-base">주일 오후 13:00~14:30</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">장소</p>
                <p className="text-white lg:text-lg text-base">2층 본당</p>
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
                  <p className="text-white lg:text-lg text-base">예배함으로 하나님을 누리는 청년</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">말씀</p>
                  <p className="text-white lg:text-lg text-base leading-relaxed">주의 영이 계신 곳에는 자유가 있느니라 (고후 3:17)</p>
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
                  <span>은혜와 감동, 믿음의 도전이 넘쳐나는 예배</span>
                </li>
                <li className="text-white lg:text-lg text-base leading-relaxed flex gap-2">
                  <span className="font-bold shrink-0">2.</span>
                  <span>나누는 삶의 과제를 실천하는 영성공동체</span>
                </li>
                <li className="text-white lg:text-lg text-base leading-relaxed flex gap-2">
                  <span className="font-bold shrink-0">3.</span>
                  <span>말씀 후 통성기도를 통해 우리를 변화시키실 성령님을 만나는 시간</span>
                </li>
              </ol>
            </div>

          </div>
        </div>
        <div className="lg:w-7/10">
          <Image
            src="/youth_main.avif"
            width={2000}
            height={0}
            alt="청년부 메인"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 갤러리 섹션 */}
      <div className="flex flex-col lg:flex-row w-full mt-4 lg:mt-1 gap-1">
        <div className="lg:w-1/2">
          <Image
            src="/youth_image_1.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="청년부 사진"
          />
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/youth_image_2.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="청년부 사진"
          />
        </div>
      </div>
    </main>
  );
}
