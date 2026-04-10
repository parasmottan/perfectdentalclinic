import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Dental Services | Perfect Dental Clinic",
  description:
    "Explore our full range of curated dental services including teeth whitening, braces, Invisalign, root canal therapy, dental implants, and preventative cleaning.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesPageContent />
    </>
  );
}
