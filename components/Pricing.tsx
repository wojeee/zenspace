import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    features: [
      "10 Guided Meditations",
      "Basic Progress Tracking",
      "Limited Playlist Access",
    ],
    cta: "Get Started",
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
  // Add more plans as needed
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
    <Card
      className={`rounded-lg shadow-md ${
        plan.featured ? "bg-primary text-white" : "bg-white"
      }`}
    >
      <CardHeader>
        <CardTitle>{plan.name} Plan</CardTitle>
        <CardDescription>
          <p
            className={`text-4xl font-bold ${!plan.featured && "text-primary"}`}
          >
            ${plan.price}
            <span className="text-lg">/mo</span>
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {plan.features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`py-2 px-6 rounded-lg shadow-lg ${
            plan.featured
              ? "bg-secondary text-primary"
              : "bg-primary text-white"
          } hover:opacity-90 transition duration-300`}
        >
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
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
