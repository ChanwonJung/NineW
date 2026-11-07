// User-selected originals; each photograph is assigned to one placement.
export type RealImage = {src:string;alt:string};
export type GalleryCategory = "painting" | "sculpture" | "object" | "installation";
export type GalleryImage = RealImage & {category:GalleryCategory};
export type HeroSlide = RealImage & {caption:string;objectPosition?:string};
export const heroSlides: HeroSlide[] = [
  {
    "src": "/images/real/selected-work-2.webp",
    "alt": "다양한 색채로 표현한 실내 공간 회화",
    "caption": "색채와 공간 (학생 작품)"
  },
  {
    "src": "/images/real/hero-studio-artwork.png",
    "alt": "색연필과 드로잉 도구가 놓인 작업대 위 학생 작품",
    "caption": "작업실 풍경 — 작품을 만드는 자리"
  },
  {
    "src": "/images/real/selected-work-27.webp",
    "alt": "도시 건물과 거리 풍경을 그린 회화",
    "caption": "도시 풍경 (학생 작품)"
  },
  {
    "src": "/images/real/selected-class-8.webp",
    "alt": "벽에 작품을 배치하고 설치하는 수업 장면",
    "caption": "작품 설치 (수업 장면)"
  },
  {
    "src": "/images/real/selected-work-35.webp",
    "alt": "여러 오브제를 조합한 입체 작품",
    "caption": "오브제 실험 (학생 작품)"
  },
  {
    "src": "/images/real/hero-academy-exterior.png",
    "objectPosition": "center 20%",
    "alt": "맑은 하늘 아래 NINE·W 유학미술 간판과 학원 주변 건물 전경",
    "caption": "학원 전경 — NINE·W로 오는 길"
  },
  {
    "src": "/images/real/selected-work-6.webp",
    "alt": "푸른 색과 기하학적 패턴으로 구성한 공간 회화",
    "caption": "공간과 패턴 (학생 작품)"
  },
  {
    "src": "/images/real/process-outdoor-sketching.jpg",
    "alt": "야외에서 동물을 관찰하며 스케치하는 모습",
    "caption": "야외 관찰 드로잉 (수업 장면)"
  },
  {
    "src": "/images/real/selected-work-20.webp",
    "alt": "주변 풍경을 선으로 기록한 드로잉",
    "caption": "관찰과 기록 (학생 작품)"
  },
  {
    "src": "/images/real/hero-studio-interior.png",
    "alt": "미술 재료가 놓인 작업실에서 작품을 제작하는 수업 장면",
    "caption": "수업 장면 — 작업실의 하루"
  },
  {
    "src": "/images/real/selected-work-37.webp",
    "alt": "동물과 식물의 형태를 재구성한 색채 작품",
    "caption": "상상의 풍경 (학생 작품)"
  },
  {
    "src": "/images/real/selected-work-52.webp",
    "alt": "빛과 영상, 입체물이 함께 놓인 설치 작품",
    "caption": "빛과 설치 (학생 작품)"
  }
];
export const programImages: Record<string,RealImage> = {
  "portfolio": {
    "src": "/images/real/selected-class-11.webp",
    "alt": "작업실에서 회화 작품을 그리는 수업 장면"
  },
  "intensive": {
    "src": "/images/real/selected-class-14.webp",
    "alt": "해 질 무렵 옥상에서 풍경을 그리는 수업 장면"
  },
  "transfer": {
    "src": "/images/real/selected-class-21-mosaic.png",
    "alt": "작업대에서 입체 조형물을 만드는 수업 장면"
  },
  "graduate": {
    "src": "/images/real/selected-work-55.webp",
    "alt": "작은 인체 형상들을 층층이 배치한 입체 작품"
  }
};
export const aboutImages = {
  "history": {
    "src": "/images/real/selected-work-42.webp",
    "alt": "여러 장의 드로잉을 나란히 배열한 학생 작품"
  },
  "philosophy": {
    "src": "/images/real/selected-class-3.webp",
    "alt": "야외에서 풍경을 관찰하며 캔버스에 그리는 수업 장면"
  }
};
// 학생 작품 갤러리에 보여주는 작품 목록(한 묶음).
export const galleryImages: GalleryImage[] = [
  {
    "src": "/images/real/selected-work-1.webp",
    "alt": "붉은 색채로 표현한 실내 공간 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/selected-work-3.webp",
    "alt": "실내 공간의 색채와 패턴을 재구성한 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/selected-work-7.webp",
    "alt": "푸른 공간 속 다양한 형태를 배치한 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/selected-work-29.webp",
    "alt": "책장 속 사물과 색을 관찰한 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-02.webp",
    "alt": "독특한 색채와 평면성으로 표현한 실내 풍경 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-04.webp",
    "alt": "강렬한 보색 대비와 자유로운 패턴의 실내 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-05.webp",
    "alt": "기하학적 패턴과 경쾌한 색채의 실내 풍경",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-06.webp",
    "alt": "푸른 톤과 면 분할로 구성한 실내 공간 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-08.webp",
    "alt": "개성 있는 색으로 표현한 밤의 실내 풍경",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-09.webp",
    "alt": "초록색 톤으로 표현한 몽환적인 실내 공간",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-10.webp",
    "alt": "핑거 페인팅으로 그린 집 안 풍경",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-11.webp",
    "alt": "강한 명암 대비로 표현한 실내의 한 구석",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-12.webp",
    "alt": "스튜디오 실내를 사실적으로 그린 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-24.webp",
    "alt": "흰색과 검정색 면 분할로 구성한 실내 풍경",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-35.webp",
    "alt": "거울에 비친 사물을 관찰한 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-58.webp",
    "alt": "보색 대비와 평면 패턴으로 구성한 실내 공간",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-66.webp",
    "alt": "시원한 색 대비로 묘사한 실내 공간과 사물",
    "category": "painting"
  },
  {
    "src": "/images/real/selected-work-17.webp",
    "alt": "작업실 속 사물을 관찰한 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/selected-work-18.webp",
    "alt": "도시의 계단과 건물을 그린 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-19.webp",
    "alt": "창밖 밤거리를 목탄으로 그린 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-20.webp",
    "alt": "눈 내린 거리 풍경을 관찰한 목탄 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-27.webp",
    "alt": "사라져가는 오래된 건물을 그린 과슈 페인팅",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-30.webp",
    "alt": "스튜디오에서 작업하는 친구를 그린 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-31.webp",
    "alt": "밤의 스튜디오를 여러 재료로 그린 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-59.webp",
    "alt": "차분한 색조로 그린 거리 풍경 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-60.webp",
    "alt": "파스텔과 콘테로 그린 밤거리 풍경",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-13.webp",
    "alt": "보색 대비로 인체의 움직임을 표현한 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-14.webp",
    "alt": "흑백 인체와 푸른 공간의 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-16.webp",
    "alt": "제스처와 컨투어 인체 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-32.webp",
    "alt": "인체 연구 교재를 그린 핑거 페인팅",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-36.webp",
    "alt": "간략한 형태와 색채의 자화상",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-40.webp",
    "alt": "대담한 구도와 색채의 자화상 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-57.webp",
    "alt": "인체 골격과 자화상을 결합한 목탄 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-62.webp",
    "alt": "거울에 비친 뒷모습을 그린 회화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-21.webp",
    "alt": "자유로운 상상으로 그린 연필 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-22.webp",
    "alt": "자유연상 기법의 세밀한 펜 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-37.webp",
    "alt": "내면을 상상력으로 표현한 수채화",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-41.webp",
    "alt": "다양한 관심사를 담은 아이디어 스케치",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-42.webp",
    "alt": "관찰로 채운 아이디어 스케치",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-61.webp",
    "alt": "상상력으로 공간을 구성한 연필 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-63.webp",
    "alt": "여러 시점의 공간을 구성한 드로잉",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-64.webp",
    "alt": "드로잉과 콜라주를 결합한 작업",
    "category": "painting"
  },
  {
    "src": "/images/real/gallery-work-65.webp",
    "alt": "드로잉과 콜라주를 결합한 작업",
    "category": "painting"
  },
  {
    "src": "/images/real/selected-work-45.webp",
    "alt": "면과 틈을 조합한 기하학적 입체 작품",
    "category": "sculpture"
  },
  {
    "src": "/images/real/gallery-work-46.webp",
    "alt": "친구들의 손을 석고로 캐스팅한 작품",
    "category": "sculpture"
  },
  {
    "src": "/images/real/selected-work-49.webp",
    "alt": "접힌 종이와 빛을 활용한 입체 작품",
    "category": "object"
  },
  {
    "src": "/images/real/gallery-work-51.webp",
    "alt": "이야기가 있는 연극 무대 같은 입체 작업",
    "category": "object"
  },
  {
    "src": "/images/real/selected-work-56.webp",
    "alt": "푸른 빛과 여러 화면으로 구성한 설치 작품",
    "category": "installation"
  },
  {
    "src": "/images/real/gallery-work-52.webp",
    "alt": "가방과 지도, 전구를 활용한 설치 작업",
    "category": "installation"
  },
  {
    "src": "/images/real/gallery-work-55.webp",
    "alt": "인물 실루엣을 아크릴에 붙여 야외에 설치한 작업",
    "category": "installation"
  }
];
