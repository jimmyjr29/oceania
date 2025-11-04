import { MetadataRoute } from "next";
import { destinasiData } from "@/lib/destinasi";
import { paketList } from "@/lib/paket";
// import testimoni/galery kalau perlu
// import { testimoniList } from "@/lib/testimoni";
// import { galeryList } from "@/lib/galery";

type SitemapEntry = {
  url: string;
  lastModified?: Date;
  changeFrequency?: "daily" | "weekly" | "monthly";
  priority?: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.oceania.co.id";

  // halaman statis utama & kategori (list pages)
  const staticPages: SitemapEntry[] = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/tentang/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/kontak/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // kategori / listing pages
    { url: `${baseUrl}/destinasi/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/paket/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/galery/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  // detail destinasi dari lib/destinasi.ts (pakai destinasiData)
  const destinasiPages: SitemapEntry[] = (destinasiData || []).map((item: { slug: string }) => ({
    url: `${baseUrl}/destinasi/${item.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // detail paket dari lib/paket.ts (pakai paketList)
  const paketPages: SitemapEntry[] = (paketList || []).map((item: { slug: string }) => ({
    url: `${baseUrl}/paket/${item.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // gabungkan semua
  return [...staticPages, ...destinasiPages, ...paketPages];
}
