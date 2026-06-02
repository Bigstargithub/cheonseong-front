const VALUES = [
  {
    title: "섬김으로 제자를 삼는 교회",
    description: "낮은 자리에서 섬기며 주님의 제자를 세워갑니다.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: "행복한 이야기가 가득한 교회",
    description: "하나님 안에서 생명의 풍성함과 행복함을 누립니다.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "성령의 역사 중심에 선 교회",
    description: "성령의 역사 가운데 그리스도를 닮아가는 삶을 훈련합니다.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
];

export default function CoreValues() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
          우리 교회가 추구하는 가치
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center gap-4"
            >
              <div className="text-blue-700">{value.icon}</div>
              <h3 className="text-base font-bold text-gray-800">{value.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
