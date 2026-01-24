"use client";

import { useCart, Product } from "../contexts/CartContext";

const products: Product[] = [
  { id: 1, name: "Classic French Tips", price: 24.99, length: "Short", style: "French" },
  { id: 2, name: "Almond Shape Set", price: 26.99, length: "Medium", style: "Almond" },
  { id: 3, name: "Coffin Chrome Set", price: 29.99, length: "Long", style: "Chrome" },
  { id: 4, name: "Pastel Ombre", price: 27.99, length: "Medium", style: "Ombre" },
  { id: 5, name: "Stiletto Art Set", price: 31.99, length: "Long", style: "Art" },
  { id: 6, name: "Square Nude Set", price: 23.99, length: "Short", style: "Nude" },
  { id: 7, name: "Round Glitter", price: 28.99, length: "Medium", style: "Glitter" },
  { id: 8, name: "Oval Matte Set", price: 25.99, length: "Medium", style: "Matte" },
];

export default function Store() {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#EBC7C0] min-h-screen">
      {/* Header Section with Gradient */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-gradient-to-b from-pink-50 to-[#EBC7C0]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-4">
            Store
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Premium press-on nails shipped directly to your door. Beautiful
            designs, easy application, long-lasting wear.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col border border-gray-100"
              >
                {/* Image Skeleton */}
                <div className="w-full aspect-square bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
                  <div className="w-4/5 h-4/5 bg-gray-200 rounded-xl animate-pulse" />
                </div>

                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  {/* Length and Style Chips */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="inline-block px-3 py-1 bg-pink-100 text-primary text-xs rounded-full font-medium">
                      {product.length}
                    </span>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">
                      {product.style}
                    </span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="mt-auto">
                    <p className="text-2xl font-light text-primary mb-4">
                      ${product.price.toFixed(2)}
                    </p>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
