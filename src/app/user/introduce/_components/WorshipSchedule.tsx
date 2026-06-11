const SCHEDULE_GROUPS = [
  {
    title: "주일 예배",
    items: [
      { name: "주일예배", time: "오전 11:00", location: "" },
      { name: "주일 찬양예배", time: "오후 1:30", location: "" },
    ],
  },
  {
    title: "주중 예배",
    items: [
      { name: "수요예배", time: "오후 7:30", location: "" },
      { name: "금요 기도회", time: "오후 9:00", location: "" },
      { name: "새벽 기도회", time: "오전 5:30", location: "월 ~ 금" },
    ],
  },
];

export default function WorshipSchedule() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
        예배시간 안내
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {SCHEDULE_GROUPS.map((group) => (
          <div key={group.title} className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4" style={{ backgroundColor: "var(--color-primary)" }}>
              <h3 className="text-white font-bold text-base">{group.title}</h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {group.items.map((item) => (
                <li key={item.name} className="px-6 py-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">{item.name}</span>
                  <div className="text-right">
                    <p className="text-sm font-semibold" style={{ color: "var(--color-primary)" }}>{item.time}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
