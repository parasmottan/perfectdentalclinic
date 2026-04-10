"use client";

export default function CTASection() {
  return (
    <section id="contact" style={{ backgroundColor: "#fff", padding: "72px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            backgroundColor: "#2d3813",
            borderRadius: 24,
            padding: "64px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glows */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 240,
              height: 240,
              borderRadius: "50%",
              backgroundColor: "#4a5c1c",
              opacity: 0.4,
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -60,
              left: -60,
              width: 200,
              height: 200,
              borderRadius: "50%",
              backgroundColor: "#5c6b1e",
              opacity: 0.3,
              filter: "blur(50px)",
            }}
          />

          {/* Stars */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              marginBottom: 20,
              position: "relative",
              zIndex: 1,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#fbbf24">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-1.2px",
              lineHeight: 1.1,
              marginBottom: 12,
              position: "relative",
              zIndex: 1,
            }}
          >
            Ready to Perfect Your
            <br />
            <span
              style={{
                fontWeight: 300,
                fontStyle: "italic",
                color: "#cdd89a",
              }}
            >
              Smile?
            </span>
          </h2>

          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 480,
              margin: "0 auto 32px",
              lineHeight: 1.7,
              position: "relative",
              zIndex: 1,
            }}
          >
            Join thousands of happy patients who trust Perfect Dental Clinic for their
            dental needs. Book your free consultation today and take the first
            step toward your dream smile.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            <a
              href="tel:+917030282422"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#fff",
                color: "#2d3813",
                fontSize: 14,
                fontWeight: 700,
                padding: "12px 28px",
                borderRadius: 30,
                textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Now
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#5c6b1e",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                padding: "12px 28px",
                borderRadius: 30,
                textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Appointment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <p
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
              marginTop: 20,
              position: "relative",
              zIndex: 1,
            }}
          >
            Free first consultation · No hidden charges · Certified specialists
          </p>
        </div>
      </div>
    </section>
  );
}
