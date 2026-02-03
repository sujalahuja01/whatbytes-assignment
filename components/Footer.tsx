"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <Link href="/" className="block hover:underline">
            All
          </Link>

          <Link href="/?category=electronics" className="block hover:underline">
            Electronics
          </Link>

          <Link href="/?category=clothing" className="block hover:underline">
            Clothing
          </Link>

          <Link href="/?category=home" className="block hover:underline">
            Home
          </Link>
          <p className="mt-4 text-xs text-white/70">© 2026 Sujal Ahuja</p>
        </div>

        <div>
          <p className="font-semibold mb-2">About Us</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>

        <div>
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex gap-4 mt-3">
            <Facebook className="h-5 w-5 cursor-pointer" />
            <Twitter className="h-5 w-5 cursor-pointer" />
            <Instagram className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
