import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { siteConfig } from "@/data/site";

// 학원 위치 사진을 public/images/location/ 폴더에 map.jpg(또는 png, webp, jpeg)로 넣으면 자동으로 표시된다.
const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

function findLocationImage() {
  const dir = path.join(process.cwd(), "public/images/location");
  const ext = EXTENSIONS.find(e => fs.existsSync(path.join(dir, `map.${e}`)));
  return ext ? `/images/location/map.${ext}` : null;
}

export default function LocationCard() {
  const src = findLocationImage();
  return (
    <a href={siteConfig.naverMapUrl} target="_blank" rel="noopener noreferrer" className="visit-map location-card" aria-label="NINE·W 위치를 네이버 지도에서 보기">
      {src ? (
        <>
          <Image src={src} alt="NINE·W 위치 안내 사진" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <span className="location-card-label">네이버 지도에서 보기</span>
        </>
      ) : (
        <span className="location-card-empty">
          <strong>{siteConfig.address.fullAddress}</strong>
          <em>네이버 지도에서 위치 보기 →</em>
        </span>
      )}
    </a>
  );
}
