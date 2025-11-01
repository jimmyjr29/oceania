// export interface Paket {
//   id: string;
//   slug: string;
//   nama: string;
//   durasi: string;
//   lokasi: string;
//   harga: number;
//   rating: number;
//   deskripsiSingkat: string;
//   image: string;
//   banner: string;
//   deskripsiLengkap: string;
//   fasilitasInclude: string[];
//   fasilitasExclude?: string[];
//   detailHarga: {
//     tabel: {
//       jumlahPeserta: string;
//       harga: number;
//     }[];
//     keterangan: string;
//   };
//   galeri: string[];
//   itinerary: {
//     hari: number;
//     judul: string;
//     deskripsi: string;
//     destinasi: string[];
//   }[];
//   kategori: "Reguler" | "Premium";
// }

// Interface untuk tabel harga berdasarkan peserta (layout sederhana)
export interface TabelPeserta {
  jumlahPeserta: string;
  harga: number;
}

// Interface untuk tabel harga berdasarkan hotel (single row)
export interface TabelHotel {
  hotel: string;
  peserta: string;
  harga: number;
}

// Interface untuk tabel hotel dengan multiple peserta options
export interface TabelHotelMultiple {
  hotel: string;
  opsi: {
    peserta: string;
    harga: number;
  }[];
}

// Interface untuk tabel harga lengkap (peserta + harga paket + harga per pax)
export interface TabelPaketLengkap {
  jumlahPeserta: string;
  hargaPaket: number;
  hargaPerPax: number;
}

// Interface DetailHarga dengan optional layoutType
export interface DetailHarga {
  layoutType?: "tabel-peserta" | "tabel-hotel" | "tabel-hotel-multiple" | "tabel-paket-lengkap";
  tabel?: TabelPeserta[]; // untuk layout peserta sederhana
  tabelHotel?: TabelHotel[]; // untuk layout hotel (single option per hotel)
  tabelHotelMultiple?: TabelHotelMultiple[]; // untuk layout hotel dengan multiple peserta
  tabelPaketLengkap?: TabelPaketLengkap[]; // untuk layout paket lengkap
  keterangan: string;
}

// Interface Paket (lengkap)
export interface Paket {
  id: string;
  slug: string;
  nama: string;
  durasi: string;
  lokasi: string;
  harga: number;
  tipeHarga: "perPax" | "perPaket";
  rating: number;
  deskripsiSingkat: string;
  image: string;
  banner: string;
  deskripsiLengkap: string;
  fasilitasInclude: string[];
  fasilitasExclude?: string[];
  detailHarga: DetailHarga; // gunakan interface DetailHarga yang baru
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
    harga: 400000,
    tipeHarga: "perPax",
    rating: 4.8,
    deskripsiSingkat: "One Day Trip Hopping Island Premium — jelajahi pesona pulau-pulau eksotis di Belitung, snorkeling, kuliner seafood, hingga menikmati sunset indah di Pantai Tanjung Pendam.",
    image: "/images/paket/thumbnail/hooping-island.png",
    banner: "/images/paket/thumbnail/hooping-island.png",
    deskripsiLengkap:
      "Paket wisata <b>One Day Trip Hopping Island Premium</b> menghadirkan pengalaman berpetualang di lautan biru Belitung dengan mengunjungi ikon-ikon terbaik seperti <b>Pulau Lengkuas</b>, <b>Pulau Batu Garuda</b>, <b>Batu Burung</b>, <b>Pulau Kelayang</b>, hingga <b>Pulau Pasir</b> yang memukau. Dilengkapi dengan aktivitas <b>snorkeling</b>, kuliner <b>seafood khas Belitung</b>, serta momen santai di <b>Pantai Tanjung Pendam</b> saat senja. Cocok bagi Anda yang ingin merasakan keindahan Belitung dalam satu hari penuh dengan pelayanan terbaik dan kenyamanan maksimal.",

