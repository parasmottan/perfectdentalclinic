import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Professional, human-focused clinical data for all services
const servicesData: Record<string, any> = {
  "teeth-whitening": {
    title: "Teeth Whitening",
    headline: "Professional Teeth Whitening",
    tagline: "Restore your natural radiance in a single visit with our advanced brightening treatments.",
    description: "Over time, teeth naturally absorb stains from coffee, tea, wine, and certain foods, leading to a dull or yellowed appearance. Our professional teeth whitening service uses advanced, enamel-safe bleaching agents combined with specialized light accelerators to gently break down these deep structural stains.\n\nUnlike over-the-counter kits that often cause unbearable sensitivity and deliver patchy results, our clinical approach is carefully monitored to protect your gums while ensuring an incredibly bright, even, and natural-looking smile.",
    beforeImage: "/images/6afb.jpeg",
    afterImage: "/images/2afb.jpeg",
    benefits: [
      "Safe & painless",
      "Immediate, visible results",
      "Customized to your sensitivity"
    ],
    process: [
      { step: "Consultation", desc: "We evaluate your current shade and discuss your desired esthetic results." },
      { step: "Treatment", desc: "Application of our clinical-grade whitening gel, activated by specialized LED technology." },
      { step: "Follow-up", desc: "Review of your new shade and personalized instructions for long-lasting maintenance." }
    ]
  },
  "metal-braces": {
    title: "Metal Braces",
    headline: "Expert Orthodontic Care",
    tagline: "Traditional and ceramic solutions to perfectly align your teeth with long-lasting structural integrity.",
    description: "Correcting a misaligned bite or crowded teeth is one of the most rewarding procedures we offer. Modern orthodontic treatment with braces isn't just about achieving an aesthetically perfect smile—it's about establishing proper alignment to ensure your teeth wear evenly, improving both your bite function and overall oral longevity.\n\nWe utilize low-profile, high-grade brackets and advanced archwires that apply gentle, consistent pressure. The process is constantly monitored by our expert team, ensuring every movement is intentional and highly effective.",
    beforeImage: "/images/1afb.jpeg",
    afterImage: "/images/4afb.jpeg",
    benefits: [
      "Corrects severe misalignments",
      "Improves jaw function and bite",
      "Durable and long-lasting results"
    ],
    process: [
      { step: "Consultation", desc: "Comprehensive 3D scans and x-rays to map your current dental architecture." },
      { step: "Treatment", desc: "Precise bracket placement and wire threading customized to your movement plan." },
      { step: "Follow-up", desc: "Routine adjustments every few weeks to ensure perfect continuous alignment." }
    ]
  },
  "invisalign": {
    title: "Invisalign",
    headline: "Discreet Clear Aligners",
    tagline: "Clear, removable aligners that discreetly transform your smile without the look of metal braces.",
    description: "For patients who want to straighten their teeth without the visual impact of traditional metal braces, Invisalign is the premier choice. These virtually invisible, custom-molded aligners gently and gradually shift your teeth into their proper positions. Because they are completely removable, you can easily maintain your normal eating and brushing routines throughout the treatment.\n\nWe use advanced 3D imaging technology to map out your entire treatment plan from day one. You'll switch to a new set of custom aligners every few weeks, meaning fewer clinic visits and a highly comfortable, predictable path to a flawless smile.",
    beforeImage: "/images/7afb.jpg",
    afterImage: "/images/8afb.jpg",
    benefits: [
      "Virtually invisible treatment",
      "Removable for easy eating & cleaning",
      "Highly comfortable with no sharp wires"
    ],
    process: [
      { step: "Consultation", desc: "Digital impressions are taken to create a precise 3D model of your teeth." },
      { step: "Treatment", desc: "You receive your custom aligners and begin wearing them 20-22 hours a day." },
      { step: "Follow-up", desc: "Brief check-ins to monitor progress and receive your next sets of aligners." }
    ]
  },
  "root-canal": {
    title: "Root Canal",
    headline: "Painless Root Canal Therapy",
    tagline: "Advanced endodontic procedures designed to save your natural teeth and alleviate chronic discomfort.",
    description: "When the inner pulp of a tooth becomes infected or severely inflamed, a root canal is often the only way to save the natural tooth structure and stop the agonizing pain. Despite its old reputation, modern root canal therapy is highly sophisticated and is generally no more uncomfortable than receiving a standard filling.\n\nOur team uses precision micro-instruments to carefully remove the infected tissue, thoroughly sterilize the hollowed canal, and seal it to prevent future decay. We prioritize your absolute comfort throughout the entire process, ensuring you walk out of the clinic pain-free and relieved.",
    beforeImage: null,
    afterImage: null,
    benefits: [
      "Stops severe dental pain",
      "Saves your natural tooth structure",
      "Prevents dangerous jaw infections"
    ],
    process: [
      { step: "Consultation", desc: "Digital x-rays are used to pinpoint the exact location and severity of the infection." },
      { step: "Treatment", desc: "The tooth is gently numbed, the infection is cleared, and the core is securely sealed." },
      { step: "Follow-up", desc: "Placement of a durable, custom-matched crown to fully protect the treated tooth." }
    ]
  },
  "dental-implants": {
    title: "Dental Implants",
    headline: "Permanent Dental Implants",
    tagline: "High-durability titanium implants that look, feel, and function exactly like your original teeth.",
    description: "Losing a tooth can deeply affect how you chew, speak, and confidently smile. Dental implants are the absolute gold standard for tooth replacement because they don't just fill a visual gap—they integrate directly with your jawbone. This prevents the bone degradation that naturally occurs when a tooth root is missing.\n\nThe titanium post acts as a sturdy artificial root. Once fully healed, we place a custom-crafted porcelain crown on top that blends seamlessly with your existing smile, offering uncompromising durability and stunning aesthetic harmony.",
    beforeImage: "/images/5afb.jpeg",
    afterImage: "/images/3afb.jpeg",
    benefits: [
      "Permanent, non-removable solution",
      "Prevents natural jawbone loss",
      "Looks and functions exactly like real teeth"
    ],
    process: [
      { step: "Consultation", desc: "Comprehensive bone density scans to ensure you are an ideal candidate for implants." },
      { step: "Treatment", desc: "Surgical placement of the titanium post, followed by a necessary healing period." },
      { step: "Follow-up", desc: "Attachment of the abutment and your custom-matched permanent porcelain crown." }
    ]
  },
  "preventative-cleaning": {
    title: "Preventative Cleaning",
    headline: "Advanced Periodontal Cleaning",
    tagline: "Advanced prophylaxis and periodontal maintenance to ensure your oral hygiene remains at its peak.",
    description: "Also known as scaling and root planing, a deep cleaning procedure goes far beyond a routine polish. When plaque and tartar aggressively build up beneath the gum line, it triggers inflammation and early-stage gum disease (gingivitis). If left untreated, this can progress to severe periodontitis.\n\nOur specialized deep cleaning carefully removes hardened calculus from the deep periodontal pockets surrounding your teeth. We then actively smooth the tooth roots, allowing your gums to neatly reattach and heal. This is a critical, proactive measure to safeguard the long-term biological health of your entire mouth.",
    beforeImage: "/images/6afb.jpeg",
    afterImage: "/images/2afb.jpeg",
    benefits: [
      "Reverses early gum disease",
      "Eliminates bad breath causing bacteria",
      "Prevents future tooth loss"
    ],
    process: [
      { step: "Consultation", desc: "We measure your periodontal pockets and assess the health of your gum tissue." },
      { step: "Treatment", desc: "Ultrasonic scaling below the gum line to remove hardened tartar and bacteria." },
      { step: "Follow-up", desc: "A post-treatment polish and review to ensure your gums are healing properly." }
    ]
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = servicesData[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#faf5ec", fontFamily: "Inter, sans-serif", paddingTop: 64 }}>
        
        {/* PREMIUM HERO SECTION */}
        <section className="service-hero-section" style={{ backgroundColor: "#faf5ec", padding: "120px 0 100px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 48px", textAlign: "center" }} className="service-hero-container">
            <p
              style={{
                display: "inline-block",
                backgroundColor: "#e8eff2",
                padding: "6px 18px",
                borderRadius: 30,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#2a4d5e",
                margin: "0 0 24px",
              }}
            >
              Core Service • {data.title}
            </p>
            <h1
              className="service-headline"
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

        {/* CONDITIONAL BEFORE & AFTER SECTION */}
        {data.beforeImage && data.afterImage && (
          <section className="service-ba-section" style={{ backgroundColor: "#fff", padding: "120px 0", borderTop: "1px solid #f0ebe1" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }} className="service-ba-container">
              
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <h2 style={{ fontSize: 32, fontWeight: 800, color: "#1a1a0e", letterSpacing: "-0.5px", margin: "0 0 12px" }}>
                  Real Patient Results
                </h2>
                <p style={{ fontSize: 15, color: "#7a7a68", margin: 0 }}>
                  Transformative care from Perfect Dental Clinic
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
                      color: "#2a4d5e",
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
        )}

        {/* HUMAN-FOCUSED CONTENT & ENHANCED BENEFITS */}
        <section className="service-desc-section" style={{ backgroundColor: "#faf5ec", padding: "140px 0" }}>
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
                About This Service
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
                Key Benefits
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
                    <div style={{ backgroundColor: "#eaf0f2", borderRadius: "50%", padding: 6, display: "flex", flexShrink: 0, marginTop: 2 }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2a4d5e"
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

        {/* PROCESS TIMELINE SECTION */}
        <section className="service-process-section" style={{ backgroundColor: "#fff", padding: "120px 0", borderTop: "1px solid #f0ebe1" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }} className="service-process-container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#2a4d5e",
                  margin: "0 0 14px",
                }}
              >
                THE PROCESS
              </p>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: "#1a1a0e", letterSpacing: "-0.5px", margin: 0 }}>
                Your Treatment Journey
              </h2>
            </div>

            <div 
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }} 
              className="process-grid"
            >
              {data.process.map((p: any, i: number) => (
                <div 
                  key={i} 
                  style={{ 
                    backgroundColor: "#fafaf8", 
                    padding: "36px", 
                    borderRadius: 20, 
                    border: "1px solid #f0ebe1",
                    position: "relative"
                  }}
                >
                  <div 
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      border: "2px solid #e8eff2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#2a4d5e",
                      marginBottom: 24,
                      boxShadow: "0 8px 16px rgba(0,0,0,0.04)"
                    }}
                  >
                    {i + 1}
                  </div>
                  <h4 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a0e", margin: "0 0 12px" }}>
                    {p.step}
                  </h4>
                  <p style={{ fontSize: 14, color: "#6a6a58", lineHeight: 1.6, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST CTA SECTION */}
        <section className="service-cta-section" style={{ backgroundColor: "#1e1e14", padding: "120px 0" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 48px", textAlign: "center" }} className="service-cta-container">
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#e8eff2",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                margin: "0 0 16px",
                opacity: 0.8
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
              Start your journey to a healthier smile today
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                margin: "0 0 48px",
              }}
            >
              Take the first step toward a healthier, more confident smile.<br/>
              <span style={{ fontSize: 13, opacity: 0.7, fontStyle: "italic", display: "inline-block", marginTop: 12 }}>
                Performed by experienced dental professionals at Perfect Dental Clinic, Siolim.
              </span>
            </p>
            <Link
              href="/appointment"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#fff",
                color: "#1e1e14",
                fontSize: 16,
                fontWeight: 800,
                padding: "20px 42px",
                borderRadius: 40,
                textDecoration: "none",
                letterSpacing: "0.5px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
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
          .process-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          
          .service-hero-section { padding: 80px 0 60px !important; }
          .service-headline { font-size: 42px !important; }
          .service-ba-section { padding: 60px 0 !important; }
          .service-desc-section { padding: 60px 0 !important; }
          .service-process-section { padding: 60px 0 !important; }
          .service-cta-section { padding: 80px 0 !important; }
          
          .service-hero-container,
          .service-ba-container,
          .service-cta-container,
          .service-process-container,
          .desc-grid {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </>
  );
}
