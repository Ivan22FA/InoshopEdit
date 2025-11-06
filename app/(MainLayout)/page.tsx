"use client";

import About from "@/components/About";
import { CarouselComponent } from "@/components/Carousel";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <CarouselComponent />
        <About />
        <Section1 />
      </main>
    </div>
  );
}