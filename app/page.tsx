"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Filters from "@/components/Filters";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useRouter, useSearchParams } from "next/navigation";

type Category = "all" | "electronics" | "clothing" | "home";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [category, setCategory] = useState<Category>(
    (searchParams.get("category") as Category) || "all",
  );

  const [price, setPrice] = useState(Number(searchParams.get("price")) || 1000);

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [cartPulse, setCartPulse] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams();

    if (category !== "all") params.set("category", category);
    if (price !== 1000) params.set("price", price.toString());
    if (search.trim()) params.set("search", search);

    router.replace(`/?${params.toString()}`, { scroll: false });
  }, [category, price, search]);

  useEffect(() => {
    const urlCategory = (searchParams.get("category") as Category) || "all";
    const urlPrice = Number(searchParams.get("price")) || 1000;
    const urlSearch = searchParams.get("search") || "";

    if (urlCategory !== category) setCategory(urlCategory);
    if (urlPrice !== price) setPrice(urlPrice);
    if (urlSearch !== search) setSearch(urlSearch);
  }, [searchParams]);

  const toggleFilters = () => {
    setFiltersOpen((prev) => !prev);
  };

  const triggerCartAnimation = () => {
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 300);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === "all" || product.category === category;

    const priceMatch = product.price <= price;

    const searchMatch = product.title
      .toLowerCase()
      .split(" ")
      .some((word) => word.startsWith(search.toLowerCase()));

    return categoryMatch && priceMatch && searchMatch;
  });

  return (
    <>
      <Header search={search} setSearch={setSearch} pulse={cartPulse} />

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-6">
        <div className="lg:hidden mb-4">
          <button
            onClick={toggleFilters}
            className="bg-blue-600 text-white px-4 py-2 w-40 rounded-md text-sm"
          >
            {filtersOpen ? "Hide Filters" : "Show Filters"}
          </button>
        </div>
        <aside
          className={`
    col-span-12 lg:col-span-3
    ${filtersOpen ? "block" : "hidden"}
    lg:block
  `}
        >
          <Filters
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            onClose={() => setFiltersOpen(false)}
          />
        </aside>

        <section className="col-span-12 lg:col-span-9">
          <h2 className="text-xl font-semibold mb-6">Product Listing</h2>

          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={triggerCartAnimation}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
