import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Compost",
      description: "Nutrient-rich compost made from organic materials, perfect for enriching garden soil.",
      price: "$29.99",
      unit: "per 40L bag",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Potting Mix",
      description: "Specially formulated for container plants with the perfect balance of nutrients and drainage.",
      price: "$24.99",
      unit: "per 30L bag",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Garden Soil",
      description: "All-purpose garden soil for beds, borders and planting areas.",
      price: "$19.99",
      unit: "per 40L bag",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "Mulch",
      description: "Organic mulch that helps retain moisture and suppress weeds.",
      price: "$15.99",
      unit: "per 50L bag",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Organic Fertilizer",
      description: "Slow-release organic fertilizer for sustained plant nutrition.",
      price: "$34.99",
      unit: "per 20L bag",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "Raised Bed Mix",
      description: "Specially formulated for raised beds with excellent drainage and nutrient content.",
      price: "$27.99",
      unit: "per 40L bag",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our range of premium soil products for your garden, farm, or landscaping project.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full transition-all hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {product.price} <span className="text-sm font-normal text-muted-foreground">{product.unit}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#contact">Request Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Request Custom Mix</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
