import Link from "next/link";
import { Play, Users, Church } from "lucide-react";

const cards = [
  {
    icon: Play,
    title: "설교영상",
    description: "예배 라이브, 설교영상, 성경공부 등 온라인으로 참여하세요",
    href: "/user/message-video",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: Users,
    title: "예배와 모임",
    description: "유치부부터 청년부까지 각 교육부서 예배 및 행사를 안내합니다",
    href: "/user/infant",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Church,
    title: "교회사역",
    description: "장년부 주일학교, 가정예배 등 주복교회의 주요 사역을 소개합니다",
    href: "/user/home_worship",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
  },
];

export default function MainHighlights() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {cards.map(({ icon: Icon, title, description, href, iconBg, iconColor }) => (
          <Link
            key={title}
            href={href}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 group"
          >
            <div className={`${iconBg} p-4 rounded-full mb-4`}>
              <Icon className={`${iconColor} w-7 h-7`} />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
