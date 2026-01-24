"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useCart } from "../contexts/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
  } = useCart();

  const [isCartMounted, setIsCartMounted] = useState(false);
  const [isCartAnimatingIn, setIsCartAnimatingIn] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle opening animation
  useEffect(() => {
    if (isCartOpen) {
      setIsCartMounted(true);
      const timer = setTimeout(() => {
        setIsCartAnimatingIn(true);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isCartOpen]);

  // Close cart with exit animation
  const handleClose = useCallback(() => {
    setIsCartAnimatingIn(false);
    setTimeout(() => {
      closeCart();
      setIsCartMounted(false);
    }, 300);
  }, [closeCart]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen && isCartAnimatingIn) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isCartOpen, isCartAnimatingIn, handleClose]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartMounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartMounted]);

  // Focus close button when cart opens
  useEffect(() => {
    if (isCartAnimatingIn && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isCartAnimatingIn]);

  if (!isCartMounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
      className="fixed inset-x-0 top-16 bottom-0 z-40"
    >
      {/* Backdrop with blur - positioned below navbar */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isCartAnimatingIn ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer - positioned below navbar */}
      <div
        className={`fixed right-0 top-16 h-[calc(100vh-4rem)] w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-out ${
          isCartAnimatingIn ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 id="cart-title" className="text-2xl font-light text-gray-900">
            Shopping Cart
          </h2>
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Close cart"
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
                onClick={handleClose}
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
    </div>
  );
}
