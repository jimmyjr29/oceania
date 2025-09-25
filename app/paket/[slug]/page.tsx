import PaketDetailPage from "../../../components/PaketDetailPage";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  return <PaketDetailPage slug={params.slug} />;
}
