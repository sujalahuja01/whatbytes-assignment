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
    <header className="bg-brandblue text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl lg:text-3xl font-bold">Logo</div>

          <div className="hidden sm:block relative mx-10 ">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/70" />
            <input
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-md border border-gray-400 placeholder-white/70 text-sm px-10 py-2 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className={`bg-darkblue px-4 py-2 rounded-md flex items-center gap-2 text-sm transition-all duration-200 ease-out${pulse ? "scale-[1.05] ring-2 ring-blue-300/40" : ""}`}
            >
              <ShoppingCart className="h-4 w-4" />
              Cart
            </Link>

            <div className="w-8 h-8 rounded-full bg-darkblue flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="sm:hidden relative mt-4">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/70" />
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border border-gray-400 bg-transparent placeholder-white/70 text-sm px-10 py-2 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
}
