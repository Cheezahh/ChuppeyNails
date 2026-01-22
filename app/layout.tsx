import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chupey Nails",
  description: "Beautiful nail artistry and care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
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
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-pink-50 border-t border-pink-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Mobile: stacked layout */}
            <div className="flex flex-col items-center gap-4 sm:hidden">
              <Link href="/" className="text-lg font-semibold text-primary">
                Chupey Nails
              </Link>
              <nav className="flex flex-wrap justify-center gap-6 text-sm">
                <Link
                  href="/#about"
                  className="nav-link text-gray-600 hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="nav-link text-gray-600 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/terms"
                  className="nav-link text-gray-600 hover:text-primary transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="nav-link text-gray-600 hover:text-primary transition-colors"
                >
                  Privacy
                </Link>
              </nav>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/chupey_nailzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <p className="text-gray-500 text-xs">© 2026 Chupey Nails</p>
              </div>
            </div>

            {/* Desktop: 3-column grid layout */}
            <div className="hidden sm:grid sm:grid-cols-3 sm:items-center">
              {/* Left: Brand */}
              <div className="justify-self-start">
                <Link href="/" className="text-lg font-semibold text-primary">
                  Chupey Nails
                </Link>
              </div>

              {/* Center: Navigation */}
              <nav className="justify-self-center flex gap-6 text-sm">
                <Link
                  href="/#about"
                  className="nav-link text-gray-600 hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="nav-link text-gray-600 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/terms"
                  className="nav-link text-gray-600 hover:text-primary transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="nav-link text-gray-600 hover:text-primary transition-colors"
                >
                  Privacy
                </Link>
              </nav>

              {/* Right: Social + Copyright */}
              <div className="justify-self-end flex items-center gap-3">
                <a
                  href="https://www.instagram.com/chupey_nailzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <p className="text-gray-500 text-xs">© 2026 Chupey Nails</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
