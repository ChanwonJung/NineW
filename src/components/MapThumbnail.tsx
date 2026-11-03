export default function MapThumbnail({
  address,
  mapUrl,
}: {
  address: string;
  mapUrl: string;
}) {
  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-56 overflow-hidden rounded-2xl border border-line"
      aria-label={`${address} 지도 크게 보기`}
    >
      <iframe
        src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`}
        title="나인더블유 위치 미리보기"
        loading="lazy"
        tabIndex={-1}
        className="pointer-events-none h-full w-full scale-105 border-0 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
      <span className="absolute bottom-3 right-3 rounded-full bg-paper/95 px-4 py-2 text-xs font-medium text-ink shadow-sm">
        지도 크게 보기 →
      </span>
    </a>
  );
}
