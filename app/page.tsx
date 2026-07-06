import { Header } from "./components/boty/header"
import { Hero } from "./components/boty/hero"
import { TrustBadges } from "./components/boty/trust-badges"
import { FeatureSection } from "./components/boty/feature-section"
import { ProductGrid } from "./components/boty/product-grid"
import { CTABanner } from "./components/boty/cta-banner"
import { Testimonials } from "./components/boty/testimonials"
import { Newsletter } from "./components/boty/newsletter"
import { Footer } from "./components/boty/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustBadges />
      <FeatureSection />
      <ProductGrid />
      <CTABanner />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}