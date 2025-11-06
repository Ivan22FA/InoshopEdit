"use client"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image (opsional, ganti sesuai kebutuhan) */}
      <Image
        src="/hero-bg.jpg" // ganti dengan file hero kamu
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Orange Transparent Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 text-center text-orange-600 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Selamat Datang
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Temukan berbagai informasi dan katalog terbaru hanya di Inoshop.
        </p>
      </div>
    </section>
  )
}
