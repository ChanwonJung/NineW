import { siteConfig } from "@/data/site";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.fullAddress,
      addressLocality: "강남구",
      addressRegion: "서울특별시",
      addressCountry: "KR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "13:00",
        closes: "22:00",
      },
    ],
    sameAs: [siteConfig.instagramUrl],
    founder: { "@type": "Person", name: "정석희" },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
