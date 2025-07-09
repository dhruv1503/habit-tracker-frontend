"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          HabitAI
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {/* <Link href="/features" className="hover:text-blue-600">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/support" className="hover:text-blue-600">
            Support
          </Link> */}
          <Link href="/progress">Track our Progress</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/signup"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign up
        </Link>
        <Link
          href="/login"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-md">
          <Link href="/features" className="block text-gray-700">
            Features
          </Link>
          <Link href="/pricing" className="block text-gray-700">
            Pricing
          </Link>
          <Link href="/support" className="block text-gray-700">
            Support
          </Link>
          <Link
            href="/get-started"
            className="block bg-blue-600 text-white text-center py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
