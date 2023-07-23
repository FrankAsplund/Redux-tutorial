"use client";

import Link from "next/link";

export default function Start() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#0a133e]">
      <div>
        <h1>Welcome</h1>
        <Link href="/login"> Log In</Link>
      </div>
    </main>
  );
}
