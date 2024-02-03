import React from "react";

const testimonialsData = [
  {
    quote:
      "ZenSpace has helped me manage my stress levels and find calm in my hectic life.",
    author: "Alex Johnson",
    role: "Software Engineer",
  },
  // ...add more testimonials as needed
];

const TestimonialCard: React.FC<{
  testimonial: { quote: string; author: string; role: string };
}> = ({ testimonial }) => {
  return (
    <div className="testimonial-card p-4">
      <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
      <p className="text-sm font-semibold mt-3">
        {testimonial.author}, {testimonial.role}
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials bg-white p-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
