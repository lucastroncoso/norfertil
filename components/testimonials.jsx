import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "NorFertil's premium compost transformed my vegetable garden. The yields have doubled since I started using their products!",
      author: "Sarah Johnson",
      role: "Home Gardener",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "As a landscaping professional, I rely on consistent quality. NorFertil delivers that every time with their bulk soil mixes.",
      author: "Michael Chen",
      role: "Landscape Architect",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "The custom soil mix NorFertil created for our urban farm project was perfect. Their expertise is unmatched.",
      author: "Elena Rodriguez",
      role: "Urban Farm Manager",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it - hear from some of our satisfied customers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-muted">
              <CardContent className="pt-6">
                <div className="relative">
                  <span className="absolute -top-6 left-0 text-6xl text-primary opacity-20">"</span>
                  <blockquote className="text-lg italic relative z-10">{testimonial.quote}</blockquote>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
