"use client";

import Image from "next/image";
import Link from "next/link";

// Helper function to show "time ago"
function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (let i in intervals) {
    const count = Math.floor(seconds / intervals[i]);
    if (count >= 1) return `${count} ${i}${count > 1 ? "s" : ""} ago`;
  }

  return "Just now";
}

export default function ResearchPage() {
  // Dummy Data with Authors
  const mainArticle = {
    title: "East Java Leads the Way in Sustainable Innovation",
    image: "/images/sample1.jpg",
    description:
      "Discover how East Java's research institutions are pioneering sustainable technology and green initiatives.",
    uploadedAt: "2025-11-15T08:00:00Z",
    author: "John Alexander",
  };

  const articles = [
    {
      id: 1,
      title: "Local Startups Drive Renewable Energy Solutions",
      image: "/images/sample2.jpg",
      uploadedAt: "2025-11-16T10:30:00Z",
      author: "Maria Putri",
    },
    {
      id: 2,
      title: "University Researchers Develop Eco-Friendly Materials",
      image: "/images/sample3.jpg",
      uploadedAt: "2025-11-17T12:00:00Z",
      author: "Dr. Samuel Hartono",
    },
    {
      id: 3,
      title: "Innovation Hubs in Surabaya Encourage Tech Growth",
      image: "/images/sample4.jpg",
      uploadedAt: "2025-11-17T14:20:00Z",
      author: "Alyssa Nur",
    },
  ];

  const latestArticles = [
    {
      id: 1,
      title: "East Java Government Launches Science Funding Program",
      image: "/images/sample5.jpg",
      uploadedAt: "2025-11-18T07:00:00Z",
      author: "Michael Adrian",
    },
    {
      id: 2,
      title: "Collaborations Between Universities and Industry on AI Research",
      image: "/images/sample6.jpg",
      uploadedAt: "2025-11-18T09:15:00Z",
      author: "Nadia Rahma",
    },
  ];

  const videoNews = [
    {
      id: 1,
      title: "Interview with Leading Researchers in East Java",
      image: "/images/sample7.jpg",
      uploadedAt: "2025-11-16T16:00:00Z",
      author: "Ricky Santoso",
    },
    {
      id: 2,
      title: "Top Innovations Emerging From Local Universities",
      image: "/images/sample8.jpg",
      uploadedAt: "2025-11-17T11:00:00Z",
      author: "Clara Widjaya",
    },
  ];

  return (
    <div className="w-full bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative w-full h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden">
        <Image
          src="/images/News.png"
          alt="Innovation News Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
            BRIDA News Research & Innovation
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Stay informed on the latest research breakthroughs and innovative projects from East Java.
          </p>
          <Link href="/news/explore">
            <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md">
              Explore Articles
            </button>
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="px-4 md:px-8 py-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE CONTENT */}
        <div className="lg:col-span-2 space-y-10">

          {/* MAIN ARTICLE */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <Image
              src={mainArticle.image}
              alt="Main Article"
              width={1200}
              height={700}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-6">
              <h1 className="text-2xl font-bold mb-1">{mainArticle.title}</h1>

              {/* author + date */}
              <p className="text-gray-400 text-sm mb-1">
                By <span className="text-gray-600 font-medium">{mainArticle.author}</span>
              </p>

              <p className="text-gray-400 text-xs mb-3">{timeAgo(mainArticle.uploadedAt)}</p>

              <p className="text-gray-600">{mainArticle.description}</p>
            </div>
          </div>

          {/* GRID ARTICLES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-[180px] object-cover"
                />

                <div className="p-4">
                  <h2 className="font-semibold text-lg">{item.title}</h2>

                  {/* author */}
                  <p className="text-gray-500 text-sm">
                    By {item.author}
                  </p>

                  <p className="text-gray-400 text-xs">{timeAgo(item.uploadedAt)}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* SIDEBAR RIGHT */}
        <div className="space-y-10">

          {/* Latest Articles */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h3 className="font-bold text-xl mb-4">Latest Articles</h3>

            <div className="space-y-4">
              {latestArticles.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={90}
                    height={60}
                    className="rounded-md w-24 h-16 object-cover"
                  />

                  <div>
                    <p className="text-sm font-medium leading-tight">{item.title}</p>

                    {/* author */}
                    <p className="text-xs text-gray-500">By {item.author}</p>

                    <p className="text-xs text-gray-400">{timeAgo(item.uploadedAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News in Video */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h3 className="font-bold text-xl mb-4">News in Video</h3>

            <div className="space-y-4">
              {videoNews.map((item) => (
                <div key={item.id} className="space-y-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={260}
                    className="rounded-md w-full h-40 object-cover"
                  />

                  <p className="font-medium text-sm">{item.title}</p>

                  {/* author */}
                  <p className="text-xs text-gray-500">By {item.author}</p>

                  <p className="text-xs text-gray-400">{timeAgo(item.uploadedAt)}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
