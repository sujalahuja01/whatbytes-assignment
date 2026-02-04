"use client";

const categories = ["all", "electronics", "clothing", "home"];

export default function Filters({ category, setCategory, price, setPrice }) {
  return (
    <div className="bg-brandblue text-white rounded-xl p-5">
      <h3 className="font-semibold mb-6">Filters</h3>

      <div className="mb-6">
        <p className="text-sm mb-3">Category</p>

        <div className="space-y-2 text-sm">
          {categories.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                checked={category === item}
                onChange={() => {
                  setCategory(item);
                }}
              />
              <span className="capitalize">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm mb-3">Price</p>

        <input
          type="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />

        <div className="flex justify-between text-xs mt-2">
          <span>$0</span>
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
}
