"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_GROUPS = [
  {
    paths: ["/user/introduce", "/user/history", "/user/pastors", "/user/church-location"],
    items: [
      { href: "/user/introduce", label: "교회소개" },
      { href: "/user/history", label: "교회연혁" },
      { href: "/user/pastors", label: "사역자소개" },
      { href: "/user/church-location", label: "오시는 길" },
    ],
  },
  {
    paths: ["/user/infant", "/user/children", "/user/teenager", "/user/youth"],
    items: [
      { href: "/user/infant", label: "유치부" },
      { href: "/user/children", label: "아동부" },
      { href: "/user/teenager", label: "중고등부" },
      { href: "/user/youth", label: "청년부" },
    ],
  },
  {
    paths: ["/user/sunday_school", "/user/silver_viliage", "/user/home_worship", "/user/missionary"],
    items: [
      { href: "/user/sunday_school", label: "장년부 주일학교" },
      { href: "/user/silver_viliage", label: "실버마을 공동체" },
      { href: "/user/home_worship", label: "가정예배" },
      { href: "/user/missionary", label: "국내 외 선교" },
    ],
  },
  {
    paths: ["/user/joobok-square", "/user/activities"],
    items: [
      { href: "/user/joobok-square", label: "주복광장" },
      { href: "/user/activities", label: "우리들의 추억" },
    ],
  },
];

export default function SideNav() {
  const pathname = usePathname();
  const group = NAV_GROUPS.find((g) => g.paths.includes(pathname));

  if (!group) return null;

  return (
    <nav className="hidden lg:flex flex-col w-44 shrink-0 pt-10 pl-6 border-r border-gray-200">
      <ul className="flex flex-col gap-1">
        {group.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-blue-100"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
