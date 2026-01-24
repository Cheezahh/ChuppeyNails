"use client";

import { ReactNode } from "react";
import { CartProvider } from "../contexts/CartContext";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <CartDrawer />
    </CartProvider>
  );
}
