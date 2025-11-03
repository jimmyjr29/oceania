"use client";

import Script from "next/script";

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Oceania Travel",
    url: "https://oceania.co.id",
    logo: "https://oceania.co.id/logo.png",
    sameAs: ["https://www.instagram.com/oceania.id", "https://www.tiktok.com/@oceania.id"],
    description: "Oceania Travel menyediakan paket wisata Belitung terbaik dengan layanan profesional dan harga bersaing.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Masda Adisucipto No.22, Kelurahan Parit, Tanjung Pandan, Belitung",
      addressLocality: "Tanjung Pandan",
      addressRegion: "Bangka Belitung",
      postalCode: "33411",
      addressCountry: "ID",
    },
    telephone: "+62 851-3853-4353",
  };

  return <Script id="schema-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />;
}
