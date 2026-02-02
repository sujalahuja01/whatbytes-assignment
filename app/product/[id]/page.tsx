"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import Image from "next/image";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: Image */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={product.image}
            alt={product.title}
            width={520}
            height={520}
            className="object-contain max-h-[420px]"
            priority
          />
        </div>

        {/* RIGHT: Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>

          <p className="text-2xl font-bold mb-6">${product.price}</p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          <p className="text-sm mb-8">
            <span className="font-medium">Category:</span>{" "}
            <span className="capitalize">{product.category}</span>
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <button
                className="px-4 py-2"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="px-6">{quantity}</span>
              <button
                className="px-4 py-2"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-md w-fit">
            Add to Cart
          </button>

          {/* Reviews */}
          <div className="mt-12">
            <h3 className="font-semibold mb-2">Reviews</h3>
            <p className="text-sm text-gray-500">No reviews yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
