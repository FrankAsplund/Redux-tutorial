"use client";

import Login from "@/components/LogIn";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#0a133e]">
      <h1>Username: {username} </h1>
      <Login />
    </main>
  );
}
