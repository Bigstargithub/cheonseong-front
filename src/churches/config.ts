/**
 * 교회 설정 파일
 *
 * 새 교회 홈페이지를 만들 때:
 * 1. 이 레포 전체를 복사
 * 2. 이 파일의 값들을 해당 교회에 맞게 수정
 * 3. public/ 폴더에 로고 이미지 교체
 * 4. .env.local 의 NEXT_PUBLIC_SERVER_URL 을 해당 교회 백엔드 주소로 변경
 */

import type { ChurchConfig } from "./types";

const churchConfig: ChurchConfig = {
  id: "joobok",
  name: "주복교회",
  fullName: "대한예수교 장로회 주복교회",
  description:
    "대한예수교 장로회 소속 천안 주복교회는 예배와 말씀, 다음세대 교육을 통해 하나님 나라를 세워가는 기독교 공동체입니다.",
  domains: ["joobok.or.kr", "www.joobok.or.kr"],
  logo: {
    pc: "/logo_pc.jpeg",
    mobile: "/logo_pc.jpeg",
  },
  theme: {
    primaryColor: "#1e3a5f",
    secondaryColor: "#4a7fcb",
  },
  og: {
    image: "/logo_pc.png",
    url: "https://joobok.or.kr",
    siteName: "Joobok",
  },
  contact: {
    address: "충남 천안시 서북구 두정상가6길 18(두정동)",
    office: "041-557-0142",
    pastoral: "041-558-0142",
    email: "sbson0615@hanmail.net",
  },
  social: {
    facebook: "https://www.facebook.com/joobokchurch/?locale=ko_KR",
    youtube: "https://www.youtube.com/@%EC%A3%BC%EB%B3%B5%EA%B5%90%ED%9A%8C",
  },
  apiUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:8000",
};

export default churchConfig;
