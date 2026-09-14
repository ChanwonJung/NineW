import Image from "next/image";
import photos from "@/data/school-photos.json";
const captions:Record<string,string>={risd:"RISD · 9 North Main Street 건물",parsons:"Parsons가 속한 The New School · University Center",pratt:"Pratt · 브루클린 캠퍼스 본관",saic:"SAIC · Grant Park 학교 건물",mica:"MICA · Brown Center",fit:"FIT · 27th Street 캠퍼스"};
export default function SchoolPhoto({slug}:{slug:string}) {
 const photo=photos[slug as keyof typeof photos];
 return <div className="school-campus-photo"><Image src={photo.src} alt={captions[slug]} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 45vw, 400px" /></div>;
}
export function SchoolPhotoCredit({slug}:{slug:string}) {
 const p=photos[slug as keyof typeof photos];
 return <p className="photo-credit">{captions[slug]} · <a href={p.source} target="_blank" rel="noopener noreferrer">{slug==="risd"?"DanielPenfield (원본), Filetime (원근 보정)":p.author}</a> · {p.licenseUrl?<a href={p.licenseUrl} target="_blank" rel="noopener noreferrer">{p.license}</a>:p.license}. 웹용 크기·형식 변경, 화면에 맞춰 일부 잘라 표시.</p>;
}
