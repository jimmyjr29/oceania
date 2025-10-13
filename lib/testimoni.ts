export interface Testimoni {
  name: string;
  origin: string;
  package: string;
  rating: number;
  comment: string;
  description: string;
  image: string;
}

export const testimonials: Testimoni[] = [
  {
    name: "Leonel Messi",
    origin: "Argentina",
    package: "Paket 3D2N Belitung",
    rating: 5,
    comment: "Liburan bersama Oceania benar-benar tak terlupakan!",
    description: "Semua destinasi sesuai ekspektasi, guide ramah, dan pelayanan sangat profesional. Sangat puas dan pasti akan merekomendasikan kepada teman-teman.",
    image: "/images/testimoni/messi.jpeg",
  },
  {
    name: "Pevita Pearce",
    origin: "Jakarta",
    package: "Paket 2D1N Belitung",
    rating: 4,
    comment: "Paketnya worth it banget, terutama Pulau Lengkuas.",
    description: "Makanannya enak dan jadwal padat tapi seru. Cocok untuk liburan singkat dengan keluarga.",
    image: "/images/testimoni/pevita.jpeg",
  },
  {
    name: "Cristiano Ronaldo",
    origin: "Portugal",
    package: "Private Trip Belitung",
    rating: 5,
    comment: "Excellent service from Oceania Travel.",
    description: "Very professional team, I felt safe and well taken care of during the trip. Highly recommend to anyone visiting Belitung.",
    image: "/images/testimoni/ronaldo.jpeg",
  },
  {
    name: "Jennifer Bachdim",
    origin: "Jakarta",
    package: "Paket 4D3N Belitung",
    rating: 5,
    comment: "An amazing experience with Oceania Travel!",
    description: "The itinerary was perfect, the guides were knowledgeable and friendly, and every detail was taken care of. I can't wait to book my next trip with them.",
    image: "/images/testimoni/jennifer.jpeg",
  },
];
