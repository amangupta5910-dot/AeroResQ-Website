"use client";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white">
          Aero<span className="text-orange-500">ResQ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white">

          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link href="/technology" className="hover:text-orange-500 transition">
            Technology
          </Link>

          <Link href="/solutions" className="hover:text-orange-500 transition">
            Solutions
          </Link>

          <Link href="/products" className="hover:text-orange-500 transition">
            Products
          </Link>

          {/* Company Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-orange-500 transition">
              Company
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-10 left-0 w-60 rounded-2xl border border-white/10 bg-[#0B1120]/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="py-2">

                <Link
                  href="/about"
                  className="block px-5 py-3 hover:bg-orange-500/10 hover:text-orange-500"
                >
                  About
                </Link>

                <Link
                  href="/research"
                  className="block px-5 py-3 hover:bg-orange-500/10 hover:text-orange-500"
                >
                  Research
                </Link>

                <Link
                  href="/news"
                  className="block px-5 py-3 hover:bg-orange-500/10 hover:text-orange-500"
                >
                  News
                </Link>

                <Link
                  href="/careers"
                  className="block px-5 py-3 hover:bg-orange-500/10 hover:text-orange-500"
                >
                  Careers
                </Link>

                <hr className="border-white/10 my-2" />

                <Link
                  href="/privacy-policy"
                  className="block px-5 py-3 hover:bg-orange-500/10 hover:text-orange-500"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="block px-5 py-3 hover:bg-orange-500/10 hover:text-orange-500"
                >
                  Terms & Conditions
                </Link>

              </div>
            </div>
          </div>

          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
          
          <Link
  href="/login"
  className="rounded-xl border border-orange-500 px-5 py-3 text-orange-500 font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white"
>
  Login
</Link>

        </nav>

        {/* CTA */}
        <button className="hidden md:block bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-full text-white font-semibold">
          Request Demo
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white">
          <Menu size={30} />
        </button>

      </div>
    </header>
  );
}