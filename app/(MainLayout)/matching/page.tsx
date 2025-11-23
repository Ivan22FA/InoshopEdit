"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function InovasiMatchingPage() {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION (Layered Mockup - Style A) ================= */}
      <section className="relative w-full bg-linear-to-br from-[#031A26] via-[#053B44] to-[#0A6C71] text-white overflow-hidden">
        {/* Large soft circle background for depth */}
        <div className="absolute -right-40 -top-40 w-[780px] h-[780px] bg-[#37B8C3]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-56 -bottom-60 w-[560px] h-[560px] bg-[#0A6C71]/12 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">

          {/* LEFT: text + actions */}
          <div className="pr-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Sistem Pencocokan Inovasi
            </h1>
            <h2 className="text-xl text-[#C4F1F6] mb-6">Menghubungkan kebutuhan industri dengan inovasi terverifikasi</h2>

            <p className="text-lg text-[#E2FAFD] max-w-md leading-relaxed">
              Analisis kebutuhan, pencocokan berbasis atribut teknologi & kategori, dan rekomendasi yang mudah ditindaklanjuti semua dalam satu platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/sistempencocokan" className="block">
                <Button className="bg-[#37B8C3] text-[#031A26] font-semibold hover:bg-[#4CD6DF] px-6 py-4 rounded-lg">
                  Mulai Pencocokan
                </Button>
              </Link>

              <Link href="/innovation" className="block">
                <Button variant="outline" className="border-[#C4F1F6] text-white hover:bg-white/10 px-6 py-4 rounded-lg">
                  Daftarkan Inovasi
                </Button>
              </Link>
            </div>

            {/* small feature chips below text */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-3 py-1 text-sm bg-[#031A26]/30 border border-[#37B8C3]/20 rounded-full">Analisis Kebutuhan</span>
              <span className="px-3 py-1 text-sm bg-[#031A26]/30 border border-[#37B8C3]/20 rounded-full">Database Inovasi</span>
              <span className="px-3 py-1 text-sm bg-[#031A26]/30 border border-[#37B8C3]/20 rounded-full">Rekomendasi Tepat</span>
            </div>
          </div>

          {/* RIGHT: layered mockups */}
          <div className="relative w-full flex justify-center md:justify-end items-center">
            <div className="relative w-[620px] h-[420px] md:w-[760px] md:h-[480px]">
              {/* BACK LAYER - large blurred UI */}
              <div className="absolute left-4 top-0 w-[620px] h-[340px] md:w-[700px] md:h-[360px] transform -rotate-2 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                <Image
                  src="/images/News.png"
                  alt="Mockup Back - dashboard"
                  fill
                  style={{ objectFit: "cover" }}
                  className="opacity-85"
                />
              </div>

              {/* MIDDLE LAYER - chart */}
              <div className="absolute right-8 top-10 w-[520px] h-[300px] md:w-[560px] md:h-80 transform rotate-1 rounded-2xl overflow-hidden shadow-2xl border border-white/8">
                <Image
                  src="/images/Carosel1.jpg"
                  alt="Mockup Middle - chart"
                  fill
                  style={{ objectFit: "cover" }}
                  className="opacity-95"
                />
              </div>

              {/* FRONT LAYER - main monitor / map (largest & centered) */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-[560px] h-[300px] md:w-[620px] md:h-[350px] transform translate-y-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/images/marketplace.png"
                  alt="Mockup Front - monitor"
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-top"
                />
                {/* subtle frame (simulating monitor base) */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-7 w-[220px] h-12 rounded-b-xl bg-[#031A26]/70 shadow-lg border border-white/5" />
              </div>

              {/* decorative small dots */}
              <div className="absolute right-24 top-6 w-3 h-3 bg-[#C4F1F6]/70 rounded-full blur-sm" />
              <div className="absolute right-12 bottom-12 w-4 h-4 bg-[#37B8C3]/50 rounded-full blur-sm" />
            </div>
          </div>
        </div>

        {/* bottom wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 220"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,128L60,138.7C120,149,240,171,360,176C480,181,600,171,720,149.3C840,128,960,96,1080,85.3C1200,75,1320,85,1380,90.7L1440,96V320H0Z"
          />
        </svg>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#053B44]">Apa Itu Inovasi Matching?</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Inovasi Matching adalah fitur yang menghubungkan kebutuhan industri
            dengan inovasi yang tersedia di katalog kami. Dengan sistem cerdas,
            kebutuhan industri dapat dicocokkan dengan solusi inovatif yang paling relevan.
          </p>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20 bg-[#F4FBFC]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#053B44] mb-14">
            Fitur Utama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-6 bg-white rounded-xl shadow text-center border border-[#0A6C71]/10">
              <h3 className="text-xl font-semibold mb-3 text-[#0A6C71]">Analisis Kebutuhan</h3>
              <p className="text-gray-600">
                Sistem mengurai kebutuhan industri dan memetakan karakteristik solusinya.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow text-center border border-[#0A6C71]/10">
              <h3 className="text-xl font-semibold mb-3 text-[#0A6C71]">Database Inovasi</h3>
              <p className="text-gray-600">
                Ribuan inovasi terverifikasi siap dicocokkan berdasarkan kategori dan teknologi.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow text-center border border-[#0A6C71]/10">
              <h3 className="text-xl font-semibold mb-3 text-[#0A6C71]">Rekomendasi Tepat</h3>
              <p className="text-gray-600">
                Sistem memberikan daftar inovasi paling relevan dalam hitungan detik.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#053B44] mb-14">
            Cara Kerja Sistem Pencocokan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

            <div>
              <div className="text-4xl font-bold text-[#0A6C71] mb-4">1</div>
              <h3 className="font-semibold text-xl">Input Kebutuhan</h3>
              <p className="mt-2 text-gray-600">
                Industri mengisi form kebutuhan solusi.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-[#0A6C71] mb-4">2</div>
              <h3 className="font-semibold text-xl">Analisis Sistem</h3>
              <p className="mt-2 text-gray-600">
                Sistem memetakan karakteristik kebutuhan secara otomatis.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-[#0A6C71] mb-4">3</div>
              <h3 className="font-semibold text-xl">Pencocokan Data</h3>
              <p className="mt-2 text-gray-600">
                Sistem membandingkan kebutuhan dengan database inovasi.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-[#0A6C71] mb-4">4</div>
              <h3 className="font-semibold text-xl">Rekomendasi</h3>
              <p className="mt-2 text-gray-600">
                Hasil rekomendasi inovasi yang paling sesuai.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-[#053B44] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Mulai Hubungkan Kebutuhan Anda
          </h2>

          <p className="text-lg text-[#C4F1F6] mb-10">
            Baik Anda industri atau inovator—sistem pencocokan siap mempercepat kolaborasi inovasi.
          </p>

          <Link href="/matching">
            <Button className="bg-[#37B8C3] text-[#031A26] font-bold px-8 py-4 text-lg hover:bg-[#4CD6DF]">
              Gunakan Sistem Pencocokan
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
