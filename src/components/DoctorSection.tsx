"use client";

import Image from "next/image";

export default function DoctorSection() {
  return (
    <section
      id="about"
      className="doctor-section"
      style={{
        backgroundColor: "#fff",
        padding: "80px 0 88px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="doctor-grid"
      >
        {/* ── LEFT — photo with yellow background blob + quote card ── */}
        <div style={{ position: "relative" }}>
          {/* Yellow background blob — offset top-left */}
          <div
            style={{
              position: "absolute",
              top: -20,
              left: -20,
              width: "92%",
              height: "96%",
              backgroundColor: "#f0f5a0",
              borderRadius: 24,
              zIndex: 0,
            }}
          />

          {/* Doctor photo card */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              borderRadius: 20,
              overflow: "hidden",
              width: "100%",
              aspectRatio: "4 / 5",
            }}
          >
            <Image
              src="/images/perfectdr.png"
              alt="Dr. Narayan Raut"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              priority
            />
          </div>

          {/* White quote card — overlapping bottom-left of photo */}
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: -12,
              zIndex: 2,
              backgroundColor: "#fff",
              borderRadius: 14,
              padding: "16px 20px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              maxWidth: 240,
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: "#1a1a0e",
                lineHeight: 1.55,
                margin: "0 0 8px",
                fontStyle: "normal",
              }}
            >
              &ldquo;Dentistry is the perfect intersection of art and
              health.&rdquo;
            </p>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#3d4a0d",
                margin: 0,
              }}
            >
              &mdash; Dr Narayan Raut
            </p>
          </div>
        </div>

        {/* ── RIGHT — text content ── */}
        <div>
          {/* Label */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#7a8c2e",
              margin: "0 0 16px",
            }}
          >
            THE VISIONARY
          </p>

          {/* Heading */}
          <h2
            className="doctor-header"
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#0f0f08",
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              margin: "0 0 24px",
            }}
          >
            Meet Dr. Narayan Raut,
            <br />
            Lead Dentist &amp;
            <br />
            Founder
          </h2>

          {/* Body paragraphs */}
          <p
            style={{
              fontSize: 14,
              color: "#555",
              lineHeight: 1.7,
              margin: "0 0 16px",
            }}
          >
            With over two decades of experience in aesthetic and restorative
            dentistry, Dr. Raut founded Perfect Dental Clinic with a singular
            mission: to provide a dental experience that guests actually look
            forward to.
          </p>
          <p
            style={{
              fontSize: 14,
              color: "#555",
              lineHeight: 1.7,
              margin: "0 0 40px",
            }}
          >
            An alumnus of top-tier medical institutions and a continuous
            advocate for minimally invasive techniques, his approach prioritizes
            the long-term biological health of his patients without compromising
            on the beauty of the final result.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 48 }}>
            <div>
              <p
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  color: "#3d4a0d",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                20+
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#888",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  margin: "6px 0 0",
                }}
              >
                YEARS OF PRACTICE
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  color: "#3d4a0d",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                GOA
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#888",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  margin: "6px 0 0",
                }}
              >
                TOP DENTIST 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .doctor-section {
            padding: 40px 0 48px !important;
          }
          .doctor-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .doctor-header {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
