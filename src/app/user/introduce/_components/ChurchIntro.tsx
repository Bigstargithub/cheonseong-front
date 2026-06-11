"use client";

import Image from "next/image";
import { useChurch } from "@/context/ChurchContext";

export default function ChurchIntro() {
  const church = useChurch();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-5">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">{church.name}</h2>
          <p className="mt-1 text-gray-400 text-lg tracking-widest">Cheonsung Church</p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          천성교회는 서울시 은평구 구산동에 위치한 예수교대한성결교회에 소속된 교회입니다.
          올해 교회 설립 44년이 되었고, 강인원 목사가 천성교회 3대 목회자로 2025년 4월에
          담임목사로 위임 받아 사역을 하고 있습니다.
        </p>
        <p className="text-gray-700 leading-relaxed">
          천성교회는 "하나님의 교회, 하나님에 의한 교회, 하나님을 위한 교회"라는 비전을 가지고
          지금까지 사역을 이어오고 있습니다. 이는 교회의 주인이 사람이 아니라 하나님이시며,
          교회의 존재 이유와 목적 또한 하나님의 뜻을 이루는 데 있음을 의미합니다.
        </p>
        <p className="text-gray-700 leading-relaxed">
          44년 동안 하나님께서 교회의 주인이 되신다는 이 믿음의 고백은 흔들리지 않았습니다.
          천성교회는 이러한 신앙적 정체성을 바탕으로 예배 중심의 공동체를 세우고,
          말씀과 기도, 전도와 섬김을 통해 하나님 나라를 확장하는 사명을 그동안 감당해 왔습니다.
        </p>
      </div>
      <div className="flex-shrink-0 w-full lg:w-auto">
        <Image
          src="/kakaotalk-photo-2026-06-02-220159-001.jpeg"
          width={520}
          height={400}
          alt={`${church.name} 소개`}
          className="rounded-xl w-full lg:w-auto object-cover"
        />
      </div>
    </section>
  );
}