    fasilitasInclude: [
      "Perahu Hopping Island (<b>private boat</b>)",
      "Pelampung & alat snorkeling",
      "Tour Guide lokal berpengalaman",
      "Lunch seafood khas Belitung (<b>Pulau Kelayang</b>)",
      "Air mineral selama perjalanan",
      "<b>Snack Box</b> untuk perjalanan",
      "Tiket masuk objek wisata",
      "Dokumentasi Premium (<b>Go-Pro, Mirrorless, Iphone & Drone</b>)",
      "<b>Cinematic video</b> highlight perjalanan",
    ],
    fasilitasExclude: ["Tiket pesawat atau transportasi menuju Belitung", "Pengeluaran pribadi", "Asuransi perjalanan", "Tips untuk guide dan crew"],
    detailHarga: {
      layoutType: "tabel-peserta",
      tabel: [
        { jumlahPeserta: "2", harga: 1250000 },
        { jumlahPeserta: "3", harga: 1000000 },
        { jumlahPeserta: "4-6", harga: 850000 },
        { jumlahPeserta: "7-10", harga: 750000 },
        { jumlahPeserta: "11-13", harga: 650000 },
        { jumlahPeserta: "14-18", harga: 600000 },
        { jumlahPeserta: "19-23", harga: 550000 },
        { jumlahPeserta: "24-28", harga: 500000 },
        { jumlahPeserta: "29-33", harga: 400000 },
      ],
      keterangan: "Harga per pax sudah termasuk semua fasilitas yang tercantum pada daftar include. Harga dapat berubah sewaktu-waktu tergantung musim dan ketersediaan kapal.",
    },
    galeri: ["/images/paket/thumbnail/hooping-island.png", "/images/galery/pulau-lengkuas.jpg"],
    itinerary: [
      {
        hari: 1,
        judul: 'ONE DAY TRIP HOOPING ISLAND "PREMIUM"',
        deskripsi:
          "Petualangan satu hari penuh menjelajahi keindahan pulau-pulau eksotis di Belitung. Aktivitas meliputi kunjungan ke berbagai destinasi populer, snorkeling, makan siang di Pulau Kelayang, dan menikmati sunset di Pantai Tanjung Pendam.",
        destinasi: [
          "<b>Penjemputan di Hotel:</b> Peserta dijemput di hotel tempat menginap oleh guide dan tim.",
          "<b>Pantai Laskar Pelangi:</b> Menikmati panorama pantai lokasi syuting film Laskar Pelangi dan berfoto dengan latar bebatuan granit khas Belitung.",
          "<b>Dermaga Tanjung Kelayang:</b> Persiapan perjalanan hopping island dan briefing keselamatan.",
          "<b>Hopping Island (5 Pulau):</b> Petualangan dimulai dengan menjelajahi beberapa pulau eksotis di sekitar Belitung.",
          "<b>Pulau Batu Garuda:</b> Spot foto unik dengan batu granit berbentuk kepala garuda.",
          "<b>Pulau Batu Berlayar:</b> Pulau kecil dengan batu granit menjulang seperti layar kapal, cocok untuk berfoto.",
          "<b>Pulau Pasir:</b> Pulau pasir timbul yang hanya muncul saat air laut surut, tempat ideal untuk bermain dan berfoto.",
          "<b>Pulau Lengkuas:</b> Ikon wisata Belitung dengan mercusuar tua peninggalan Belanda dan spot snorkeling terbaik.",
          "<b>Spot Snorkeling:</b> Menikmati keindahan bawah laut dengan ikan warna-warni dan terumbu karang alami.",
          "<b>Pulau Kelayang:</b> Makan siang seafood khas Belitung, eksplorasi Goa Kelayang, dan bersantai di pantai berpasir putih.",
          "<b>Dermaga Tanjung Kelayang:</b> Perjalanan kembali ke daratan dan istirahat sejenak.",
          "<b>Pantai Tanjung Pendam:</b> Menikmati sunset dan bersantai di pantai populer dekat pusat kota Tanjung Pandan.",
          "<b>Mie Khas Belitung:</b> Menutup perjalanan dengan kuliner khas Mie Belitung sebelum kembali ke hotel.",
          "<b>Kembali ke Hotel:</b> Tour selesai.",
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
    harga: 325000,
    tipeHarga: "perPax",
    rating: 4.6,
    deskripsiSingkat: "One Day Trip Hopping Island Reguler — pengalaman menjelajahi lima pulau eksotis Belitung dengan aktivitas snorkeling, eksplorasi Goa Kelayang, dan makan siang seafood yang lezat.",
    image: "/images/paket/thumbnail/hooping-island.png",
    banner: "/images/paket/thumbnail/hooping-island.png",
    deskripsiLengkap:
      "Paket wisata One Day Trip Hopping Island Reguler dirancang bagi wisatawan yang ingin menikmati keindahan pulau-pulau di Belitung dengan harga lebih hemat namun tetap mendapatkan pengalaman terbaik. Anda akan berkeliling ke lima pulau utama seperti <b>Pulau Lengkuas</b>, <b>Pulau Batu Garuda</b>, <b>Batu Burung</b>, <b>Pulau Kelayang</b>, hingga <b>Pulau Pasir</b>, disertai snorkeling serta makan siang seafood di Pulau Kelayang. Paket ini cocok untuk rombongan kecil maupun besar yang menginginkan petualangan santai namun tetap seru.",
    fasilitasInclude: [
      "Perahu Hopping Island (<b>sharing boat</b>)",
      "Pelampung & alat snorkeling",
      "Tour Guide lokal",
      "Lunch seafood khas Belitung (<b>Pulau Kelayang</b>)",
      "Air mineral selama perjalanan",
      "<b>Cinematic video</b> highlight perjalanan",
      "Dokumentasi (<b>Go-Pro & iphone</b>)",
    ],
    fasilitasExclude: ["Dokumentasi (Drone)", "Transportasi menuju Dermaga Tanjung Kelayang", "Tiket pesawat atau akomodasi hotel", "Pengeluaran pribadi", "Asuransi perjalanan", "Tips untuk guide dan crew"],
    detailHarga: {
      layoutType: "tabel-peserta",
      tabel: [
        { jumlahPeserta: "2", harga: 750000 },
        { jumlahPeserta: "3", harga: 650000 },
        { jumlahPeserta: "4-6", harga: 500000 },
        { jumlahPeserta: "7-10", harga: 425000 },
        { jumlahPeserta: "11-13", harga: 400000 },
        { jumlahPeserta: "14-18", harga: 370000 },
        { jumlahPeserta: "19-23", harga: 350000 },
        { jumlahPeserta: "24-30", harga: 325000 },
      ],
      keterangan: "Harga per pax sudah termasuk fasilitas dalam daftar include. Perjalanan menggunakan kapal sharing, dan jadwal dapat berubah sesuai kondisi cuaca.",
    },
    galeri: ["/images/paket/thumbnail/hooping-island.png", "/images/galery/pulau-lengkuas.jpg"],
    itinerary: [
      {
        hari: 1,
        judul: 'ONE DAY TRIP HOOPING ISLAND "REGULER"',
        deskripsi: "Petualangan satu hari penuh menjelajahi keindahan laut dan pulau-pulau eksotis Belitung dengan rute yang menakjubkan, aktivitas snorkeling, dan santap siang di Pulau Kelayang.",
        destinasi: [
          "<b>Dermaga Tanjung Kelayang:</b> Berkumpul dan persiapan perjalanan hopping island, briefing singkat mengenai rute dan keselamatan.",
          "<b>Hopping Island (5 Pulau):</b> Petualangan dimulai dengan menjelajahi lima pulau eksotis di sekitar Belitung.",
          "<b>Pulau Batu Garuda:</b> Spot foto unik dengan batu granit berbentuk kepala garuda.",
          "<b>Pulau Batu Berlayar:</b> Pulau kecil dengan formasi batu granit menjulang seperti layar kapal, cocok untuk berfoto.",
          "<b>Pulau Pasir:</b> Pulau pasir timbul yang hanya muncul saat air laut surut, cocok untuk bersantai dan berfoto.",
          "<b>Pulau Lengkuas:</b> Ikon wisata Belitung dengan mercusuar tua peninggalan Belanda dan spot snorkeling favorit.",
          "<b>Spot Snorkeling:</b> Menikmati keindahan bawah laut Belitung dengan ikan berwarna-warni dan terumbu karang alami.",
          "<b>Pulau Kelayang:</b> Menikmati makan siang seafood khas Belitung, eksplorasi Goa Kelayang, dan bersantai di pantai berpasir putih.",
          "<b>Dermaga Tanjung Kelayang:</b> Kembali ke daratan, dan tour selesai.",
        ],
      },
    ],
  },

  {
    id: "3",
    slug: "Trip-2d1n-belitung-island",
    nama: "Trip 2D1N Belitung Island",
    kategori: "Premium",
    durasi: "2 Hari 1 Malam",
    lokasi: "Belitung",
    harga: 600000,
    tipeHarga: "perPax",
    rating: 4.9,
    deskripsiSingkat: "Paket wisata 2D1N Premium — nikmati keindahan Belitung selama dua hari penuh dengan petualangan hopping island, snorkeling, kuliner seafood, dan city tour ke destinasi terbaik di pulau.",
    image: "/images/paket/thumbnail/paket-2D1N.png",
    banner: "/images/paket/thumbnail/paket-2D1N.png",
    deskripsiLengkap:
      "Paket <b>2D1N Premium Belitung</b> menghadirkan pengalaman terbaik menjelajahi pulau-pulau eksotis dan pesona kota Tanjung Pandan dalam dua hari penuh. Anda akan menikmati aktivitas <b>hopping island</b> ke destinasi ikonik seperti <b>Pulau Lengkuas</b>, <b>Batu Garuda</b>, dan <b>Pulau Pasir</b>, lengkap dengan snorkeling di laut jernih dan makan siang seafood di <b>Pulau Kelayang</b>. Di hari kedua, Anda akan diajak <b>city tour</b> mengunjungi tempat hits seperti <b>Pantai Tanjung Pendam</b>, <b>Danau Kaolin</b>, dan <b>Kongdjie Coffee</b>. Dilengkapi fasilitas terbaik, dokumentasi premium, dan pelayanan profesional dari tim Oceania Travel.",

    fasilitasInclude: [
      "Akomodasi hotel 1 malam (pilihan setara bintang 3)",
      "Perahu Hopping Island (<b>private boat</b>)",
      "Pelampung & alat snorkeling",
      "Tour Guide lokal berpengalaman",
      "Lunch seafood khas Belitung (<b>Pulau Kelayang</b>)",
      "1x Makan malam di restoran lokal",
      "Air mineral selama perjalanan",
      "<b>Snack Box</b> untuk perjalanan",
      "Tiket masuk objek wisata",
      "Dokumentasi Premium (<b>Go-Pro, Mirrorless, iPhone & Drone</b>)",
      "<b>Cinematic video</b> highlight perjalanan",
      "Transportasi Darat selama tour (AC)",
      "Penjemputan & pengantaran ke Bandara H.A.S. Hanandjoeddin",
    ],

    fasilitasExclude: ["Tiket pesawat menuju Belitung", "Pengeluaran pribadi (belanja, laundry, dll)", "Asuransi perjalanan", "Tips untuk guide dan crew"],

    detailHarga: {
      layoutType: "tabel-peserta",
      tabel: [
        { jumlahPeserta: "2", harga: 1400000 },
        { jumlahPeserta: "3", harga: 1200000 },
        { jumlahPeserta: "4-6", harga: 1000000 },
        { jumlahPeserta: "7-10", harga: 900000 },
        { jumlahPeserta: "11-13", harga: 850000 },
        { jumlahPeserta: "14-18", harga: 800000 },
        { jumlahPeserta: "19-23", harga: 750000 },
        { jumlahPeserta: "24-28", harga: 650000 },
        { jumlahPeserta: "29-33", harga: 600000 },
      ],
      keterangan: "Harga per pax sudah termasuk semua fasilitas pada daftar include. Harga dapat berubah sewaktu-waktu tergantung musim, ketersediaan hotel, dan kondisi cuaca.",
    },

    galeri: ["/images/paket/thumbnail/paket-2D1N.png", "/images/galery/pulau-lengkuas.jpg"],

    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama — Hopping Island Tour",
        deskripsi: "Menikmati petualangan laut biru Belitung dengan mengunjungi pulau-pulau eksotis, snorkeling, dan kuliner seafood khas lokal.",
        destinasi: [
          "Team kami akan menjemput Anda di <b>Bandara H.A.S. Hanandjoeddin Tanjung Pandan</b>.",
          "Menuju pusat kota untuk menikmati <b>Mie Khas Belitung</b> sebagai santapan makan siang.",
          "Singgah di <b>Bundaran Satam</b> untuk berfoto di ikon kota Tanjung Pandan.",
          "Melanjutkan perjalanan menuju <b>Pantai Tanjung Kelayang</b> sebagai titik keberangkatan Hopping Island.",
          "Dari dermaga, Anda akan menyeberang menggunakan perahu nelayan tradisional berwarna cerah khas Belitung menuju gugusan pulau-pulau granit yang indah.",
          "Sepanjang perjalanan, Anda akan disuguhkan panorama laut biru jernih dan formasi batu granit raksasa yang memukau.",
          "<b>Destinasi Island Hopping:</b>",
          "<b>Pulau Batu Garuda</b> – Spot pertama untuk berfoto dengan formasi batu granit alami berbentuk kepala burung garuda, ikon wisata bahari Belitung.",
          "<b>Pulau Batu Berlayar</b> – Dikenal dengan dua batu besar yang menjulang seperti layar kapal. Nikmati keindahan pasir putih halus dan air laut sejernih kaca di sekitarnya.",
          "<b>Pulau Pasir</b> – Pulau kecil yang hanya muncul saat air laut surut. Anda bisa berjalan di tengah laut sambil memberi makan bintang laut yang banyak ditemukan di sini.",
          "<b>Pulau Lengkuas</b> – Pulau paling terkenal di Belitung dengan mercusuar tua peninggalan Belanda. Anda dapat naik ke atas mercusuar untuk menikmati panorama 360° laut Belitung, kemudian bersnorkeling di sekitar pulau untuk melihat terumbu karang dan ikan tropis yang berwarna-warni.",
          "Setelah beraktivitas, Anda akan makan siang di <b>Pulau Kelayang</b>, dilanjutkan menjelajahi <b>Goa Kelayang</b> yang menyimpan keindahan batu granit besar berbentuk unik di dalamnya.",
          "Kembali ke <b>Pantai Tanjung Kelayang</b>, kemudian menuju <b>Pantai Tanjung Tinggi</b> (lokasi film Laskar Pelangi).",
          "Makan malam di <b>Restoran Nelayan Seafood</b>.",
          "Kembali ke hotel untuk istirahat.",
        ],
      },
      {
        hari: 2,
        judul: "Hari Kedua — City Tour & Transfer Out",
        deskripsi: "Menjelajahi keindahan kota Tanjung Pandan, menikmati kopi lokal, dan berbelanja oleh-oleh sebelum kembali ke bandara.",
        destinasi: [
          "Sarapan pagi di hotel dan persiapan check-out.",
          "Team kami menjemput di hotel",
          "Mulai perjalanan ke pusat kota Tanjungpandan untuk menikmati suasana pagi khas Belitung di <b>Kongdjie Coffee Siburik</b>, kedai kopi legendaris yang menyajikan kopi robusta lokal dengan cita rasa khas Belitung.",
          "Mengunjungi <b>Pantai Tanjung Pendam</b>, salah satu pantai di pusat kota Tanjung Pandan yang terkenal dengan panorama matahari terbenam dan deretan kafe pinggir pantai.",
          "Berbelanja di <b>Pusat Oleh-oleh Khas Belitung</b>, tempat Anda dapat membeli cendera mata seperti lada putih, sirup jeruk kunci, kaos khas Belitung, hingga aneka camilan lokal.",
          "Explore <b>Rumah Adat Belitung</b>, bangunan tradisional yang menampilkan arsitektur khas Melayu dengan interior berisi koleksi budaya dan sejarah masyarakat Belitung.",
          "Melanjutkan perjalanan menuju <b>Danau Kaolin</b>, danau cantik berwarna biru toska yang terbentuk dari bekas tambang kaolin — spot foto yang sangat populer di kalangan wisatawan.",
          "Setelah menikmati seluruh rangkaian perjalanan, team kami akan mengantarkan Anda kembali menuju <b>Bandara H.A.S. Hanandjoeddin Tanjung Pandan</b>.",
          "<b>Trip selesai</b> – terima kasih telah berwisata bersama <b>Oceania Travel</b>!",
        ],
      },
    ],
  },

