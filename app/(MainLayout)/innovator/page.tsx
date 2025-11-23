"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const EXPERTS = [
  {
    id: 1,
    name: "Ipi Santoso",
    title: "AI & Computer Vision Expert",
    org: "IPI Singapore",
    location: "Singapore",
    expertise: ["Computer Vision", "Deep Learning", "ML Ops"],
    avatar: "/images/Innovator1.png",
    bio: "15+ years building production computer vision pipelines for industrial and retail use-cases.",
    contact: "ipi@ipi.sg",
  },
  {
    id: 2,
    name: "Siti Rahma",
    title: "IoT & Embedded Systems",
    org: "Tech Nusantara",
    location: "Surabaya, ID",
    expertise: ["IoT", "Hardware Integration", "Edge AI"],
    avatar: "/images/expert2.jpg",
    bio: "Works at the intersection of hardware and AI — deploying resilient edge solutions.",
    contact: "siti@technus.co.id",
  },
  {
    id: 3,
    name: "Dr. Ahmad",
    title: "Sustainable Materials Researcher",
    org: "Univ. of East Java",
    location: "Surabaya, ID",
    expertise: ["Materials", "Sustainability", "R&D"],
    avatar: "/images/expert3.jpg",
    bio: "Research lead focusing on eco-friendly materials and circular-economy design.",
    contact: "ahmad@univ-ju.ac.id",
  },
  {
    id: 4,
    name: "Claire Lim",
    title: "Product Designer & UX",
    org: "DesignHub",
    location: "Singapore",
    expertise: ["UX", "Service Design", "Research"],
    avatar: "/images/expert4.jpg",
    bio: "Design leader crafting user-centred products used by millions.",
    contact: "claire@designhub.sg",
  },
];

export default function ExpertisePage() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [sort, setSort] = useState<"relevance" | "name">("relevance");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    EXPERTS.forEach((e) => e.expertise.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    let list = EXPERTS.slice();
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.title.toLowerCase().includes(q) ||
          e.expertise.join(" ").toLowerCase().includes(q) ||
          e.org.toLowerCase().includes(q)
      );
    }
    if (selectedTag) list = list.filter((e) => e.expertise.includes(selectedTag));
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [query, selectedTag, sort]);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">

      {/* HERO SECTION */}
      <section className="relative w-full h-[330px] md:h-[420px] overflow-hidden">
        <Image
          src="/images/Acer1.jpg"
          alt="Innovation Experts"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-xl">
            Meet Our Innovator Experts
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
            Top innovators, researchers, designers, and technical leaders who drive transformation.
          </p>
        </div>
      </section>

      {/* WRAPPER LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ===================== */}
        {/* SIDEBAR (Modern BRIDA) */}
        {/* ===================== */}
        <aside className="md:col-span-1">
  <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 w-full">

    <h3 className="text-lg font-bold text-teal-700 mb-4">Pencarian & Filter</h3>

    {/* SEARCH */}
    <div>
      <label className="text-sm font-medium text-slate-700">Cari Inovator</label>
      <input
        type="search"
        placeholder="Cari inovator..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mt-1 rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-teal-300"
      />
    </div>

    {/* SORTING */}
    <div className="mt-5">
      <label className="text-sm font-medium text-slate-700">Urutkan</label>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value as any)}
        className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2"
      >
        <option value="relevance">Relevansi</option>
        <option value="name">Nama</option>
      </select>
    </div>

    {/* TAGS */}
    <div className="mt-6">
      <label className="text-sm font-medium text-slate-700">Bidang Keahlian</label>

      <div className="flex flex-wrap gap-2 mt-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 text-sm rounded-full border ${
            !selectedTag ? "bg-teal-600 text-white" : "bg-white text-slate-700"
          }`}
        >
          Semua
        </button>

        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedTag((s) => (s === t ? null : t))}
            className={`px-3 py-1 text-sm rounded-full border ${
              selectedTag === t ? "bg-teal-600 text-white" : "bg-white text-slate-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>

  </div>
</aside>


        {/* ===================== */}
        {/* RIGHT CONTENT */}
        {/* ===================== */}
        <main className="md:col-span-3">

          {/* Header Text */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700">
            Discover Innovator Experts
          </h2>

          <p className="mt-2 text-slate-600 max-w-2xl text-justify leading-relaxed">
            Perusahaan yang membutuhkan keahlian teknis untuk meningkatkan atau melengkapi
            kapasitas internal dapat memperluas jaringan mereka melalui para inovator dan
            pakar teknologi yang dikurasi oleh BRIDA Jatim. Melalui platform ini, pelaku
            usaha dapat terhubung dengan para ahli berpengalaman dari berbagai sektor dan
            bidang keahlian. Para innovator BRIDA Jatim siap memberikan konsultasi,
            berbagi solusi, serta membantu menyelesaikan tantangan teknis dalam proses
            pengembangan produk dan inovasi.
          </p>

          {/* GRID */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((e) => (
              <article
                key={e.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer"
                onClick={() => setSelected(e.id)}
              >
                <div className="relative aspect-3/4 w-full">
                  <Image src={e.avatar} alt={e.name} fill className="object-cover" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{e.name}</h3>
                  <p className="text-sm text-slate-500">{e.title}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.expertise.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 line-clamp-2">
                    {e.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      {/* MODAL */}
      {selected !== null && (
        <ProfileModal
          expert={EXPERTS.find((x) => x.id === selected)!}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

function ProfileModal({ expert, onClose }: { expert: any; onClose: () => void }) {
  if (!expert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full overflow-hidden">
        <div className="relative h-44 w-full">
          <Image src={expert.avatar} alt={expert.name} fill className="object-cover" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden shadow">
              <Image src={expert.avatar} alt={expert.name} width={64} height={64} />
            </div>

            <div>
              <h3 className="text-xl font-semibold">{expert.name}</h3>
              <p className="text-sm text-slate-500">
                {expert.title} • {expert.org}
              </p>
            </div>
          </div>

          <p className="mt-4 text-slate-700">{expert.bio}</p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={`mailto:${expert.contact}`}
              className="px-4 py-2 rounded-lg bg-teal-600 text-white"
            >
              Email
            </a>
            <a href="#" className="px-4 py-2 rounded-lg border border-slate-200">
              Request Consultation
            </a>

            <button onClick={onClose} className="ml-auto text-sm text-slate-500">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
