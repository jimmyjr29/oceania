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

  // Product Schema untuk Paket 1
  const product1Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket Hoping Island Belitung",
    description: "Paket wisata island hopping Belitung dengan kunjungan ke pulau-pulau eksotis. Nikmati keindahan pantai dan pulau-pulau cantik di Belitung.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://oceania.co.id/paket/hooping-island-belitung-reguler",
      priceCurrency: "IDR",
      price: "375000",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2025-12-31",
      seller: {
        "@type": "Organization",
        name: "Oceania Travel",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "45",
    },
  };

  // Product Schema untuk Paket 2
  const product2Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket 2D1N Belitung Island",
    description: "Paket wisata 2 hari 1 malam di Belitung dengan akomodasi hotel dan tour lengkap. Jelajahi destinasi wisata terbaik Belitung.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.oceania.co.id/paket/Trip-2d1n-belitung-island",
      priceCurrency: "IDR",
      price: "1200000",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2025-12-31",
      seller: {
        "@type": "Organization",
        name: "Oceania Travel",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "52",
    },
  };

  // Product Schema untuk Paket 3
  const product3Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket 3D2N Belitung Island",
    description: "Paket wisata 3 hari 2 malam di Belitung dengan destinasi lengkap. Eksplorasi wisata alam, budaya, dan kuliner khas Belitung.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.oceania.co.id/paket/trip-3d2n-belitung-Island",
      priceCurrency: "IDR",
      price: "1750000",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2025-12-31",
      seller: {
        "@type": "Organization",
        name: "Oceania Travel",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "38",
    },
  };

  // Product Schema untuk Paket 4
  const product4Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket Honeymoon 3D2N Belitung Island",
    description: "Paket honeymoon romantis 3 hari 2 malam di Belitung dengan fasilitas eksklusif. Ciptakan momen romantis yang tak terlupakan bersama pasangan.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://oceania.co.id/paket/honeymoon-3d2n-belitung",
      priceCurrency: "IDR",
      price: "2800000",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2025-12-31",
      seller: {
        "@type": "Organization",
        name: "Oceania Travel",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "43",
    },
  };

  return (
    <>
      <Script id="schema-travelagency" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="schema-product1" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product1Schema) }} />
      <Script id="schema-product2" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product2Schema) }} />
      <Script id="schema-product3" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product3Schema) }} />
      <Script id="schema-product4" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product4Schema) }} />
    </>
  );
}
