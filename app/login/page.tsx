"use client";

import React from "react";
import Login from "@/components/LogIn";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  const password = useAppSelector((state) => state.authReducer.value.password);

  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const router = useRouter();

  React.useEffect(() => {
    if (isAuth) {
      router.push("/home");
    }
  }, [isAuth]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#0a133e]">
      <h1>Username: {username} </h1>
      <h1>Password: {password} </h1>
      <Login />
    </main>
  );
}
