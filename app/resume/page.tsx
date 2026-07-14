"use client";

import Link from "next/link";

import Resume from "@/sections/Resume";

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <header className="flex w-full items-center justify-between px-5 py-6 md:px-20">
        <Link href="/" className="text-xl font-semibold text-white">
          Pratik
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white-50 transition-colors hover:text-white"
        >
          <span aria-hidden="true">←</span> Back to home
        </Link>
      </header>

      <Resume />
    </main>
  );
}
