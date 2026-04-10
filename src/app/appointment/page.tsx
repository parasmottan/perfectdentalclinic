import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AppointmentPageContent from "@/components/AppointmentPageContent";

export const metadata: Metadata = {
  title: "Book an Appointment | Perfect Dental Clinic",
  description:
    "Experience dental care redefined. Step into a sanctuary designed for your comfort, precision, and lasting oral health.",
};

export default function AppointmentPage() {
  return (
    <>
      <Navbar />
      <AppointmentPageContent />
    </>
  );
}
