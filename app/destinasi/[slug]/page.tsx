import { notFound } from "next/navigation";
import DestinasiDetailClient from "./DestinasiDetailClient";
import { getDestinasiBySlug, destinasiData } from "@/lib/destinasi";

export async function generateStaticParams() {
  return destinasiData.map((dest) => ({
    slug: dest.slug,
  }));
}

export default function DestinasiDetailPage({ params }: { params: { slug: string } }) {
  const dest = getDestinasiBySlug(params.slug);

  if (!dest) {
    notFound();
  }

  return <DestinasiDetailClient dest={dest} />;
}
