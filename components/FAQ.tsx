import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I sign up for ZenSpace?",
      answer:
        "You can sign up for ZenSpace by downloading the app and creating an account with your email address.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, ZenSpace offers a 7-day free trial for you to explore the features before committing to a subscription.",
    },
    // Add more FAQs as needed
  ];

  return (
    <section id="faq" className="faq bg-white p-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
