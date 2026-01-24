"use client";

import Link from "next/link";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const { openCart, cartItemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-semibold text-primary">
            Chupey Nails
          </Link>
          <div className="flex gap-6 items-center">
            <Link
              href="/"
              className="nav-link text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#gallery"
              className="nav-link text-gray-700 hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/#book"
              className="nav-link text-gray-700 hover:text-primary transition-colors"
            >
              Book
            </Link>
            <Link
              href="/store"
              className="nav-link text-gray-700 hover:text-primary transition-colors"
            >
              Store
            </Link>
            <button
              onClick={openCart}
              className="relative p-2 text-primary hover:bg-pink-50 rounded-full transition-colors"
              aria-label="Shopping Cart"
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
