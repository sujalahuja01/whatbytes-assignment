import { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />

      <h3 className="text-sm font-medium mb-1">{product.title}</h3>
      <p className="text-sm font-semibold mb-3">${product.price}</p>

      <button className="mt-auto bg-blue-600 hover:bg-blue-500 text-white text-sm py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
}
