import Image from "next/image";
import Login from "@/components/LogIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#0a133e]">
      <Login />
    </main>
  );
}