  {
    id: "4",
    slug: "trip-3d2n-belitung-Island",
    nama: "Trip 3D2N Belitung Island",
    kategori: "Premium",
    durasi: "3 Hari 2 Malam",
    lokasi: "Belitung",
    harga: 860000,
    tipeHarga: "perPax",
    rating: 4.9,
    deskripsiSingkat:
      "Paket wisata 3D2N Premium — nikmati pengalaman eksplorasi Belitung lebih lengkap! Dari kisah inspiratif Laskar Pelangi di Belitung Timur, petualangan island hopping di laut biru, hingga city tour santai di pusat kota Tanjung Pandan.",
    image: "/images/paket/thumbnail/paket-3D2N.png",
    banner: "/images/paket/thumbnail/paket-3D2N.png",
    deskripsiLengkap:
      "Paket <b>3D2N Belitung Premium</b> menghadirkan perjalanan paling lengkap menjelajahi keindahan Belitung. Di hari pertama Anda akan menyusuri jejak <b>Laskar Pelangi</b> di Belitung Timur. Hari kedua diisi dengan petualangan laut seru <b>Hopping Island</b> ke pulau-pulau eksotis seperti <b>Pulau Lengkuas</b> dan <b>Pulau Batu Garuda</b>. Di hari terakhir, Anda akan menikmati <b>City Tour</b> santai ke tempat hits seperti <b>Kongdjie Coffee</b>, <b>Danau Kaolin</b>, dan <b>Rumah Adat Belitung</b>. Dilengkapi fasilitas premium, dokumentasi profesional, dan pelayanan terbaik dari tim Oceania Travel.",

    fasilitasInclude: [
      "Akomodasi hotel 2 malam (pilihan setara bintang 3)",
      "Perahu Hopping Island (<b>private boat</b>)",
      "Pelampung & alat snorkeling",
      "Tour Guide lokal berpengalaman",
      "Lunch seafood khas Belitung (<b>Pulau Kelayang</b>)",
      "Makan malam di restoran lokal (2x)",
      "Air mineral selama perjalanan",
      "<b>Snack Box</b> untuk perjalanan",
      "Tiket masuk objek wisata",
      "Dokumentasi Premium (<b>Go-Pro, Mirrorless, iPhone & Drone</b>)",
      "<b>Cinematic video</b> highlight perjalanan",
      "Transportasi Darat selama tour (AC)",
      "Penjemputan & pengantaran ke Bandara H.A.S. Hanandjoeddin",
    ],

    fasilitasExclude: ["Tiket Museum Kata", "Tiket pesawat menuju Belitung", "Pengeluaran pribadi (belanja, laundry, dll)", "Asuransi perjalanan", "Tips untuk guide dan crew"],

    detailHarga: {
      layoutType: "tabel-peserta",
      tabel: [
        { jumlahPeserta: "2", harga: 1750000 },
        { jumlahPeserta: "3", harga: 1500000 },
        { jumlahPeserta: "4-6", harga: 1300000 },
        { jumlahPeserta: "7-10", harga: 1200000 },
        { jumlahPeserta: "11-13", harga: 1150000 },
        { jumlahPeserta: "14-18", harga: 1100000 },
        { jumlahPeserta: "19-23", harga: 1000000 },
        { jumlahPeserta: "24-28", harga: 900000 },
        { jumlahPeserta: "29-33", harga: 860000 },
      ],
      keterangan: "Harga per pax sudah termasuk semua fasilitas pada daftar include. Harga dapat berubah sewaktu-waktu tergantung musim, ketersediaan hotel, dan kondisi cuaca.",
    },

    galeri: ["/images/paket/thumbnail/paket-3D2N.png", "/images/galery/sd-laskar-pelangi.jpg"],

    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama — Tour Laskar Pelangi",
        deskripsi: "Menelusuri jejak inspiratif Laskar Pelangi di Belitung Timur, mengunjungi sekolah ikonik, museum sastra, dan pantai cantik Burung Mandi.",
        destinasi: [
          "Team kami akan menjemput Anda di <b>Bandara H.A.S. Hanandjoeddin Tanjung Pandan</b>.",
          "Menikmati santapan khas Belitung: <b>Mie Belitung Atep</b> sebagai menu pembuka perjalanan Anda.",
          "Berhenti sejenak di <b>Bundaran Satam</b>, ikon kota Tanjung Pandan, untuk berfoto di landmark batu satam legendaris.",
          "Melanjutkan perjalanan ke timur Pulau Belitung menuju kawasan <b>Gantung</b> untuk mengunjungi:",
          "<b>SD Laskar Pelangi</b> – sekolah replika tempat pengambilan gambar film inspiratif Laskar Pelangi.",
          "<b>Rumah Keong</b> – spot foto ikonik di tepi danau yang menampilkan arsitektur unik berbentuk cangkang keong.",
          "<b>Museum Kata Andrea Hirata</b> – museum sastra pertama di Indonesia yang menampilkan kisah dan semangat dari film Laskar Pelangi.",
          "Makan siang di <b>Resto Vega</b>, kota Manggar, sambil menikmati suasana santai khas Belitung Timur.",
          "Mengunjungi <b>Vihara Dewi Kwan Im</b>, salah satu vihara tertua di Belitung dengan arsitektur megah yang menghadap ke laut.",
          "Berkunjung ke <b>Pantai Burung Mandi</b>, pantai indah dengan pasir putih dan ombak yang tenang, cocok untuk menikmati sore hari.",
          "Perjalanan kembali ke Tanjung Pandan, makan malam di <b>Raja Seafood Restaurant</b>, lalu check-in hotel untuk beristirahat.",
        ],
      },
      {
        hari: 2,
        judul: "Hari Kedua — Hopping Island Adventure",
        deskripsi: "Petualangan laut biru Belitung! Berlayar ke pulau-pulau eksotis, snorkeling di Pulau Lengkuas, dan menikmati kuliner seafood segar.",
        destinasi: [
          "Sarapan pagi di hotel, kemudian im menjemput untuk memulai petualangan laut Belitung.",
          "Menuju ke <b>Pantai Tanjung Tinggi</b>, lokasi film Laskar Pelangi, dengan panorama batu granit raksasa dan air laut sebening kristal.",
          "Menuju <b>Pantai Tanjung Kelayang</b> sebagai titik keberangkatan island hopping.",
          "<b>Destinasi Island Hopping:</b>",
          "<b>Pulau Batu Garuda</b> – Spot ikonik untuk berfoto dengan formasi batu alami menyerupai kepala burung garuda.",
          "<b>Pulau Batu Berlayar</b> – Pulau mungil dengan dua batu granit besar menjulang seperti layar kapal.",
          "<b>Pulau Pasir</b> – Muncul saat air surut, tempat Anda bisa berjalan di tengah laut dan melihat bintang laut.",
          "<b>Pulau Lengkuas</b> – Pulau paling terkenal di Belitung, dengan mercusuar peninggalan Belanda dan area snorkeling menakjubkan.",
          "Aktivitas snorkeling menikmati keindahan bawah laut Pulau Lengkuas.",
          "Makan siang di <b>Pulau Kelayang</b>, kemudian jelajahi <b>Goa Kelayang</b> yang menampilkan formasi batu granit alami di tepi pantai.",
          "Kembali ke <b>Pantai Tanjung Kelayang</b>, lanjut menikmati sore di <b>Pantai Tanjung Pendam</b>, spot sunset populer di kota Tanjung Pandan.",
          "Berbelanja di <b>Pusat Oleh-oleh Khas Belitung</b>.",
          "Makan malam di <b>Nelayan Seafood Restaurant</b>, lalu kembali ke hotel dan istirahat.",
        ],
      },
      {
        hari: 3,
        judul: "Hari Ketiga — City Tour & Transfer Out",
        deskripsi: "Menikmati suasana santai kota Tanjung Pandan, ngopi khas Belitung, dan berfoto di Danau Kaolin sebelum kembali ke bandara.",
        destinasi: [
          "Sarapan pagi dan check-out hotel, kemudian tim menjemput untuk memulai perjalanan City Tour.",
          "Mengunjungi <b>Kongdjie Coffee Siburik</b>, kedai kopi legendaris Belitung tempat menikmati racikan kopi robusta lokal.",
          "Explore <b>Rumah Adat Belitung</b>, bangunan tradisional Melayu yang menyimpan koleksi budaya dan sejarah masyarakat lokal.",
          "Melanjutkan perjalanan ke <b>Danau Kaolin</b>, danau eksotis berwarna biru toska hasil bekas tambang kaolin — salah satu spot foto paling ikonik di Belitung.",
          "Setelah itu, team kami akan mengantarkan Anda menuju <b>Bandara H.A.S. Hanandjoeddin Tanjung Pandan</b> untuk penerbangan kembali.",
          "<b>Trip selesai</b> – terima kasih telah berwisata bersama <b>Oceania Travel</b>!",
        ],
      },
    ],
  },

  {
    id: "5",
    slug: "honeymoon-2d1n-belitung",
    nama: "Honeymoon 2D1N Belitung Island",
    kategori: "Premium",
    durasi: "2 Hari 1 Malam",
    lokasi: "Belitung",
    harga: 3794700,
    tipeHarga: "perPaket",
    rating: 5.0,
    deskripsiSingkat: "Paket Honeymoon 2D1N Premium — pengalaman romantis berdua menjelajahi pesona Belitung dengan sesi foto eksklusif, private boat, dan candlelight dinner di tepi pantai.",
    image: "/images/paket/thumbnail/hooneymoon.png",
    banner: "/images/paket/thumbnail/hooneymoon.png",
    deskripsiLengkap:
      "Paket <b>Honeymoon 2D1N Premium Belitung</b> dirancang khusus untuk pasangan yang ingin merayakan cinta di tengah keindahan alam Belitung. Nikmati momen romantis berdua dengan <b>private boat hopping island</b>, sesi foto bertema romantis, <b>makan malam candlelight</b> di tepi pantai, hingga menginap di hotel pilihan yang nyaman. Selama dua hari penuh, Anda dan pasangan akan menjelajahi pulau-pulau eksotis seperti <b>Pulau Lengkuas</b>, <b>Pulau Batu Garuda</b>, dan <b>Pulau Pasir</b>, ditutup dengan <b>city tour</b> di hari kedua untuk melengkapi kenangan indah bersama Oceania Travel.",
    fasilitasInclude: [
      "Akomodasi hotel 1 malam (<b>sesuai pilihan</b>)",
      "Perahu Hopping Island (<b>private boat</b>)",
      "Pelampung & alat snorkeling",
      "Tour Guide lokal berpengalaman",
      "Lunch seafood khas Belitung (<b>Pulau Kelayang</b>)",
      "<b>Candlelight Dinner romantis</b>",
      "Air mineral selama perjalanan",
      "<b>Snack Box</b> untuk perjalanan",
      "Tiket masuk objek wisata",
      "Sesi <b>foto profesional</b> dengan <b>properti bertema romantis</b>",
      "Dokumentasi Premium (<b>Go-Pro, Mirrorless, iPhone & Drone</b>)",
      "<b>Cinematic video</b> highlight perjalanan",
      "Transportasi Darat selama tour (AC)",
      "Penjemputan & pengantaran ke Bandara H.A.S. Hanandjoeddin",
    ],
    fasilitasExclude: ["Tiket pesawat menuju Belitung", "Pengeluaran pribadi (belanja, laundry, dll)", "Asuransi perjalanan", "Tips untuk guide dan crew"],
    detailHarga: {
      layoutType: "tabel-hotel",
      tabelHotel: [
        { hotel: "Fairfield By Marriott Belitung ⭐⭐⭐⭐✩", peserta: "2", harga: 4509700 },
        { hotel: "Swiss-Belresort Belitung ⭐⭐⭐⭐✩", peserta: "2", harga: 4444700 },
        { hotel: "BW SUITE ⭐⭐⭐⭐", peserta: "2", harga: 4379700 },
        { hotel: "GRAND HATIKA ⭐⭐⭐⭐", peserta: "2", harga: 4119700 },
        { hotel: "BW INN ⭐⭐⭐", peserta: "2", harga: 4054700 },
        { hotel: "La Lucia Boutique ⭐⭐⭐", peserta: "2", harga: 3989700 },
        { hotel: "DEMOUNT ⭐⭐", peserta: "2", harga: 3794700 },
      ],
      keterangan: "Harga sudah termasuk akomodasi hotel sesuai pilihan. Harga dapat berubah tergantung season dan ketersediaan.",
    },

    galeri: ["/images/paket/thumbnail/hooneymoon.png"],
    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama — Romantic Hopping Island Experience",
        deskripsi: "Petualangan romantis berdua menjelajahi laut biru Belitung, sesi foto eksklusif, dan makan malam candlelight di tepi pantai.",
        destinasi: [
          "Team <b>Oceania Travel</b> akan menjemput Anda di <b>Bandara H.A.S. Hanandjoeddin Tanjung Pandan</b>.",
          "Menuju pusat kota untuk menikmati <b>Mie Khas Belitung</b> sebagai santapan makan siang pembuka perjalanan Anda berdua.",
          "Singgah di <b>Bundaran Satam</b>, ikon kota Tanjung Pandan, untuk berfoto bersama di landmark batu satam legendaris.",
          "Perjalanan dilanjutkan menuju <b>Pantai Tanjung Kelayang</b>, titik keberangkatan menuju wisata bahari Belitung.",
          "Sebelum berlayar, peserta akan melakukan sesi <b>foto romantis</b> bersama tim kami.",
          "Tim Oceania telah menyiapkan properti khusus bertema romantis dan elegan yang dapat digunakan selama sesi foto di beberapa spot terbaik sesuai permintaan pasangan.",
          "Dari dermaga, Anda akan menyeberang menggunakan <b>perahu nelayan tradisional</b> berwarna cerah khas Belitung menuju gugusan pulau-pulau granit eksotis.",
          "Sepanjang perjalanan, Anda akan dimanjakan panorama laut biru jernih, batu granit megah, dan suasana laut yang menenangkan — sempurna untuk mengabadikan momen cinta Anda berdua.",
          "<b>Destinasi Hopping Island:</b>",
          "<b>Pulau Batu Garuda</b> – Spot pertama untuk berfoto dengan formasi batu granit alami berbentuk kepala burung garuda, simbol kekuatan dan keabadian cinta.",
          "<b>Pulau Batu Berlayar</b> – Dikenal dengan dua batu granit besar menjulang seperti layar kapal, menciptakan latar alami yang dramatis untuk sesi foto romantis.",
          "<b>Pulau Pasir</b> – Pulau kecil yang hanya muncul saat air surut; Anda dapat berjalan berdua di tengah laut biru sambil mengambil foto “seolah di tengah samudra”.",
          "<b>Pulau Lengkuas</b> – Pulau paling terkenal di Belitung, dengan mercusuar peninggalan Belanda dan air sebening kaca. Anda dapat naik ke puncak mercusuar untuk menikmati panorama 360°, atau berfoto di bawahnya dengan latar laut yang menawan.",
          "Setelah beraktivitas dan berfoto, nikmati <b>makan siang romantis</b> di <b>Pulau Kelayang</b>, ditemani semilir angin laut dan panorama pulau yang tenang.",
          "Dilanjutkan dengan menjelajahi <b>Goa Kelayang</b>, formasi batu granit alami yang menciptakan kesan eksotis dan misterius dalam foto Anda.",
          "Kembali ke <b>Pantai Tanjung Kelayang</b>, lalu menuju <b>Pantai Tanjung Tinggi</b> — lokasi film Laskar Pelangi sekaligus tempat terbaik menikmati <b>sunset romantis</b> di tepi pantai.",
          "Persiapan untuk <b>Candlelight Dinner Session</b> di lokasi yang telah disediakan, menghadirkan momen makan malam yang penuh kehangatan, keintiman, dan cinta, diciptakan khusus untuk Anda dan pasangan tercinta.",
          "Kembali ke hotel untuk beristirahat dan menikmati malam pertama di Belitung.",
        ],
      },
      {
        hari: 2,
        judul: "Hari Kedua — City Tour & Transfer Out",
        deskripsi: "Menikmati pagi yang tenang di kota Tanjung Pandan, berkunjung ke destinasi populer, dan berbelanja oleh-oleh khas Belitung sebelum kembali ke bandara.",
        destinasi: [
          "Sarapan pagi di hotel dan persiapan check-out.",
          "Menikmati suasana pagi khas Belitung di <b>Kongdjie Coffee Siburik</b>, kedai kopi legendaris yang menyajikan kopi robusta lokal dengan cita rasa khas Belitung.",
          "Mengunjungi <b>Pantai Tanjung Pendam</b>, salah satu pantai di pusat kota Tanjung Pandan yang terkenal dengan panorama matahari terbenam dan deretan kafe pinggir pantai.",
          "Berbelanja di <b>Pusat Oleh-oleh Khas Belitung</b>, tempat Anda dapat membeli cendera mata seperti lada putih, sirup jeruk kunci, kaos khas Belitung, hingga aneka camilan lokal.",
          "Explore <b>Rumah Adat Belitung</b>, bangunan tradisional yang menampilkan arsitektur khas Melayu dengan interior berisi koleksi budaya dan sejarah masyarakat Belitung.",
          "Melanjutkan perjalanan menuju <b>Danau Kaolin</b>, danau cantik berwarna biru toska yang terbentuk dari bekas tambang kaolin — spot foto yang sangat populer di kalangan wisatawan.",
          "Setelah menikmati seluruh rangkaian perjalanan, team kami akan mengantarkan Anda kembali menuju <b>Bandara H.A.S. Hanandjoeddin Tanjung Pandan</b>.",
          "<b>Trip selesai</b> – terima kasih telah berwisata bersama <b>Oceania Travel</b>!",
        ],
      },
    ],
  },

  {
    id: "6",
    slug: "honeymoon-3d2n-belitung",
    nama: "Honeymoon 3D2N Belitung Island",
    kategori: "Premium",
    durasi: "3 Hari 2 Malam",
    lokasi: "Belitung",
    harga: 5240300,
    tipeHarga: "perPaket",
    rating: 5.0,
    deskripsiSingkat: "Paket Honeymoon 3D2N Premium — nikmati kemewahan dan keindahan Belitung selama tiga hari penuh bersama pasangan, dengan sesi foto eksklusif, private boat, dan candlelight dinner romantis di tepi pantai.",
    image: "/images/paket/thumbnail/hooneymoon.png",
    banner: "/images/paket/thumbnail/hooneymoon.png",
    deskripsiLengkap:
      "Paket <b>Honeymoon 3D2N Premium Belitung</b> merupakan pilihan sempurna untuk pasangan yang ingin menikmati waktu romantis lebih lama di Pulau Belitung. Selama tiga hari dua malam, Anda dan pasangan akan menjelajahi keindahan alam Belitung — mulai dari jejak film <b>Laskar Pelangi</b> di Belitung Timur, <b>Hopping Island</b> dengan perahu pribadi, hingga <b>Candlelight Dinner</b> yang mempesona di tepi pantai. Paket ini dirancang eksklusif oleh <b>Oceania Travel</b> untuk menghadirkan kombinasi antara petualangan, kenyamanan, dan momen romantis tak terlupakan.",
    fasilitasInclude: [
      "Akomodasi hotel 2 malam (<b>sesuai pilihan</b>)",
      "Perahu Hopping Island (<b>private boat</b>)",
      "Pelampung & alat snorkeling",
      "Tour Guide lokal berpengalaman",
      "Lunch seafood khas Belitung (<b>Pulau Kelayang</b>)",
      "<b>Candlelight Dinner romantis</b>",
      "Air mineral selama perjalanan",
      "<b>Snack Box</b> untuk perjalanan",
      "Tiket masuk objek wisata",
      "Sesi <b>foto profesional</b> dengan <b>properti bertema romantis</b>",
      "Dokumentasi Premium (<b>Go-Pro, Mirrorless, iPhone & Drone</b>)",
      "<b>Cinematic video</b> highlight perjalanan",
      "Transportasi Darat selama tour (AC)",
      "Penjemputan & pengantaran ke Bandara H.A.S. Hanandjoeddin",
    ],
    fasilitasExclude: ["Tiket Museum Kata", "Tiket pesawat menuju Belitung", "Pengeluaran pribadi (belanja, laundry, dll)", "Asuransi perjalanan", "Tips untuk guide dan crew"],
    detailHarga: {
      layoutType: "tabel-hotel",
      tabelHotel: [
        { hotel: "Fairfield By Marriott Belitung ⭐⭐⭐⭐✩", peserta: "2", harga: 6670300 },
        { hotel: "Swiss-Belresort Belitung ⭐⭐⭐⭐✩", peserta: "2", harga: 6540300 },
        { hotel: "BW SUITE ⭐⭐⭐⭐", peserta: "2", harga: 6410300 },
        { hotel: "GRAND HATIKA ⭐⭐⭐⭐", peserta: "2", harga: 5890300 },
        { hotel: "BW INN ⭐⭐⭐", peserta: "2", harga: 5760300 },
        { hotel: "La Lucia Boutique ⭐⭐⭐", peserta: "2", harga: 5630300 },
        { hotel: "DEMOUNT ⭐⭐", peserta: "2", harga: 5240300 },
      ],
      keterangan: "Harga sudah termasuk akomodasi hotel sesuai pilihan. Harga dapat berubah tergantung season dan ketersediaan.",
    },
    galeri: ["/images/paket/thumbnail/hooneymoon.png"],
    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama — Tour Laskar Pelangi",
        deskripsi: "Menelusuri jejak inspiratif film Laskar Pelangi di Belitung Timur, menikmati kuliner khas, serta mengunjungi destinasi budaya dan religi yang menawan.",
        destinasi: [
          "Team <b>Oceania Travel</b> akan menjemput Anda di <b>Bandara H.A.S. Hanandjoeddin Tanjung Pandan</b>.",
          "Menikmati santapan khas Belitung: <b>Mie Belitung Atep</b> sebagai menu pembuka perjalanan Anda.",
          "Berhenti sejenak di <b>Bundaran Satam</b>, ikon kota Tanjung Pandan, untuk berfoto di landmark batu satam legendaris.",
          "Melanjutkan perjalanan ke timur Pulau Belitung menuju kawasan <b>Gantung</b>, untuk mengunjungi:",
          "<b>SD Laskar Pelangi</b> — sekolah replika tempat pengambilan gambar film inspiratif Laskar Pelangi.",
          "<b>Rumah Keong</b> — spot foto ikonik di tepi danau dengan arsitektur unik berbentuk cangkang keong.",
          "<b>Museum Kata Andrea Hirata</b> — museum sastra pertama di Indonesia yang menampilkan kisah dan semangat dari film Laskar Pelangi.",
          "Makan siang di <b>Resto Vega</b>, kota Manggar, sambil menikmati suasana santai khas Belitung Timur.",
          "Mengunjungi <b>Vihara Dewi Kwan Im</b>, salah satu vihara tertua di Belitung dengan arsitektur megah yang menghadap ke laut.",
          "Berkunjung ke <b>Pantai Burung Mandi</b>, pantai indah dengan pasir putih dan ombak yang tenang, cocok untuk menikmati sore hari.",
          "Perjalanan kembali ke Tanjung Pandan, makan malam di <b>Raja Seafood Restaurant</b>, lalu check-in hotel untuk beristirahat.",
        ],
      },
      {
        hari: 2,
        judul: "Hari Kedua — Romantic Hopping Island Experience",
        deskripsi: "Petualangan penuh cinta menjelajahi laut biru Belitung dengan perahu pribadi, sesi foto romantis, snorkeling, dan makan malam candlelight di tepi pantai.",
        destinasi: [
          "Setelah sarapan pagi di hotel, peserta akan dijemput oleh tim kami untuk memulai hari penuh petualangan dan momen romantis di laut Belitung.",
          "Sebelum keberangkatan, peserta akan melakukan persiapan <b>foto session</b> bersama tim — kami telah menyiapkan properti khusus bertema romantis dan elegan untuk mempercantik hasil foto honeymoon Anda.",
          "Perjalanan dimulai dengan singgah di <b>Pantai Tanjung Tinggi</b>, lokasi film Laskar Pelangi, yang menawarkan panorama batu granit megah dan air laut sebening kristal.",
          "Lalu menuju <b>Pantai Tanjung Kelayang</b>, titik keberangkatan <b>Island Hopping</b> yang menakjubkan.",
          "Berlayar menggunakan <b>perahu nelayan tradisional</b> melintasi laut biru jernih menuju gugusan pulau-pulau eksotis sambil mengabadikan momen cinta di berbagai spot terbaik:",
          "<b>Pulau Batu Garuda</b> – Spot ikonik dengan formasi batu berbentuk kepala burung garuda.",
          "<b>Pulau Batu Berlayar</b> – Dikelilingi pasir putih dan air laut tenang, cocok untuk sesi foto romantis.",
          "<b>Pulau Pasir</b> – Pulau mungil yang hanya muncul saat air surut, menciptakan ilusi berjalan berdua di tengah laut biru.",
          "<b>Pulau Lengkuas</b> – Pulau legendaris dengan mercusuar tua peninggalan Belanda. Nikmati panorama 360° dari puncak atau bersantai di bawah mercusuar.",
          "Setelah puas berfoto dan snorkeling, nikmati <b>makan siang romantis</b> di <b>Pulau Kelayang</b> dengan pemandangan laut terbuka.",
          "Dilanjutkan dengan eksplorasi <b>Goa Kelayang</b>, formasi granit alami yang menambah kesan dramatis untuk sesi foto eksotis Anda.",
          "Sore hari kembali ke Pantai Tanjung Kelayang, lalu menuju <b>Pantai Tanjung Pendam</b> — spot sunset paling romantis di kota Tanjung Pandan.",
          "Persiapan untuk <b>Candlelight Dinner Session</b> di lokasi yang telah disediakan, menghadirkan momen makan malam yang penuh kehangatan, keintiman, dan cinta.",
          "Kembali ke hotel dan istirahat.",
        ],
      },
      {
        hari: 3,
        judul: "Hari Ketiga — City Tour & Transfer Out",
        deskripsi: "Menikmati pagi tenang di kota Tanjung Pandan, menjelajahi tempat ikonik dan berbelanja oleh-oleh khas Belitung sebelum kembali ke bandara.",
        destinasi: [
          "Sarapan pagi dan check-out hotel.",
          "Mengunjungi <b>Kongdjie Coffee Siburik</b>, kedai kopi legendaris Belitung tempat menikmati racikan kopi robusta lokal.",
          "Explore <b>Rumah Adat Belitung</b>, bangunan tradisional Melayu yang menyimpan koleksi budaya dan sejarah masyarakat lokal.",
          "Melanjutkan perjalanan ke <b>Danau Kaolin</b>, danau eksotis berwarna biru toska hasil bekas tambang kaolin — salah satu spot foto paling ikonik di Belitung.",
          "Setelah itu, team kami akan mengantarkan Anda menuju <b>Bandara H.A.S. Hanandjoeddin Tanjung Pandan</b> untuk penerbangan kembali.",
          "<b>Trip selesai</b> – terima kasih telah berwisata bersama <b>Oceania Travel</b>!",
        ],
      },
    ],
  },

  {
    id: "7",
    slug: "family-2d1n-belitung",
    nama: "Family 2D1N Belitung Island",
    kategori: "Premium",
    durasi: "2 Hari 1 Malam",
    lokasi: "Belitung",
    harga: 4141250,
    tipeHarga: "perPaket",
    rating: 4.9,
    deskripsiSingkat: "Paket Family 2D1N Premium — petualangan seru dan berkesan untuk keluarga menjelajahi keindahan alam Belitung dengan aktivitas ramah anak, foto keluarga, dan wisata budaya.",
    image: "/images/paket/thumbnail/family.png",
    banner: "/images/paket/thumbnail/family.png",
    deskripsiLengkap:
      "Paket <b>Family 2D1N Belitung Island</b> dirancang khusus untuk keluarga yang ingin menikmati liburan penuh kehangatan dan kebersamaan di Pulau Belitung. Dalam dua hari perjalanan, Anda dan keluarga akan menjelajahi pantai-pantai eksotis, berpetualang di pulau-pulau kecil dengan <b>private boat</b>, serta menikmati wisata budaya dan kuliner lokal. Aktivitas seru seperti <b>memberi makan ikan, bermain pasir, foto keluarga, hingga menjelajahi Goa Kelayang</b> akan menjadi kenangan tak terlupakan bagi anak-anak maupun orang tua. Semua dikemas nyaman dan aman bersama <b>Oceania Travel</b>.",
    fasilitasInclude: [
      "Akomodasi hotel 1 malam (<b>sesuai pilihan</b>)",
      "Perahu Hopping Island (<b>private boat</b>)",
      "Pelampung & alat snorkeling",
      "Tour Guide lokal berpengalaman",
      "Lunch seafood khas Belitung (<b>Pulau Kelayang</b>)",
      "Air mineral selama perjalanan",
      "<b>Snack Box</b> untuk perjalanan",
      "1x Makan malam di <b>Raja Seafood Restaurant</b>",
      "Tiket masuk objek wisata",
      "Sesi <b>foto keluarga profesional</b>",
      "Dokumentasi Premium (<b>Go-Pro, Mirrorless, Drone</b>)",
      "Transportasi Darat selama tour (AC)",
      "Penjemputan & pengantaran ke Bandara H.A.S. Hanandjoeddin",
    ],
    fasilitasExclude: ["Tiket pesawat menuju Belitung", "Pengeluaran pribadi (belanja, laundry, dll)", "Asuransi perjalanan", "Tips untuk guide dan crew"],
    detailHarga: {
      layoutType: "tabel-hotel-multiple", // <-- gunakan layout baru
      tabelHotelMultiple: [
        // <-- gunakan tabelHotelMultiple
        {
          hotel: "Fairfield By Marriott Belitung ⭐⭐⭐⭐✩",
          opsi: [
            { peserta: "4", harga: 5516250 },
            { peserta: "6", harga: 7183750 },
          ],
        },
        {
          hotel: "Swiss-Belresort Belitung ⭐⭐⭐⭐✩",
          opsi: [
            { peserta: "4", harga: 5391250 },
            { peserta: "6", harga: 6996250 },
          ],
        },
        {
          hotel: "BW SUITE ⭐⭐⭐⭐",
          opsi: [
            { peserta: "4", harga: 5266250 },
            { peserta: "6", harga: 6808750 },
          ],
        },
        {
          hotel: "GRAND HATIKA ⭐⭐⭐⭐",
          opsi: [
            { peserta: "4", harga: 4766250 },
            { peserta: "6", harga: 6058750 },
          ],
        },
        {
          hotel: "BW INN ⭐⭐⭐",
          opsi: [
            { peserta: "4", harga: 4641250 },
            { peserta: "6", harga: 5871250 },
          ],
        },
        {
          hotel: "La Lucia Boutique ⭐⭐⭐",
          opsi: [
            { peserta: "4", harga: 4516250 },
            { peserta: "6", harga: 5683750 },
          ],
        },
        {
          hotel: "DEMOUNT ⭐⭐",
          opsi: [
            { peserta: "4", harga: 4141250 },
            { peserta: "6", harga: 5121250 },
          ],
        },
      ],
      keterangan: "Harga sudah termasuk akomodasi hotel sesuai pilihan. Harga dapat berubah tergantung season dan ketersediaan hotel.",
    },
    galeri: ["/images/paket/thumbnail/family.png"],
    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama — Family Island Adventure & Sunset Delight",
        deskripsi: "Petualangan seru bersama keluarga menjelajahi keindahan alam dan laut Belitung, dengan aktivitas ramah anak dan momen kebersamaan yang berkesan.",
        destinasi: [
          "Team <b>Oceania Travel</b> akan menjemput Anda dan keluarga di <b>Bandara H.A.S. Hanandjoeddin, Tanjung Pandan</b>.",
          "Menuju pusat kota untuk menikmati <b>Mie Khas Belitung</b>, kuliner lokal yang wajib dicoba sebagai santapan pembuka perjalanan keluarga Anda.",
          "Singgah di <b>Bundaran Satam</b>, ikon kota Tanjung Pandan, untuk berfoto bersama di landmark batu satam legendaris.",
          "Menuju <b>Pantai Tanjung Tinggi</b> — Anda dan keluarga akan melakukan persiapan <b>foto & video session</b> bersama tim fotografer profesional kami di lokasi syuting film Laskar Pelangi.",
          "Perjalanan dilanjutkan menuju <b>Pantai Tanjung Kelayang</b>, titik keberangkatan menuju wisata bahari Belitung.",
          "Dari dermaga, Anda akan menyeberang menggunakan <b>perahu nelayan tradisional</b> berwarna cerah khas Belitung menuju gugusan pulau-pulau granit eksotis.",
          "Sepanjang perjalanan, anak-anak dapat menikmati panorama laut biru jernih dan sensasi <b>memberi makan ikan</b> di perairan dangkal.",
          "<b>Destinasi Hopping Island:</b>",
          "<b>Pulau Batu Garuda</b> – Spot pertama untuk berfoto dengan formasi batu alami menyerupai kepala garuda. Cocok untuk foto keluarga dengan latar unik.",
          "<b>Pulau Batu Berlayar</b> – Dikenal dengan dua batu granit besar menjulang seperti layar kapal; anak-anak bisa bermain pasir sambil menikmati angin laut.",
          "<b>Pulau Pasir</b> – Pulau kecil yang muncul saat air surut, memberi pengalaman seru berjalan di 'tengah laut' yang menakjubkan bagi seluruh keluarga.",
          "<b>Pulau Lengkuas</b> – Pulau ikonik dengan mercusuar tua peninggalan Belanda. Bagi yang ingin berpetualang, bisa naik ke puncak untuk menikmati pemandangan 360° Belitung.",
          "Setelah beraktivitas dan berfoto, nikmati <b>makan siang</b> di <b>Pulau Kelayang</b> ditemani semilir angin laut dan panorama pulau yang tenang.",
          "Dilanjutkan dengan menjelajahi <b>Goa Kelayang</b>, formasi batu unik yang akan membuat anak-anak serasa menjelajah 'gua petualang alam'.",
          "Kembali ke <b>Pantai Tanjung Kelayang</b>, lalu mengunjungi <b>Pantai Tanjung Pendam</b>, pantai di pusat kota yang terkenal dengan panorama sunset dan deretan kafe pinggir pantai.",
          "Menuju <b>Restoran Nelayan Seafood</b> untuk menikmati makan malam keluarga dengan hidangan laut segar dan suasana hangat.",
          "Kembali ke hotel untuk beristirahat dan menikmati malam pertama di Belitung.",
        ],
      },
      {
        hari: 2,
        judul: "Hari Kedua — City Tour & Family Culture Experience",
        deskripsi: "Menikmati pagi yang tenang di kota Tanjung Pandan, berkunjung ke destinasi populer, wisata budaya, dan berbelanja oleh-oleh khas Belitung sebelum kembali ke bandara.",
        destinasi: [
          "Sarapan pagi di hotel dan persiapan check-out.",
          "Menikmati suasana pagi khas Belitung di <b>Kongdjie Coffee Siburik</b>, kedai kopi legendaris yang menyajikan kopi robusta lokal dengan cita rasa khas Belitung.",
          "Mengunjungi <b>Pantai Tanjung Pendam</b>, salah satu pantai di pusat kota yang populer dengan suasana teduh dan pemandangan laut luas.",
          "Berbelanja di <b>Pusat Oleh-oleh Khas Belitung</b> — tempat Anda dapat membeli cendera mata seperti lada putih, sirup jeruk kunci, kaos khas Belitung, hingga aneka camilan lokal.",
          "Explore <b>Rumah Adat Belitung</b>, bangunan tradisional khas Melayu yang menyimpan koleksi budaya dan sejarah masyarakat lokal.",
          "Melanjutkan perjalanan menuju <b>Danau Kaolin</b>, danau cantik berwarna biru toska hasil bekas tambang — spot foto favorit wisatawan.",
          "Setelah menikmati seluruh rangkaian perjalanan, team kami akan mengantarkan Anda kembali menuju <b>Bandara H.A.S. Hanandjoeddin Tanjung Pandan</b>.",
          "<b>Trip selesai</b> – terima kasih telah berwisata bersama <b>Oceania Travel</b>!",
        ],
      },
    ],
  },

  {
    id: "8",
    slug: "family-3d2n-belitung",
    nama: "Family 3D2N Belitung Island",
    kategori: "Premium",
    durasi: "3 Hari 2 Malam",
    lokasi: "Belitung",
    harga: 6281250,
    tipeHarga: "perPaket",
    rating: 4.9,
    deskripsiSingkat: "Paket Family 3D2N Belitung — liburan seru dan berkesan untuk keluarga, menjelajahi wisata Laskar Pelangi, island hopping, dan city tour penuh kenangan.",
    image: "/images/paket/thumbnail/family.png",
    banner: "/images/paket/thumbnail/family.png",
    deskripsiLengkap:
      "Paket <b>Family 3D2N Belitung Island</b> dirancang khusus bagi keluarga yang ingin menikmati waktu berkualitas bersama sambil menjelajahi pesona Belitung. Mulai dari kunjungan ke lokasi legendaris film <b>Laskar Pelangi</b>, pengalaman <b>island hopping</b> seru dengan perahu tradisional, hingga <b>city tour</b> santai di hari terakhir. Nikmati keindahan alam, kuliner khas, dan momen kebersamaan yang akan menjadi kenangan indah bagi seluruh keluarga.",
    fasilitasInclude: [
      "Akomodasi hotel 2 malam (<b>sesuai pilihan</b>)",
      "Perahu Hopping Island (<b>private boat</b>)",
      "Pelampung & alat snorkeling",
      "Tour Guide lokal berpengalaman",
      "Lunch seafood khas Belitung (<b>Pulau Kelayang</b>)",
      "Air mineral selama perjalanan",
      "<b>Snack Box</b> untuk perjalanan",
      "2x Makan malam (<b>Raja Seafood Restaurant & Nelayan Seafood</b>)",
      "1x Makan siang di <b>Resto Vega</b>",
      "Tiket masuk objek wisata",
      "Dokumentasi Premium (<b>Go-Pro, Mirrorless, iPhone & Drone</b>)",
      "Transportasi Darat selama tour (AC)",
      "Penjemputan & pengantaran ke Bandara H.A.S. Hanandjoeddin",
      "Foto & video session keluarga di <b>Pantai Tanjung Tinggi</b>",
    ],
    fasilitasExclude: ["Tiket Museum Kata", "Tiket pesawat menuju Belitung", "Pengeluaran pribadi (belanja, laundry, dll)", "Asuransi perjalanan", "Tips untuk guide dan crew"],
    detailHarga: {
      layoutType: "tabel-hotel-multiple",
      tabelHotelMultiple: [
        {
          hotel: "Fairfield By Marriott Belitung ⭐⭐⭐⭐✩",
          opsi: [
            { peserta: "4", harga: 9031250 },
            { peserta: "6", harga: 12106250 },
          ],
        },
        {
          hotel: "Swiss-Belresort Belitung ⭐⭐⭐⭐✩",
          opsi: [
            { peserta: "4", harga: 8781250 },
            { peserta: "6", harga: 11731250 },
          ],
        },
        {
          hotel: "BW SUITE ⭐⭐⭐⭐",
          opsi: [
            { peserta: "4", harga: 8531250 },
            { peserta: "6", harga: 11356250 },
          ],
        },
        {
          hotel: "GRAND HATIKA ⭐⭐⭐⭐",
          opsi: [
            { peserta: "4", harga: 7531250 },
            { peserta: "6", harga: 9856250 },
          ],
        },
        {
          hotel: "BW INN ⭐⭐⭐",
          opsi: [
            { peserta: "4", harga: 7281250 },
            { peserta: "6", harga: 9481250 },
          ],
        },
        {
          hotel: "La Lucia Boutique ⭐⭐⭐",
          opsi: [
            { peserta: "4", harga: 7031250 },
            { peserta: "6", harga: 9106250 },
          ],
        },
        {
          hotel: "DEMOUNT ⭐⭐",
          opsi: [
            { peserta: "4", harga: 6281250 },
            { peserta: "6", harga: 7981250 },
          ],
        },
      ],
      keterangan: "Harga sudah termasuk akomodasi hotel sesuai pilihan. Harga dapat berubah tergantung season dan ketersediaan hotel.",
    },

    galeri: ["/images/paket/thumbnail/family.png"],
    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama — Tour Laskar Pelangi",
        deskripsi: "Menelusuri jejak film Laskar Pelangi di Belitung Timur, menikmati kuliner khas, dan mengenal sisi budaya pulau yang memikat.",
        destinasi: [
          "Team <b>Oceania Travel</b> akan menjemput Anda dan keluarga di <b>Bandara H.A.S. Hanandjoeddin, Tanjung Pandan</b>.",
          "Menikmati santapan khas Belitung: <b>Mie Belitung Atep</b> sebagai pembuka liburan keluarga.",
          "Berhenti sejenak di <b>Bundaran Satam</b> untuk berfoto di landmark batu satam legendaris.",
          "Melanjutkan perjalanan ke timur Pulau Belitung menuju kawasan <b>Gantung</b> untuk mengunjungi:",
          "<b>SD Laskar Pelangi</b> – sekolah replika tempat syuting film inspiratif, spot edukatif untuk anak-anak.",
          "<b>Rumah Keong</b> – spot foto unik berbentuk cangkang keong di tepi danau.",
          "<b>Museum Kata Andrea Hirata</b> – museum sastra pertama di Indonesia dengan nuansa penuh inspirasi.",
          "Makan siang di <b>Resto Vega</b>, kota Manggar.",
          "Mengunjungi <b>Vihara Dewi Kwan Im</b> – vihara tertua dengan pemandangan laut memukau.",
          "Berkunjung ke <b>Pantai Burung Mandi</b> – pantai berpasir putih yang ideal untuk anak-anak bermain.",
          "Perjalanan kembali ke Tanjung Pandan.",
          "Makan malam di <b>Raja Seafood Restaurant</b> dan check-in hotel untuk beristirahat.",
        ],
      },
      {
        hari: 2,
        judul: "Hari Kedua — Family Island Hopping Adventure",
        deskripsi: "Petualangan laut seru bersama keluarga, snorkeling, foto keluarga, dan menikmati panorama pulau-pulau eksotis.",
        destinasi: [
          "Sarapan pagi di hotel.",
          "Menuju <b>Pantai Tanjung Tinggi</b> untuk sesi <b>foto & video keluarga</b> di lokasi syuting film Laskar Pelangi.",
          "Lanjut ke <b>Pantai Tanjung Kelayang</b> sebagai titik keberangkatan island hopping.",
          "Berlayar menggunakan <b>perahu nelayan tradisional</b> menuju gugusan pulau eksotis:",
          "<b>Pulau Batu Garuda</b> – formasi batu alam berbentuk kepala garuda.",
          "<b>Pulau Batu Berlayar</b> – tempat anak-anak bermain pasir putih.",
          "<b>Pulau Pasir</b> – muncul saat air surut, pengalaman unik berjalan di tengah laut.",
          "<b>Pulau Lengkuas</b> – dengan mercusuar peninggalan Belanda dan pemandangan menakjubkan.",
          "Snorkeling ringan dan eksplorasi bawah laut bersama keluarga.",
          "Makan siang di <b>Pulau Kelayang</b> dengan menu seafood segar.",
          "Menjelajahi <b>Goa Kelayang</b> yang eksotis dan mendengarkan kisah lokal dari pemandu.",
          "Kembali ke <b>Pantai Tanjung Kelayang</b>, lalu lanjut ke <b>Pantai Tanjung Pendam</b> untuk menikmati sunset.",
          "Berbelanja oleh-oleh khas Belitung.",
          "Makan malam di <b>Nelayan Seafood Restaurant</b>.",
          "Kembali ke hotel dan istirahat.",
        ],
      },
      {
        hari: 3,
        judul: "Hari Ketiga — City Tour & Transfer Out",
        deskripsi: "Menikmati suasana kota Tanjung Pandan, mengenal budaya lokal, dan mengunjungi spot ikonik Belitung sebelum kembali ke bandara.",
        destinasi: [
          "Sarapan pagi dan check-out hotel.",
          "Menikmati racikan kopi legendaris di <b>Kongdjie Coffee Siburik</b>.",
          "Explore <b>Rumah Adat Belitung</b> — mengenal budaya dan sejarah lokal.",
          "Mengunjungi <b>Danau Kaolin</b> – danau biru toska yang memesona.",
          "Team <b>Oceania Travel</b> akan mengantar Anda dan keluarga kembali ke <b>Bandara H.A.S. Hanandjoeddin</b>.",
          "<b>Trip selesai</b> – terima kasih telah berwisata bersama <b>Oceania Travel</b>!",
        ],
      },
    ],
  },
  // Tambahkan paket lain sesuai format di atas
];
