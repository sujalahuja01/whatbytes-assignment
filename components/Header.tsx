"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
  pulse?: boolean;
};

export default function Header({ search, setSearch, pulse }: HeaderProps) {
  return (
    <header className="bg-darkblue">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center  text-white">
        <div className="text-3xl font-bold">Logo</div>

        <div className="relative mx-10">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/70" />
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md border placeholder-white/70 text-sm px-10 py-2 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className={`bg-[#002A59] px-4 py-2 rounded-md flex items-center gap-2 text-sm transition-all duration-200 ease-out${pulse ? "scale-[1.05] ring-2 ring-blue-300/40" : ""}`}
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
          </Link>

          <div className="w-8 h-8 rounded-full bg-[#002A59] flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
