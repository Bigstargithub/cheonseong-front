import Image from "next/image";

export default function UserChildrenPage() {
  return (
    <main>
      {/* 성경구절 섹션 */}
      <div className="bg-blue-50 px-5 py-12 lg:px-10 flex justify-center items-center flex-col">
        <p className="text-5xl text-blue-200 font-serif leading-none select-none mb-2">&ldquo;</p>
        <h3 className="font-bold lg:text-2xl text-xl text-blue-700 text-center leading-relaxed">
          예수께서 이르시되 나를 따라오라 내가 너희로 사람을 낚는 어부가 되게 하리라 하시니
        </h3>
        <p className="font-medium text-center mt-4 text-blue-500">
          (마가복음 1장 7절)
        </p>
      </div>

      {/* 정보 패널 + 메인 이미지 */}
      <div className="lg:flex relative w-full">
        <div className="lg:w-3/10 bg-sky-400 py-10">
          <h3 className="text-center lg:text-5xl text-3xl text-white font-bold">
            아 동 부
          </h3>
          <div className="w-4/5 m-auto lg:mt-10 mt-6">

            {/* 교육 정보 */}
            <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-3">
              교육 정보
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">대상</p>
                <p className="text-white lg:text-lg text-base">초등학생 1~6학년 어린이</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">시간</p>
                <p className="text-white lg:text-lg text-base">주일 오전 11:00~12:00</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">장소</p>
                <p className="text-white lg:text-lg text-base">3층 아동부실</p>
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
                  <p className="text-white lg:text-lg text-base">우리는 예수님의 작은 제자!</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">말씀</p>
                  <p className="text-white lg:text-lg text-base leading-relaxed">예수께서 이르시되 나를 따라오라 내가 너희로 사람을 낚는 어부가 되게 하리라 하시니 (마가복음 1:7)</p>
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
                  <span>하나님께서는 우리를 사랑하시며 예수님을 통하여 구원해주심을 깨닫는다.</span>
                </li>
                <li className="text-white lg:text-lg text-base leading-relaxed flex gap-2">
                  <span className="font-bold shrink-0">2.</span>
                  <span>우리를 제자로 부르시는 예수님의 말씀에 예! 따르겠어요! 라고 고백하는 어린이가 된다.</span>
                </li>
                <li className="text-white lg:text-lg text-base leading-relaxed flex gap-2">
                  <span className="font-bold shrink-0">3.</span>
                  <span>세상 속에서 복음을 전하는 어린이, 선한 영향력을 흘려보내는 예수님의 작은제자로 살아간다.</span>
                </li>
              </ol>
            </div>

          </div>
        </div>
        <div className="lg:w-7/10">
          <Image
            src="/children_main.avif"
            width={2000}
            height={0}
            alt="아동부 메인"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 갤러리 섹션 */}
      <div className="flex flex-col lg:flex-row w-full mt-4 lg:mt-1 gap-1">
        <div className="lg:w-1/2">
          <Image
            src="/children_image_1.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="아동부 사진"
          />
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/children_image_2.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="아동부 사진"
          />
        </div>
      </div>
    </main>
  );
}
