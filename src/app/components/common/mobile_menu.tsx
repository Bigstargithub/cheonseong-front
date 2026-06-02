import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { X, ChevronRight } from "lucide-react";

const menuSections = [
  {
    title: "교회소개",
    href: "/user/introduce",
    children: [
      { label: "교회소개", href: "/user/introduce" },
      { label: "교회연혁", href: "/user/history" },
      { label: "사역자소개", href: "/user/pastors" },
      { label: "오시는 길", href: "/user/church-location" },
    ],
  },
  {
    title: "예배와 모임",
    href: "/user/infant",
    children: [
      { label: "유치부", href: "/user/infant" },
      { label: "아동부", href: "/user/children" },
      { label: "중고등부", href: "/user/teenager" },
      { label: "청년부", href: "/user/youth" },
    ],
  },
  {
    title: "설교영상",
    href: "/user/message-video",
    children: [],
  },
  {
    title: "교회사역",
    href: "/user/sunday_school",
    children: [
      { label: "장년부 주일학교", href: "/user/sunday_school" },
      { label: "실버마을 공동체", href: "/user/silver_viliage" },
      { label: "가정예배", href: "/user/home_worship" },
      { label: "국내 외 선교", href: "/user/missionary" },
    ],
  },
  {
    title: "커뮤니티",
    href: "/user/joobok-square",
    children: [
      { label: "주복광장", href: "/user/joobok-square" },
      { label: "우리들의 추억", href: "/user/activities" },
    ],
  },
  {
    title: "수도원",
    href: "/user/abbey",
    children: [],
  },
];

export default function CommonMobileMenu({
  mobileMenu,
  setMobileMenu,
}: {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const linkClick = (href: string) => {
    setMobileMenu(false);
    router.push(href);
  };

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        mobileMenu ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* 오버레이 */}
      <div
        className={`absolute inset-0 bg-gray-900 transition-opacity duration-300 ${
          mobileMenu ? "opacity-60" : "opacity-0"
        }`}
        onClick={() => setMobileMenu(false)}
      />

      {/* 패널 */}
      <div
        className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 shrink-0">
          <Image
            src="/logo_pc.jpeg"
            width={130}
            height={0}
            alt="주복교회"
            className="h-auto"
          />
          <button
            onClick={() => setMobileMenu(false)}
            className="p-2 text-slate-400 hover:text-slate-700 transition-colors duration-200"
          >
            <X size={22} />
          </button>
        </div>

        {/* 소셜 링크 */}
        <div className="flex gap-3 px-5 py-3 border-b border-slate-100 shrink-0">
          <Link
            href="https://www.facebook.com/joobokchurch/?locale=ko_KR"
            target="_blank"
            className="opacity-50 hover:opacity-100 transition-opacity duration-200"
          >
            <Image src="/facebook.avif" width={22} height={22} alt="페이스북" />
          </Link>
          <Link
            href="https://www.youtube.com/@%EC%A3%BC%EB%B3%B5%EA%B5%90%ED%9A%8C"
            target="_blank"
            className="opacity-50 hover:opacity-100 transition-opacity duration-200"
          >
            <Image src="/youtube_icon.avif" width={22} height={22} alt="유튜브" />
          </Link>
        </div>

        {/* 메뉴 목록 */}
        <nav className="flex-1 overflow-y-auto">
          {menuSections.map((section, i) => (
            <div
              key={section.title}
              className={i < menuSections.length - 1 ? "border-b border-slate-100" : ""}
            >
              <button
                onClick={() => linkClick(section.href)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-slate-800 font-semibold text-base hover:bg-slate-50 transition-colors duration-150"
              >
                {section.title}
                {section.children.length > 0 && (
                  <ChevronRight size={16} className="text-slate-400" />
                )}
              </button>
              {section.children.map((child) => (
                <button
                  key={child.href}
                  onClick={() => linkClick(child.href)}
                  className="w-full flex items-center px-8 py-3 text-left text-slate-500 text-sm hover:bg-slate-50 hover:text-slate-800 transition-colors duration-150"
                >
                  {child.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
