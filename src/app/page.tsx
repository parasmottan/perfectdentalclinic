import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";

const StatsSection = dynamic(() => import("@/components/StatsSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const DoctorSection = dynamic(() => import("@/components/DoctorSection"));
const TreatmentsSection = dynamic(() => import("@/components/TreatmentsSection"));
const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <DoctorSection />
        <TreatmentsSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
