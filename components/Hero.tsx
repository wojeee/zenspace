import React from "react";

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
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mr-4">
            Download Now
          </button>
          <button className="bg-transparent text-blue-500 px-6 py-2 border border-blue-500 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
