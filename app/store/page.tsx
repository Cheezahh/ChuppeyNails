"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  length: string;
  style: string;
}

interface CartItem extends Product {
  quantity: number;
}

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
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-light text-gray-900 mb-4">
            Store
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Premium press-on nails shipped directly to your door. Beautiful
            designs, easy application, long-lasting wear.
          </p>
        </div>

        {/* Cart Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.277M7.5 14.25l13.5-5.25m0 0a60.135 60.135 0 01-1.806 5.857M21 9l-1.806 5.857M21 9h-2.25m-5.25 0h-2.25m0 0l-1.806-5.857M12 9v6.75"
              />
            </svg>
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

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

      {/* Cart Drawer */}
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-light text-gray-900">Shopping Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-pink-50/50 rounded-2xl"
                    >
                      {/* Image Placeholder */}
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex-shrink-0" />

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 mb-1 truncate">
                          {item.name}
                        </h3>
                        <div className="flex gap-2 mb-2">
                          <span className="text-xs px-2 py-0.5 bg-pink-100 text-primary rounded-full">
                            {item.length}
                          </span>
                          <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full">
                            {item.style}
                          </span>
                        </div>
                        <p className="text-primary font-medium">
                          ${item.price.toFixed(2)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 12h-15"
                              />
                            </svg>
                          </button>
                          <span className="text-gray-900 font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with Subtotal */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="text-2xl font-light text-primary">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <button
                  className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors font-medium"
                  disabled
                >
                  Checkout (Coming Soon)
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
