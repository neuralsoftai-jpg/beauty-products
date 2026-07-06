"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("featured-products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-900">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a0b7c364-afa9-4afa-9716-45718578cc01-Ih8UaqQr1bl8aoNlbRha4FgaQ65eXX.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-200 mb-6 block animate-blur-in">
              Elysian Botanicals
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 text-balance">
              <span className="block font-medium animate-blur-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Pure skincare.
              </span>
              <span className="block font-semibold animate-blur-in text-secondary" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Naturally radiant.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-md animate-blur-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Experience the power of premium botanical ingredients. Elevate your self-care ritual with organic, clean, and cruelty-free formulas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-blur-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center justify-center gap-3 bg-white text-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-primary hover:text-white boty-transition boty-shadow"
              >
                Explore Shop
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToProducts}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white hover:text-secondary boty-transition cursor-pointer z-20"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-bold">Scroll Down</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
        </div>
      </button>
    </section>
  )
}
