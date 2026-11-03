// 합격 학교 목록: 담당자 제공 자료 기준 (2026-11-03).
// 구체적인 합격 연도·인원·장학금 액수 등 정량 수치는 근거 자료가 확인되기 전까지 싣지 않습니다.
export type AcceptanceRegion = {
  title: string;
  schools: string[];
  note?: string;
};

export const acceptanceRegions: AcceptanceRegion[] = [
  {
    title: "미국 동부",
    schools: [
      "Columbia University",
      "Cornell University",
      "Yale University",
      "The Cooper Union",
      "New York University (NYU)",
      "Rhode Island School of Design (RISD)",
      "School of Visual Arts (SVA)",
      "Pratt Institute",
      "Fashion Institute of Technology (FIT)",
      "Parsons School of Design",
      "Maryland Institute College of Art (MICA)",
      "Carnegie Mellon University (CMU)",
      "Hunter College",
      "Massachusetts College of Art and Design",
      "Ringling College of Art and Design",
      "Rochester Institute of Technology",
      "Savannah College of Art and Design (SCAD)",
      "School of the Museum of Fine Arts at Tufts University (SMFA)",
      "Syracuse University",
      "University of the Arts",
      "Virginia Commonwealth University (VCU)",
    ],
  },
  {
    title: "미국 중서부",
    schools: [
      "School of the Art Institute of Chicago (SAIC)",
      "College for Creative Studies",
      "University of Illinois Urbana-Champaign",
    ],
  },
  {
    title: "미국 서부",
    schools: [
      "California Institute of the Arts (CalArts)",
      "California College of the Arts (CCA)",
      "Academy of Art University (AAU)",
      "ArtCenter College of Design",
      "Otis College of Art and Design",
      "San Francisco Art Institute",
      "University of Southern California (USC)",
    ],
  },
  {
    title: "영국",
    schools: [
      "Royal College of Art (RCA)",
      "Central Saint Martins, University of the Arts London (UAL)",
      "London College of Fashion, University of the Arts London (UAL)",
      "UCL Slade School of Fine Art",
    ],
  },
  {
    title: "캐나다",
    schools: [
      "Alberta College of Art and Design (ACAD)",
      "Emily Carr University of Art + Design",
      "OCAD University",
    ],
  },
];
