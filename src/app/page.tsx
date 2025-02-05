"use client";

import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}