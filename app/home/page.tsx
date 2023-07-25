"use client";

import React from "react";
import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Login() {
  const username = useAppSelector((state) => state.authReducer.value.username);

  const dispatch = useDispatch<AppDispatch>();

  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const router = useRouter();

  React.useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, [!isAuth]);

  const onClickLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container px-4  items-center justify-between">
          <div className="bg-[#1f2f6b] rounded-md mt-4 border-white sm:p-8 sm:mx-8 py-8">
            <h2 className="flex justify-center text-3xl mt-4 mb-6 font-bold tracking-tight text-white sm:text-4xl">
              Welcome {username}
            </h2>

            <div className="flex-col items-center mt-2">
              <button
                type="button"
                className="w-24 mx-2 p-2 rounded-md border-white bg-[#0a1642]"
                onClick={onClickLogOut}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
