import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Perfect Dental Clinic",
  description:
    "Get in touch with Perfect Dental Clinic. Book an appointment, find our location in Siolim, Goa, or send us a message. We are here to help.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactPageContent />
    </>
  );
}
