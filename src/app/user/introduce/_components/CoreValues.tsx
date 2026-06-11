const VALUES = [
  {
    title: "하나님의 교회",
    description: "교회의 주인은 사람이 아니라 하나님이십니다. 하나님께서 44년 동안 천성교회의 주인이 되셨다는 이 믿음의 고백은 흔들리지 않았습니다.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
  {
    title: "하나님에 의한 교회",
    description: "하나님의 능력과 인도하심으로 세워지는 교회입니다. 말씀과 기도, 전도와 섬김을 통해 하나님 나라를 확장하는 사명을 감당합니다.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "하나님을 위한 교회",
    description: "교회의 존재 이유와 목적은 하나님의 뜻을 이루는 데 있습니다. 예배 중심의 공동체를 세우고 하나님의 영광을 위해 사역합니다.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
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
              <div style={{ color: "var(--color-primary)" }}>{value.icon}</div>
              <h3 className="text-base font-bold text-gray-800">{value.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
