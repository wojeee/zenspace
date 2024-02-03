import React, { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item mb-2">
      <button
        className="faq-question text-left w-full p-4 bg-blue-100 text-blue-700 font-semibold"
        onClick={toggle}
      >
        {question}
      </button>
      {isOpen && (
        <div className="faq-answer p-4 border-t border-blue-200">{answer}</div>
      )}
    </div>
  );
};

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
    // ...add more FAQs as needed
  ];

  return (
    <section id="faq" className="faq bg-white p-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="faq-list divide-y divide-blue-200">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
