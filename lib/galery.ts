export type GalleryItem = {
  id: number;
  category: "pantai" | "island" | "kuliner" | "budaya" | "gunung" | "customer";
  image: string;
  title: string;
};

export type GalleryCategory = {
  id: string;
  label: string;
  icon: string;
};

export const galleryCategories: GalleryCategory[] = [
  { id: "all", label: "Semua", icon: "📸" },
  { id: "pantai", label: "Pantai", icon: "🏖️" },
  { id: "island", label: "Island Hopping", icon: "🏝️" },
  { id: "kuliner", label: "Kuliner", icon: "🍽️" },
  { id: "budaya", label: "Edukasi & Budaya", icon: "🏛️" },
  // { id: "gunung", label: "Gunung", icon: "⛰️" },
  { id: "customer", label: "Customer Photos", icon: "👥" },
];

export const galleryItems: GalleryItem[] = [
  // 🪨 Pulau Batu Berlayar
  { id: 1, category: "island", image: "/images/destinasi/batu-berlayar/batu-berlayar1.jpg", title: "Pulau Batu Berlayar" },
  { id: 2, category: "island", image: "/images/destinasi/batu-berlayar/batu-berlayar2.jpg", title: "Pulau Batu Berlayar" },
  { id: 3, category: "island", image: "/images/destinasi/batu-berlayar/batu-berlayar3.jpg", title: "Pulau Batu Berlayar" },
  { id: 4, category: "island", image: "/images/destinasi/batu-berlayar/batu-berlayar4.jpg", title: "Pulau Batu Berlayar" },
  { id: 5, category: "island", image: "/images/destinasi/batu-berlayar/batu-berlayar5.jpg", title: "Pulau Batu Berlayar" },
  { id: 6, category: "island", image: "/images/destinasi/batu-berlayar/batu-berlayar6.jpg", title: "Pulau Batu Berlayar" },
  { id: 7, category: "island", image: "/images/destinasi/batu-berlayar/batu-berlayar7.jpg", title: "Pulau Batu Berlayar" },

  // 🐦 Pulau Batu Burung
  { id: 8, category: "island", image: "/images/destinasi/batu-burung/batu-burung1.jpg", title: "Pulau Batu Burung" },
  { id: 9, category: "island", image: "/images/destinasi/batu-burung/batu-burung2.jpg", title: "Pulau Batu Burung" },
  { id: 10, category: "island", image: "/images/destinasi/batu-burung/batu-burung3.jpg", title: "Pulau Batu Burung" },
  { id: 11, category: "island", image: "/images/destinasi/batu-burung/batu-burung4.jpg", title: "Pulau Batu Burung" },
  { id: 12, category: "island", image: "/images/destinasi/batu-burung/batu-burung5.jpg", title: "Pulau Batu Burung" },

  // 🪶 Pulau Batu Garuda
  { id: 13, category: "island", image: "/images/destinasi/batu-garuda/garuda1.jpg", title: "Pulau Batu Garuda" },
  { id: 14, category: "island", image: "/images/destinasi/batu-garuda/garuda2.jpg", title: "Pulau Batu Garuda" },
  { id: 15, category: "island", image: "/images/destinasi/batu-garuda/garuda3.jpg", title: "Pulau Batu Garuda" },

  // 🏝️ Pulau Tukong Kik Mai
  { id: 16, category: "island", image: "/images/destinasi/kikmai/kikmai1.jpg", title: "Pulau Tukong Kik Mai" },
  { id: 17, category: "island", image: "/images/destinasi/kikmai/kikmai2.jpg", title: "Pulau Tukong Kik Mai" },
  { id: 18, category: "island", image: "/images/destinasi/kikmai/kikmai3.jpg", title: "Pulau Tukong Kik Mai" },
  { id: 19, category: "island", image: "/images/destinasi/kikmai/kikmai4.jpg", title: "Pulau Tukong Kik Mai" },
  { id: 20, category: "island", image: "/images/destinasi/kikmai/kikmai5.jpg", title: "Pulau Tukong Kik Mai" },
  { id: 21, category: "island", image: "/images/destinasi/kikmai/kikmai6.jpg", title: "Pulau Tukong Kik Mai" },

  // 🪸 Pulau Kelayang
  { id: 22, category: "island", image: "/images/destinasi/pulau-kelayang/kelayang1.jpg", title: "Pulau Kelayang" },
  { id: 23, category: "island", image: "/images/destinasi/pulau-kelayang/kelayang2.jpg", title: "Pulau Kelayang" },
  { id: 24, category: "island", image: "/images/destinasi/pulau-kelayang/kelayang3.jpg", title: "Pulau Kelayang" },
  { id: 25, category: "island", image: "/images/destinasi/pulau-kelayang/kelayang4.jpg", title: "Pulau Kelayang" },
  { id: 26, category: "island", image: "/images/destinasi/pulau-kelayang/kelayang5.jpg", title: "Pulau Kelayang" },

  // 🗼 Pulau Lengkuas
  { id: 27, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas1.jpg", title: "Pulau Lengkuas" },
  { id: 28, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas2.jpg", title: "Pulau Lengkuas" },
  { id: 29, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas3.jpg", title: "Pulau Lengkuas" },
  { id: 30, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas4.jpg", title: "Pulau Lengkuas" },
  { id: 31, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas5.jpg", title: "Pulau Lengkuas" },
  { id: 32, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas6.jpg", title: "Pulau Lengkuas" },
  { id: 33, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas7.jpg", title: "Pulau Lengkuas" },
  { id: 34, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas8.jpg", title: "Pulau Lengkuas" },
  { id: 35, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas9.jpg", title: "Pulau Lengkuas" },
  { id: 36, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas10.jpg", title: "Pulau Lengkuas" },
  { id: 37, category: "island", image: "/images/destinasi/pulau-lengkuas/pulau-lengkuas11.jpg", title: "Pulau Lengkuas" },

  // 🌊 Pantai Tanjung Tinggi
  { id: 38, category: "pantai", image: "/images/destinasi/tg-tinggi/tg-tinggi1.jpg", title: "Pantai Tanjung Tinggi" },
  { id: 39, category: "pantai", image: "/images/destinasi/tg-tinggi/tg-tinggi2.jpg", title: "Pantai Tanjung Tinggi" },
  { id: 40, category: "pantai", image: "/images/destinasi/tg-tinggi/tg-tinggi3.jpg", title: "Pantai Tanjung Tinggi" },
  { id: 41, category: "pantai", image: "/images/destinasi/tg-tinggi/tg-tinggi4.jpg", title: "Pantai Tanjung Tinggi" },
  { id: 42, category: "pantai", image: "/images/destinasi/tg-tinggi/tg-tinggi5.jpg", title: "Pantai Tanjung Tinggi" },

  // 🏫 Replika SD Laskar Pelangi
  { id: 43, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi1.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 44, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi2.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 45, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi3.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 46, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi4.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 47, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi5.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 48, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi6.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 49, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi7.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 50, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi8.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 51, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi9.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 52, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi10.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 53, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi11.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 54, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi12.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 55, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi13.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 56, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi14.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 57, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi15.jpg", title: "Replika SD Laskar Pelangi" },
  { id: 58, category: "budaya", image: "/images/destinasi/laskar-pelangi/laskar-pelangi16.jpg", title: "Replika SD Laskar Pelangi" },

  // 🏛️ Vihara Dewi Kwan In
  { id: 59, category: "budaya", image: "/images/destinasi/vihara/vihara2.jpg", title: "Vihara Dewi Kwan In" },
  { id: 60, category: "budaya", image: "/images/destinasi/vihara/vihara3.jpg", title: "Vihara Dewi Kwan In" },
  { id: 61, category: "budaya", image: "/images/destinasi/vihara/vihara4.jpg", title: "Vihara Dewi Kwan In" },
  { id: 62, category: "budaya", image: "/images/destinasi/vihara/vihara5.jpg", title: "Vihara Dewi Kwan In" },
  { id: 63, category: "budaya", image: "/images/destinasi/vihara/vihara6.jpg", title: "Vihara Dewi Kwan In" },
  { id: 64, category: "budaya", image: "/images/destinasi/vihara/vihara7.jpg", title: "Vihara Dewi Kwan In" },
  { id: 65, category: "budaya", image: "/images/destinasi/vihara/vihara9.jpg", title: "Vihara Dewi Kwan In" },
  { id: 66, category: "budaya", image: "/images/destinasi/vihara/vihara10.jpg", title: "Vihara Dewi Kwan In" },
  { id: 67, category: "budaya", image: "/images/destinasi/vihara/vihara11.jpg", title: "Vihara Dewi Kwan In" },
  { id: 68, category: "budaya", image: "/images/destinasi/vihara/vihara12.jpg", title: "Vihara Dewi Kwan In" },
  { id: 69, category: "budaya", image: "/images/destinasi/vihara/vihara13.jpg", title: "Vihara Dewi Kwan In" },
];

// Helper functions
export function getGalleryItemsByCategory(category: string): GalleryItem[] {
  if (category === "all") {
    return galleryItems;
  }
  return galleryItems.filter((item) => item.category === category);
}

export function getGalleryItemById(id: number): GalleryItem | undefined {
  return galleryItems.find((item) => item.id === id);
}
