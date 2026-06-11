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
  id: "cheonseong",
  name: "천성교회",
  fullName: "천성교회",
  description: "천성교회 공식 홈페이지입니다.",
  domains: ["cheonseong.or.kr", "www.cheonseong.or.kr"],
  logo: {
    pc: "/church_logo.jpeg",
    mobile: "/church_logo.jpeg",
  },
  theme: {
    primaryColor: "#8B4513",
    secondaryColor: "#1E3A8A",
  },
  og: {
    image: "/logo_pc.png",
    url: "https://cheonseong.or.kr",
    siteName: "Cheonseong",
  },
  contact: {
    address: "주소를 입력하세요",
    office: "",
    pastoral: "",
    email: "",
  },
  social: {},
  apiUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:8000",
};

export default churchConfig;
