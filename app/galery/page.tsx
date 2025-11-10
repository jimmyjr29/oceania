"use client";

import { JSX, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { galleryItems, galleryCategories, getGalleryItemsByCategory, type GalleryItem, type GalleryCategory } from "@/lib/galery"; // pastikan path sesuai

type CategoryId = string;

export default function GaleriSection(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [visibleCount, setVisibleCount] = useState<number>(12); // pagination awal

  // ganti kategori → update filteredItems dan reset pagination
  const handleCategoryChange = (categoryId: CategoryId) => {
    setActiveCategory(categoryId);
    const newItems = getGalleryItemsByCategory(categoryId);
    setFilteredItems(newItems);
    setVisibleCount(12);
  };

  // memo: hanya ambil yang tampil di halaman sekarang
  const displayedItems = useMemo(() => filteredItems.slice(0, visibleCount), [filteredItems, visibleCount]);

  const handlePrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! + 1) % filteredItems.length);
  };

  const handleImageError = (itemId: number) => {
    setImageErrors((prev) => ({ ...prev, [itemId]: true }));
  };

  const handleLoadMore = () => setVisibleCount((p) => p + 12);

  return (
    <section id="galery" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      {/* background dekoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-28 h-28 bg-gradient-to-r from-oceania-sunset/10 to-blue-200/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-gradient-to-r from-blue-200/10 to-oceania-navy/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-8 mt-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-oceania-navy">Galeri Petualangan</h1>
          </div>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">Lihat momen-momen indah yang telah diabadikan dalam setiap perjalanan bersama kami</p>
        </motion.div>

        {/* Filter kategori */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-oceania-navy" />
            <span className="text-oceania-navy font-semibold">Kategori Filter:</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category: GalleryCategory, index: number) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category.id)}
                className={`group relative px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 border-2 backdrop-blur-sm
                  ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-oceania-sunset to-blue-900 text-white border-oceania-sunset shadow-lg shadow-oceania-sunset/30"
                      : "bg-white/80 text-oceania-navy border-white/50 hover:border-oceania-sunset/30 hover:bg-white/90 hover:shadow-md"
                  }`}
              >
                {activeCategory === category.id && <motion.div layoutId="activeGlow" className="absolute inset-0 bg-gradient-to-r from-oceania-sunset to-blue-900 rounded-full opacity-20 blur-lg" />}
                <div className="relative flex items-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg">{category.icon}</span>
                  <span>{category.label}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid (lazy + pagination) */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayedItems.map((item: GalleryItem, index: number) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative aspect-square bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="absolute inset-0">
                {imageErrors[item.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-oceania-sunset/20 via-blue-200/30 to-oceania-navy/20">
                    <div className="text-center">
                      <Eye className="w-12 h-12 text-oceania-navy/60 mx-auto mb-2" />
                      <p className="text-oceania-navy/80 font-medium text-sm px-4">{item.title}</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                    onError={() => handleImageError(item.id)}
                  />
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4">
                <div className="self-start bg-oceania-sunset/90 text-white text-xs px-3 py-1 rounded-full font-medium transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  {galleryCategories.find((cat) => cat.id === item.category)?.label}
                </div>

                <div className="self-center bg-white/50 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>

                <div className="self-stretch transform translate-y-[10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                  <p className="text-white font-medium text-sm text-center">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* tombol load more */}
        {visibleCount < filteredItems.length && (
          <div className="flex justify-center mt-10">
            <Button onClick={handleLoadMore} variant="secondary" className="px-6 py-3 rounded-full text-base font-medium shadow hover:shadow-md transition-all duration-300">
              Tampilkan Lebih Banyak
            </Button>
          </div>
        )}

        {/* modal optimized */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveIndex(null)}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 z-50 text-white bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110"
                aria-label="Foto Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <motion.div
                key={activeIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl w-full px-6 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <Card className="overflow-hidden rounded-2xl bg-white border-0 relative">
                  <button onClick={() => setActiveIndex(null)} className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 z-10">
                    <X className="w-4 h-4" />
                  </button>
                  <CardContent className="p-4">
                    {imageErrors[filteredItems[activeIndex!].id] ? (
                      <div className="flex items-center justify-center h-[70vh] bg-gradient-to-br from-oceania-sunset/20 via-blue-200/30 to-oceania-navy/20 rounded-xl">
                        <div className="text-center">
                          <Eye className="w-20 h-20 text-oceania-navy/60 mx-auto mb-4" />
                          <p className="text-oceania-navy/80 font-medium text-lg">{filteredItems[activeIndex!].title}</p>
                          <p className="text-oceania-navy/60 text-sm mt-2">Gambar tidak dapat dimuat</p>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={filteredItems[activeIndex!].image}
                        alt={filteredItems[activeIndex!].title}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="rounded-xl object-contain w-full h-auto max-h-[70vh] mx-auto"
                        onError={() => handleImageError(filteredItems[activeIndex!].id)}
                      />
                    )}
                    <p className="text-center text-black mt-4 text-lg font-medium">{filteredItems[activeIndex!].title}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 z-50 text-white bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110"
                aria-label="Foto Berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
