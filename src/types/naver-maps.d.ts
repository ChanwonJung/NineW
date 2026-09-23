export {};

interface NaverLatLng {
  lat: () => number;
  lng: () => number;
}

interface NaverMapInstance {
  setCenter: (point: NaverLatLng) => void;
}

interface NaverGeocodeAddress {
  x: string;
  y: string;
}

interface NaverGeocodeResponse {
  v2: { addresses: NaverGeocodeAddress[] };
}

interface NaverMapsNamespace {
  LatLng: new (lat: number, lng: number) => NaverLatLng;
  Map: new (el: HTMLElement, options: { center: NaverLatLng; zoom: number }) => NaverMapInstance;
  Marker: new (options: { position: NaverLatLng; map: NaverMapInstance }) => unknown;
  Service: {
    Status: { OK: string; ERROR: string };
    geocode: (options: { query: string }, callback: (status: string, response: NaverGeocodeResponse) => void) => void;
  };
}

declare global {
  interface Window {
    naver?: { maps: NaverMapsNamespace };
  }
}
