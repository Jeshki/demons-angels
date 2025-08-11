"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            Demonai & Archangelai
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/demons" className="hover:text-red-400">
              Demonai
            </Link>
            <Link href="/archangels" className="hover:text-yellow-300">
              Archangelai
            </Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/demons"
              className="block hover:text-red-400"
              onClick={() => setOpen(false)}
            >
              Demonai
            </Link>
            <Link
              href="/archangels"
              className="block hover:text-yellow-300"
              onClick={() => setOpen(false)}
            >
              Archangelai
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

