const SCHEDULE_GROUPS = [
  {
    title: "주일 예배",
    items: [
      { name: "1부 예배", time: "오전 9:00", location: "대예배실 (2층)" },
      { name: "2부 예배", time: "오전 11:00", location: "대예배실 (2층)" },
      { name: "3부 예배", time: "오후 1:00", location: "대예배실 (2층)" },
    ],
  },
  {
    title: "부서 예배",
    items: [
      { name: "유치부 예배", time: "오전 11:00", location: "규 (3층)" },
      { name: "아동부 예배", time: "오전 11:00", location: "맘 (3층)" },
      { name: "중고등부 예배", time: "오전 11:00", location: "앎 (4층)" },
    ],
  },
  {
    title: "주중 예배",
    items: [
      { name: "수요 예배", time: "오후 7:30", location: "대예배실 (2층)" },
      { name: "금요 기도회", time: "오후 7:30", location: "대예배실 (2층)" },
      { name: "새벽 기도", time: "오전 5:00", location: "대예배실 (2층)" },
      { name: "토요 새벽기도", time: "오전 6:00", location: "대예배실 (2층)" },
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
            <div className="bg-blue-700 px-6 py-4">
              <h3 className="text-white font-bold text-base">{group.title}</h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {group.items.map((item) => (
                <li key={item.name} className="px-6 py-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">{item.name}</span>
                  <div className="text-right">
                    <p className="text-sm text-blue-700 font-semibold">{item.time}</p>
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
