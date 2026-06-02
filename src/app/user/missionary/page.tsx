import Image from "next/image";

export default function UserMissionaryPage() {
  return (
    <section className="lg:w-4/5 w-9/10 m-auto mt-8 pb-10">

      {/* 국내선교 헤더 */}
      <div className="bg-blue-700 text-white py-8 px-6 rounded-xl">
        <h2 className="text-center text-4xl font-bold">국내선교</h2>
        <p className="text-center text-white/80 text-xl mt-2">
          우리가 밟고 있는 이 땅에서의 선교
        </p>
      </div>

      {/* 국내선교 그리드 */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center">
          <div className="w-full h-[120px] relative">
            <Image
              src="/domestic_missionary_example.avif"
              fill
              alt="매산여고 교목실"
              className="object-contain"
            />
          </div>
          <p className="text-lg font-bold mt-3 text-center">매산여고 교목실</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center">
          <div className="w-full h-[120px] relative">
            <Image
              src="/missionary_basic_logo.png"
              fill
              alt="동막교회"
              className="object-contain"
            />
          </div>
          <p className="text-lg font-bold mt-3 text-center">동막교회</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center">
          <div className="w-full h-[120px] relative">
            <Image
              src="/cheonan_asan_logo.gif"
              fill
              alt="천안아산노회"
              className="object-contain"
            />
          </div>
          <p className="text-lg font-bold mt-3 text-center">천안아산노회</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center">
          <div className="w-full h-[120px] relative">
            <Image
              src="/korea_message_logo.png"
              fill
              alt="한국설교학회"
              className="object-contain"
            />
          </div>
          <p className="text-lg font-bold mt-3 text-center">한국설교학회</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center">
          <div className="w-full h-[120px] relative">
            <Image
              src="/hoseo_logo.webp"
              fill
              alt="호서대(인도장학생)"
              className="object-contain"
            />
          </div>
          <p className="text-lg font-bold mt-3 text-center">호서대(인도장학생)</p>
        </div>
      </div>

      {/* 해외선교 헤더 */}
      <div className="bg-blue-800 text-white py-8 px-6 rounded-xl mt-12">
        <h2 className="text-center text-4xl font-bold">해외선교</h2>
        <p className="text-center text-white/80 text-xl mt-2">
          땅 끝까지 전해지는 복음과 하나님 나라 확장
        </p>
      </div>

      {/* 해외선교 그리드 */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {[
          { src: "/brazil_flag.svg", alt: "브라질", name: "브라질" },
          { src: "/cambodia_flag.png", alt: "캄보디아", name: "캄보디아" },
          { src: "/georgia_flag.png", alt: "그루지아", name: "그루지아" },
          { src: "/turkey_flag.webp", alt: "튀르키에(터키)", name: "튀르키에(터키)" },
          { src: "/malaysia_flag.webp", alt: "말레이시아", name: "말레이시아" },
          { src: "/nepal_flag.png", alt: "네팔", name: "네팔" },
          { src: "/pakistan_flag.png", alt: "파키스탄", name: "파키스탄" },
          { src: "/newzealand_flag.webp", alt: "뉴질랜드", name: "뉴질랜드" },
          { src: "/kenya_flag.png", alt: "케냐", name: "케냐" },
          { src: "/germany_flag.svg", alt: "독일", name: "독일" },
          { src: "/madagascar_flag.png", alt: "마다가스카르", name: "마다가스카르" },
          { src: "/bolivia_flag.png", alt: "볼리비아", name: "볼리비아" },
          { src: "/philippines_flag.png", alt: "필리핀", name: "필리핀" },
          { src: "/zanzibar_flag.svg", alt: "잔지바르", name: "잔지바르" },
          { src: "/thailand_flag.png", alt: "태국", name: "태국" },
        ].map((country) => (
          <div
            key={country.name}
            className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center"
          >
            <div className="w-full h-[120px] relative">
              <Image
                src={country.src}
                fill
                alt={country.alt}
                className="object-contain"
              />
            </div>
            <p className="text-lg font-bold mt-3 text-center">{country.name}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
