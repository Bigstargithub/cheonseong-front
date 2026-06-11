"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommonMenu() {
  const [menuOpen, setMenuOpen] = useState<string>("");
  const router = useRouter();

  return (
    <nav className="lg:w-full flex flex-wrap justify-center content-center mt-3 m-auto hidden lg:block">
      <ul className="flex w-full content-center justify-center z-6">
        <li className="menu-li" onMouseLeave={() => setMenuOpen("")}>
          <button
            className={
              menuOpen === "introduce" ? "text-white!" : ""
            }
            style={menuOpen === "introduce" ? { backgroundColor: "var(--color-primary)" } : {}}
            onMouseEnter={() => setMenuOpen("introduce")}
            onClick={() => router.push("/user/introduce")}
          >
            교회소개
          </button>
          <ul
            className={
              menuOpen === "introduce"
                ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul"
                : "hidden"
            }
          >
            <li>
              <Link href="/user/introduce">교회소개</Link>
            </li>
            <li>
              <Link href="/user/church-location">오시는 길</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
