"use client";

const services = [
  {
    icon: (
      /* wand/magic — Teeth Whitening */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 4l5 5-9.5 9.5-5-5L15 4z" />
        <path d="M2 22l4-4" />
        <path d="M18 2l4 4" />
      </svg>
    ),
    cardBg: "#ddeaf0",
    iconBg: "#f0f7fa",
    iconColor: "#3d6b82",
    title: "Teeth Whitening",
    desc: "Professional grade brightening treatments that restore your natural radiance in a single visit.",
  },
  {
    icon: (
      /* grid — Braces & Brackets */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    cardBg: "#f2f2f2",
    iconBg: "#e8e8e8",
    iconColor: "#555",
    title: "Braces & Brackets",
    desc: "Traditional and ceramic solutions to perfectly align your teeth with long-lasting structural integrity.",
  },
  {
    icon: (
      /* eye — Invisalign */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    cardBg: "#efefef",
    iconBg: "#e4e4e4",
    iconColor: "#555",
    title: "Invisalign",
    desc: "Clear, removable aligners that discreetly transform your smile without the look of metal braces.",
  },
  {
    icon: (
      /* cross/plus in box — Root Canal */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    cardBg: "#f5f0d8",
    iconBg: "#eee8c4",
    iconColor: "#7a6a1e",
    title: "Root Canal",
    desc: "Painless endodontic procedures designed to save your natural teeth and alleviate chronic discomfort.",
  },
  {
    icon: (
      /* phone/headset with ring — Dental Implants */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.93 6.93l1.51-1.51a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        <path d="M14.05 2a9 9 0 018 7.94M14.05 6A5 5 0 0118 10" />
      </svg>
    ),
    cardBg: "#f2f2f2",
    iconBg: "#e4e4e8",
    iconColor: "#555",
    title: "Dental Implants",
    desc: "High-durability titanium implants that look, feel, and function exactly like your original teeth.",
  },
  {
    icon: (
      /* broom/cleaning — Deep Cleaning */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l9-9M14 4l6 6-2 2-6-6 2-2z" />
        <path d="M5 19l-2 2M8 16l-5 5" />
        <path d="M12 8l4-4 4 4-4 4-4-4z" />
      </svg>
    ),
    cardBg: "#efefef",
    iconBg: "#e4e4e4",
    iconColor: "#555",
    title: "Deep Cleaning",
    desc: "Advanced prophylaxis and periodontal maintenance to ensure your oral hygiene remains at its peak.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#fff",
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
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 48,
            gap: 24,
          }}
          className="services-header"
        >
          {/* Left: heading + sub */}
          <div style={{ maxWidth: 480 }}>
            <h2
              style={{
                fontSize: 34,
                fontWeight: 800,
                color: "#1a1a0e",
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
                margin: "0 0 12px",
              }}
            >
              Our Core Dental Services
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#555",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Advanced technology meets compassionate care. We offer a
              comprehensive suite of treatments tailored to your unique anatomy.
            </p>
          </div>

          {/* Right: Explore link */}
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 700,
              color: "#3d4a0d",
              textDecoration: "none",
              whiteSpace: "nowrap",
              marginTop: 8,
            }}
          >
            Explore All Services
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* 3×2 card grid — each card is fully independent with its own background */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="services-grid"
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                backgroundColor: s.cardBg,
                borderRadius: 20,
                padding: "32px 28px 36px",
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: s.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  color: s.iconColor,
                }}
              >
                {s.icon}
              </div>

              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#1a1a0e",
                  margin: "0 0 10px",
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: "#555",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-header { flex-direction: column !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
