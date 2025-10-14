export interface Paket {
  id: string;
  slug: string;
  nama: string;
  durasi: string;
  lokasi: string;
  harga: number;
  rating: number;
  deskripsiSingkat: string;
  image: string;
  banner: string;
  deskripsiLengkap: string;
  fasilitasInclude: string[];
  fasilitasExclude?: string[];
  detailHarga: {
    tabel: {
      jumlahPeserta: string;
      harga: number;
    }[];
    keterangan: string;
  };
  galeri: string[];
  itinerary: {
    hari: number;
    judul: string;
    deskripsi: string;
    destinasi: string[];
  }[];
  kategori: "Reguler" | "Premium";
}

export const paketList: Paket[] = [
  {
    id: "1",
    slug: "hooping-island-belitung",
    nama: "Hooping Island Belitung",
    kategori: "Premium",
    durasi: "1 Hari",
    lokasi: "Belitung",
    harga: 375000,
    rating: 4.8,
    deskripsiSingkat: "One Day Trip Hopping Island Premium — jelajahi pesona pulau-pulau eksotis di Belitung, snorkeling, kuliner seafood, hingga menikmati sunset indah di Pantai Tanjung Pendam.",
    image: "/images/galery/hooping-island.jpg",
    banner: "/images/galery/hooping-island-banner.jpg",
    deskripsiLengkap:
      "Paket wisata One Day Trip Hopping Island Premium menghadirkan pengalaman berpetualang di lautan biru Belitung dengan mengunjungi ikon-ikon terbaik seperti Pulau Lengkuas, Pulau Batu Garuda, hingga Pulau Pasir yang memukau. Dilengkapi dengan aktivitas snorkeling, kuliner seafood khas Belitung, serta momen santai di Pantai Tanjung Pendam saat senja. Cocok bagi Anda yang ingin merasakan keindahan Belitung dalam satu hari penuh dengan pelayanan terbaik dan kenyamanan maksimal.",
    fasilitasInclude: [
      "Perahu Hopping Island (private boat)",
      "Pelampung & alat snorkeling",
      "Tour Guide lokal berpengalaman",
      "Makan siang seafood khas Belitung",
      "Air mineral selama perjalanan",
      "Dokumentasi (Mirrorless, Iphone & Drone)",
      "Cinematic video highlight perjalanan",
      "Tiket masuk objek wisata",
    ],
    fasilitasExclude: ["Tiket pesawat atau transportasi menuju Belitung", "Pengeluaran pribadi", "Asuransi perjalanan", "Tips untuk guide dan crew"],
    detailHarga: {
      tabel: [
        { jumlahPeserta: "2-3", harga: 1000000 },
        { jumlahPeserta: "4-6", harga: 850000 },
        { jumlahPeserta: "7-9", harga: 730000 },
        { jumlahPeserta: "10-13", harga: 625000 },
        { jumlahPeserta: "20-30", harga: 430000 },
        { jumlahPeserta: "31+", harga: 375000 },
      ],
      keterangan: "Harga per pax sudah termasuk semua fasilitas yang tercantum pada daftar include. Harga dapat berubah sewaktu-waktu tergantung musim dan ketersediaan kapal.",
    },
    galeri: ["/images/galery/pulau-lengkuas.jpg", "/images/galery/pulau-batu-garuda.jpg", "/images/galery/pulau-pasir.jpg", "/images/galery/goa-kelayang.jpg", "/images/galery/pantai-tanjung-pendam.jpg"],
    itinerary: [
      {
        hari: 1,
        judul: 'ONE DAY TRIP HOOPING ISLAND "PREMIUM"',
        deskripsi:
          "Petualangan satu hari penuh menjelajahi keindahan pulau-pulau eksotis di Belitung. Aktivitas meliputi kunjungan ke berbagai destinasi populer, snorkeling, makan siang di Pulau Kelayang, dan menikmati sunset di Pantai Tanjung Pendam.",
        destinasi: [
          "Penjemputan di Hotel: Peserta dijemput di hotel tempat menginap oleh guide dan tim.",
          "Pantai Laskar Pelangi: Menikmati panorama pantai lokasi syuting film Laskar Pelangi dan berfoto dengan latar bebatuan granit khas Belitung.",
          "Dermaga Tanjung Kelayang: Persiapan perjalanan hopping island dan briefing keselamatan.",
          "Hopping Island (5 Pulau): Petualangan dimulai dengan menjelajahi beberapa pulau eksotis di sekitar Belitung.",
          "Pulau Batu Garuda: Spot foto unik dengan batu granit berbentuk kepala garuda.",
          "Pulau Batu Berlayar: Pulau kecil dengan batu granit menjulang seperti layar kapal, cocok untuk berfoto.",
          "Pulau Pasir: Pulau pasir timbul yang hanya muncul saat air laut surut, tempat ideal untuk bermain dan berfoto.",
          "Pulau Lengkuas: Ikon wisata Belitung dengan mercusuar tua peninggalan Belanda dan spot snorkeling terbaik.",
          "Spot Snorkeling: Menikmati keindahan bawah laut dengan ikan warna-warni dan terumbu karang alami.",
          "Pulau Kelayang: Makan siang seafood khas Belitung, eksplorasi Goa Kelayang, dan bersantai di pantai berpasir putih.",
          "Dermaga Tanjung Kelayang: Perjalanan kembali ke daratan dan istirahat sejenak.",
          "Pantai Tanjung Pendam: Menikmati sunset dan bersantai di pantai populer dekat pusat kota Tanjung Pandan.",
          "Mie Khas Belitung: Menutup perjalanan dengan kuliner khas Mie Belitung sebelum kembali ke hotel.",
          "Kembali ke Hotel: Tour selesai.",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "hooping-island-belitung-reguler",
    nama: "Hooping Island Belitung",
    kategori: "Reguler",
    durasi: "1 Hari",
    lokasi: "Belitung",
    harga: 290000,
    rating: 4.6,
    deskripsiSingkat: "One Day Trip Hopping Island Reguler — pengalaman menjelajahi lima pulau eksotis Belitung dengan aktivitas snorkeling, eksplorasi Goa Kelayang, dan makan siang seafood yang lezat.",
    image: "/images/galery/hooping-island-reguler.jpg",
    banner: "/images/galery/hooping-island-banner.jpg",
    deskripsiLengkap:
      "Paket wisata One Day Trip Hopping Island Reguler dirancang bagi wisatawan yang ingin menikmati keindahan pulau-pulau di Belitung dengan harga lebih hemat namun tetap mendapatkan pengalaman terbaik. Anda akan berkeliling ke lima pulau utama seperti Pulau Lengkuas, Pulau Batu Berlayar, dan Pulau Pasir, disertai snorkeling serta makan siang seafood di Pulau Kelayang. Paket ini cocok untuk rombongan kecil maupun besar yang menginginkan petualangan santai namun tetap seru.",
    fasilitasInclude: [
      "Perahu Hopping Island (sharing boat)",
      "Pelampung & alat snorkeling",
      "Tour Guide lokal",
      "Makan siang seafood khas Belitung",
      "Air mineral selama perjalanan",
      "Cinematic video highlight perjalanan",
      "Dokumentasi (mirrorless & iphone)",
    ],
    fasilitasExclude: ["Dokumentasi (Drone)", "Transportasi menuju Dermaga Tanjung Kelayang", "Tiket pesawat atau akomodasi hotel", "Pengeluaran pribadi", "Asuransi perjalanan", "Tips untuk guide dan crew"],
    detailHarga: {
      tabel: [
        { jumlahPeserta: "2-3", harga: 750000 },
        { jumlahPeserta: "4-6 ", harga: 600000 },
        { jumlahPeserta: "7-9", harga: 530000 },
        { jumlahPeserta: "10-13", harga: 425000 },
        { jumlahPeserta: "20-30", harga: 330000 },
        { jumlahPeserta: "31+", harga: 290000 },
      ],
      keterangan: "Harga per pax sudah termasuk fasilitas dalam daftar include. Perjalanan menggunakan kapal sharing, dan jadwal dapat berubah sesuai kondisi cuaca.",
    },
    galeri: ["/images/galery/pulau-lengkuas.jpg", "/images/galery/pulau-batu-berlayar.jpg", "/images/galery/pulau-batu-garuda.jpg", "/images/galery/pulau-pasir.jpg", "/images/galery/goa-kelayang.jpg"],
    itinerary: [
      {
        hari: 1,
        judul: 'ONE DAY TRIP HOOPING ISLAND "REGULER"',
        deskripsi: "Petualangan satu hari penuh menjelajahi keindahan laut dan pulau-pulau eksotis Belitung dengan rute yang menakjubkan, aktivitas snorkeling, dan santap siang di Pulau Kelayang.",
        destinasi: [
          "Dermaga Tanjung Kelayang: Berkumpul dan persiapan perjalanan hopping island, briefing singkat mengenai rute dan keselamatan.",
          "Hopping Island (5 Pulau): Petualangan dimulai dengan menjelajahi lima pulau eksotis di sekitar Belitung.",
          "Pulau Batu Garuda: Spot foto unik dengan batu granit berbentuk kepala garuda.",
          "Pulau Batu Berlayar: Pulau kecil dengan formasi batu granit menjulang seperti layar kapal, cocok untuk berfoto.",
          "Pulau Pasir: Pulau pasir timbul yang hanya muncul saat air laut surut, cocok untuk bersantai dan berfoto.",
          "Pulau Lengkuas: Ikon wisata Belitung dengan mercusuar tua peninggalan Belanda dan spot snorkeling favorit.",
          "Spot Snorkeling: Menikmati keindahan bawah laut Belitung dengan ikan berwarna-warni dan terumbu karang alami.",
          "Pulau Kelayang: Menikmati makan siang seafood khas Belitung, eksplorasi Goa Kelayang, dan bersantai di pantai berpasir putih.",
          "Dermaga Tanjung Kelayang: Kembali ke daratan, dan tour selesai.",
        ],
      },
    ],
  },

  // Tambahkan paket lain sesuai format di atas
];
