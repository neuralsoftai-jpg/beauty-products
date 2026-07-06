import React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "./components/boty/cart-context"
import { CartDrawer } from "./components/boty/cart-drawer"

export const metadata: Metadata = {
title: "Elysian - Natural Skincare",
description: "Premium botanical and organic skincare products",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
