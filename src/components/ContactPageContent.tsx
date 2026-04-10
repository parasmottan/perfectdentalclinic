"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPageContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "General Consultation",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you shortly.");
  };

  return (
    <main style={{ backgroundColor: "#faf5ec", fontFamily: "Inter, sans-serif" }}>

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#faf5ec", paddingTop: 64 }}>
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
          className="contact-hero-grid"
        >
          {/* LEFT */}
          <div>
            {/* Tag */}
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#8a8a70",
                margin: "0 0 18px",
              }}
            >
              Connect With Us
            </p>

            {/* Heading */}
            <h1
              style={{
                fontSize: 62,
                fontWeight: 900,
                color: "#1a1a0e",
                lineHeight: 1.06,
                letterSpacing: "-1.5px",
                margin: "0 0 22px",
              }}
            >
              Get in{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#5c6b1e",
                }}
              >
                Touch
              </em>
            </h1>

            {/* Body */}
            <p
              style={{
                fontSize: 15,
                color: "#555540",
                lineHeight: 1.72,
                maxWidth: 400,
                margin: 0,
              }}
            >
              Experience dental care redefined in a space of serenity. Our team
              is here to assist with your journey to a radiant, healthy smile.
            </p>
          </div>

          {/* RIGHT — laptop/X-ray photo */}
          <div>
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                width: "100%",
                aspectRatio: "4/3",
                position: "relative",
              }}
            >
              <Image
                src="/images/perfecttiming.jpg"
                alt="Dental clinic technology"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — INFO CARDS + CONTACT FORM
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f2ede0", padding: "0 0 88px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 28,
            alignItems: "flex-start",
          }}
          className="contact-body-grid"
        >
          {/* LEFT — three info cards stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Our Clinic */}
            <div
              style={{
                backgroundColor: "#f5f0e4",
                borderRadius: 16,
                padding: "24px 22px",
              }}
            >
              {/* Pin icon */}
              <div style={{ marginBottom: 14 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a8a70" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a0e", margin: "0 0 10px" }}>
                Our Clinic
              </p>
              <p style={{ fontSize: 12.5, color: "#555540", lineHeight: 1.7, margin: 0 }}>
                First floor, Porta Vaddo,<br />
                opp. Burye Emporium,<br />
                above Star Flowers,<br />
                Siolim, Goa 403517
              </p>
            </div>

            {/* Opening Hours */}
            <div
              style={{
                backgroundColor: "#f5f0e4",
                borderRadius: 16,
                padding: "24px 22px",
              }}
            >
              {/* Clock icon */}
              <div style={{ marginBottom: 14 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a8a70" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a0e", margin: "0 0 12px" }}>
                Opening Hours
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12.5, color: "#555540" }}>Opens at</span>
                  <span style={{ fontSize: 12.5, color: "#1a1a0e", fontWeight: 600 }}>9:30 AM</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                  <span style={{ fontSize: 12.5, color: "#5c6b1e", fontWeight: 700 }}>LGBTQ+</span>
                  <span style={{ fontSize: 12.5, color: "#5c6b1e", fontWeight: 700 }}>Friendly</span>
                </div>
              </div>
            </div>

            {/* Direct Lines */}
            <div
              style={{
                backgroundColor: "#f5f0e4",
                borderRadius: 16,
                padding: "24px 22px",
              }}
            >
              {/* @ icon */}
              <div style={{ marginBottom: 14 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a8a70" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                </svg>
              </div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a0e", margin: "0 0 10px" }}>
                Direct Lines
              </p>
              <p style={{ fontSize: 12.5, color: "#555540", lineHeight: 1.8, margin: 0 }}>
                +91 70302 82422<br />
                <a
                  href="mailto:hello@perfectdental.com"
                  style={{ color: "#555540", textDecoration: "none" }}
                >
                  hello@perfectdental.com
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT — Send a Message form */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: "40px 36px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            <h2
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: "#1a1a0e",
                margin: "0 0 28px",
                letterSpacing: "-0.4px",
              }}
            >
              Send a Message
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Row 1: Full Name + Email */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
                }}
                className="form-row"
              >
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Julianne Moore"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="julianne@example.com"
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Service of Interest */}
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Service of Interest</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
                >
                  <option>General Consultation</option>
                  <option>Teeth Whitening</option>
                  <option>Invisalign</option>
                  <option>Metal Braces</option>
                  <option>Root Canal Therapy</option>
                  <option>Dental Implants</option>
                  <option>Preventative Cleaning</option>
                  <option>Full Smile Makeover</option>
                </select>
              </div>

              {/* Your Message */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: "vertical" as const,
                    minHeight: 120,
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px 0",
                  backgroundColor: "#3d4a0d",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                  border: "none",
                  borderRadius: 10,
                  cursor: "pointer",
                  letterSpacing: "0.3px",
                }}
              >
                Dispatch Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — MAP / FIND YOUR WAY
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "0 0 0" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 340,
            backgroundColor: "#e8d8c0",
            overflow: "hidden",
          }}
        >
          {/* Warm gradient to simulate map/location visual */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, #e8d8c0 0%, #d4b898 40%, #c8a880 70%, #b89068 100%)",
            }}
          />
          {/* Subtle texture overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 70% 40%, rgba(255,220,180,0.5) 0%, transparent 60%)",
            }}
          />

          {/* Floating "Find Your Way" card */}
          <div
            style={{
              position: "absolute",
              bottom: 36,
              left: 48,
              backgroundColor: "#fff",
              borderRadius: 16,
              padding: "20px 24px",
              maxWidth: 260,
              boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#1a1a0e",
                margin: "0 0 8px",
              }}
            >
              Find Your Way
            </p>
            <p
              style={{
                fontSize: 12.5,
                color: "#555540",
                lineHeight: 1.65,
                margin: "0 0 14px",
              }}
            >
              Parking is available in the rear of the building.
              Complimentary valet for our patients.
            </p>
            <a
              href="https://maps.google.com/?q=Perfect+Dental+Clinic+Siolim+Goa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 700,
                color: "#5c6b1e",
                textDecoration: "none",
              }}
            >
              Get Directions
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
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
            <p
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#1a1a0e",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                margin: "0 0 14px",
              }}
            >
              Perfect Dental
            </p>
            <p
              style={{
                fontSize: 13,
                color: "#6a6a50",
                lineHeight: 1.7,
                maxWidth: 240,
                margin: "0 0 20px",
              }}
            >
              Where medical precision meets artisanal aesthetics. Creating sanctuaries for dental excellence since 2012.
            </p>
          </div>

          {/* Practice */}
          <div>
            <p style={footerLabelStyle}>Practice</p>
            {["Our Services", "Meet the Team", "Technology", "Clinic Locations"].map((l) => (
              <p key={l} style={{ margin: "0 0 10px" }}>
                <Link href="/services" style={footerLinkStyle}>{l}</Link>
              </p>
            ))}
          </div>

          {/* Information */}
          <div>
            <p style={footerLabelStyle}>Information</p>
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((l) => (
              <p key={l} style={{ margin: "0 0 10px" }}>
                <a href="#" style={footerLinkStyle}>{l}</a>
              </p>
            ))}
          </div>

          {/* Socials */}
          <div>
            <p style={footerLabelStyle}>Socials</p>
            {[
              { label: "Instagram", href: "https://instagram.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Facebook", href: "https://facebook.com" },
            ].map((s) => (
              <p key={s.label} style={{ margin: "0 0 10px" }}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>{s.label}</a>
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            maxWidth: 1280,
            margin: "40px auto 0",
            padding: "16px 48px",
            borderTop: "1px solid #e8e0cc",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 12, color: "#888878", margin: 0 }}>
            © 2024 Perfect Dental Clinic. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .contact-hero-grid,
          .contact-body-grid,
          .footer-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

/* ── Shared style objects ── */
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#8a8a70",
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  fontSize: 13.5,
  color: "#1a1a0e",
  backgroundColor: "#f8f4ec",
  border: "1px solid #e0dac8",
  borderRadius: 10,
  outline: "none",
  fontFamily: "Inter, sans-serif",
  boxSizing: "border-box",
};

const footerLabelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: "#1a1a0e",
  margin: "0 0 16px",
};

const footerLinkStyle: React.CSSProperties = {
  fontSize: 13,
  color: "#6a6a50",
  textDecoration: "none",
};
