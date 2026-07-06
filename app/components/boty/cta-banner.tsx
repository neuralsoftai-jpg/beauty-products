"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Leaf, Flower2, Globe } from "lucide-react"

export function CTABanner() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={bannerRef}
          className={`rounded-3xl p-12 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[450px] transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200"
            alt="Elysian natural skincare ingredients"
            fill
            className="object-cover brightness-50"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          
          <div className="relative z-10 text-left max-w-2xl text-white">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300 mb-4 block">
              Join the Movement
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 leading-tight">
              Elysian Botanicals
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-md leading-relaxed">
              We create skincare that honors your natural beauty and respects the Earth. Clean, conscious, and effective.
            </p>
            
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3 text-white/95">
                <Leaf className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base font-medium">100% Non-Toxic & Plant-Derived</span>
              </div>
              <div className="flex items-center gap-3 text-white/95">
                <Flower2 className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base font-medium">Therapeutic-Grade Botantical Actives</span>
              </div>
              <div className="flex items-center gap-3 text-white/95">
                <Globe className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base font-medium">Sourced Responsibly & Fair-Trade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
