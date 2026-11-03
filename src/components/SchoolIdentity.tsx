import Image from "next/image";
import { getSchoolProfile } from "@/data/school-profiles";
const extensions: Record<string, string> = {
  "risd": "svg",
  "parsons": "svg",
  "pratt": "svg",
  "saic": "png",
  "mica": "png",
  "fit": "png",
  "artcenter": "png",
  "central-saint-martins": "png",
  "emily-carr": "svg",
  "columbia": "png",
  "cornell": "svg",
  "yale": "svg",
  "cooper-union": "svg",
  "nyu": "svg",
  "sva": "png",
  "cmu": "svg",
  "hunter": "png",
  "massart": "png",
  "ringling": "png",
  "rit": "svg",
  "scad": "png",
  "smfa-tufts": "png",
  "syracuse": "svg",
  "university-of-the-arts": "svg",
  "vcu": "svg",
  "ccs": "png",
  "uiuc": "svg",
  "calarts": "svg",
  "cca": "svg",
  "academy-of-art": "png",
  "usc": "png",
  "london-college-of-fashion": "png",
  "ucl-slade": "png",
  "alberta-arts": "png",
  "ocad": "png",
  "otis": "png",
  "sfai": "png",
  "rca": "png"
};
const logoSources: Record<string, { label: string; url: string }> = {
  "artcenter": {
    "label": "ArtCenter 공식 아이덴티티 자료",
    "url": "https://www.artcenter.edu/identity/downloads.php"
  },
  "central-saint-martins": {
    "label": "UAL 공식 CSM 아이덴티티 가이드",
    "url": "https://www.arts.ac.uk/brand/college-brands/central-saint-martins-identity-guidelines"
  },
  "emily-carr": {
    "label": "Emily Carr 공식 브랜드 자료",
    "url": "https://ecuad.ca/ecu-brand/"
  },
  "columbia": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Columbia_University.svg"
  },
  "cornell": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:Cornell_University_logo.svg"
  },
  "yale": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:Yale_University_logo.svg"
  },
  "cooper-union": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:Cooper_Union.svg"
  },
  "nyu": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:Nyu_short_color.svg"
  },
  "sva": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:SVA-2022-logo.png"
  },
  "cmu": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:Carnegie_Mellon_University_wordmark.svg"
  },
  "hunter": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:HUNTER-LOGO.jpg"
  },
  "massart": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:MassArt_Logo_Black.png"
  },
  "ringling": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:RCAD_Logo_FullColor_2023_No_Background.png"
  },
  "rit": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:RIT_2018_logo_short_orange.svg"
  },
  "scad": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:Savannah_College_of_Art_and_Design.png"
  },
  "smfa-tufts": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:Tufts_School_of_the_Museum_of_Fine_Arts_logo.png"
  },
  "syracuse": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:Syracuse_University_wordmark.svg"
  },
  "university-of-the-arts": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:University_of_the_Arts_logo.svg"
  },
  "vcu": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:VCU_typeface.svg"
  },
  "ccs": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:CCS_LOGO.png"
  },
  "uiuc": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:University_of_Illinois_at_Urbana%E2%80%93Champaign_logo.svg"
  },
  "calarts": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:Calarts_logo.svg"
  },
  "cca": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:California_College_of_the_Arts_logo.svg"
  },
  "academy-of-art": {
    "label": "Academy of Art University 로고 자료",
    "url": "https://seeklogo.com/vector-logo/199453/academy-of-art-university"
  },
  "usc": {
    "label": "USC Bookstore · Roski 공식 표기",
    "url": "https://www.uscbookstore.com/shop-by-school"
  },
  "london-college-of-fashion": {
    "label": "London College of Fashion 로고 자료",
    "url": "https://www.businessoffashion.com/organisations/london-college-of-fashion/"
  },
  "ucl-slade": {
    "label": "UCL 공식 홈페이지",
    "url": "https://www.ucl.ac.uk/"
  },
  "alberta-arts": {
    "label": "Alberta University of the Arts 공식 홈페이지",
    "url": "https://www.auarts.ca/"
  },
  "ocad": {
    "label": "Wikimedia Commons 로고 원본",
    "url": "https://commons.wikimedia.org/wiki/File:OCAD_University_Logo.png"
  },
  "otis": {
    "label": "Otis 공식 브랜드 가이드",
    "url": "https://www.otis.edu/offices/communications-marketing/brand-guidelines/logos.html"
  },
  "sfai": {
    "label": "SFAI Legacy Foundation",
    "url": "https://sfai.org/"
  },
  "rca": {
    "label": "Royal College of Art 공식 홈페이지",
    "url": "https://www.rca.ac.uk/"
  }
};
export function SchoolIdentityCredit({slug}:{slug:string}) {
 const source = logoSources[slug] ?? getSchoolProfile(slug)?.officialLinks[0];
 if (!source) return null;
 return <p className="photo-credit school-logo-credit">로고 · <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></p>;
};
export default function SchoolIdentity({slug,name}:{slug:string;name:string}) {
 const extension=extensions[slug];
 if(!extension) {
   const capitals=name.replace(/[^A-Z]/g,"").slice(0,4) || name.slice(0,2).toUpperCase();
   return <span className="school-logo school-logo-fallback" role="img" aria-label={name+" 워드마크"}>{capitals}</span>;
 }
 return <span className={"school-logo school-logo-"+slug}><Image src={"/images/logos/"+slug+"."+extension} alt={name+" 로고"} width={90} height={64} unoptimized /></span>;
}
