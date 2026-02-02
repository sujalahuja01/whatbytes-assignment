"use client";

import { Search, ShoppingCart, User } from "lucide-react";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Header({ search, setSearch }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Search */}
        <div className="flex-1 mx-10">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/70" />
            <input
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md bg-blue-600/40 placeholder-white/70 text-sm px-10 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 px-4 py-2 rounded-md flex items-center gap-2 text-sm">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </button>

          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
