const HISTORY = [
  { date: "2002. 8. 4", content: "천안시문화원(성정동) 지하강당을 빌려 주복교회를 개척하다." },
  { date: "2002. 11", content: "두정동 1055번지 보람빌딩 201호로 예배당을 마련하여 이사하다." },
  { date: "2003. 11", content: "두정동 1052번지 3층 건물을 매입하여 부흥의 전기를 맞다." },
  { date: "2009. 1. 19", content: "두정동 1442번지 부지를 매입하여 성전을 건축하다." },
  { date: "2013. 5. 19", content: "주복교회 10주년 기념교회(한기대학교회)를 설립하다." },
  { date: "2016. 6. 26", content: "백석동 중심에 케노시스수도원을 개원하다." },
  { date: "2017. 4. 22", content: "두정동 1446번지를 주차장 부지로 매입하다." },
  { date: "2022. 4. 10", content: "케노시스수도원 이전 건축 후 개원 (목천읍 덕전리 유왕골1길 316-38)" },
];

export default function Timeline() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <ol className="relative border-l-2 border-blue-200 space-y-10">
        {HISTORY.map((item) => (
          <li key={item.date} className="pl-8 relative">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-700 border-2 border-white ring-2 ring-blue-200" />
            <p className="text-xs font-semibold text-blue-700 tracking-wide mb-1">
              {item.date}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">{item.content}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
