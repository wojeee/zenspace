import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works bg-blue-100 p-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="steps flex flex-col md:flex-row justify-around items-center">
          <div className="step">
            <h3 className="text-xl font-semibold">1. Choose Your Plan</h3>
            <p>
              Select the plan that best suits your needs and start your journey
              to mindfulness.
            </p>
          </div>
          <div className="step">
            <h3 className="text-xl font-semibold">2. Download the App</h3>
            <p>
              Download ZenSpace on your favorite device and sign in to your
              account.
            </p>
          </div>
          <div className="step">
            <h3 className="text-xl font-semibold">3. Start Meditating</h3>
            <p>
              Explore a variety of guided meditations and find your moment of
              peace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
