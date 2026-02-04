"use client";
import { useCart } from "@/context/CartContext";

import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import Image from "next/image";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(product.image);

  const updateQuantity = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image
              src={selectedImage}
              alt={product.title}
              width={520}
              height={520}
              className="object-contain max-h-[420px]"
              priority
            />
          </div>

          {product.carousel && (
            <div className="flex gap-3 justify-center ">
              {[product.image, ...product.carousel].map((img) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`border rounded-md p-1  transition
            ${
              selectedImage === img
                ? "border-brandblue"
                : "border-gray-200 hover:border-gray-400"
            }`}
                >
                  <Image
                    src={img}
                    alt="Product thumbnail"
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

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

          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <button className="px-4 py-2" onClick={() => updateQuantity(-1)}>
                −
              </button>
              <span className="px-6">{quantity}</span>
              <button className="px-4 py-2" onClick={() => updateQuantity(1)}>
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => addToCart(product, quantity)}
            className="bg-brandblue hover:bg-brandblue/80 text-white px-8 py-3 rounded-md w-fit transition-colors duration-200 ease-in-out"
          >
            Add to Cart
          </button>

          <div className="mt-12">
            <h3 className="font-semibold mb-2">Reviews</h3>
            <p className="text-sm text-gray-500">No reviews yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
