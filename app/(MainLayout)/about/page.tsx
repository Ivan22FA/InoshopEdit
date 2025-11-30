"use client";                      // ← tambahkan ini!

import { Suspense } from "react";
import AboutClient from "./AboutClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-lg font-medium">Loading...</div>}>
      <AboutClient />               {/* useSearchParams() aman karena sudah dalam boundary */}
    </Suspense>
  );
}
