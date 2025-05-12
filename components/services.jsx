import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Shovel, Leaf, Recycle, Ruler, Users } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Bulk Delivery",
      description: "We deliver bulk orders of compost, soil, and mulch directly to your location.",
    },
    {
      icon: <Shovel className="h-10 w-10 text-primary" />,
      title: "Soil Testing",
      description: "Professional soil testing to determine the perfect mix for your specific needs.",
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Garden Consultation",
      description: "Expert advice on soil improvement and plant nutrition for your garden.",
    },
    {
      icon: <Recycle className="h-10 w-10 text-primary" />,
      title: "Composting Services",
      description: "Commercial composting services for businesses and municipalities.",
    },
    {
      icon: <Ruler className="h-10 w-10 text-primary" />,
      title: "Custom Soil Mixes",
      description: "Custom soil mixes tailored to your specific planting needs and conditions.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Workshops",
      description: "Educational workshops on composting, soil health, and sustainable gardening.",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a range of services to help you get the most out of your soil and plants.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
