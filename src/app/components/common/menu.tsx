"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommonMenu() {
  const [menuOpen, setMenuOpen] = useState("");
  const router = useRouter();

  return (
    <nav className="lg:w-full flex flex-wrap justify-center content-center mt-3 m-auto hidden lg:block">
      <ul className="flex w-full content-center justify-center z-6">
        <li className="menu-li" onMouseLeave={() => setMenuOpen("")}>
          <button
            className={
              menuOpen === "introduce" ? "bg-blue-700 text-white!" : ""
            }
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
              <Link href="/user/history">교회연혁</Link>
            </li>
            <li>
              <Link href="/user/pastors">사역자소개</Link>
            </li>
            <li>
              <Link href="/user/church-location">오시는 길</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li" onMouseLeave={() => setMenuOpen("")}>
          <button
            onMouseEnter={() => setMenuOpen("worship")}
            onClick={() => router.push("/user/infant")}
          >
            예배와 모임
          </button>
          <ul
            className={
              menuOpen === "worship"
                ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul"
                : "hidden"
            }
          >
            <li>
              <Link href="/user/infant">유치부</Link>
            </li>
            <li>
              <Link href="/user/children">아동부</Link>
            </li>
            <li>
              <Link href="/user/teenager">중고등부</Link>
            </li>
            <li>
              <Link href="/user/youth">청년부</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li" onMouseLeave={() => setMenuOpen("")}>
          <button
            onMouseEnter={() => setMenuOpen("")}
            onClick={() => router.push("/user/message-video")}
          >
            설교영상
          </button>
        </li>
        <li className="menu-li" onMouseLeave={() => setMenuOpen("")}>
          <button
            onMouseEnter={() => setMenuOpen("churchWork")}
            onClick={() => router.push("/user/sunday_school")}
          >
            교회사역
          </button>
          <ul
            className={
              menuOpen === "churchWork"
                ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul"
                : "hidden"
            }
          >
            <li>
              <Link href="/user/sunday_school">장년부 주일학교</Link>
            </li>
            <li>
              <Link href="/user/silver_viliage">실버마을 공동체</Link>
            </li>
            <li>
              <Link href="/user/home_worship">가정예배</Link>
            </li>
            <li>
              <Link href="/user/missionary">국내 외 선교</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li" onMouseLeave={() => setMenuOpen("")}>
          <button
            onMouseEnter={() => setMenuOpen("community")}
            onClick={() => router.push("/user/joobok-square")}
          >
            커뮤니티
          </button>
          <ul
            className={
              menuOpen === "community"
                ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul"
                : "hidden"
            }
          >
            <li>
              <Link href="/user/joobok-square">주복광장</Link>
            </li>
            <li>
              <Link href="/user/activities">우리들의 추억</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li" onMouseLeave={() => setMenuOpen("")}>
          <button
            onMouseEnter={() => setMenuOpen("")}
            onClick={() => router.push("/user/abbey")}
          >
            수도원
          </button>
        </li>
      </ul>
    </nav>
  );
}
