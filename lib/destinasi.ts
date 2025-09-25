export interface Destinasi {
  id: number;
  nama: string;
  lokasi: string;
  rating: number;
  kategori: string;
  gambar: string;
  deskripsi: string;
  detail: string;
  footage: string[];
}

export const allDestinasi: Destinasi[] = [
  {
    id: 1,
    nama: "Pulau Lengkuas",
    lokasi: "Belitung",
    rating: 4.8,
    kategori: "Pulau",
    gambar: "/images/destinasi/Lengkuas.png",
    deskripsi: "Pulau kecil dengan mercusuar ikonik abad ke-19 dan laut sebening kaca.",
    detail:
      "Pulau Lengkuas merupakan salah satu ikon wisata Belitung dengan mercusuar peninggalan Belanda yang menjulang tinggi sejak abad ke-19. Dikelilingi pasir putih dan air laut sebening kaca, pulau ini menjadi spot favorit untuk snorkeling, diving, maupun sekadar menikmati panorama dari atas mercusuar.",
    footage: ["/images/destinasi1.png", "/images/destinasi2.png", "/images/destinasi3.png"],
  },
  {
    id: 2,
    nama: "Pulau Burung",
    lokasi: "Belitung",
    rating: 4.7,
    kategori: "Pulau",
    gambar: "/images/destinasi/Batu-burung.png",
    deskripsi: "Pulau unik dengan batu granit raksasa berbentuk kepala burung.",
    detail:
      "Pulau Burung terkenal dengan formasi granit raksasa yang menyerupai kepala burung garuda, menjadikannya landmark alam yang menakjubkan. Dengan pantai berpasir putih dan air laut jernih, tempat ini ideal untuk bersantai, berfoto, dan merasakan keindahan khas Belitung.",
    footage: ["/images/destinasi2.png", "/images/destinasi3.png", "/images/destinasi4.png"],
  },
  {
    id: 3,
    nama: "Pulau Batu Belayar",
    lokasi: "Belitung",
    rating: 4.6,
    kategori: "Pulau",
    gambar: "/images/destinasi/Batu-berlayar.png",
    deskripsi: "Pulau mungil dengan batu granit besar menyerupai layar kapal.",
    detail:
      "Pulau Batu Belayar adalah pulau kecil tanpa penghuni yang dikenal karena batu granit raksasanya menyerupai layar kapal. Pulau ini hanya muncul saat air laut surut, memberikan pengalaman unik bagi pengunjung untuk menikmati panorama laut biru, pasir putih, dan formasi batuan yang menawan.",
    footage: ["/images/destinasi3.png", "/images/destinasi4.png", "/images/destinasi5.png"],
  },
  {
    id: 4,
    nama: "Pantai Tanjung Tinggi",
    lokasi: "Belitung",
    rating: 4.9,
    kategori: "Pantai",
    gambar: "/images/destinasi/TG-tinggi.png",
    deskripsi: "Pantai ikonik dengan granit raksasa dan pasir putih luas.",
    detail:
      "Pantai Tanjung Tinggi menjadi salah satu destinasi paling populer di Belitung, dikenal dengan batu granit raksasa yang tersebar di sepanjang garis pantainya. Pasir putih, air laut biru jernih, serta suasana yang pernah diabadikan dalam film Laskar Pelangi menjadikannya tempat sempurna untuk berenang, bermain, atau berburu sunset.",
    footage: ["/images/destinasi4.png", "/images/destinasi5.png", "/images/destinasi6.png"],
  },
  {
    id: 5,
    nama: "Tukong Kik Mai",
    lokasi: "Belitung",
    rating: 4.6,
    kategori: "Pulau",
    gambar: "/images/destinasi/KIK-mai.png",
    deskripsi: "Pulau kecil tersembunyi dengan pantai tenang dan pasir putih.",
    detail:
      "Tukong Kik Mai adalah destinasi tersembunyi yang menawarkan ketenangan dengan pantai berpasir putih dan air laut yang jernih. Pulau ini cocok bagi wisatawan yang mencari suasana privat dan damai, jauh dari keramaian, untuk menikmati keindahan alami Belitung secara lebih intim.",
    footage: ["/images/destinasi5.png", "/images/destinasi6.png", "/images/destinasi7.png"],
  },
  {
    id: 6,
    nama: "Pulau Kelayang",
    lokasi: "Belitung",
    rating: 4.8,
    kategori: "Pulau",
    gambar: "/images/destinasi/Pulau-kelayang.png",
    deskripsi: "Pulau indah dengan gua granit alami dan panorama laut.",
    detail:
      "Pulau Kelayang dikenal sebagai gerbang menuju gugusan pulau-pulau kecil di Belitung. Keunikan utamanya terletak pada gua batu granit raksasa yang memikat wisatawan. Dengan air laut yang jernih dan panorama pantai memukau, Pulau Kelayang menawarkan pengalaman petualangan sekaligus ketenangan.",
    footage: ["/images/destinasi6.png", "/images/destinasi7.png", "/images/destinasi8.png"],
  },
  {
    id: 7,
    nama: "Pulau Batu Garuda",
    lokasi: "Belitung",
    rating: 4.7,
    kategori: "Pulau",
    gambar: "/images/destinasi/Batu-garuda.png",
    deskripsi: "Batu granit besar berbentuk kepala Garuda di tengah laut.",
    detail:
      "Pulau Batu Garuda merupakan ikon alam Belitung berupa formasi granit besar yang menyerupai kepala burung garuda. Terletak di tengah laut biru, pulau ini sering dijadikan spot foto favorit. Keunikan bentuknya menjadikan Batu Garuda sebagai salah satu destinasi wajib dalam tur island hopping Belitung.",
    footage: ["/images/destinasi7.png", "/images/destinasi8.png", "/images/destinasi9.png"],
  },
  {
    id: 8,
    nama: "Sekolah Laskar Pelangi",
    lokasi: "Belitung",
    rating: 4.9,
    kategori: "Wisata Edukasi",
    gambar: "/images/destinasi/Laskar-pelangi.png",
    deskripsi: "Sekolah replika ikonik dari kisah Laskar Pelangi.",
    detail:
      "Sekolah Laskar Pelangi adalah replika bangunan sekolah sederhana yang terkenal dari novel dan film Laskar Pelangi. Tempat ini menjadi simbol semangat pendidikan dan perjuangan anak-anak Belitung dalam meraih mimpi. Wisatawan dapat merasakan atmosfer penuh inspirasi sekaligus bernostalgia dengan kisah yang mendunia ini.",
    footage: ["/images/destinasi8.png", "/images/destinasi9.png", "/images/destinasi10.png"],
  },
  // ... lanjutkan semua data sampai id: 13 persis seperti semula
];
