import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header component */}
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Features section */}
      <Features />

      {/* How It Works section */}
      <HowItWorks />

      {/* Testimonials section */}
      <Testimonials />

      {/* Pricing section */}
      <Pricing />

      {/* FAQ section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
