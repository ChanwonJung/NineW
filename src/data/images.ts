// User-selected originals; each photograph is assigned to one placement.
export type RealImage = {src:string;alt:string};
export const heroSlides = [
  {
    "src": "/images/real/selected-work-2.webp",
    "alt": "다양한 색채로 표현한 실내 공간 회화",
    "caption": "색채와 공간 (학생 작품)"
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
    "src": "/images/real/selected-class-21.webp",
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
export const galleryGroups: {title:string;description:string;images:RealImage[]}[] = [
  {
    "title": "회화 · 색채와 공간",
    "description": "관찰한 공간과 대상을 각자의 색채와 구성으로 풀어낸 작품입니다.",
    "images": [
      {
        "src": "/images/real/selected-work-1.webp",
        "alt": "붉은 색채로 표현한 실내 공간 회화"
      },
      {
        "src": "/images/real/selected-work-3.webp",
        "alt": "실내 공간의 색채와 패턴을 재구성한 회화"
      },
      {
        "src": "/images/real/selected-work-7.webp",
        "alt": "푸른 공간 속 다양한 형태를 배치한 회화"
      },
      {
        "src": "/images/real/selected-work-29.webp",
        "alt": "책장 속 사물과 색을 관찰한 회화"
      }
    ]
  },
  {
    "title": "관찰과 재현",
    "description": "사물과 도시 공간을 자세히 바라보고 선으로 기록한 작품입니다.",
    "images": [
      {
        "src": "/images/real/selected-work-17.webp",
        "alt": "작업실 속 사물을 관찰한 드로잉"
      },
      {
        "src": "/images/real/selected-work-18.webp",
        "alt": "도시의 계단과 건물을 그린 드로잉"
      }
    ]
  },
  {
    "title": "입체 · 설치",
    "description": "형태와 재료, 빛을 실험한 입체·설치 작품입니다.",
    "images": [
      {
        "src": "/images/real/selected-work-45.webp",
        "alt": "면과 틈을 조합한 기하학적 입체 작품"
      },
      {
        "src": "/images/real/selected-work-49.webp",
        "alt": "접힌 종이와 빛을 활용한 입체 작품"
      },
      {
        "src": "/images/real/selected-work-56.webp",
        "alt": "푸른 빛과 여러 화면으로 구성한 설치 작품"
      }
    ]
  }
];
