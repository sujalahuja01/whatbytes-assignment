"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";
import Image from "next/image";

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
            className="bg-white rounded-xl shadow-md p-6 grid grid-cols-12 gap-6 items-start"
          >
            <div className="col-span-12 sm:col-span-2 flex flex-col items-center gap-3">
              <Image
                src={item.image}
                alt={item.title}
                width={90}
                height={90}
                className="object-contain"
              />
            </div>

            <div className="col-span-12 sm:col-span-7">
              <h3 className="font-medium leading-snug">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                In stock · Eligible for FREE delivery
              </p>

              <div className="flex gap-4 py-5  ">
                <div className="flex items-center border rounded-md">
                  <button
                    className="px-2 py-1"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    −
                  </button>

                  <span className="px-3 text-sm">{item.quantity}</span>

                  <button
                    className="px-2 py-1"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className=" text-gray-500 hover:text-red-500"
                  aria-label="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-3 text-right font-semibold text-lg">
              ${item.price * item.quantity}
              <p className="text-[12px]">Up to 5% back with selected card</p>
            </div>
          </div>
        ))}
      </div>

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
