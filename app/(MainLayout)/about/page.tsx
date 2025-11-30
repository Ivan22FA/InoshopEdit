"use client";
export const dynamic = "force-dynamic";  // ← WAJIB BIAR TIDAK DI STATIC EXPORT

import { Suspense } from "react";
import AboutClient from "./AboutClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AboutClient />
    </Suspense>
  );
}
