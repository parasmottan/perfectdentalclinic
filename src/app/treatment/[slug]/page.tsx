import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Refined, human-sounding content written from a professional dentist's perspective
const treatmentsData: Record<string, any> = {
  "laser-cleaning": {
    title: "Laser Cleaning",
    headline: "Advanced Laser Cleaning for Healthier Teeth",
    tagline: "Experience a deeper, gentler clean that protects your smile and promotes rapid healing.",
    description: "Plaque and tartar buildup can lead to serious gum inflammation and decay if left untreated. Our advanced laser cleaning precisely targets and removes even the most stubborn calculus from your teeth and below the gumline. I always emphasize to my patients that this isn't your traditional, uncomfortable scaling session. It's a highly sophisticated, virtually painless procedure that prioritizes your comfort while actively sterilizing the affected areas.\n\nBecause the laser is so precise, it simultaneously stimulates your gum tissue, promoting rapid healing. You'll leave the clinic with an incredibly fresh, thoroughly clean smile and significantly healthier gums, ready to tackle the day with confidence.",
    beforeImage: "/images/6afb.webp",
    afterImage: "/images/2afb.webp",
    benefits: [
      "Removes stubborn plaque & tartar",
      "Improves gum health",
      "Fresh and clean smile"
    ]
  },
    "metal-braces": {
    title: "Metal Braces",
    headline: "Straighten your smile with modern orthodontic care",
    tagline: "Achieve the straight, beautiful smile you've always wanted with durable, proven orthodontic care.",
    description: "Correcting a misaligned bite or deeply crowded teeth is one of the most rewarding transformations we do at the clinic. Modern orthodontic treatment with braces isn't just about achieving an aesthetically perfect smile—although that's certainly a wonderful outcome. It's about establishing proper alignment to ensure your teeth wear evenly, improving both your bite function and your overall oral longevity.\n\nWe utilize low-profile, high-grade brackets and advanced archwires that apply gentle, consistent pressure. The process is constantly monitored by our expert team, ensuring every movement is intentional. Once the braces come off, the long-lasting structural results speak for themselves.",
    beforeImage: "/images/1afb.webp",
    afterImage: "/images/4afb.webp",
    benefits: [
      "Corrects misaligned teeth",
      "Improves bite and smile",
      "Long-lasting results"
    ]
  },
  "clear-aligners": {
    title: "Clear Aligners",
    headline: "Virtually invisible alignment for a perfect smile",
    tagline: "Discreet and comfortable aligners tailored to your specific dental structure.",
    description: "For patients looking to straighten their teeth seamlessly, clear aligners offer a subtle alternative to traditional metal braces. Using advanced 3D imaging, we map out a fully customized set of aligners that gently shift your teeth into proper placement over time.\n\nBecause they are completely removable, clear aligners allow you to maintain your usual dietary habits and oral hygiene routine. It’s an ideal solution for adults and teens who want professional orthodontic results without the aesthetic compromise.",
    beforeImage: "/images/7afb.webp",
    afterImage: "/images/8afb.webp",
    benefits: [
      "Virtually invisible treatment",
      "Removable for easy cleaning",
      "Highly predictable results"
    ]
  },
  "full-smile-makeover": {
    title: "Full Smile Makeover",
    headline: "Complete aesthetic transformation for a confident you",
    tagline: "A completely personalized treatment plan crafted to restore beauty, balance, and function to your smile.",
    description: "A Full Smile Makeover is the ultimate expression of personalized aesthetic dentistry. We often see patients who want to address multiple concerns at once—whether that involves stubborn yellowing, minor misalignments, or uneven chipping. By combining targeted treatments like professional laser cleaning and advanced aligners, we completely revitalize the architecture and brightness of your teeth.\n\nEvery smile is unique, which is why we sit down with you to design a personalized treatment plan from the ground up. By blending our deep clinical expertise with a focus on harmony and balance, we deliver a flawless result that profoundly improves your confidence and elevates your natural beauty.",
    beforeImage: "/images/5afb.webp",
    afterImage: "/images/3afb.webp",
    benefits: [
      "Enhances smile aesthetics",
      "Improves confidence",
      "Personalized treatment plans"
    ]
  }
};

