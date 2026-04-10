"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const quickLinks = ["Home", "Services", "About Us", "Treatments", "Reviews", "Contact"];
  const services = ["Teeth Whitening", "Braces & Ortho", "Dental Implants", "Root Canal", "Deep Cleaning", "Smile Makeover"];

  return (
    <footer style={{ backgroundColor: "#1a2005" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 24px 32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "#5c6b1e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.3.5 2.4 1.2 3.2L10 20h4l1.3-10.3c.7-.8 1.2-1.9 1.2-3.2C16.5 4 14.5 2 12 2z" />
                </svg>
              </div>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>Perfect Dental</span>
            </div>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20, maxWidth: 240 }}>
              Your trusted dental partner. We are committed to giving you the smile you deserve with expert care and modern technology.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 8 }}>
              {[
                // Instagram
                <svg key="ig" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>,
                // Facebook
                <svg key="fb" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
                // YouTube
                <svg key="yt" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
                // X
                <svg key="x" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#cdd89a",
                marginBottom: 18,
              }}
            >
              QUICK LINKS
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map((l) => (
                <li key={l}>
                  <Link
                    href={`#${l.toLowerCase().replace(" ", "")}`}
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                    }}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#cdd89a",
                marginBottom: 18,
              }}
            >
              OUR SERVICES
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                    }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#cdd89a",
                marginBottom: 18,
              }}
            >
              CONTACT US
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5c6b1e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                  First Floor, Porta Vaddo,<br />Opp. Burye Emporium,<br />Above Star Flowers,<br />Siolim, Goa – 403517
                </span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5c6b1e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+917030282422" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                  +91 70302 82422
                </a>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5c6b1e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@perfectdental.com" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                  hello@perfectdental.com
                </a>
              </div>
              {/* Hours */}
              <div
                style={{
                  marginTop: 8,
                  padding: "10px 14px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p style={{ fontSize: 11, fontWeight: 600, color: "#cdd89a", margin: "0 0 4px" }}>Clinic Information</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0 }}>Opens at 9:30 AM</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: "2px 0 0" }}>LGBTQ+ Friendly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
          className="footer-bottom"
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", margin: 0 }}>
            © {currentYear || "2024"} Perfect Dental Clinic. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((t) => (
              <Link
                key={t}
                href="#"
                style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
        }
      `}</style>
    </footer>
  );
}
