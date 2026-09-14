export type SchoolGuide = {
 slug: string; name: string; nameKo: string; fullName: string; location: string;
 scope: string; cycle: string; tags: string[]; intro: string; highlight: string;
 requirements: string[]; scopeNote: string; deadlines: string[][];
 deadlineNote: string; advice: string[]; sources: string[][]; accent: string;
};
export const schoolsCheckedAt = "2026-09-14";
export const schools: SchoolGuide[] = [
  {
    "slug": "risd",
    "accent": "#A6362C",
    "name": "RISD",
    "nameKo": "로드아일랜드디자인스쿨",
    "fullName": "Rhode Island School of Design",
    "location": "미국 · 프로비던스",
    "scope": "학부 신입학",
    "cycle": "2027 입학 안내",
    "tags": [
      "회화·입체",
      "디자인"
    ],
    "intro": "최근 작업을 통해 생각하는 방식과 만드는 능력을 함께 보여주는 지원입니다.",
    "highlight": "12–20개 작업",
    "requirements": [
      "최근 작업 12–20개로 사고 과정과 제작 역량을 보여줍니다.",
      "Common Application을 시작한 뒤 SlideRoom으로 포트폴리오를 제출합니다.",
      "학교 성적표와 영어 능력 증빙 등 지원 서류도 별도로 준비합니다. 영어 시험 면제는 해당 조건과 승인 절차를 확인해야 합니다."
    ],
    "scopeNote": "이 페이지는 학부 신입학 안내입니다. 편입과 대학원은 별도 요건을 적용합니다.",
    "deadlines": [
      [
        "Early Decision",
        "2026.11.01"
      ],
      [
        "Regular Decision",
        "2027.01.20"
      ]
    ],
    "deadlineNote": "2027 입학 페이지 기준입니다. Early Decision은 합격 시 진학 약속이 따르는 전형이며, 재정보조 마감은 지원서 마감과 다릅니다.",
    "advice": [
      "한 가지 소재를 관찰한 작업과, 그 관찰을 재료·공간으로 확장한 작업을 함께 점검해 보세요.",
      "완성작을 고르기 전에 지금의 관심사가 무엇인지 정리하고, 각 작업이 그 관심사를 어떻게 드러내는지 짧게 써보는 것을 권합니다."
    ],
    "sources": [
      [
        "신입학 요건·지원 일정",
        "https://www.risd.edu/admissions/first-year/apply-risd"
      ]
    ]
  },
  {
    "slug": "parsons",
    "accent": "#2E2C2A",
    "name": "Parsons",
    "nameKo": "파슨스디자인스쿨",
    "fullName": "Parsons School of Design",
    "location": "미국 · 뉴욕",
    "scope": "뉴욕 캠퍼스 BFA 신입학",
    "cycle": "공식 공개 요건 · 연도 미표기",
    "tags": [
      "회화·입체",
      "디자인",
      "패션"
    ],
    "intro": "기술적 표현과 아이디어를 함께 보여주는 포트폴리오를 준비합니다.",
    "highlight": "8–12슬라이드",
    "requirements": [
      "BFA 신입학은 이미지 8–12슬라이드를 제출합니다. 한 슬라이드에 여러 이미지를 배치할 수 있습니다.",
      "회화·드로잉·입체·패션·애니메이션 등 다양한 매체를 사용할 수 있으며, 개인의 시선과 실험을 드러내는 구성을 권합니다.",
      "Common Application 제출 후 안내받는 Admission Hub에서 최종 포트폴리오를 올립니다. 사전 리뷰는 최종 제출을 대신하지 않습니다."
    ],
    "scopeNote": "BFA 신입학 기준입니다. 편입은 최대 20슬라이드까지 가능하며, BBA는 포트폴리오 선택 제출 등 조건이 다릅니다. 파리 캠퍼스와도 구분해 확인하세요.",
    "deadlines": [
      [
        "가을 EA / ED",
        "11월 1일"
      ],
      [
        "가을 Regular Decision",
        "1월 15일"
      ]
    ],
    "deadlineNote": "공식 상시 페이지의 월·일입니다. 입학연도와 해당 전형의 운영 여부를 다시 확인하세요. 포트폴리오는 제출 안내를 받는 대로 준비해 올리는 것을 권하고 있습니다.",
    "advice": [
      "작품 수와 슬라이드 수를 구분하고, 한 화면에 너무 많은 이미지를 압축하지 않는 것이 좋습니다.",
      "같은 주제를 다른 재료로 실험한 기록이 있다면, 무엇을 바꾸었는지 보이는 이미지를 선별해 보세요."
    ],
    "sources": [
      [
        "포트폴리오 구성 요건",
        "https://www.newschool.edu/parsons/portfolio-help/"
      ],
      [
        "학부 지원 절차·일정",
        "https://www.newschool.edu/parsons/how-to-apply-undergraduate/"
      ]
    ]
  },
  {
    "slug": "pratt",
    "accent": "#B4870D",
    "name": "Pratt",
    "nameKo": "프랫인스티튜트",
    "fullName": "Pratt Institute",
    "location": "미국 · 뉴욕",
    "scope": "학부 신입학 · General Visual Portfolio",
    "cycle": "2027 가을 입학 안내",
    "tags": [
      "회화·입체",
      "디자인",
      "패션"
    ],
    "intro": "최근의 완성작과 직접 관찰한 드로잉으로 자신의 시각을 보여주는 지원입니다.",
    "highlight": "10–20점 · 관찰 작업 포함",
    "requirements": [
      "General Visual Portfolio는 10–20점이며, 직접 관찰한 입체 상황·대상의 작업 3–5개를 포함합니다.",
      "제출 시점 기준 최근 18개월 내 작업을 준비하고 재료·크기·제작연도를 기록합니다.",
      "Common App 제출 후 계정과 포트폴리오 업로드 안내를 이메일로 받습니다. 과정 작업은 가능하지만 스케치북만으로 구성하지 않습니다."
    ],
    "scopeNote": "General Visual Portfolio 대상 전공 기준입니다. Film·Writing 등 별도 제출 유형은 이 요건으로 대체할 수 없습니다.",
    "deadlines": [
      [
        "Early Action",
        "11월 15일"
      ],
      [
        "Priority Decision",
        "1월 15일"
      ]
    ],
    "deadlineNote": "입학요건은 2027 가을 기준이며, 일정 페이지는 월·일로 안내합니다. 1월 15일 이후에는 정원 상황에 따라 순차 심사가 진행되므로 해당 전공의 잔여 모집 여부를 확인하세요.",
    "advice": [
      "사진을 보고 옮긴 그림과 실제 사물·공간을 관찰한 작업을 구분해 정리하세요.",
      "완성작 촬영도 준비 과정에 포함하세요. 입체 작업은 형태와 표면이 잘 보이도록 조명과 배경을 점검하는 것이 좋습니다."
    ],
    "sources": [
      [
        "2027 신입학·포트폴리오 요건",
        "https://www.pratt.edu/resources/undergraduate-application-requirements-high-school-applicants/"
      ],
      [
        "신입학 일정",
        "https://www.pratt.edu/admissions/undergraduate-admissions/"
      ]
    ]
  },
  {
    "slug": "saic",
    "accent": "#3E6E67",
    "name": "SAIC",
    "nameKo": "시카고예술대학",
    "fullName": "School of the Art Institute of Chicago",
    "location": "미국 · 시카고",
    "scope": "BFA in Studio 신입학",
    "cycle": "공식 공개 요건 · 연도 미표기",
    "tags": [
      "회화·입체",
      "디자인",
      "패션"
    ],
    "intro": "하나의 매체를 깊게 다루거나 여러 매체를 넘나드는 작업으로 관심사를 보여줄 수 있습니다.",
    "highlight": "최근 작업 10–15점",
    "requirements": [
      "BFA in Studio는 가장 자신 있는 최근 작업 10–15점을 제출합니다.",
      "한 매체에 집중하거나 여러 매체를 조합할 수 있습니다. 협업 작품은 참여자와 자신의 역할을 설명해야 합니다.",
      "Common Application 내 Portfolio 항목을 통해 SlideRoom에 작업을 제출합니다. 입학용 포트폴리오는 성적우수 장학 심사에도 사용됩니다."
    ],
    "scopeNote": "BFA in Studio 기준입니다. Writing·Art History·Visual and Critical Studies 등은 글과 시각 자료의 요건이 다릅니다.",
    "deadlines": [
      [
        "가을 EA / 장학 우선",
        "11월 15일"
      ],
      [
        "가을 장학 최종",
        "1월 15일"
      ],
      [
        "가을 지원 최종",
        "4월 15일"
      ]
    ],
    "deadlineNote": "연도가 명시되지 않은 공식 가을학기 일정입니다. 장학 심사 마감과 지원 최종 마감이 다르므로 지원 연도·과정을 확인하세요.",
    "advice": [
      "매체의 개수를 늘리기보다, 여러 작업 사이에서 반복되는 질문이나 관심사를 찾아보세요.",
      "실험적인 작업도 결과와 의도를 읽을 수 있게 기록하고, 협업했다면 자신이 결정하고 제작한 부분을 구체적으로 정리하세요."
    ],
    "sources": [
      [
        "학위별 포트폴리오 요건",
        "https://www.saic.edu/admissions/undergraduate/portfolio-requirements"
      ],
      [
        "신입학 절차·일정",
        "https://www.saic.edu/admissions/undergraduate/how-apply-freshman"
      ]
    ]
  },
  {
    "slug": "mica",
    "accent": "#C1541F",
    "name": "MICA",
    "nameKo": "메릴랜드예술대학",
    "fullName": "Maryland Institute College of Art",
    "location": "미국 · 볼티모어",
    "scope": "학부 신입학",
    "cycle": "2027 입학 안내",
    "tags": [
      "회화·입체",
      "디자인"
    ],
    "intro": "현재의 관심사와 표현 능력을 보여주는 최근 작업을 선별해 지원합니다.",
    "highlight": "최근 작업 10–15점",
    "requirements": [
      "현재 공식 학부 안내는 포트폴리오 10–15점을 요구합니다.",
      "지원자의 생각·관심·경험과 기술적 역량이 드러나는 최근 작업을 선택합니다.",
      "MICA Application 또는 Common Application으로 지원한 뒤 Applicant Portal의 업로드 안내를 따릅니다. 성적표와 해당자의 영어 능력 증빙도 확인해야 합니다."
    ],
    "scopeNote": "학부 신입학 기준입니다. 편입 지원은 학점 조건과 마감이 별도로 적용됩니다.",
    "deadlines": [
      [
        "가을 Early Action 우선",
        "2026.11.16"
      ],
      [
        "가을 Regular Decision",
        "2027.02.01"
      ]
    ],
    "deadlineNote": "2027 가을 신입학 공식 일정입니다. 2027 봄 지원은 2026년 11월 16일, 2027 가을 편입은 2027년 3월 15일로 별도 안내됩니다.",
    "advice": [
      "이전 안내서의 작품 수를 그대로 사용하지 말고, 현재 작업 중 강점이 선명한 작품부터 골라보세요.",
      "비슷한 작품이 반복된다면 각각의 역할을 비교하고, 다른 관찰이나 표현을 보여주는 작업으로 구성을 조정하는 것이 좋습니다."
    ],
    "sources": [
      [
        "2027 학부 지원·포트폴리오·일정",
        "https://www.mica.edu/admissions/undergraduate-admission/"
      ]
    ]
  },
  {
    "slug": "fit",
    "accent": "#1F4E8C",
    "name": "FIT",
    "nameKo": "뉴욕패션기술대학교",
    "fullName": "Fashion Institute of Technology",
    "location": "미국 · 뉴욕",
    "scope": "Fashion Design AAS",
    "cycle": "공식 공개 요건 · 연도 미표기",
    "tags": [
      "패션"
    ],
    "intro": "디자인 구상과 실제 의복 제작을 함께 준비하는 패션디자인 과정입니다.",
    "highlight": "에세이 + 디자인 + 봉제",
    "requirements": [
      "짧은 에세이, 디자인 프로젝트 2개, 봉제 프로젝트로 구성됩니다. 포트폴리오 에세이는 FIT/SUNY 지원 에세이를 대신하지 않습니다.",
      "디자인 프로젝트는 총 7–14개 이미지, 봉제 프로젝트는 직접 봉제한 의복 2–3벌의 사진 4–9개를 제출합니다.",
      "Fashion Design AAS의 지정 과제를 따라야 합니다. 일반 순수미술 작품 모음으로 대신할 수 없으며 SlideRoom에서 제출합니다."
    ],
    "scopeNote": "Fashion Design AAS 한 과정의 안내입니다. FIT 전체 전공이나 BFA·편입·대학원에 동일하게 적용하지 마세요.",
    "deadlines": [
      [
        "가을 포트폴리오",
        "2월 1일"
      ],
      [
        "봄 포트폴리오",
        "11월 1일"
      ]
    ],
    "deadlineNote": "해당 전공의 공식 포트폴리오 마감입니다. 지원서 마감과 구분하고, 지원 연도·AAS 지원 자격·입학 학기를 공식 입학 안내에서 확인하세요.",
    "advice": [
      "완성 그림만 준비하지 말고 아이디어, 의복 앞뒤 구조, 원단 선택, 실제 봉제 결과까지 연결해 점검하세요.",
      "봉제와 착장 촬영 시간을 별도로 확보하는 것이 좋습니다. 지정 과제별 이미지 수와 설명 항목을 체크리스트로 정리해 보세요."
    ],
    "sources": [
      [
        "Fashion Design AAS 공식 과제·일정",
        "https://www.fitnyc.edu/admissions/undergraduate-applicants/apply/portfolio/fashion-design-aas.php"
      ],
      [
        "학부 지원 자격",
        "https://www.fitnyc.edu/admissions/undergraduate-applicants/apply/eligibility.php"
      ]
    ]
  }
];
export function getSchool(slug: string) { return schools.find(school => school.slug === slug); }

