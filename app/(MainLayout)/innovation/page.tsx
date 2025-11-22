"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Mock data
const mockData = [
  { id: 1, title: "AI Assistant", desc: "Membantu otomatisasi pekerjaan dengan AI.", category: "Technology", image: "/images/Acer1.jpg" },
  { id: 2, title: "Smart Farming", desc: "Pertanian presisi dengan sensor IoT.", category: "Agriculture", image: "/images/Acer2.jpg" },
  { id: 3, title: "Solar Energy Grid", desc: "Energi terbarukan berbasis panel surya.", category: "Energy", image: "/images/Acer1.jpg" },
  { id: 4, title: "FinTech Analytics", desc: "Analitik keuangan untuk UMKM.", category: "Finance", image: "/images/Acer2.jpg" },
  { id: 5, title: "Urban Mobility", desc: "Transportasi ramah lingkungan di perkotaan.", category: "Transportation", image: "/images/Acer1.jpg" },
  { id: 6, title: "Healthcare IoT", desc: "Pemantauan kesehatan jarak jauh.", category: "Health", image: "/images/Acer2.jpg" },
  { id: 7, title: "Eco Packaging", desc: "Kemasan biodegradable ramah lingkungan.", category: "Environment", image: "/images/Acer1.jpg" },
  { id: 8, title: "Neural Computing", desc: "Pemrosesan data besar dengan jaringan saraf.", category: "Technology", image: "/images/Acer2.jpg" },
];

const categories = [
  "All",
  "Technology",
  "Agriculture",
  "Energy",
  "Finance",
  "Transportation",
  "Health",
  "Environment",
];

function ListItem({ title, children, href }: any) {
  return (
    <li className="mb-2">
      <Link
        href={href}
        className="block p-2 rounded hover:bg-gray-100 transition"
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="text-muted-foreground text-sm line-clamp-2 leading-snug">
          {children}
        </p>
      </Link>
    </li>
  );
}

export default function TechOffersPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [openCat, setOpenCat] = useState(false);

  const filteredData = mockData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category)
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
        <Image
          src="/images/Acer1.jpg"
          alt="Innovation Cover"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
            INNOVATION MARKETPLACE
          </h1>
          <p>Explore curated innovations, find the right matches, and access funding in our Innovation Marketplace.</p>
        </div>
      </section>

      {/* CONTENT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 md:px-0 flex gap-8 mt-10 mb-20">

        {/* ======================= SIDEBAR FIXED (STICKY) ======================= */}
        <aside
          className="hidden md:flex flex-col w-72 shrink-0 bg-white p-6 shadow rounded-lg 
          sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto"
        >
          <h3 className="font-semibold mb-4">Innovation Marketplace</h3>

          <ul className="grid gap-2 mb-6">
            <ListItem href="/innovation" title="Approved Innovations">
              Katalog inovasi terbaru
            </ListItem>
            <ListItem href="/matching" title="Innovation Matching">
              Sistem pencocokan inovasi
            </ListItem>
            <ListItem href="/funding" title="Innovation Funding">
              Informasi pendanaan dan program akselerasi
            </ListItem>
          </ul>

          {/* SEARCH */}
          <Input
            placeholder="Search keywords…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4"
          />

          {/* CATEGORY DROPDOWN BESAR */}
          <div className="border rounded-md">
            <button
              className="w-full flex justify-between p-2 text-sm"
              onClick={() => setOpenCat(!openCat)}
            >
              <span>Categories</span>
              <span>▾</span>
            </button>

            {openCat && (
              <div className="max-h-64 overflow-y-auto border-t p-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 py-1">
                    <input
                      type="radio"
                      name="cat"
                      value={cat}
                      checked={category === cat}
                      onChange={() => setCategory(cat)}
                    />
                    <span className="text-sm">{cat}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* RESET BUTTON */}
          <Button
            variant="secondary"
            className="mt-3 w-full"
            onClick={() => {
              setSearch("");
              setCategory("All");
            }}
          >
            Reset
          </Button>
        </aside>

        {/* ======================= RIGHT CONTENT ======================= */}
        <div className="w-full md:w-3/4">
          {/* TEXT SECTION */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Approved Innovation
            </h2>

            <p className="text-gray-700 leading-relaxed max-w-3xl text-justify">
              Approved Innovation is a curated catalog of innovations that have successfully passed the assessment 
              and verification process conducted by BRIDA Jawa Timur. 
              These innovations have been evaluated for quality, feasibility, impact, and readiness for adoption. Each listed innovation has met the standards required to be recognized as a reliable and implementable solution. 
              This catalog serves as a trusted reference for stakeholders, providing access to proven ideas that can be applied, replicated, or scaled across various sectors. By exploring Approved Innovations, users can confidently discover high-quality solutions that have demonstrated real potential to support regional development and public innovation initiatives.
            </p>

            <p className="text-gray-700 leading-relaxed max-w-3xl mt-4">
              By exploring Approved Innovations, users can confidently discover solutions that deliver measurable results.
            </p>
          </div>

          {/* GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {filteredData.length === 0 ? (
    <p className="text-gray-500">No tech offers found.</p>
  ) : (
    filteredData.map((item) => (
      <Link
        key={item.id}
        href={`/innovation/${item.id}`}   // <-- pergi ke halaman baru
        className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition block"
      >
        <div className="relative w-full h-56">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{item.category}</p>
          <p className="text-gray-700 text-sm">{item.desc}</p>
        </div>
      </Link>
    ))
  )}
</div>
        </div>
      </section>
    </main>
  );
}
