import React from "react";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    features: [
      "10 Guided Meditations",
      "Basic Progress Tracking",
      "Limited Playlist Access",
    ],
    cta: "Get Started", // Call to action text
    featured: false,
  },
  {
    name: "Pro",
    price: "9.99",
    features: [
      "Unlimited Meditations",
      "Advanced Progress Tracking",
      "Full Playlist Access",
      "Offline Access",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  // ... add more plans as needed
];

const PricingCard: React.FC<{
  plan: {
    name: string;
    price: string;
    features: string[];
    cta: string;
    featured: boolean;
  };
}> = ({ plan }) => {
  return (
    <div
      className={`pricing-card p-6 text-center rounded-lg shadow-md ${
        plan.featured ? "bg-blue-500 text-white" : "bg-white"
      }`}
    >
      <h3 className="text-xl font-semibold mb-4">{plan.name} Plan</h3>
      <p
        className={`text-4xl font-bold ${
          !plan.featured && "text-blue-500"
        } mb-6`}
      >
        ${plan.price}
        <span className="text-lg">/mo</span>
      </p>
      <ul className="mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`py-2 px-6 rounded-lg shadow-lg ${
          plan.featured ? "bg-white text-blue-500" : "bg-blue-500 text-white"
        } hover:opacity-90`}
      >
        {plan.cta}
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="pricing bg-gray-50 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
