"use client";

const stats = [
  { value: "10k+", label: "HAPPY PATIENTS" },
  { value: "95%", label: "SATISFACTION" },
  { value: "50+", label: "SERVICES" },
  { value: "20+", label: "YEARS EXPERIENCE" },
];

export default function StatsSection() {
  return (
    <section
      style={{
        backgroundColor: "#f5f0e8",
        padding: "48px 0",
        borderTop: "1px solid #e8e2d8",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
        }}
        className="stats-strip-grid"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="stats-item"
            style={{
              textAlign: "center",
              padding: "0 20px",
              borderRight: i < 3 ? "1px solid #d8d0c4" : "none",
            }}
          >
            <p
              style={{
                fontSize: 44,
                fontWeight: 700,
                color: "#5c6b1e",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#8a8a6e",
                letterSpacing: "1.5px",
                margin: "6px 0 0",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px 0 !important;
          }
          .stats-item {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
