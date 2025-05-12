import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
      {/* ▶︎ Background video */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />

        <video
          className="object-cover w-full h-full"
          src="/41123-427876242_small.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Si querés un fallback estático mientras carga el video */}
        {/* <img
          src="/cualquier-placeholder.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
      </div>

      {/* Content over the video */}
      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-[600px]">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Grow Better with NorFertil
            </h1>
            <p className="text-white/90 md:text-xl">
              Premium compost and soil solutions for gardens, farms, and landscaping projects. Sustainable,
              organic, and locally produced.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-6 min-[400px]:flex-row">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#products">Explore Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
