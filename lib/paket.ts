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
  fasilitasExclude: string[];
  detailHarga: {
    image: string;
    keterangan: string;
  };
  galeri: string[];
  itinerary: {
    hari: number;
    judul: string;
    deskripsi: string;
    destinasi: string[];
  }[];
}

export const paketList: Paket[] = [
  {
    id: "1",
    slug: "belitung-explorer-3d2n",
    nama: "Belitung Explorer 3d2N",
    durasi: "3 hari 2 malam",
    lokasi: "Belitung",
    harga: 1200000,
    rating: 4.8,
    deskripsiSingkat: "Jelajahi keindahan Pulau Belitung dengan paket lengkap 3 hari 2 malam",
    image: "/images/galery/batu-baginda.jpg",
    banner: "/images/galery/batu-baginda.jpg",
    deskripsiLengkap:
      "Nikmati pengalaman tak terlupakan menjelajahi keindahan Pulau Belitung selama 3 hari 2 malam. Paket ini mencakup kunjungan ke destinasi-destinasi iconic Belitung seperti Pantai Tanjung Tinggi, Pulau Lengkuas, dan berbagai pantai eksotis lainnya. Dengan pemandangan yang memukau dan pengalaman budaya lokal yang autentik, trip ini akan memberikan kenangan indah yang tak terlupakan.",
    fasilitasInclude: ["Hotel bintang 3", "Makan 3x sehari", "Tiket masuk objek wisata", "Transportasi darat & laut", "Tour Guide lokal", "Dokumentasi"],
    fasilitasExclude: ["Tiket pesawat", "Asuransi perjalanan", "Pengeluaran pribadi", "Tips guide"],
    detailHarga: {
      image: "/images/paket/detail-harga.jpg",
      keterangan: "Harga sudah termasuk semua fasilitas yang tercantum dalam paket include",
    },
    galeri: [
      "/images/galery/batu-baginda.jpg",
      "/images/galery/pantai-tanjung-tinggi.jpg",
      "/images/galery/pulau-lengkuas.jpg",
      "/images/galery/pantai-tanjung-kelayang.jpg",
      "/images/galery/museum-kata.jpg",
      "/images/galery/pantai-tanjung-binga.jpg",
      "/images/galery/pulau-burung.jpg",
      "/images/galery/batu-baginda.jpg",
    ],
    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama",
        deskripsi:
          "Tiba di Bandara H.A.S Hanandjoeddin Belitung, dijemput oleh guide lokal dan langsung menuju hotel untuk check-in. Setelah istirahat sejenak, perjalanan dimulai dengan mengunjungi destinasi-destinasi menarik di Belitung Timur. Nikmati keindahan pantai dan pemandangan yang memukau sepanjang perjalanan.",
        destinasi: ["Bandara H.A.S Hanandjoeddin", "Hotel check-in", "Pantai Tanjung Tinggi", "Pulau Lengkuas"],
      },
      {
        hari: 2,
        judul: "Hari Kedua",
        deskripsi:
          "Hari penuh eksplorasi Belitung Barat dengan mengunjungi berbagai pantai eksotis dan spot foto Instagram-able. Menikmati kuliner khas Belitung dan berinteraksi dengan masyarakat lokal untuk merasakan kehangatan budaya Belitung yang autentik.",
        destinasi: ["Pantai Tanjung Kelayang", "Pulau Burung", "Pantai Tanjung Binga", "Museum Kata Andrea Hirata"],
      },
    ],
  },
  {
    id: "2",
    slug: "belitung-adventure-4d3n",
    nama: "Belitung Adventure 4d3N",
    durasi: "4 hari 3 malam",
    lokasi: "Belitung",
    harga: 1800000,
    rating: 4.9,
    deskripsiSingkat: "Petualangan lengkap Belitung dengan aktivitas snorkeling dan island hopping",
    image: "/images/paket-2.jpg",
    banner: "/images/banner-belitung-2.jpg",
    deskripsiLengkap: "Paket adventure terlengkap untuk menjelajahi seluruh keindahan Pulau Belitung dalam 4 hari 3 malam. Termasuk aktivitas snorkeling, island hopping, dan mengunjungi semua destinasi iconic Belitung.",
    fasilitasInclude: ["Hotel bintang 4", "Makan 3x sehari", "Tiket masuk objek wisata", "Transportasi darat & laut", "Tour Guide lokal", "Peralatan snorkeling", "Dokumentasi underwater"],
    fasilitasExclude: ["Tiket pesawat", "Asuransi perjalanan", "Pengeluaran pribadi", "Tips guide"],
    detailHarga: {
      image: "/images/pricing-adventure.jpg",
      keterangan: "Harga sudah termasuk semua fasilitas adventure dan akomodasi premium",
    },
    galeri: [
      "/images/adventure-1.jpg",
      "/images/adventure-2.jpg",
      "/images/adventure-3.jpg",
      "/images/adventure-4.jpg",
      "/images/adventure-5.jpg",
      "/images/adventure-6.jpg",
      "/images/adventure-7.jpg",
      "/images/adventure-8.jpg",
      "/images/adventure-9.jpg",
      "/images/adventure-10.jpg",
      "/images/adventure-11.jpg",
      "/images/adventure-12.jpg",
    ],
    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama",
        deskripsi: "Penjemputan di bandara dan check-in hotel. Orientasi singkat dengan guide dan persiapan peralatan adventure. Kunjungan perdana ke pantai terdekat untuk adaptasi.",
        destinasi: ["Bandara arrival", "Hotel check-in", "Pantai Tanjung Pendam", "Preparation adventure gear"],
      },
      {
        hari: 2,
        judul: "Hari Kedua",
        deskripsi: "Full day island hopping dengan aktivitas snorkeling di berbagai spot terbaik. Menikmati keindahan bawah laut Belitung yang memukau.",
        destinasi: ["Pulau Lengkuas snorkeling", "Pulau Kepayang", "Pulau Babi", "Pulau Burung"],
      },
      {
        hari: 3,
        judul: "Hari Ketiga",
        deskripsi: "Eksplorasi darat mengunjungi destinasi cultural dan alam Belitung. Photography tour dan kuliner experience.",
        destinasi: ["Museum Kata", "Rumah Keong", "Pantai Tanjung Binga", "Kuliner tour"],
      },
    ],
  },
  {
    id: "3",
    slug: "belitung-family-2d1n",
    nama: "Belitung Family 2d1N",
    durasi: "2 hari 1 malam",
    lokasi: "Belitung",
    harga: 800000,
    rating: 4.7,
    deskripsiSingkat: "Paket keluarga singkat untuk menikmati highlights Belitung dalam waktu terbatas",
    image: "/images/paket-3.jpg",
    banner: "/images/banner-family.jpg",
    deskripsiLengkap: "Paket ideal untuk liburan keluarga singkat namun berkesan. Mengunjungi destinasi-destinasi utama Belitung yang family-friendly dalam waktu 2 hari 1 malam.",
    fasilitasInclude: ["Hotel family room", "Makan 2x sehari", "Tiket masuk objek wisata", "Transportasi nyaman", "Tour Guide berpengalaman"],
    fasilitasExclude: ["Tiket pesawat", "Makan siang hari ke-2", "Pengeluaran pribadi"],
    detailHarga: {
      image: "/images/pricing-family.jpg",
      keterangan: "Harga per orang, anak di bawah 5 tahun gratis",
    },
    galeri: [
      "/images/family-1.jpg",
      "/images/family-2.jpg",
      "/images/family-3.jpg",
      "/images/family-4.jpg",
      "/images/family-5.jpg",
      "/images/family-6.jpg",
      "/images/family-7.jpg",
      "/images/family-8.jpg",
      "/images/family-9.jpg",
      "/images/family-10.jpg",
      "/images/family-11.jpg",
      "/images/family-12.jpg",
    ],
    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama",
        deskripsi: "Kedatangan dan tour setengah hari mengunjungi pantai-pantai indah yang cocok untuk keluarga dengan anak-anak.",
        destinasi: ["Airport pickup", "Pantai Tanjung Tinggi", "Pulau Lengkuas (lighthouse)", "Hotel check-in"],
      },
      {
        hari: 2,
        judul: "Hari Kedua",
        deskripsi: "Morning tour ke destinasi budaya dan kuliner sebelum kembali ke bandara untuk departure.",
        destinasi: ["Museum Kata Andrea Hirata", "Kuliner breakfast", "Shopping oleh-oleh", "Airport drop-off"],
      },
    ],
  },
];
