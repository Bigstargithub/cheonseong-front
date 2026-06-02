"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Menu } from "lucide-react";
import { useChurch } from "@/context/ChurchContext";

export default function CommonHeader({
  mobileMenu,
  setMobileMenu,
}: {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const church = useChurch();

  return (
    <header className="flex flex-row justify-between content-center flex-nowrap lg:mt-[30px] p-3 lg:p-0">
      <div className="lg:w-1/3"></div>
      <Link href="/user" className="lg:w-1/3 text-center">
        <Image
          src={church.logo.pc}
          width={600}
          height={0}
          alt={church.name}
          className="h-auto inline w-9/10"
        />
      </Link>
      <button
        className="lg:hidden flex justify-center items-center p-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
        onClick={() => setMobileMenu(!mobileMenu)}
        aria-label="메뉴"
      >
        <Menu size={28} />
      </button>
      <div className="lg:w-1/3 lg:flex md:flex-wrap content-center flex-row justify-end box-border pr-[40px] hidden">
        {church.social?.facebook && (
          <Link
            href={church.social.facebook}
            className="mr-[10px] inline-block size-fit"
            target="_blank"
          >
            <Image src={"/facebook.avif"} width={27} height={0} alt="페이스북" />
          </Link>
        )}
        {church.social?.youtube && (
          <Link href={church.social.youtube} className="size-fit" target="_blank">
            <Image src={"/youtube_icon.avif"} width={27} height={0} alt="유튜브" />
          </Link>
        )}
      </div>
    </header>
  );
}
