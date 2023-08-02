"use client";

import Link from "next/link";

export default function Start() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#0a133e]">
      <div>
        <h2 className="flex justify-center text-3xl mt-4 mb-6 font-bold tracking-tight text-white sm:text-4xl">
          Welcome! Please log in, or create an account.
        </h2>
        <Link
          className="w-24 mt-4 p-2 rounded-md border-white bg-[#354685]"
          href="/login"
        >
          {" "}
          Log In
        </Link>

        <Link
          className="w-24 mx-2 p-2 rounded-md border-white bg-[#354685]"
          href="/signup"
        >
          {" "}
          Sign Up
        </Link>
      </div>
    </main>
  );
}
