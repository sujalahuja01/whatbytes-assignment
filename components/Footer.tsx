import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Filters */}
        <div>
          <p className="font-semibold mb-2">Filters</p>
          <p>All</p>
          <p>Electronics</p>
          <p>Clothing</p>
          <p>Home</p>
          <p className="mt-4 text-xs text-white/70">© 2024 American</p>
        </div>

        {/* About */}
        <div>
          <p className="font-semibold mb-2">About Us</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>

        {/* Social */}
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
