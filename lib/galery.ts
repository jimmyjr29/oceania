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
  { id: "budaya", label: "Budaya", icon: "🏛️" },
  { id: "gunung", label: "Gunung", icon: "⛰️" },
  { id: "customer", label: "Customer Photos", icon: "👥" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "pantai",
    image: "/images/galery/pantai-sunset.jpg",
    title: "Sunset di Tanjung Tinggi",
  },
  {
    id: 2,
    category: "island",
    image: "/images/galery/pulau-lengkuas.jpg",
    title: "Pulau Lengkuas",
  },
  {
    id: 3,
    category: "kuliner",
    image: "/images/galery/seafood-fresh.jpg",
    title: "Seafood Fresh",
  },
  {
    id: 4,
    category: "budaya",
    image: "/images/galery/museum-kata.jpg",
    title: "Museum Kata",
  },
  {
    id: 5,
    category: "customer",
    image: "/images/galery/happy-travelers.jpg",
    title: "Happy Travelers",
  },
  {
    id: 6,
    category: "pantai",
    image: "/images/galery/pantai-kelayang.jpg",
    title: "Pantai Kelayang",
  },
  {
    id: 7,
    category: "island",
    image: "/images/galery/hopping-adventure.jpg",
    title: "Hopping Adventure",
  },
  {
    id: 8,
    category: "customer",
    image: "/images/galery/family-trip.jpg",
    title: "Family Trip",
  },
  {
    id: 9,
    category: "gunung",
    image: "/images/galery/gunung-tajam.jpg",
    title: "Puncak Gunung Tajam",
  },
  {
    id: 10,
    category: "gunung",
    image: "/images/galery/gunung-tajam2.jpg",
    title: "Sunrise di Gunung Tajam",
  },
  {
    id: 11,
    category: "gunung",
    image: "/images/galery/gunung-begandi.jpg",
    title: "Pendakian Gunung Begandi",
  },
  {
    id: 12,
    category: "gunung",
    image: "/images/galery/batu-baginda.jpg",
    title: "Pemandangan dari Puncak Batu Baginda",
  },
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
