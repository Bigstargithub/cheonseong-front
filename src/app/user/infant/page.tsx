import Image from "next/image";

export default function UserInfantPage() {
  return (
    <main>
      {/* 성경구절 섹션 */}
      <div className="bg-blue-50 px-5 py-12 lg:px-10 flex justify-center items-center flex-col">
        <p className="text-5xl text-blue-200 font-serif leading-none select-none mb-2">&ldquo;</p>
        <h3 className="font-bold lg:text-2xl text-xl text-blue-700 text-center leading-relaxed">
          예수는 지혜와 키가 자라가며 하나님과 사람에게 더욱 사랑스러워 가시더라
        </h3>
        <p className="font-medium text-center mt-4 text-blue-500">
          (누가복음 2장 52절)
        </p>
      </div>

      {/* 정보 패널 + 메인 이미지 */}
      <div className="lg:flex relative w-full">
        <div className="lg:w-3/10 bg-sky-500 py-10">
          <h3 className="text-center lg:text-5xl text-3xl text-white font-bold">
            유 치 부
          </h3>
          <div className="w-4/5 m-auto lg:mt-10 mt-6">

            {/* 교육 정보 */}
            <span className="inline-block bg-white/20 text-white text-sm font-bold rounded-full px-3 py-0.5 mb-3">
              교육 정보
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">대상</p>
                <p className="text-white lg:text-lg text-base">4세 이상 ~ 7세 이하</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">시간</p>
                <p className="text-white lg:text-lg text-base">주일 오전 11:00~12:00</p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">장소</p>
                <p className="text-white lg:text-lg text-base">3층 유치부실</p>
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
                  <p className="text-white lg:text-lg text-base">예수님 안에서 쑥쑥 자라요!</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">말씀</p>
                  <p className="text-white lg:text-lg text-base leading-relaxed">예수는 지혜와 키가 자라가며 하나님과 사람에게 더욱 사랑스러워 가시더라 (누가복음 2장 52절)</p>
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
                  <span>온 세상을 만드신 하나님께서 나를 만드시고 나를 사랑하심을 알아요.</span>
                </li>
                <li className="text-white lg:text-lg text-base leading-relaxed flex gap-2">
                  <span className="font-bold shrink-0">2.</span>
                  <span>하나님의 아들 예수님을 통하여 나를 구원하시고, 예수님의 제자로 부르심을 알아요.</span>
                </li>
                <li className="text-white lg:text-lg text-base leading-relaxed flex gap-2">
                  <span className="font-bold shrink-0">3.</span>
                  <span>예수님을 따라 하나님을 사랑하고 이웃을 사랑하는 어린이로 자라요.</span>
                </li>
              </ol>
            </div>

          </div>
        </div>
        <div className="lg:w-7/10">
          <Image
            src="/infant_main.avif"
            width={2000}
            height={0}
            alt="유치부 메인"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 갤러리 섹션 */}
      <div className="flex flex-col lg:flex-row w-full mt-4 lg:mt-1 gap-1">
        <div className="lg:w-1/2">
          <Image
            src="/infant_image_1.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="유치부 사진"
          />
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/infant_image_2.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="유치부 사진"
          />
        </div>
      </div>
    </main>
  );
}
