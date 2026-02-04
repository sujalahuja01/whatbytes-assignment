"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, onAdd }) {
  const { addToCart } = useCart();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    addToCart(product, 1);
    onAdd?.();
  };
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-col">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mb-4"
        />

        <h3 className="text-sm font-medium mb-1">{product.title}</h3>
        <p className="text-sm font-semibold mb-3">${product.price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-auto bg-brandblue hover:bg-darkblue/90 text-white text-sm py-2 rounded-md transition-colors duration-200 ease-in-out"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
