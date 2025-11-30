"use client";
export const dynamic = "force-dynamic"; // rekomendasi untuk URL searchParams

import { Suspense } from "react";
import AboutClient from "./AboutClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutClient />
    </Suspense>
  );
}