export async function generateStaticParams() {
  return [
    { slug: "metal-braces" },
    { slug: "clear-aligners" },
    { slug: "laser-cleaning" },
    { slug: "full-smile-makeover" }
  ];
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = treatmentsData[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#faf5ec", fontFamily: "Inter, sans-serif", paddingTop: 64 }}>
        
        {/* PREMIUM HERO SECTION */}
        <section className="treatment-hero-section" style={{ backgroundColor: "#faf5ec", padding: "120px 0 100px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 48px", textAlign: "center" }} className="treatment-hero-container">
            <p
              style={{
                display: "inline-block",
                backgroundColor: "#d4e8a0",
                padding: "6px 18px",
                borderRadius: 30,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#3d4a0d",
                margin: "0 0 24px",
              }}
            >
              Signature Treatment • {data.title}
            </p>
            <h1
              className="treatment-headline"
              style={{
                fontSize: 64,
                fontWeight: 900,
                color: "#1a1a0e",
                lineHeight: 1.05,
                letterSpacing: "-1.8px",
                margin: "0 0 32px",
              }}
            >
              {data.headline}
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#555540",
                lineHeight: 1.6,
                maxWidth: 700,
                margin: "0 auto",
                fontWeight: 400,
              }}
            >
              {data.tagline}
            </p>
          </div>
        </section>

        {/* POWERFUL BEFORE & AFTER SECTION */}
        <section className="treatment-ba-section" style={{ backgroundColor: "#fff", padding: "120px 0", borderTop: "1px solid #f0ebe1" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }} className="treatment-ba-container">
            
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#1a1a0e", letterSpacing: "-0.5px", margin: "0 0 12px" }}>
                Transformative Results
              </h2>
              <p style={{ fontSize: 15, color: "#7a7a68", margin: 0 }}>
                Real patient results from Perfect Dental Clinic
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
              className="before-after-grid"
            >
              {/* Before Image */}
              <div 
                style={{ 
                  position: "relative", 
                  borderRadius: 24, 
                  overflow: "hidden", 
                  aspectRatio: "4/3",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.06)",
                  border: "1px solid #ebe6da"
                }}
              >
                <Image
                  src={data.beforeImage}
                  alt={`${data.title} Before`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    backgroundColor: "rgba(255,255,255,0.95)",
                    padding: "8px 20px",
                    borderRadius: 30,
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#1a1a0e",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                    letterSpacing: "1px",
                    textTransform: "uppercase"
                  }}
                >
                  Before
                </div>
              </div>

              {/* After Image */}
              <div 
                style={{ 
                  position: "relative", 
                  borderRadius: 24, 
                  overflow: "hidden", 
                  aspectRatio: "4/3",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.06)",
                  border: "1px solid #ebe6da"
                }}
              >
                <Image
                  src={data.afterImage}
                  alt={`${data.title} After`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    backgroundColor: "rgba(255,255,255,0.95)",
                    padding: "8px 20px",
                    borderRadius: 30,
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#5c6b1e",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                    letterSpacing: "1px",
                    textTransform: "uppercase"
                  }}
                >
                  After
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* HUMAN-FOCUSED CONTENT & ENHANCED BENEFITS */}
        <section className="treatment-desc-section" style={{ backgroundColor: "#faf5ec", padding: "140px 0" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "0 48px",
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 80,
            }}
            className="desc-grid"
          >
            {/* Professional Description */}
            <div>
              <h2
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: "#1a1a0e",
                  letterSpacing: "-0.8px",
                  margin: "0 0 32px",
                }}
              >
                Our Approach to Your Care
              </h2>
              {data.description.split("\n\n").map((para: string, idx: number) => (
                <p
                  key={idx}
                  style={{
                    fontSize: 16,
                    color: "#4a4a3a",
                    lineHeight: 1.85,
                    margin: "0 0 24px",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Standout Benefits Card */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 24,
                padding: "48px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.05)",
                alignSelf: "flex-start",
                border: "1px solid #f0ebe1"
              }}
            >
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#1a1a0e",
                  margin: "0 0 32px",
                  letterSpacing: "-0.3px",
                  borderBottom: "2px solid #faf5ec",
                  paddingBottom: 24
                }}
              >
                Why Choose This Treatment?
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {data.benefits.map((benefit: string, idx: number) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      marginBottom: 24,
                      fontSize: 15,
                      color: "#3a3a2a",
                      lineHeight: 1.6,
                      fontWeight: 500
                    }}
                  >
                    <div style={{ backgroundColor: "#eef2da", borderRadius: "50%", padding: 6, display: "flex", flexShrink: 0, marginTop: 2 }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#5c6b1e"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PREMIUM CTA SECTION */}
        <section className="treatment-cta-section" style={{ backgroundColor: "#1e1e14", padding: "120px 0" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 48px", textAlign: "center" }} className="treatment-cta-container">
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#b8c44a",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                margin: "0 0 16px",
              }}
            >
              Transform Your Smile Safely
            </p>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                letterSpacing: "-1px",
                margin: "0 0 24px",
              }}
            >
              Ready to take the next step?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                margin: "0 0 48px",
              }}
            >
              Book your consultation today and take the first step toward a healthier smile.<br/>
              <span style={{ fontSize: 13, opacity: 0.7, fontStyle: "italic", display: "inline-block", marginTop: 12 }}>
                Performed by experienced dental professionals at Perfect Dental Clinic, Siolim.
              </span>
            </p>
            <Link
              href="/appointment"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#b8c44a",
                color: "#1e1e14",
                fontSize: 16,
                fontWeight: 800,
                padding: "20px 42px",
                borderRadius: 40,
                textDecoration: "none",
                letterSpacing: "0.5px",
                boxShadow: "0 12px 30px rgba(184, 196, 74, 0.2)",
                transition: "transform 0.2s ease",
              }}
            >
              Book Appointment
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .before-after-grid { grid-template-columns: 1fr !important; }
          .desc-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          
          .treatment-hero-section { padding: 60px 0 60px !important; }
          .treatment-headline { font-size: 42px !important; }
          .treatment-ba-section { padding: 60px 0 !important; }
          .treatment-desc-section { padding: 60px 0 !important; }
          .treatment-cta-section { padding: 80px 0 !important; }
          
          .treatment-hero-container,
          .treatment-ba-container,
          .treatment-cta-container,
          .desc-grid {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </>
  );
}
