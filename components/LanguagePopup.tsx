"use client";

import { useState } from "react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: Record<string, unknown>, id: string) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export default function LanguagePopup() {
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    const frame = document.querySelector("iframe.goog-te-menu-frame") as HTMLIFrameElement | null;
    if (frame) {
      const frameDoc = frame.contentDocument || frame.contentWindow?.document;
      if (!frameDoc) return;

      const langBtn = Array.from(frameDoc.querySelectorAll<HTMLSpanElement>(".goog-te-menu2-item span.text")).find((el) => {
        const text = el.textContent?.toLowerCase() || "";
        return text.includes(lang.toLowerCase());
      });

      (langBtn as HTMLElement)?.click();
    }
    setOpen(false); // tutup popup
  };

  return (
    <div className="relative">
      {/* Tombol trigger → default 🇮🇩 */}
      <button onClick={() => setOpen(!open)} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow hover:scale-105 transition">
        <span className="text-2xl">🇮🇩</span>
      </button>

      {/* Popup pilihan bahasa */}
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-xl p-2 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
          <button onClick={() => changeLanguage("indonesian")} className="w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition">
            <span className="text-2xl">🇮🇩</span>
          </button>
          <button onClick={() => changeLanguage("english")} className="w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition">
            <span className="text-2xl">🇬🇧</span>
          </button>
        </div>
      )}
    </div>
  );
}
