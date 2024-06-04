'use client'

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center text-center text-2xl">
      <div>
        <h1>Welcome in</h1>
        <h1>Flip Transaction Test</h1>
      </div>
    </main>
  );
}
