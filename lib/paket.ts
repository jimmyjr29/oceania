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

  // ✅ Tambahkan ini
  kategori: "Reguler" | "Premium";
}

export const paketList: Paket[] = [
  {
    id: "1",
    slug: "one-day-trip-hooping-island",
    nama: "One Day Trip Hooping Island",
    kategori: "Premium", // ✅ Tambahkan kategori di sini
    durasi: "1 Hari",
    lokasi: "Belitung",
    harga: 1200000,
    rating: 4.8,
    deskripsiSingkat: "Jelajahi keindahan Pulau Belitung dengan paket lengkap 3 hari 2 malam",
    image: "/images/galery/batu-baginda.jpg",
    banner: "/images/galery/batu-baginda.jpg",
    deskripsiLengkap: "Nikmati pengalaman tak terlupakan menjelajahi keindahan Pulau Belitung selama 3 hari 2 malam...",
    fasilitasInclude: ["Hotel bintang 3", "Makan 3x sehari", "Tiket masuk objek wisata", "Transportasi darat & laut", "Tour Guide lokal", "Dokumentasi"],
    fasilitasExclude: ["Tiket pesawat", "Asuransi perjalanan", "Pengeluaran pribadi", "Tips guide"],
    detailHarga: {
      tabel: [
        { jumlahPeserta: "1-2", harga: 1200000 },
        { jumlahPeserta: "3-5", harga: 850000 },
        { jumlahPeserta: "6-8", harga: 650000 },
        { jumlahPeserta: "9-13", harga: 500000 },
      ],
      keterangan: "Harga sudah termasuk semua fasilitas yang tercantum dalam paket include.",
    },
    galeri: ["/images/galery/batu-baginda.jpg", "/images/galery/pantai-tanjung-tinggi.jpg", "/images/galery/pulau-lengkuas.jpg"],
    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama - Arrival & Belitung Timur",
        deskripsi: "Tiba di Bandara H.A.S Hanandjoeddin Belitung, dijemput oleh guide lokal...",
        destinasi: ["Bandara H.A.S Hanandjoeddin", "Pantai Tanjung Tinggi"],
      },
    ],
  },
  {
    id: "2",
    slug: "one-day-trip-hooping-island-2",
    nama: "One Day Trip Hooping Island",
    kategori: "Reguler", // ✅ Tambahkan kategori di sini
    durasi: "1 Hari",
    lokasi: "Belitung",
    harga: 1200000,
    rating: 4.8,
    deskripsiSingkat: "Jelajahi keindahan Pulau Belitung dengan paket lengkap 3 hari 2 malam",
    image: "/images/galery/batu-baginda.jpg",
    banner: "/images/galery/batu-baginda.jpg",
    deskripsiLengkap: "Nikmati pengalaman tak terlupakan menjelajahi keindahan Pulau Belitung selama 3 hari 2 malam...",
    fasilitasInclude: ["Hotel bintang 3", "Makan 3x sehari", "Tiket masuk objek wisata", "Transportasi darat & laut", "Tour Guide lokal", "Dokumentasi"],
    fasilitasExclude: ["Tiket pesawat", "Asuransi perjalanan", "Pengeluaran pribadi", "Tips guide"],
    detailHarga: {
      tabel: [
        { jumlahPeserta: "1-2", harga: 1200000 },
        { jumlahPeserta: "3-5", harga: 850000 },
        { jumlahPeserta: "6-8", harga: 650000 },
        { jumlahPeserta: "9-13", harga: 500000 },
      ],
      keterangan: "Harga sudah termasuk semua fasilitas yang tercantum dalam paket include.",
    },
    galeri: ["/images/galery/batu-baginda.jpg", "/images/galery/pantai-tanjung-tinggi.jpg", "/images/galery/pulau-lengkuas.jpg"],
    itinerary: [
      {
        hari: 1,
        judul: "Hari Pertama - Arrival & Belitung Timur",
        deskripsi: "Tiba di Bandara H.A.S Hanandjoeddin Belitung, dijemput oleh guide lokal...",
        destinasi: ["Bandara H.A.S Hanandjoeddin", "Pantai Tanjung Tinggi"],
      },
    ],
  },
  // Tambahkan paket lain sesuai format di atas
];
