import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="text-center bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl text-white font-bold mb-4">
          Find Your Inner Peace
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Join the ZenSpace community and start your journey to tranquility.
        </p>
        <div>
          <Button>Download Now</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
