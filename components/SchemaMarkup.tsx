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
      streetAddress: "Jl. Masda Adisucipto No.5, Kelurahan Parit, Tanjung Pandan, Belitung",
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
    description:
      "Paket wisata One Day Trip Hopping Island Premium menghadirkan pengalaman berpetualang di lautan biru Belitung dengan mengunjungi ikon-ikon terbaik seperti Pulau Lengkuas, Pulau Batu Garuda, Batu Burung, Pulau Kelayang, hingga Pulau Pasir yang memukau. Dilengkapi dengan aktivitas snorkeling, kuliner seafood khas Belitung, serta momen santai di Pantai Tanjung Pendam saat senja. Cocok bagi Anda yang ingin merasakan keindahan Belitung dalam satu hari penuh dengan pelayanan terbaik dan kenyamanan maksimal.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://oceania.co.id/paket/hopping-island-belitung",
      priceCurrency: "IDR",
      price: "400000",
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
      reviewCount: "45",
    },
  };

  // Product Schema untuk Paket 2
  const product2Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket Hoping Island Belitung Premium",
    description:
      "Paket wisata One Day Trip Hopping Island Reguler dirancang bagi wisatawan yang ingin menikmati keindahan pulau-pulau di Belitung dengan harga lebih hemat namun tetap mendapatkan pengalaman terbaik. Anda akan berkeliling ke lima pulau utama seperti Pulau Lengkuas, Pulau Batu Garuda, Batu Burung, Pulau Kelayang, hingga Pulau Pasir, disertai snorkeling serta makan siang seafood di Pulau Kelayang. Paket ini cocok untuk rombongan kecil maupun besar yang menginginkan petualangan santai namun tetap seru.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://oceania.co.id/paket/hopping-island-belitung-reguler",
      priceCurrency: "IDR",
      price: "325000",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2025-12-31",
      seller: {
        "@type": "Organization",
        name: "Oceania Travel",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "45",
    },
  };

  // Product Schema untuk Paket 3
  const product3Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket 2D1N Belitung Island",
    description:
      "Paket 2D1N Premium Belitung menghadirkan pengalaman terbaik menjelajahi pulau-pulau eksotis dan pesona kota Tanjung Pandan dalam dua hari penuh. Anda akan menikmati aktivitas hopping island ke destinasi ikonik seperti Pulau Lengkuas, Batu Garuda, dan Pulau Pasir, lengkap dengan snorkeling di laut jernih dan makan siang seafood di Pulau Kelayang. Di hari kedua, Anda akan diajak city tour mengunjungi tempat hits seperti Pantai Tanjung Pendam, Danau Kaolin, dan Kongdjie Coffee. Dilengkapi fasilitas terbaik, dokumentasi premium, dan pelayanan profesional dari tim Oceania Travel.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.oceania.co.id/paket/trip-2d1n-belitung-island",
      priceCurrency: "IDR",
      price: "600000",
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

  // Product Schema untuk Paket 4
  const product4Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket 3D2N Belitung Island",
    description:
      "Paket 3D2N Belitung Premium menghadirkan perjalanan paling lengkap menjelajahi keindahan Belitung. Di hari pertama Anda akan menyusuri jejak Laskar Pelangi di Belitung Timur. Hari kedua diisi dengan petualangan laut seru Hopping Island ke pulau-pulau eksotis seperti Pulau Lengkuas dan Pulau Batu Garuda. Di hari terakhir, Anda akan menikmati City Tour santai ke tempat hits seperti Kongdjie Coffee, Danau Kaolin, dan Rumah Adat Belitung. Dilengkapi fasilitas premium, dokumentasi profesional, dan pelayanan terbaik dari tim Oceania Travel.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.oceania.co.id/paket/trip-3d2n-belitung-island",
      priceCurrency: "IDR",
      price: "860000",
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
      reviewCount: "38",
    },
  };

  // Product Schema untuk Paket 5
  const product5Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket Honeymoon 2D1N Belitung Island",
    description:
      "Paket Honeymoon 2D1N Premium Belitung dirancang khusus untuk pasangan yang ingin merayakan cinta di tengah keindahan alam Belitung. Nikmati momen romantis berdua dengan private boat hopping island, sesi foto bertema romantis, makan malam candlelight di tepi pantai, hingga menginap di hotel pilihan yang nyaman. Selama dua hari penuh, Anda dan pasangan akan menjelajahi pulau-pulau eksotis seperti Pulau Lengkuas, Pulau Batu Garuda, dan Pulau Pasir, ditutup dengan city tour di hari kedua untuk melengkapi kenangan indah bersama Oceania Travel.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.oceania.co.id/paket/honeymoon-2d1n-belitung",
      priceCurrency: "IDR",
      price: "3790000",
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
      reviewCount: "41",
    },
  };

  // Product Schema untuk Paket 6
  const product6Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket Honeymoon 3D2N Belitung Island",
    description:
      "Paket Honeymoon 3D2N Premium Belitung merupakan pilihan sempurna untuk pasangan yang ingin menikmati waktu romantis lebih lama di Pulau Belitung. Selama tiga hari dua malam, Anda dan pasangan akan menjelajahi keindahan alam Belitung — mulai dari jejak film Laskar Pelangi di Belitung Timur, Hopping Island dengan perahu pribadi, hingga Candlelight Dinner yang mempesona di tepi pantai. Paket ini dirancang eksklusif oleh Oceania Travel untuk menghadirkan kombinasi antara petualangan, kenyamanan, dan momen romantis tak terlupakan.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://oceania.co.id/paket/honeymoon-3d2n-belitung",
      priceCurrency: "IDR",
      price: "5240000",
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

  // Product Schema untuk Paket 7
  const product7Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket Family 2D1N Belitung Island",
    description:
      "Paket Family 2D1N Belitung Island dirancang khusus untuk keluarga yang ingin menikmati liburan penuh kehangatan dan kebersamaan di Pulau Belitung. Dalam dua hari perjalanan, Anda dan keluarga akan menjelajahi pantai-pantai eksotis, berpetualang di pulau-pulau kecil dengan private boat, serta menikmati wisata budaya dan kuliner lokal. Aktivitas seru seperti memberi makan ikan, bermain pasir, foto keluarga, hingga menjelajahi Goa Kelayang akan menjadi kenangan tak terlupakan bagi anak-anak maupun orang tua. Semua dikemas nyaman dan aman bersama Oceania Travel.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://oceania.co.id/paket/family-2d1n-belitung",
      priceCurrency: "IDR",
      price: "4140000",
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
      reviewCount: "37",
    },
  };

  // Product Schema untuk Paket 8
  const product8Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paket Family 3D2N Belitung Island",
    description:
      "Paket Family 3D2N Belitung Island dirancang khusus bagi keluarga yang ingin menikmati waktu berkualitas bersama sambil menjelajahi pesona Belitung. Mulai dari kunjungan ke lokasi legendaris film Laskar Pelangi, pengalaman island hopping seru dengan perahu tradisional, hingga city tour santai di hari terakhir. Nikmati keindahan alam, kuliner khas, dan momen kebersamaan yang akan menjadi kenangan indah bagi seluruh keluarga.",
    image: "https://oceania.co.id/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Oceania Travel",
    },
    offers: {
      "@type": "Offer",
      url: "https://oceania.co.id/paket/family-3d2n-belitung",
      priceCurrency: "IDR",
      price: "6280000",
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
      reviewCount: "34",
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
      <Script id="schema-product5" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product5Schema) }} />
      <Script id="schema-product6" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product6Schema) }} />
      <Script id="schema-product7" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product7Schema) }} />
      <Script id="schema-product8" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product8Schema) }} />
    </>
  );
}
