export interface ChurchTheme {
  primaryColor: string;
  secondaryColor?: string;
}

export interface ChurchLogo {
  pc: string;
  mobile?: string;
}

export interface ChurchContact {
  address: string;
  office?: string;
  pastoral?: string;
  email?: string;
}

export interface ChurchSocial {
  facebook?: string;
  youtube?: string;
  instagram?: string;
}

export interface ChurchOg {
  image: string;
  url: string;
  siteName: string;
}

export interface ChurchConfig {
  /** 교회 고유 식별자 (예: 'joobok', 'sarang') */
  id: string;
  /** 교회 짧은 이름 (예: 주복교회) */
  name: string;
  /** 교회 풀 이름 (예: 대한예수교 장로회 주복교회) */
  fullName: string;
  /** SEO / OG 설명 */
  description: string;
  /** 이 교회와 매핑되는 도메인 목록 */
  domains: string[];
  logo: ChurchLogo;
  theme: ChurchTheme;
  og: ChurchOg;
  contact: ChurchContact;
  social?: ChurchSocial;
  /** 백엔드 API 기본 URL (교회별로 다를 수 있음) */
  apiUrl: string;
}
