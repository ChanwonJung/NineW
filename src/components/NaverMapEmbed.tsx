"use client";
import { useEffect, useRef } from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

export default function NaverMapEmbed({ address }: { address: string }) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!CLIENT_ID || !mapRef.current) return;
    let cancelled = false;

    function init() {
      if (cancelled || !mapRef.current || !window.naver) return;
      const { naver } = window;
      const map = new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng(37.5665, 126.978),
        zoom: 16,
      });
      naver.maps.Service.geocode({ query: address }, (status, response) => {
        if (cancelled || status !== naver.maps.Service.Status.OK) return;
        const item = response.v2.addresses[0];
        if (!item) return;
        const point = new naver.maps.LatLng(Number(item.y), Number(item.x));
        map.setCenter(point);
        new naver.maps.Marker({ position: point, map });
      });
    }

    if (window.naver?.maps) {
      init();
    } else {
      const script = document.createElement("script");
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}&submodules=geocoder`;
      script.async = true;
      script.onload = init;
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
    };
  }, [address]);

  if (!CLIENT_ID) return null;
  return <div ref={mapRef} className="visit-map" aria-label="나인더블유 위치 지도" />;
}
