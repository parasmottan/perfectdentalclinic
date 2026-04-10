"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        /* Match navbar background exactly — seamless */
        backgroundColor: "#faf5ec",
        paddingTop: 64, /* exact navbar height */
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "60px 48px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* ── LEFT COLUMN ── */}
        <div style={{ paddingRight: 48 }} className="hero-left-col">
          {/* "ESTABLISHED 2012" pill */}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#e8e4c0",
              borderRadius: 30,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#3d4a0d",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Established 2012
            </span>
          </div>

          {/* Heading line 1 — dark, very bold */}
          <h1
            className="hero-headline-1"
            style={{
              fontSize: 82,
              fontWeight: 900,
              color: "#1a1a0e",
              lineHeight: 1.02,
              letterSpacing: "-2.5px",
              margin: 0,
            }}
          >
            Your Smile,
          </h1>

          {/* Heading line 2 — olive, italic */}
          <h1
            className="hero-headline-2"
            style={{
              fontSize: 82,
              fontWeight: 400,
              fontStyle: "italic",
              color: "#5c6b1e",
              lineHeight: 1.08,
              letterSpacing: "-2.5px",
              margin: "0 0 28px",
            }}
          >
            Perfected.
          </h1>

          {/* Sub-description */}
          <p
            style={{
              fontSize: 16,
              color: "#4a4a3a",
              lineHeight: 1.7,
              maxWidth: 420,
              margin: "0 0 36px",
            }}
          >
            Best Dental Clinic in Siolim for RCT, Braces, Implants, Aligners & More
          </p>

          {/* CTA buttons */}
          <div className="hero-buttons" style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            {/* Primary dark pill */}
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3d4a0d",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                padding: "15px 32px",
                borderRadius: 40,
                textDecoration: "none",
                letterSpacing: "0.2px",
                whiteSpace: "nowrap",
              }}
            >
              Schedule Consultation
            </a>

            {/* Secondary outlined badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                border: "1.5px solid #b8b4a0",
                borderRadius: 40,
                padding: "13px 24px",
                backgroundColor: "transparent",
              }}
            >
              {/* Rosette badge icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l2.09 4.26L18.18 7l-3.09 3.01.73 4.24L12 12l-3.82 2.25.73-4.24L5.82 7l4.09-.74z"
                  fill="#3d4a0d"
                />
              </svg>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a0e", whiteSpace: "nowrap" }}>
                12+ Years of Expertise
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — overlapping circles + floating card ── */}
        <div
          className="hero-right-col"
          style={{
            position: "relative",
            height: 520,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Top-right circle — dental close-up */}
          <div
            className="hero-main-img"
            style={{
              position: "absolute",
              top: 0,
              right: 20,
              width: 240,
              height: 240,
              borderRadius: "50%",
              overflow: "hidden",
              border: "5px solid #faf5ec",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              zIndex: 2,
            }}
          >
            <Image
              src="/images/perfecttiming.webp"
              alt="Dental close-up"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              priority
            />
          </div>

          {/* Floating white "PERFECT CLINIC" card */}
          <div
            className="hero-floating-card"
            style={{
              position: "absolute",
              top: "44%",
              right: 192,
              transform: "translateY(-50%)",
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: "28px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
              zIndex: 3,
              minWidth: 165,
            }}
          >
            {/* Tooth icon */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C9.5 2 7 3.5 7 6c0 1.2.3 2.3.5 3.5C8 12 8 14 7 17c-.5 1.5-.5 3 1 3s2-1.5 2.5-3c.3-.8.5-1.5 1.5-1.5s1.2.7 1.5 1.5C14 18.5 14.5 20 16 20s1.5-1.5 1-3c-1-3-1-5-.5-7.5.2-1.2.5-2.3.5-3.5 0-2.5-2.5-4-5-4z"
                fill="#5c6b1e"
              />
            </svg>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#3d4a0d",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Perfect Dental Clinic
            </span>
          </div>

          {/* Bottom-left circle — clinic exterior */}
          <div
            className="hero-secondary-img"
            style={{
              position: "absolute",
              bottom: 0,
              left: 20,
              width: 280,
              height: 280,
              borderRadius: "50%",
              overflow: "hidden",
              border: "5px solid #faf5ec",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              zIndex: 2,
            }}
          >
            <Image
              src="/images/perfectout.webp"
              alt="Perfect Dental Clinic"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 24px 60px !important;
            text-align: center !important;
          }
          .hero-left-col {
            padding-right: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            margin-bottom: 48px !important; /* added space before image */
          }
          .hero-headline-1, .hero-headline-2 {
            font-size: 44px !important;
            letter-spacing: -1px !important;
          }
          .hero-buttons {
            justify-content: center !important;
            flex-direction: column !important;
            width: 100% !important;
            gap: 16px !important;
          }
          .hero-buttons > * {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-right-col {
            height: auto !important;
            width: 100% !important;
            transform: none !important;
            margin-top: 0 !important;
            display: flex !important;
            justify-content: center !important;
          }
          
          /* Show only the main image, centered, resized */
          .hero-main-img {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            width: 220px !important;
            height: 220px !important;
            margin: 0 auto !important;
          }
          
          /* Hide overlapping items */
          .hero-secondary-img,
          .hero-floating-card {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
