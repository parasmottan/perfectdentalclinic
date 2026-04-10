"use client";

import Image from "next/image";
import Link from "next/link";

/* ─── SERVICE CARDS DATA ─────────────────────────────── */
const servicesGrid = [
  {
    id: 1,
    icon: "💧",
    title: "Teeth Whitening",
    desc: "Professional-grade brightening treatments that restore your natural radiance in a single visit.",
    bg: "#dce8f0",
    dark: false,
    wide: false,
  },
  {
    id: 2,
    icon: "⚙️",
    title: "Metal Braces",
    desc: "Proven results for complex alignment. Durable, cost-effective orthodontics.",
    bg: "#5b7fa6",
    dark: true,
    wide: false,
  },
  {
    id: 3,
    icon: "✦",
    title: "Invisalign",
    desc: "Clear, removable aligners that discreetly transform your smile without the look of metal braces.",
    bg: "#c8c16a",
    dark: false,
    wide: false,
  },
  {
    id: 4,
    icon: "🦷",
    title: "Root Canal Therapy",
    desc: "Painless endodontic procedures designed to save your natural teeth and alleviate chronic discomfort.",
    bg: "#f5f0e8",
    dark: false,
    wide: false,
  },
  {
    id: 5,
    icon: "🔩",
    title: "Dental Implants",
    desc: "High-durability titanium implants that look, feel, and function exactly like your original teeth.",
    bg: "#2a2a1e",
    dark: true,
    wide: false,
  },
];

/* ─── WHY CHOOSE FEATURES ────────────────────────────── */
const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a5a10" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Priority Comfort",
    desc: "From your first visit to your last, our team ensures every touchpoint is relaxed, transparent, and painless.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a5a10" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Board-Certified Doctors",
    desc: "Our clinicians hold advanced certifications from top dental associations, ensuring gold-standard care.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a5a10" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "Technology Forward",
    desc: "We invest in the latest dental technology, from 3D imaging to laser-assisted procedures, for superior precision.",
  },
];

