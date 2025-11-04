"use client";

import Script from "next/script";

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://oceania.co.id/#travelagency",
    name: "Oceania Travel",
    url: "https://oceania.co.id",
    logo: {
      "@type": "ImageObject",
      url: "https://oceania.co.id/icon-512.png",
      width: 512,
      height: 512,
    },
    image: {
      "@type": "ImageObject",
      url: "https://oceania.co.id/og-image.jpg",
      width: 1200,
      height: 630,
    },
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-2.7447",
      longitude: "107.6397",
    },
    telephone: "+62 851-3853-4353",
    email: "info@oceania.co.id",
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
      bestRating: "5",
      worstRating: "1",
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
          validFrom: "2025-01-01",
          priceValidUntil: "2025-12-31",
          itemOffered: {
            "@type": "Product",
            name: "Paket Hoping Island Belitung",
            description: "Paket wisata island hopping Belitung dengan kunjungan ke pulau-pulau eksotis",
            image: "https://oceania.co.id/og-image.jpg",
          },
        },
        {
          "@type": "Offer",
          name: "Paket 2D1N Belitung Island",
          url: "https://oceania.co.id/paket/trip-2d1n-belitung-island",
          price: "1200000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          validFrom: "2025-01-01",
          priceValidUntil: "2025-12-31",
          itemOffered: {
            "@type": "Product",
            name: "Paket 2D1N Belitung Island",
            description: "Paket wisata 2 hari 1 malam di Belitung dengan akomodasi dan tour lengkap",
            image: "https://oceania.co.id/og-image.jpg",
          },
        },
        {
          "@type": "Offer",
          name: "Paket 3D2N Belitung Island",
          url: "https://oceania.co.id/paket/trip-3d2n-belitung-island",
          price: "1750000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          validFrom: "2025-01-01",
          priceValidUntil: "2025-12-31",
          itemOffered: {
            "@type": "Product",
            name: "Paket 3D2N Belitung Island",
            description: "Paket wisata 3 hari 2 malam di Belitung dengan destinasi lengkap",
            image: "https://oceania.co.id/og-image.jpg",
          },
        },
        {
          "@type": "Offer",
          name: "Paket Honeymoon 3D2N Belitung Island",
          url: "https://oceania.co.id/paket/honeymoon-3d2n-belitung",
          price: "2800000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          validFrom: "2025-01-01",
          priceValidUntil: "2025-12-31",
          itemOffered: {
            "@type": "Product",
            name: "Paket Honeymoon 3D2N Belitung Island",
            description: "Paket honeymoon romantis 3 hari 2 malam di Belitung dengan fasilitas eksklusif",
            image: "https://oceania.co.id/og-image.jpg",
          },
        },
      ],
    },
    founder: {
      "@type": "Organization",
      name: "Oceania Team",
    },
    paymentAccepted: "Cash, Credit Card, Bank Transfer, E-Wallet",
    currenciesAccepted: "IDR",
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://oceania.co.id/#website",
    url: "https://oceania.co.id",
    name: "Oceania Travel",
    alternateName: "Oceania Tour & Travel",
    description: "Paket wisata Belitung terbaik dengan pelayanan profesional",
    publisher: {
      "@id": "https://oceania.co.id/#travelagency",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://oceania.co.id/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://oceania.co.id/#localbusiness",
    name: "Oceania Travel",
    image: "https://oceania.co.id/icon-512.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Masda Adisucipto No.22, Kelurahan Parit",
      addressLocality: "Tanjung Pandan",
      addressRegion: "Bangka Belitung",
      postalCode: "33411",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-2.7447",
      longitude: "107.6397",
    },
    telephone: "+62 851-3853-4353",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    priceRange: "Rp300.000 - Rp5.000.000",
  };

  return (
    <>
      <Script id="schema-travelagency" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="schema-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
