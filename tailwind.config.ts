import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF6EF", // krem lembut
        foreground: "#1B1B1B", // teks utama
        oceania: {
          navy: "#0A3D62", // biru navy
          sunset: "#F2994A", // oranye gradasi
          sun: "#F2C94C", // kuning sunset
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
