"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darkblue mt-16">
      <div className="max-w-7xl  text-white mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="text-2xl pb-4">Filters</p>
          <ul className=" flex flex-col gap-2">
            <li>
              <Link href="/" className=" hover:underline">
                All
              </Link>
            </li>
            <li>
              <Link href="/?category=electronics" className=" hover:underline">
                Electronics
              </Link>
            </li>
            <li>
              <Link href="/?category=clothing" className=" hover:underline">
                Clothing
              </Link>
            </li>
            <li>
              <Link href="/?category=home" className=" hover:underline">
                Home
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-xs text-white/70">© 2026 Sujal Ahuja</p>
        </div>

        <div>
          <p className="font-semibold pb-4 text-2xl">About Us</p>
          <ul className=" flex flex-col gap-2">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-2xl pb-4">Follow Us</p>
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
