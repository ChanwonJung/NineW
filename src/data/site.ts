export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://ninew.co.kr").replace(/\/$/, ""),
  name: "NINE·W",
  nameEn: "NineW",
  tagline: "1997년부터 이어온 유학미술 포트폴리오 수업",
  description:
    "정석희 원장님이 직접 지도하는 1대1 소수정예 유학미술학원입니다. 학생 개개인의 시선으로 포트폴리오를 준비합니다.",
  phone: "0507-1413-7748",
  phoneHref: "tel:0507-1413-7748",
  instagramHandle: "nine.w_studio",
  instagramUrl: "https://www.instagram.com/nine.w_studio/",
  naverMapUrl:
    "https://map.naver.com/p/search/%EB%82%98%EC%9D%B8%EB%8D%94%EB%B8%94%EC%9C%A0/place/1370088257?c=15.00,0,0,0,dh&placePath=%2Fhome%3Fbk_query%3D%EB%82%98%EC%9D%B8%EB%8D%94%EB%B8%94%EC%9C%A0%26entry%3Dbmp%26from%3Dmap%26fromPanelNum%3D2%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EB%82%98%EC%9D%B8%EB%8D%94%EB%B8%94%EC%9C%A0",
  directorPortfolioUrl: "https://seokheejung.wixsite.com/seok",
  address: {
    subway: "3호선 매봉역 4번 출구에서 대치중학교 방향으로 도보 약 3분",
    subwayAlt: "3호선 양재역 5번 출구에서 도보 약 12분",
    parking: "건물 내 주차는 불가능합니다. 대중교통이나 인근 유료 주차장을 이용해 주세요.",
    fullAddress: "서울 강남구 논현로30길 51 4F",
  },
  classHours: {
    days: "평일·주말 운영",
    afternoon: "오후반 13:00 – 17:00",
    evening: "저녁반 18:00 – 22:00",
  },
} as const;

export const navLinks = [
  { href: "/about", label: "학원 소개" },
  { href: "/programs", label: "프로그램" },
  { href: "/schools", label: "학교 안내" },
  { href: "/results", label: "합격 실적" },
  { href: "/gallery", label: "학생 작품" },
  { href: "/reviews", label: "학생 후기" },
  { href: "/blog", label: "소식" },
  { href: "/visit", label: "오시는 길" },
  { href: "/faq", label: "FAQ" },
] as const;
