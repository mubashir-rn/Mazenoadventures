import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What skillset and fitness level are required?",
      answer: "These expeditions are within extreme high altitude environments, with differing requirements when it comes to the ability needed. Due to the nature of the elements involved, you must provide concise, honest descriptions of relevant experience and current fitness levels. Upon receipt, we will review your experience and respond accordingly. At this point, if we consider there to be any shortfalls, we can collectively discuss the opportunities and/or provide a training support plan to achieve your goals."
    },
    {
      question: "Will I get my own guide?",
      answer: "Yes. We guarantee a 1:1 guide to client ratio on every expedition, with four additional climbing Sherpas acting as reserves, ready to chip in if needed. This helps ensure the highest safety standards and personalized attention throughout your adventure."
    },
    {
      question: "What communication/office facilities will be available?",
      answer: "We can provide full office facilities at basecamp, including Wi-Fi connectivity. Satellite phones are also available throughout the expedition for emergency and essential communications, ensuring you stay connected when needed."
    },
    {
      question: "What equipment is provided?",
      answer: "All communal equipment is included ie. high quality ropes, stoves, tents etc. You are responsible for personal gear and clothing, eg. harness, crampons, helmet, ice axes etc. A full essentials list and advice (if required) will be provided at time of booking."
    },
    {
      question: "Should I book pre/post tour accommodation?",
      answer: "We recommend booking pre and post expedition accommodation in Islamabad. We can assist with hotel recommendations and bookings. This allows for proper rest before the expedition begins and recovery time afterward."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Our cancellation policy varies depending on the expedition and timing. Generally, full refunds are available up to 90 days before departure, with sliding scale refunds after that. We strongly recommend travel insurance to protect your investment."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our expeditions and services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;