"use client";

import React from "react";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");

  const onClickLogIn = () => {};

  const onClickToggle = () => {};

  const onClickLogOut = () => {};
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container px-4  items-center justify-between">
          <div className="bg-[#1f2f6b] rounded-md mt-4 border-white sm:p-8 sm:mx-8 py-8">
            <h2 className="flex justify-center text-3xl mt-4 mb-6 font-bold tracking-tight text-white sm:text-4xl">
              Please log in
            </h2>

            <label>
              <span className="my-2 block text-xl font-medium text-white-700">
                Username
              </span>
            </label>
            <input
              className="h-8 w-64 md:w-96 sm:p-2 text-black"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>
              <span className="mt-2 block text-xl font-medium text-white-700">
                Password
              </span>
            </label>
            <input className="h-8 w-64 md:w-96 sm:p-2 text-black" />

            <div className="flex-col items-center mt-2">
              <button
                type="button"
                className="w-24 mt-2 p-2 rounded-md border-white bg-[#0a1642]"
              >
                Log in
              </button>
              <button
                type="button"
                className="w-24 mx-2 p-2 rounded-md border-white bg-[#0a1642]"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
