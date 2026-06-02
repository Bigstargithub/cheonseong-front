"use client";

import CommonHeader from "../components/common/header";
import CommonMenu from "../components/common/menu";
import CommonFooter from "../components/common/footer";
import SideNav from "../components/common/sidenav";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CommonMobileMenu from "../components/common/mobile_menu";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noHeaderPath = ["/user/popup"];

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {!noHeaderPath.includes(pathname) && (
        <CommonHeader mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      )}
      {!noHeaderPath.includes(pathname) && <CommonMenu />}
      <div className="flex min-h-0 flex-1">
        {!noHeaderPath.includes(pathname) && <SideNav />}
        <div className="flex-1 min-w-0">{children}</div>
      </div>
      {!noHeaderPath.includes(pathname) && <CommonFooter />}
      <CommonMobileMenu
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
    </>
  );
}
