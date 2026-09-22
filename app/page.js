import CallToAction from "@/home-sections/call-to-action";
import { FaqSection } from "@/home-sections/faq";
import FeatureShowcaseSection from "@/home-sections/feature-showcase";
import FEaturesSection from "@/home-sections/features-section";
import FooterSection from "@/home-sections/footer-section";
import HeroSection from "@/home-sections/hero-section";
import HowItWorks from "@/home-sections/how-it-works";
import NavigationSection from "@/home-sections/navigation-section";
import ReviewsSection from "@/home-sections/reviews-sections";
import ValueStrip from "@/home-sections/value-strip";
import WhatFlowpilotDo from "@/home-sections/what-flowpilot-do";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
       <NavigationSection />
       <HeroSection />
       <ValueStrip />
       <WhatFlowpilotDo />
       <FEaturesSection />
       <FeatureShowcaseSection />
       <HowItWorks />
       <ReviewsSection />
       <FaqSection />
       <CallToAction />
       <FooterSection />
    </div>
  );
}
