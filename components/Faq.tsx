import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BorderBeam } from "./magicui/border-beam";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Bagaimana cara memesan paket wisata di Oceania Travel?",
    answer: "Anda bisa memesan langsung melalui website dengan memilih paket yang tersedia, atau menghubungi tim kami via WhatsApp untuk custom trip sesuai kebutuhan.",
  },
  {
    question: "Apa saja metode pembayaran yang tersedia?",
    answer: "Kami menerima pembayaran melalui transfer bank, e-wallet populer (OVO, Dana, GoPay), dan juga pembayaran tunai saat bertemu di lokasi (cash on delivery).",
  },
  {
    question: "Apakah harga sudah termasuk transportasi dan makan?",
    answer: "Ya, sebagian besar paket sudah termasuk transportasi lokal, makan siang, tiket masuk destinasi, serta pemandu wisata. Detail lengkap bisa dilihat di setiap deskripsi paket.",
  },
  {
    question: "Bisakah saya request paket custom sesuai kebutuhan?",
    answer: "Tentu bisa! Anda dapat menentukan destinasi, jumlah hari, dan aktivitas yang diinginkan. Tim kami akan menyesuaikan paket khusus untuk Anda.",
  },
  {
    question: "Bagaimana jika cuaca buruk saat jadwal perjalanan?",
    answer: "Keamanan dan kenyamanan Anda adalah prioritas kami. Jika kondisi cuaca tidak memungkinkan, jadwal akan diatur ulang atau dialihkan ke destinasi alternatif yang aman.",
  },
  {
    question: "Apakah ada layanan customer support selama perjalanan?",
    answer: "Ya, tim support kami siap membantu 24/7. Anda bisa menghubungi kami kapan saja jika ada kendala sebelum, selama, maupun setelah perjalanan.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-blue-950 text-4xl md:text-5xl font-bold mb-4">Pertanyaan Umum</h2>
          <p className="text-slate-600 text-lg">Jawaban cepat untuk pertanyaan yang sering diajukan pada kami.</p>
        </motion.div>

        {/* Kotak Pembungkus + BorderBeam */}
        <div className="relative rounded-2xl border border-border bg-background shadow-sm p-6 sm:p-8 space-y-4 overflow-hidden">
          {/* Border Beam efek */}
          <BorderBeam duration={6} size={400} borderWidth={1} className="from-transparent via-orange-500 to-transparent" />
          <BorderBeam duration={6} delay={3} size={400} borderWidth={1} className="from-transparent via-blue-900 to-transparent" />

          <Accordion type="single" collapsible className="w-full relative z-10">
            {faqs.map(({ question, answer }) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger className="flex items-start gap-2 text-left">
                  <span className="text-blue-950 text-lg text-start">{question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600  ">{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
