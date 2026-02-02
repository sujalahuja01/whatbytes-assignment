import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-6">
      <aside className="col-span-12 md:col-span-3"></aside>

      <section className="col-span-12 md:col-span-9">
        <h2 className="text-xl font-semibold mb-6">Product Listing</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