export const schoolAcademics: Record<string, {text:string; url:string}> = {
  "risd": {
    "text": "1학년은 드로잉·디자인·공간 실험을 다루는 공통 기초 과정 EFS에서 시작하고, 이후 전공으로 이어집니다. 스튜디오 작업과 인문·교양 수업을 함께 공부하는 구조입니다.",
    "url": "https://www.risd.edu/academics/undergraduate-study"
  },
  "parsons": {
    "text": "학부 과정은 스튜디오 실습에 비판적 사고와 글쓰기를 연결합니다. 첫해에는 전공 학습에 필요한 기초 역량을 탐색하고, 선택 수업으로 관심을 넓혀갑니다.",
    "url": "https://www.newschool.edu/parsons/academics/"
  },
  "pratt": {
    "text": "미술·디자인·건축 등 서로 다른 교육 분야를 운영합니다. 관심 있는 작업뿐 아니라 지원 전공의 학위와 소속 분야를 함께 살펴보는 것이 좋습니다.",
    "url": "https://www.pratt.edu/academics/"
  },
  "saic": {
    "text": "BFA in Studio는 여러 미술·디자인 분야를 넘나들며 공부할 수 있는 학위입니다. 실험을 중심으로 자신의 작업 방향을 발전시키는 교육을 안내합니다.",
    "url": "https://www.saic.edu/academics/undergraduate-studies"
  },
  "mica": {
    "text": "학생들은 First Year Experience라는 공통 기초 과정을 거친 뒤 전공을 선택합니다. 관심에 따라 부전공을 더할 수 있어, 기초 탐색과 개인의 작업 방향을 연결하는 구조입니다.",
    "url": "https://www.mica.edu/academics/undergraduate-majors-minors/"
  },
  "fit": {
    "text": "Fashion Design AAS는 의복 디자인의 기초를 실제 제작과 디지털 방법으로 배우는 과정입니다. 2차원 디자인과 3차원 제작을 연결하며 실무적·개념적 해결 방법을 탐구합니다.",
    "url": "https://www.fitnyc.edu/admissions/undergraduate-applicants/apply/portfolio/fashion-design-aas.php"
  }
};