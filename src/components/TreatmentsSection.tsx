"use client";

import Link from "next/link";

const treatments = [
  {
    slug: "metal-braces",
    title: "Metal Braces",
    desc: "Straighten your smile with reliable modern orthodontic care.",
  },
  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    desc: "Virtually invisible alignment for a perfect smile.",
  },
  {
    slug: "laser-cleaning",
    title: "Laser Cleaning",
    desc: "Advanced cleaning for healthier, plaque-free teeth.",
  },
  {
    slug: "full-smile-makeover",
    title: "Full Smile Makeover",
    desc: "Complete aesthetic transformation for a confident you.",
  },
];

export default function TreatmentsSection() {
  return (
    <section
      id="treatments"
      style={{
        backgroundColor: "#1e1e14",
        padding: "72px 0 80px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#b8c44a",
              margin: "0 0 14px",
            }}
          >
            EXCLUSIVE SOLUTIONS
          </p>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            Featured Signature Treatments
          </h2>
        </div>

        {/* 4-card horizontal row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
          }}
          className="treatments-grid"
        >
          {treatments.map((t) => (
            <Link
              href={`/treatment/${t.slug}`}
              key={t.slug}
              className="treatment-card"
              style={{
                backgroundColor: "#2a2a1e",
                borderRadius: 16,
                padding: "28px 24px 24px",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              {/* Title */}
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "0 0 10px",
                  lineHeight: 1.3,
                }}
              >
                {t.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 13,
                  color: "#9a9a88",
                  lineHeight: 1.6,
                  margin: "0 0 24px",
                  flex: 1,
                }}
              >
                {t.desc}
              </p>

              {/* Learn More link */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#b8c44a",
                }}
              >
                Learn More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="treatment-arrow"
                  style={{ transition: "transform 0.3s ease" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .treatments-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .treatments-grid { grid-template-columns: 1fr !important; }
        }
        .treatment-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 30px rgba(0,0,0,0.4);
          background-color: #313124 !important;
          z-index: 10;
        }
        .treatment-card:hover .treatment-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
