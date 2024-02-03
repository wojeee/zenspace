import React from "react";
import FeatureCard from "./FeatureCard";

const featuresData = [
  {
    icon: "/path-to-your-icon.png", // Replace with your icon path
    title: "Guided Meditations",
    description:
      "Improve your mental health with guided meditations designed by experts.",
  },
  // ... Add more features as needed
];

const Features = () => {
  return (
    <section id="features" className="features bg-white p-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">App Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
