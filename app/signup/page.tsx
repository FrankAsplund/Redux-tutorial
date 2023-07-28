"use client";

import React from "react";
import SignUp from "@/components/SignUp";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  const password = useAppSelector((state) => state.authReducer.value.password);

  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#0a133e]">
      <h1>Username: {username} </h1>
      <h1>Password: {password} </h1>
      <SignUp />
    </main>
  );
}
