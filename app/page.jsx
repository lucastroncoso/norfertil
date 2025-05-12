import Hero from "@/components/hero"
import Products from "@/components/products"
import Services from "@/components/services"
import Faq from "@/components/faq"
import Contact from "@/components/contact"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Services />
      <Products />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  )
}
