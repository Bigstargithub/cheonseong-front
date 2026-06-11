import Link from "next/link";
import { Users, Church } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "예배와 모임",
    description: "유치부부터 청년부까지 각 교육부서 예배 및 행사를 안내합니다",
    href: "/user/infant",
    iconBgStyle: { backgroundColor: "var(--color-secondary-light)" },
    iconColorStyle: { color: "var(--color-secondary)" },
  },
  {
    icon: Church,
    title: "교회사역",
    description: "장년부 주일학교, 가정예배 등 천성교회의 주요 사역을 소개합니다",
    href: "/user/home_worship",
    iconBgStyle: { backgroundColor: "#FEF9EE" },
    iconColorStyle: { color: "var(--color-accent)" },
  },
];

export default function MainHighlights() {
  return (
    <section className="py-10 px-4" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {cards.map(({ icon: Icon, title, description, href, iconBgStyle, iconColorStyle }) => (
          <Link
            key={title}
            href={href}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-200 group"
          >
            <div className="p-4 rounded-full mb-4" style={iconBgStyle}>
              <Icon className="w-7 h-7" style={iconColorStyle} />
            </div>
            <h3 className="font-bold text-lg text-stone-800 mb-2">{title}</h3>
            <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
