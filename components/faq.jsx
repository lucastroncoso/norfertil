import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "What is the difference between compost and potting soil?",
      answer:
        "Compost is decomposed organic matter used to enrich soil, while potting soil is a growing medium specifically formulated for container plants with a mix of ingredients like peat moss, vermiculite, and compost.",
    },
    {
      question: "How much compost should I add to my garden?",
      answer:
        "For most gardens, adding a 1-2 inch layer of compost and working it into the top 6 inches of soil is recommended. For new gardens, you might use up to 3-4 inches of compost.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we offer delivery services for both small and bulk orders. Delivery fees vary based on distance and order size. Contact us for a quote.",
    },
    {
      question: "How often should I add compost to my garden?",
      answer:
        "For most gardens, adding compost once a year is sufficient. Spring is typically the best time to add compost before planting.",
    },
    {
      question: "Are your products organic?",
      answer:
        "Yes, all our compost and soil products are made from organic materials and are free from synthetic chemicals and pesticides.",
    },
    {
      question: "Can I pick up orders directly from your facility?",
      answer:
        "Yes, you can pick up orders from our facility during business hours. We recommend calling ahead for large orders to ensure availability.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our products and services.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
