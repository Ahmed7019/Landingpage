"use client";
import { Suspense, useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import GoalsSection from "@/components/goals-section";
import AchievementsSection from "@/components/achievements-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import PortfolioSection from "@/components/portfolio-section";
import JsonLd from "@/components/json-ld";
import ScrollToTop from "@/components/scroll-to-top";
import AnimationToggle from "@/components/animation-toggle";
import Loading from "./loading";
import Loader from "@/components/loader";
import { OptimizedParallaxProvider } from "@/components/optimized-parallax";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-right" dir="rtl">
      <JsonLd />
      <Header />
      <main>
        <OptimizedParallaxProvider>
          <HeroSection />
          <Suspense fallback={<Loading />}>
            <ServicesSection />
            <GoalsSection />
            <AchievementsSection />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />
          </Suspense>
        </OptimizedParallaxProvider>
      </main>
      <Footer />
      <ScrollToTop />
      <AnimationToggle />
    </div>
  );
}
