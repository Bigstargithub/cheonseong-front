"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_GROUPS = [
  {
    paths: ["/user/introduce", "/user/church-location"],
    items: [
      { href: "/user/introduce", label: "교회소개" },
      { href: "/user/church-location", label: "오시는 길" },
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
                  ? "text-white"
                  : "hover:bg-stone-100"
              }`}
              style={
                pathname === item.href
                  ? { backgroundColor: "var(--color-primary)", color: "#fff" }
                  : { color: "var(--color-primary)" }
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
