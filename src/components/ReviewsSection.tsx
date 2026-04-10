"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Paul Anderson",
    avatarColor: "#a8c4e0",
    rating: 5,
    text: "I really don't like dentists, but Dr. Narayan made me feel at ease immediately. Very careful and respectful. I’ve finally found my forever dentist.",
    time: "2 months ago",
  },
  {
    name: "Roydan Dsouza",
    avatarColor: "#f0b0b8",
    rating: 5,
    text: "Explained the process really well. Treatment was painless with anesthesia. Very satisfied with treatment and follow-up.",
    time: "2 months ago",
  },
  {
    name: "Elisha Dsouza",
    avatarColor: "#e8dd88",
    rating: 5,
    text: "Tooth extraction was quick and virtually painless. Dr. Raut was professional, gentle, and very skilled.",
    time: "9 months ago",
  },
  {
    name: "Cody Mansergh",
    avatarColor: "#a8e0c4",
    rating: 5,
    text: "Very accommodating and gentle treatment. Pricing was honest and reasonable.",
    time: "10 months ago",
  },
  {
    name: "Costas Goa",
    avatarColor: "#c4a8e0",
    rating: 5,
    text: "Came with pain, got X-ray and root canal done professionally and quickly. No pain at all.",
    time: "1 year ago",
  },
  {
    name: "Gokul Nadh",
    avatarColor: "#e0c4a8",
    rating: 5,
    text: "Visited for RCT and multiple dental issues. After treatment, everything was resolved. Excellent doctor.",
    time: "2 years ago",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < count ? "#9a9a30" : "#d4d4b0"}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      id="reviews"
      style={{
        backgroundColor: "#FBF7E5",
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
          className="reviews-header-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 48,
          }}
        >
          {/* Left: heading + sub + Trust Badge */}
          <div>
            <h2
              className="reviews-headline"
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: "#1a1a0e",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                margin: "0 0 10px",
              }}
            >
              1800+ Glowing Reviews
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#6a6a50",
                margin: "0 0 16px",
                lineHeight: 1.5,
              }}
            >
              Trusted by patients across Goa
            </p>
            {/* Google Trust Badge */}
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#fff",
                padding: "8px 16px",
                borderRadius: 20,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                fontSize: 13,
                fontWeight: 700,
                color: "#1a1a0e",
                border: "1px solid #f0ecdb"
              }}
            >
              ⭐ 4.8 Google Rating (100+ Reviews)
            </div>
          </div>

          {/* Right: nav arrows */}
          <div
            style={{
              display: "flex",
              gap: 10,
              alignSelf: "center",
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              aria-label="Previous reviews"
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                border: "1.5px solid #b8b890",
                backgroundColor: "transparent",
                cursor: page === 0 ? "default" : "pointer",
                opacity: page === 0 ? 0.4 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555540" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => setPage(Math.min(pages - 1, page + 1))}
              aria-label="Next reviews"
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                border: "1.5px solid #b8b890",
                backgroundColor: "transparent",
                cursor: page === pages - 1 ? "default" : "pointer",
                opacity: page === pages - 1 ? 0.4 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555540" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Review cards — 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
          }}
          className="reviews-grid"
        >
          {visible.map((r) => (
            <div
              key={r.name}
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                padding: "28px 24px 24px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.02)"
              }}
            >
              {/* Stars */}
              <div style={{ marginBottom: 20 }}>
                <Stars count={r.rating} />
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize: 14,
                  color: "#333328",
                  lineHeight: 1.7,
                  margin: "0 0 28px",
                  flex: 1,
                  fontStyle: "italic"
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                {/* Colored circle avatar */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    backgroundColor: r.avatarColor,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.9)"
                  }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1a1a0e",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {r.name}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#8a8a78",
                      margin: "2px 0 0",
                    }}
                  >
                    {r.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
          .reviews-header-row {
            flex-direction: column !important;
            gap: 28px !important;
          }
          .reviews-headline {
            font-size: 38px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
