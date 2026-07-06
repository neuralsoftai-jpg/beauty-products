"use client"

import { useCart } from "./cart-context"
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import Image from "next/image"

export function CartDrawer() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 z-[210]">
        <div 
          className="w-screen max-w-md flex flex-col bg-[#F7F4EF] p-6 shadow-2xl border-l border-stone-200 animate-slide-in-right"
          style={{
            animation: "slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards"
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-serif font-semibold text-foreground">Your Bag</h2>
            </div>
            <button
              type="button"
              className="rounded-full text-muted-foreground hover:text-foreground hover:bg-stone-200/50 p-2 boty-transition"
              onClick={() => setIsOpen(false)}
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6 space-y-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <div className="w-20 h-20 bg-stone-200/50 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="w-10 h-10 text-primary/70" />
                </div>
                <p className="text-lg font-serif font-medium text-foreground">Your bag is empty</p>
                <p className="text-sm text-muted-foreground mt-2 max-w-xs">Add some organic skincare products from Elysian Botanicals to begin your ritual.</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-8 bg-primary text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-primary/90 boty-transition shadow-md"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-stone-100 border border-stone-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between text-base font-semibold text-foreground">
                        <h3 className="font-serif text-lg">{item.name}</h3>
                        <p className="text-primary font-bold">${item.price}</p>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{item.description}</p>
                    </div>
                    
                    <div className="flex items-end justify-between text-sm mt-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-stone-200 rounded-full overflow-hidden bg-stone-50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-stone-200/50 text-muted-foreground hover:text-foreground boty-transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-0.5 text-xs font-bold text-foreground min-w-[20px] text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-stone-200/50 text-muted-foreground hover:text-foreground boty-transition"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-1 text-xs font-semibold text-destructive hover:text-destructive/80 boty-transition p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {items.length > 0 && (
            <div className="border-t border-stone-200 pt-6 mt-auto">
              <div className="flex justify-between text-lg font-semibold text-foreground mb-4">
                <p className="font-serif">Subtotal</p>
                <p className="text-primary font-bold text-xl">${subtotal.toFixed(2)}</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Taxes and shipping are calculated at checkout. Enjoy complimentary shipping on orders over $100.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  className="w-full bg-primary text-white py-4 rounded-full font-semibold tracking-wide hover:bg-primary/95 boty-transition shadow-md hover:shadow-lg"
                >
                  Proceed to Checkout
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-sm font-semibold text-muted-foreground hover:text-foreground py-2 boty-transition"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
