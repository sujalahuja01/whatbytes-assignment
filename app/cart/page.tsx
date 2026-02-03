"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">
          Looks like you haven’t added anything yet.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            {/* Product info */}
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">${item.price}</p>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center gap-3">
              <button
                className="px-3 py-1 border rounded"
                onClick={() =>
                  updateQuantity(item.id, Math.max(1, item.quantity - 1))
                }
              >
                −
              </button>

              <span className="w-6 text-center">{item.quantity}</span>

              <button
                className="px-3 py-1 border rounded"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Price + remove */}
            <div className="flex items-center gap-6">
              <p className="font-semibold">${item.price * item.quantity}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-10 flex justify-end">
        <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-80">
          <div className="flex justify-between mb-4">
            <span className="text-sm">Subtotal</span>
            <span className="font-semibold">${totalPrice}</span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
