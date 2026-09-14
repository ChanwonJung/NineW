import Image from "next/image";
const extensions: Record<string,string> = {risd:"svg",parsons:"svg",pratt:"svg",saic:"png",mica:"png",fit:"png"};
export default function SchoolIdentity({slug,name}:{slug:string;name:string}) {
 return <span className="school-logo"><Image src={`/images/logos/${slug}.${extensions[slug]}`} alt={`${name} 로고`} width={90} height={64} unoptimized /></span>;
}
