"use client";

import Script from "next/script";

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://oceania.co.id/#travelagency",
    name: "Oceania Travel",
    url: "https://oceania.co.id",
    logo: "https://oceania.co.id/logo.png",
    image: "https://oceania.co.id/banner.png", // pastikan nama file sesuai dengan yang ada di /public
    description: "Oceania Travel menyediakan paket wisata Belitung terbaik dengan pelayanan profesional, harga kompetitif, dan destinasi eksklusif untuk liburan tak terlupakan.",
    sameAs: ["https://www.instagram.com/oceania.id", "https://www.tiktok.com/@oceania.id"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Masda Adisucipto No.22, Kelurahan Parit, Tanjung Pandan, Belitung",
      addressLocality: "Tanjung Pandan",
      addressRegion: "Bangka Belitung",
      postalCode: "33411",
      addressCountry: "ID",
    },
    telephone: "+62 851-3853-4353",
    priceRange: "Rp300.000 - Rp5.000.000",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "178",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paket Wisata Belitung",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Paket Hoping Island Belitung",
          url: "https://oceania.co.id/paket/hooping-island-belitung-reguler",
          price: "375000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Product",
            name: "Paket Hoping Island Belitung",
          },
        },
        {
          "@type": "Offer",
          name: "Paket 2D1N Belitung Island",
          url: "https://oceania.co.id/paket/trip-2d1n-belitung-island",
          price: "1200000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Product",
            name: "Paket 2D1N Belitung Island",
          },
        },
        {
          "@type": "Offer",
          name: "Paket 3D2N Belitung Island",
          url: "https://oceania.co.id/paket/trip-3d2n-belitung-island",
          price: "1750000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Product",
            name: "Paket 3D2N Belitung Island",
          },
        },
        {
          "@type": "Offer",
          name: "Paket Honeymoon 3D2N Belitung Island",
          url: "https://oceania.co.id/paket/honeymoon-3d2n-belitung",
          price: "2800000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Product",
            name: "Paket Honeymoon 3D2N Belitung Island",
          },
        },
      ],
    },
    founder: {
      "@type": "Organization",
      name: "Oceania Team",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://oceania.co.id/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Paket Wisata",
        item: "https://oceania.co.id/paket/",
      },
    ],
  };

  return (
    <>
      <Script id="schema-travelagency" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
