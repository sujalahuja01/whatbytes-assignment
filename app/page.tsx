"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Filters from "@/components/Filters";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

type Category = "all" | "electronics" | "clothing" | "home";

export default function Home() {
  const [category, setCategory] = useState<Category>("all");
  const [price, setPrice] = useState(1000);
  const [search, setSearch] = useState("");

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
      <Header search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-6">
        <aside className="col-span-12 lg:col-span-3">
          <Filters
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
          />
        </aside>

        <section className="col-span-12 lg:col-span-9">
          <h2 className="text-xl font-semibold mb-6">Product Listing</h2>

          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
