"use client"

import Image from "next/image"
import { useCart } from "./cart-context"
import { Plus, ShoppingBag } from "lucide-react"

const products = [
  {
    id: "prod-1",
    name: "Radiance Serum",
    description: "Hydrating serum for a natural, luminous glow.",
    price: 68,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800",
  },
  {
    id: "prod-2",
    name: "Hydra Cream",
    description: "Intensely moisturizing cream with botanical extracts.",
    price: 54,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800",
  },
  {
    id: "prod-3",
    name: "Renewal Oil",
    description: "Restorative face oil for deep nighttime nourishment.",
    price: 72,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800",
  },
  {
    id: "prod-4",
    name: "Gentle Cleanser",
    description: "Purifying face wash infused with aloe and green tea.",
    price: 38,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800",
  },
  {
    id: "prod-5",
    name: "Glow Serum",
    description: "Brightening serum with Vitamin C and rosehip oil.",
    price: 62,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
  },
  {
    id: "prod-6",
    name: "Night Cream",
    description: "Rich, repairing cream for overnight skin rejuvenation.",
    price: 58,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800",
  },
]

export function ProductGrid() {
  const { addItem } = useCart()

  return (
    <section id="featured-products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block animate-blur-in">
            Elysian Collection
          </span>
          <h2 className="font-serif text-4xl leading-tight text-foreground text-balance md:text-7xl">
            Featured Products
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl overflow-hidden bg-white border border-stone-200/50 hover:shadow-xl boty-transition flex flex-col h-full"
            >
              <div className="relative h-96 bg-stone-100 overflow-hidden border-b border-stone-200/30">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 boty-transition"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Quick Add Button overlay */}
                <button
                  onClick={() => addItem(product)}
                  className="absolute bottom-6 right-6 p-3 rounded-full bg-white/90 text-primary backdrop-blur-sm shadow-md hover:bg-primary hover:text-white boty-transition hover:scale-110 z-10"
                  aria-label="Add to cart"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-foreground font-medium">{product.name}</h3>
                  <span className="text-lg font-semibold text-primary">${product.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                <button
                  onClick={() => addItem(product)}
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-full text-sm font-medium tracking-wide boty-transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}