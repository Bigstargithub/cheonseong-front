"use client";

import Image from "next/image";
import Link from "next/link";
import { useChurch } from "@/context/ChurchContext";

export default function CommonFooter() {
  const church = useChurch();

  return (
    <footer className="bg-slate-100 mt-20 w-full">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="lg:w-1/3">
            <Image
              src={church.logo.pc}
              width={180}
              height={0}
              alt={church.name}
              className="h-auto"
            />
          </div>

          <div className="lg:w-1/3 text-slate-500 text-sm space-y-2">
            <p className="font-semibold text-slate-800 text-base mb-3">{church.name}</p>
            <p>{church.contact.address}</p>
            {church.contact.office && <p>사무실: {church.contact.office}</p>}
            {church.contact.pastoral && <p>목양실: {church.contact.pastoral}</p>}
            {church.contact.email && <p>이메일: {church.contact.email}</p>}
          </div>

          {(church.social?.facebook || church.social?.youtube) && (
            <div className="lg:w-1/3">
              <p className="font-semibold text-slate-800 text-base mb-3">소셜 미디어</p>
              <div className="flex gap-4">
                {church.social.facebook && (
                  <Link
                    href={church.social.facebook}
                    target="_blank"
                    className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                  >
                    <Image src="/facebook.avif" width={28} height={28} alt="페이스북" />
                  </Link>
                )}
                {church.social.youtube && (
                  <Link
                    href={church.social.youtube}
                    target="_blank"
                    className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                  >
                    <Image src="/youtube_icon.avif" width={28} height={28} alt="유튜브" />
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 text-center text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} {church.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
