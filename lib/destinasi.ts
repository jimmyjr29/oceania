export type Destinasi = {
  id: number;
  slug: string;
  nama: string;
  lokasi: string;
  rating: number;
  kategori: string;
  gambar: string;
  deskripsi: string;
  detail: string;
  footage: string[];
};

export const destinasiData: Destinasi[] = [
  {
    id: 1,
    slug: "pulau-lengkuas",
    nama: "Pulau Lengkuas",
    lokasi: "Belitung",
    rating: 4.8,
    kategori: "Pulau",
    gambar: "/images/destinasi/Lengkuas.png",
    deskripsi: "Pulau kecil dengan mercusuar ikonik abad ke-19 dan laut sebening kaca.",
    detail:
      "Pulau Lengkuas merupakan salah satu ikon wisata Belitung dengan mercusuar peninggalan Belanda yang menjulang tinggi sejak abad ke-19. Dikelilingi pasir putih dan air laut sebening kaca, pulau ini menjadi spot favorit untuk snorkeling, diving, maupun sekadar menikmati panorama dari atas mercusuar.",
    footage: [
      "/images/destinasi/Lengkuas.png",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas1.jpg",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas2.jpg",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas3.jpg",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas4.jpg",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas5.jpg",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas6.jpg",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas7.jpg",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas8.jpg",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas9.jpg",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas10.jpg",
      "/images/destinasi/pulau-lengkuas/pulau-lengkuas11.jpg",
    ],
  },
  {
    id: 2,
    slug: "pulau-burung",
    nama: "Pulau Burung",
    lokasi: "Belitung",
    rating: 4.7,
    kategori: "Pulau",
    gambar: "/images/destinasi/Batu-burung.png",
    deskripsi: "Pulau unik dengan batu granit raksasa berbentuk kepala burung.",
    detail:
      "Pulau Burung terkenal dengan formasi granit raksasa yang menyerupai kepala burung garuda, menjadikannya landmark alam yang menakjubkan. Dengan pantai berpasir putih dan air laut jernih, tempat ini ideal untuk bersantai, berfoto, dan merasakan keindahan khas Belitung.",
    footage: [
      "/images/destinasi/Batu-burung.png",
      "/images/destinasi/batu-burung/batu-burung1.jpg",
      "/images/destinasi/batu-burung/batu-burung2.jpg",
      "/images/destinasi/batu-burung/batu-burung3.jpg",
      "/images/destinasi/batu-burung/batu-burung4.jpg",
      "/images/destinasi/batu-burung/batu-burung5.jpg",
    ],
  },
  {
    id: 3,
    slug: "pulau-batu-belayar",
    nama: "Pulau Batu Belayar",
    lokasi: "Belitung",
    rating: 4.6,
    kategori: "Pulau",
    gambar: "/images/destinasi/Batu-berlayar.png",
    deskripsi: "Pulau mungil dengan batu granit besar menyerupai layar kapal.",
    detail:
      "Pulau Batu Belayar adalah pulau kecil tanpa penghuni yang dikenal karena batu granit raksasanya menyerupai layar kapal. Pulau ini hanya muncul saat air laut surut, memberikan pengalaman unik bagi pengunjung untuk menikmati panorama laut biru, pasir putih, dan formasi batuan yang menawan.",
    footage: [
      "/images/destinasi/Batu-berlayar.png",
      "/images/destinasi/batu-berlayar/batu-berlayar1.jpg",
      "/images/destinasi/batu-berlayar/batu-berlayar2.jpg",
      "/images/destinasi/batu-berlayar/batu-berlayar3.jpg",
      "/images/destinasi/batu-berlayar/batu-berlayar4.jpg",
      "/images/destinasi/batu-berlayar/batu-berlayar5.jpg",
      "/images/destinasi/batu-berlayar/batu-berlayar6.jpg",
      "/images/destinasi/batu-berlayar/batu-berlayar7.jpg",
    ],
  },
  {
    id: 4,
    slug: "pantai-tanjung-tinggi",
    nama: "Pantai Tanjung Tinggi",
    lokasi: "Belitung",
    rating: 4.9,
    kategori: "Pantai",
    gambar: "/images/destinasi/TG-tinggi.png",
    deskripsi: "Pantai ikonik dengan granit raksasa dan pasir putih luas.",
    detail:
      "Pantai Tanjung Tinggi menjadi salah satu destinasi paling populer di Belitung, dikenal dengan batu granit raksasa yang tersebar di sepanjang garis pantainya. Pasir putih, air laut biru jernih, serta suasana yang pernah diabadikan dalam film Laskar Pelangi menjadikannya tempat sempurna untuk berenang, bermain, atau berburu sunset.",
    footage: [
      "/images/destinasi/TG-tinggi.png",
      "/images/destinasi/tg-tinggi/tg-tinggi1.jpg",
      "/images/destinasi/tg-tinggi/tg-tinggi2.jpg",
      "/images/destinasi/tg-tinggi/tg-tinggi3.jpg",
      "/images/destinasi/tg-tinggi/tg-tinggi4.jpg",
      "/images/destinasi/tg-tinggi/tg-tinggi5.jpg",
    ],
  },
  {
    id: 5,
    slug: "tukong-kik-mai",
    nama: "Tukong Kik Mai",
    lokasi: "Belitung",
    rating: 4.6,
    kategori: "Pulau",
    gambar: "/images/destinasi/KIK-mai.png",
    deskripsi: "Pulau kecil tersembunyi dengan pantai tenang dan pasir putih.",
    detail:
      "Tukong Kik Mai adalah destinasi tersembunyi yang menawarkan ketenangan dengan pantai berpasir putih dan air laut yang jernih. Pulau ini cocok bagi wisatawan yang mencari suasana privat dan damai, jauh dari keramaian, untuk menikmati keindahan alami Belitung secara lebih intim.",
    footage: [
      "/images/destinasi/KIK-mai.png",
      "/images/destinasi/kikmai/kikmai1.jpg",
      "/images/destinasi/kikmai/kikmai2.jpg",
      "/images/destinasi/kikmai/kikmai3.jpg",
      "/images/destinasi/kikmai/kikmai4.jpg",
      "/images/destinasi/kikmai/kikmai5.jpg",
    ],
  },
  {
    id: 6,
    slug: "pulau-kelayang",
    nama: "Pulau Kelayang",
    lokasi: "Belitung",
    rating: 4.8,
    kategori: "Pulau",
    gambar: "/images/destinasi/Pulau-kelayang.png",
    deskripsi: "Pulau indah dengan gua granit alami dan panorama laut.",
    detail:
      "Pulau Kelayang dikenal sebagai gerbang menuju gugusan pulau-pulau kecil di Belitung. Keunikan utamanya terletak pada gua batu granit raksasa yang memikat wisatawan. Dengan air laut yang jernih dan panorama pantai memukau, Pulau Kelayang menawarkan pengalaman petualangan sekaligus ketenangan.",
    footage: [
      "/images/destinasi/Pulau-kelayang.png",
      "/images/destinasi/pulau-kelayang/kelayang1.jpg",
      "/images/destinasi/pulau-kelayang/kelayang2.jpg",
      "/images/destinasi/pulau-kelayang/kelayang3.jpg",
      "/images/destinasi/pulau-kelayang/kelayang4.jpg",
      "/images/destinasi/pulau-kelayang/kelayang5.jpg",
    ],
  },
  {
    id: 7,
    slug: "pulau-batu-garuda",
    nama: "Pulau Batu Garuda",
    lokasi: "Belitung",
    rating: 4.7,
    kategori: "Pulau",
    gambar: "/images/destinasi/Batu-garuda.png",
    deskripsi: "Batu granit besar berbentuk kepala Garuda di tengah laut.",
    detail:
      "Pulau Batu Garuda merupakan ikon alam Belitung berupa formasi granit besar yang menyerupai kepala burung garuda. Terletak di tengah laut biru, pulau ini sering dijadikan spot foto favorit. Keunikan bentuknya menjadikan Batu Garuda sebagai salah satu destinasi wajib dalam tur island hopping Belitung.",
    footage: ["/images/destinasi/Batu-garuda.png", "/images/destinasi/batu-garuda/garuda1.jpg", "/images/destinasi/batu-garuda/garuda2.jpg", "/images/destinasi/batu-garuda/garuda3.jpg"],
  },
  {
    id: 8,
    slug: "sekolah-laskar-pelangi",
    nama: "Sekolah Laskar Pelangi",
    lokasi: "Belitung",
    rating: 4.9,
    kategori: "Wisata Edukasi",
    gambar: "/images/destinasi/Laskar-pelangi.png",
    deskripsi: "Sekolah replika ikonik dari kisah Laskar Pelangi.",
    detail:
      "Sekolah Laskar Pelangi adalah replika bangunan sekolah sederhana yang terkenal dari novel dan film Laskar Pelangi. Tempat ini menjadi simbol semangat pendidikan dan perjuangan anak-anak Belitung dalam meraih mimpi. Wisatawan dapat merasakan atmosfer penuh inspirasi sekaligus bernostalgia dengan kisah yang mendunia ini.",
    footage: [
      "/images/destinasi/Laskar-pelangi.png",
      "/images/destinasi/laskar-pelangi/laskar-pelangi1.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi2.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi3.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi4.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi5.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi6.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi7.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi8.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi9.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi10.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi11.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi12.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi13.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi14.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi15.jpg",
      "/images/destinasi/laskar-pelangi/laskar-pelangi16.jpg",
    ],
  },
  {
    id: 9,
    slug: "vihara-dewi-kwan-im",
    nama: "Vihara Dewi Kwan Im",
    lokasi: "Belitung Timur",
    rating: 4.8,
    kategori: "Wisata Religi",
    gambar: "/images/destinasi/vihara.png",
    deskripsi: "Vihara tertua di Belitung yang menjadi tempat ibadah dan wisata spiritual.",
    detail:
      "Vihara Dewi Kwan Im, juga dikenal sebagai Vihara Buddhayana atau Vihara Dewi Kwan Im Manggar, merupakan salah satu tempat suci tertua dan terbesar di Pulau Belitung. Berdiri di atas perbukitan dengan panorama laut yang memukau, vihara ini menjadi simbol toleransi, kedamaian, dan spiritualitas. Patung Dewi Kwan Im yang menjulang tinggi menjadi daya tarik utama, melambangkan kasih sayang dan kebijaksanaan. Pengunjung dapat bersembahyang, menikmati pemandangan, sekaligus merasakan ketenangan batin di tengah keindahan alam.",
    footage: [
      "/images/destinasi/vihara.png",
      "/images/destinasi/vihara/vihara2.jpg",
      "/images/destinasi/vihara/vihara3.jpg",
      "/images/destinasi/vihara/vihara4.jpg",
      "/images/destinasi/vihara/vihara5.jpg",
      "/images/destinasi/vihara/vihara6.jpg",
      "/images/destinasi/vihara/vihara7.jpg",
      "/images/destinasi/vihara/vihara9.jpg",
      "/images/destinasi/vihara/vihara10.jpg",
      "/images/destinasi/vihara/vihara11.jpg",
      "/images/destinasi/vihara/vihara12.jpg",
      "/images/destinasi/vihara/vihara13.jpg",
    ],
  },
];

// Helper functions
export function getDestinasiBySlug(slug: string): Destinasi | undefined {
  return destinasiData.find((d) => d.slug === slug);
}

export function getAllDestinasi(): Destinasi[] {
  return destinasiData;
}

export function getDestinasiSlugs(): string[] {
  return destinasiData.map((d) => d.slug);
}
