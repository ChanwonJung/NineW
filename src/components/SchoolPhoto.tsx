import Image from "next/image";
import photos from "@/data/school-photos.json";
const captions: Record<string, string> = {
  "risd": "RISD · 9 North Main Street 건물",
  "parsons": "Parsons가 속한 The New School · University Center",
  "pratt": "Pratt · 브루클린 캠퍼스 본관",
  "saic": "SAIC · Grant Park 학교 건물",
  "mica": "MICA · Brown Center",
  "fit": "FIT · 27th Street 캠퍼스",
  "artcenter": "ArtCenter · South Campus Building 1",
  "central-saint-martins": "Central Saint Martins · Granary Square",
  "emily-carr": "Emily Carr University · Great Northern Way 캠퍼스 외관",
  "columbia": "Columbia University · Low Memorial Library",
  "cornell": "Cornell University · Ho Plaza와 Sage Hall",
  "yale": "Yale · Sculpture Building",
  "cooper-union": "Cooper Union · New Academic Building",
  "nyu": "NYU · 워싱턴스퀘어 캠퍼스",
  "sva": "SVA · 맨해튼 학교 건물",
  "cmu": "Carnegie Mellon University · 피츠버그 캠퍼스",
  "hunter": "Hunter College · West Building",
  "massart": "MassArt · Design and Media Center",
  "ringling": "Ringling College · Basch Visual Arts Center",
  "rit": "RIT · Mark Ellingson Hall",
  "scad": "SCAD · Anderson Hall",
  "smfa-tufts": "SMFA at Tufts · Fenway 캠퍼스",
  "syracuse": "Syracuse University · 캠퍼스 전경",
  "university-of-the-arts": "University of the Arts · 과거 필라델피아 캠퍼스",
  "vcu": "VCUarts · Monroe Park 캠퍼스",
  "ccs": "College for Creative Studies · Ford Campus",
  "uiuc": "UIUC · Main Quad",
  "calarts": "CalArts · Valencia 캠퍼스",
  "cca": "CCA · San Francisco 캠퍼스",
  "academy-of-art": "Academy of Art University · New Montgomery Street",
  "otis": "Otis College · Ahmanson Hall",
  "sfai": "San Francisco Art Institute · Chestnut Street 캠퍼스",
  "usc": "USC · University Park Campus",
  "rca": "Royal College of Art · Darwin Building",
  "london-college-of-fashion": "London College of Fashion · East Bank 캠퍼스",
  "ucl-slade": "UCL Slade School of Fine Art · Gower Street",
  "alberta-arts": "Alberta University of the Arts · Calgary 캠퍼스",
  "ocad": "OCAD University · Sharp Centre for Design"
};
export default function SchoolPhoto({slug,name}:{slug:string;name?:string}) {
 const photo=photos[slug as keyof typeof photos];
 if(!photo) return <div className="school-campus-photo school-campus-placeholder" role="img" aria-label={(name??slug)+" 학교 이미지 준비 중"}><span>{name??slug}</span><small>OFFICIAL PROFILE</small></div>;
 return <div className="school-campus-photo"><Image src={photo.src} alt={captions[slug]} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 45vw, 400px" /></div>;
}
export function SchoolPhotoCredit({slug}:{slug:string}) {
 const p=photos[slug as keyof typeof photos];
 if(!p) return null;
 return <p className="photo-credit">{captions[slug]} · <a href={p.source} target="_blank" rel="noopener noreferrer">{slug==="risd"?"DanielPenfield (원본), Filetime (원근 보정)":p.author}</a> · {p.licenseUrl?<a href={p.licenseUrl} target="_blank" rel="noopener noreferrer">{p.license}</a>:p.license}. 웹용 크기·형식 변경, 화면에 맞춰 일부 잘라 표시.</p>;
}
