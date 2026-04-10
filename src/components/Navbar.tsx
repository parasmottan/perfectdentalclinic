"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "APPOINTMENT", href: "/appointment" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        /* Match the hero background exactly — seamless blend */
        backgroundColor: "#faf5ec",
        borderBottom: "none",
      }}
    >
      <div
        className="nav-container"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 48px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: "#1a1a0e",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            PERFECT DENTAL
          </span>
        </Link>

        {/* Desktop Nav — truly centered */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: isActive ? "#1a1a0e" : "#888878",
                  textDecoration: "none",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  paddingBottom: 3,
                  borderBottom: isActive ? "2px solid #1a1a0e" : "2px solid transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Book Now CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <a
            href="#contact"
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#ffffff",
              backgroundColor: "#4a5a10",
              padding: "11px 28px",
              borderRadius: 30,
              textDecoration: "none",
              whiteSpace: "nowrap",
              letterSpacing: "0.2px",
            }}
          >
            Book Now
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#333" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div style={{ background: "#faf5ec", padding: "12px 48px 20px", borderTop: "1px solid #e8e0d0" }}>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ display: "block", padding: "10px 0", fontSize: 13, color: "#444", textDecoration: "none", letterSpacing: "1px" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-container { padding: 0 24px !important; }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
