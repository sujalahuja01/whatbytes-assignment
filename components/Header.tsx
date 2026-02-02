import { ShoppingCart, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Search */}
        <div className="flex-1 mx-10">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/70" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-md bg-blue-600/40 placeholder-white/70 text-sm px-10 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md flex items-center gap-2 text-sm">
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