export default function ServicesPageContent() {
  return (
    <main style={{ backgroundColor: "#faf5ec", fontFamily: "Inter, sans-serif" }}>

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#faf5ec",
          paddingTop: 64, /* navbar height */
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "64px 48px 72px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="services-hero-grid"
        >
          {/* LEFT */}
          <div>
            {/* Tag */}
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#d4e8a0",
                borderRadius: 30,
                padding: "5px 14px",
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 700, color: "#3d4a0d", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                Clinic Services
              </span>
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: 56, fontWeight: 900, color: "#1a1a0e", lineHeight: 1.08, letterSpacing: "-1.5px", margin: "0 0 24px" }}>
              Elevating the{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5c6b1e" }}>Standard</em>{" "}
              of Modern Dentistry
            </h1>

            {/* Body */}
            <p style={{ fontSize: 15, color: "#555540", lineHeight: 1.72, maxWidth: 420, margin: "0 0 36px" }}>
              From routine maintenance to complete smile transformations, our
              curated treatments are designed for those who expect nothing less than an artisanal standard.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="#services-grid"
                style={{
                  display: "inline-flex", alignItems: "center",
                  backgroundColor: "#3d4a0d", color: "#fff",
                  fontSize: 14, fontWeight: 700,
                  padding: "14px 28px", borderRadius: 40,
                  textDecoration: "none", whiteSpace: "nowrap",
                }}
              >
                Explore Treatments
              </Link>
              <Link
                href="#contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: "1.5px solid #a8a890", borderRadius: 40,
                  padding: "13px 24px", fontSize: 14, fontWeight: 600,
                  color: "#1a1a0e", textDecoration: "none", whiteSpace: "nowrap",
                  backgroundColor: "transparent",
                }}
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* RIGHT — large image + floating card */}
          <div style={{ position: "relative" }}>
            {/* Main photo — rounded rectangle */}
            <div style={{ borderRadius: 20, overflow: "hidden", width: "100%", aspectRatio: "4/3", position: "relative" }}>
              <Image
                src="/images/perfectteeth.webp"
                alt="Modern dentistry"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Floating white info card */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: 24,
                backgroundColor: "#fff",
                borderRadius: 16,
                padding: "16px 22px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                minWidth: 220,
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 700, color: "#8a8a70", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 6px" }}>
                Trusted by
              </p>
              <p style={{ fontSize: 22, fontWeight: 800, color: "#1a1a0e", margin: "0 0 2px" }}>
                10,000+ Patients
              </p>
              <p style={{ fontSize: 12, color: "#888878", margin: 0 }}>
                Across Goa since 2012
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — CURATED DENTAL SERVICES
      ══════════════════════════════════════════════════════ */}
      <section
        id="services-grid"
        style={{ backgroundColor: "#fff", padding: "80px 0 88px" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

          {/* Section header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "flex-end",
              marginBottom: 52,
            }}
            className="services-header-grid"
          >
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#7a8c2e", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>
                What We Offer
              </p>
              <h2 style={{ fontSize: 42, fontWeight: 800, color: "#1a1a0e", lineHeight: 1.15, letterSpacing: "-0.8px", margin: 0 }}>
                Curated Dental Services
              </h2>
            </div>
            <p style={{ fontSize: 14, color: "#555540", lineHeight: 1.7, margin: 0, alignSelf: "flex-end" }}>
              From preventative care to transformative aesthetics, every
              treatment at Perfect Dental is delivered with precision, empathy,
              and an artisanal touch.
            </p>
          </div>

          {/* Row 1: Teeth Whitening (wide-left) + Metal Braces (right) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 14,
              marginBottom: 14,
            }}
            className="services-row"
          >
            {/* Teeth Whitening */}
            <div style={{ backgroundColor: "#dce8f0", borderRadius: 20, padding: "32px 28px 28px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3d5a70" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
                </svg>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a2a3a", margin: "0 0 10px" }}>Teeth Whitening</h3>
              <p style={{ fontSize: 13, color: "#4a6070", lineHeight: 1.65, margin: "0 0 20px" }}>
                Professional-grade brightening treatments that restore your natural radiance in a single visit.
              </p>
              <Link href="/service/teeth-whitening" style={{ fontSize: 12, fontWeight: 700, color: "#4a6070", textDecoration: "underline" }}>Learn more</Link>
            </div>

            {/* Metal Braces */}
            <div style={{ backgroundColor: "#5b7fa6", borderRadius: 20, padding: "32px 28px 28px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="8" rx="3" />
                  <line x1="7" y1="8" x2="7" y2="16" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="17" y1="8" x2="17" y2="16" />
                </svg>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>Metal Braces</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.65, margin: "0 0 20px" }}>
                Proven results for complex alignment. Durable, cost-effective orthodontics.
              </p>
              <Link href="/service/metal-braces" style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.85)", textDecoration: "underline" }}>Learn more</Link>
            </div>
          </div>

          {/* Row 2: Invisalign + Root Canal + Dental Implants */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 14,
              marginBottom: 14,
            }}
            className="services-row"
          >
            {/* Invisalign */}
            <div style={{ backgroundColor: "#c8c16a", borderRadius: 20, padding: "32px 28px 28px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a5000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#2a2800", margin: "0 0 10px" }}>Invisalign</h3>
              <p style={{ fontSize: 13, color: "#4a4400", lineHeight: 1.65, margin: "0 0 20px" }}>
                Clear, removable aligners that discreetly transform your smile without metal braces.
              </p>
              <Link href="/service/invisalign" style={{ fontSize: 12, fontWeight: 700, color: "#3a3400", textDecoration: "underline" }}>Learn more</Link>
            </div>

            {/* Root Canal Therapy */}
            <div style={{ backgroundColor: "#f5f0e8", borderRadius: 20, padding: "32px 28px 28px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5c6b1e" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.3.5 2.4 1.2 3.2L10 20h4l1.3-10.3c.7-.8 1.2-1.9 1.2-3.2C16.5 4 14.5 2 12 2z" />
                </svg>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a0e", margin: "0 0 10px" }}>Root Canal Therapy</h3>
              <p style={{ fontSize: 13, color: "#555540", lineHeight: 1.65, margin: "0 0 20px" }}>
                Painless endodontic procedures designed to save your natural teeth and alleviate chronic discomfort.
              </p>
              <Link href="/service/root-canal" style={{ fontSize: 12, fontWeight: 700, color: "#5c6b1e", textDecoration: "underline" }}>Learn more</Link>
            </div>

            {/* Dental Implants */}
            <div style={{ backgroundColor: "#2a2a1e", borderRadius: 20, padding: "32px 28px 28px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="8" />
                  <path d="M8 8h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
                  <line x1="12" y1="12" x2="12" y2="22" />
                </svg>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>Dental Implants</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 20px" }}>
                High-durability titanium implants that look, feel, and function exactly like your original teeth.
              </p>
              <Link href="/service/dental-implants" style={{ fontSize: 12, fontWeight: 700, color: "rgba(185,210,100,0.9)", textDecoration: "underline" }}>Learn more</Link>
            </div>
          </div>

          {/* Row 3: Preventative Cleaning (wide) + Schedule Button */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 14,
              alignItems: "stretch",
            }}
            className="services-row"
          >
            {/* Preventative Cleaning */}
            <div style={{ backgroundColor: "#dce8f0", borderRadius: 20, padding: "32px 28px 28px", display: "flex", alignItems: "flex-start", gap: 28 }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3d5a70" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6l9-4 9 4v6c0 5-4 8-9 9-5-1-9-4-9-9V6z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a2a3a", margin: "0 0 10px" }}>Preventative Cleaning</h3>
                <p style={{ fontSize: 13, color: "#4a6070", lineHeight: 1.65, margin: "0 0 16px" }}>
                  Advanced prophylaxis and periodontal maintenance to ensure your oral hygiene remains at its peak. Regular sessions help prevent decay and gum disease before they start.
                </p>
                <Link href="/service/preventative-cleaning" style={{ fontSize: 12, fontWeight: 700, color: "#3d5a70", textDecoration: "underline" }}>Learn more</Link>
              </div>
            </div>

            {/* Schedule Appointment CTA card */}
            <div
              style={{
                backgroundColor: "#3d4a0d",
                borderRadius: 20,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 200,
                gap: 16,
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", textAlign: "center", margin: 0 }}>
                Ready to begin your journey?
              </p>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  color: "#3d4a0d",
                  fontSize: 13,
                  fontWeight: 700,
                  padding: "11px 22px",
                  borderRadius: 30,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Schedule Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — BEYOND ORAL HEALTH
      ══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#faf5ec", padding: "88px 0" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
          className="wellness-grid"
        >
          {/* LEFT — text */}
          <div>
            <h2
              style={{
                fontSize: 46,
                fontWeight: 900,
                color: "#1a1a0e",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                margin: "0 0 36px",
              }}
            >
              Beyond Oral Health:{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5c6b1e" }}>
                Systemic Wellness
              </em>
            </h2>

            {/* Numbered items */}
            {[
              {
                num: "01",
                title: "Holistic Oral Care",
                desc: "We believe oral health is deeply connected to heart health, sleep quality, and overall wellbeing. Our protocols address the complete picture.",
              },
              {
                num: "02",
                title: "Full-Mouth Wellness",
                desc: "Beyond cleanings, our assessments screen for underlying systemic conditions that often manifest in the oral cavity first.",
              },
              {
                num: "03",
                title: "Whole-Person Care",
                desc: "Your microbiome, jaw alignment, and breathing patterns all interconnect. We evaluate them as one unified system — not as separate problems.",
              },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: 20, marginBottom: 28 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#b8c44a",
                    letterSpacing: "1px",
                    flexShrink: 0,
                    paddingTop: 2,
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a0e", margin: "0 0 5px" }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "#555540", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — equipment image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                width: "100%",
                aspectRatio: "4/3",
                position: "relative",
                backgroundColor: "#2a7a8a",
              }}
            >
              <Image
                src="/images/hero-dental.webp"
                alt="Advanced dental equipment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Floating badge top-right */}
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                backgroundColor: "#c8c16a",
                borderRadius: 14,
                padding: "10px 16px",
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 700, color: "#2a2800", margin: 0, letterSpacing: "0.5px" }}>
                State-of-the-Art
              </p>
              <p style={{ fontSize: 10, color: "#3a3400", margin: "2px 0 0" }}>Equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — WHY PATIENTS CHOOSE US
      ══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#fff", padding: "88px 0 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>

          {/* Header */}
          <p style={{ fontSize: 11, fontWeight: 700, color: "#7a8c2e", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px" }}>
            The Sanctuary Difference
          </p>
          <h2
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "#1a1a0e",
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              margin: "0 0 12px",
            }}
          >
            Why Patients Choose Our Sanctuary
          </h2>
          <p style={{ fontSize: 15, color: "#555540", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 60px" }}>
            We lead with empathy and back it with evidence-based practice that puts patients at ease.
          </p>

          {/* 3-column features */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 36,
              textAlign: "center",
            }}
            className="features-grid"
          >
            {features.map((f) => (
              <div key={f.title}>
                {/* Circle icon */}
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: "1.5px solid #d8d8c0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    backgroundColor: "#faf5ec",
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a0e", margin: "0 0 10px" }}>{f.title}</h3>
                <p style={{ fontSize: 13.5, color: "#555540", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer style={{ backgroundColor: "#faf5ec", borderTop: "1px solid #e8e0cc", padding: "56px 0 0" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <p style={{ fontSize: 15, fontWeight: 800, color: "#1a1a0e", letterSpacing: "0.5px", textTransform: "uppercase", margin: "0 0 14px" }}>
              Perfect Dental
            </p>
            <p style={{ fontSize: 13, color: "#6a6a50", lineHeight: 1.7, maxWidth: 260, margin: "0 0 20px" }}>
              Elevating the standard of modern dentistry through artisanal care and cutting-edge technology.
            </p>
            <p style={{ fontSize: 12, color: "#888878", margin: 0 }}>
              © 2025 Perfect Dental. All rights reserved.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#888878", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 16px" }}>
              Pages
            </p>
            {["Home", "Services", "About Us", "Treatments", "Reviews", "Contact"].map((l) => (
              <p key={l} style={{ margin: "0 0 10px" }}>
                <Link href={l === "Services" ? "/services" : `#${l.toLowerCase().replace(" ", "")}`} style={{ fontSize: 13, color: "#555540", textDecoration: "none" }}>
                  {l}
                </Link>
              </p>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#888878", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 16px" }}>
              Services
            </p>
            {["Teeth Whitening", "Invisalign", "Metal Braces", "Root Canal", "Dental Implants", "Deep Cleaning"].map((l) => (
              <p key={l} style={{ margin: "0 0 10px" }}>
                <a href="#services-grid" style={{ fontSize: 13, color: "#555540", textDecoration: "none" }}>{l}</a>
              </p>
            ))}
          </div>

          {/* Hours */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#888878", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 16px" }}>
              Hours
            </p>
            <p style={{ fontSize: 13, color: "#555540", margin: "0 0 8px" }}>
              <span style={{ fontWeight: 600 }}>Opens at</span> 9:30 AM
            </p>
            <p style={{ fontSize: 13, color: "#5c6b1e", margin: "0 0 8px" }}>
              <span style={{ fontWeight: 600 }}>LGBTQ+</span> Friendly
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            maxWidth: 1280,
            margin: "40px auto 0",
            padding: "16px 48px",
            borderTop: "1px solid #e8e0cc",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 12, color: "#888878", margin: 0 }}>
            Dr. Narayan Raut, Lead Dentist &amp; Founder — Goa, India
          </p>
          <p style={{ fontSize: 12, color: "#888878", margin: 0 }}>
            Privacy Policy · Terms of Service
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .services-hero-grid, .wellness-grid, .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .services-header-grid {
            grid-template-columns: 1fr !important;
          }
          .services-row {
            grid-template-columns: 1fr !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
