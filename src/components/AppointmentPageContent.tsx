"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AppointmentPageContent() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("General Wellness");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => {
    if (step === 1 && selectedService) setStep(2);
    else if (step === 2 && selectedDate && selectedTime) setStep(3);
    else if (step === 3 && userDetails.name && /^\S+@\S+\.\S+$/.test(userDetails.email) && userDetails.phone) {
      console.log("Appointment Form Submitted:", {
        service: selectedService,
        date: selectedDate,
        time: selectedTime,
        ...userDetails
      });
      alert("Appointment submitted successfully! Check console for details.");
      // Optional: reset or go to success state here.
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main style={{ backgroundColor: "#f5f0e4", fontFamily: "Inter, sans-serif" }}>

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#faf5ec", padding: "128px 0 64px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="appointment-hero-grid"
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
              Reservation Portal
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
              Book Your{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#5c6b1e",
                }}
              >
                Visit.
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
              Experience dental care redefined. Step into a sanctuary designed for
              your comfort, precision, and lasting oral health.
            </p>
          </div>

          {/* RIGHT — Clinic photo with card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                width: "100%",
                aspectRatio: "1.1/1",
                position: "relative",
              }}
            >
              <Image
                src="/images/perfectchair.jpg"
                alt="Clinic interior"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>

            {/* Overlapping card */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: -32,
                backgroundColor: "#eaddb9",
                borderRadius: 16,
                padding: "24px 32px",
                maxWidth: 240,
                boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
              }}
            >
              <p
                style={{
                  fontSize: 18,
                  fontStyle: "italic",
                  color: "#5c6b1e",
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                &quot;The intersection of luxury and clinical excellence.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — RESERVATION FORM
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "64px 0 88px" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 48px" }}>
          
          {/* TABS CONTAINER */}
          <div className="tabs-container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {/* Step 1 Tab */}
            <div
              onClick={() => setStep(1)}
              style={{
                backgroundColor: step === 1 ? "#fff" : "#ece3db",
                padding: "24px 32px",
                borderTopLeftRadius: 20,
                borderBottom: step === 1 ? "4px solid #5c6b1e" : "none",
                opacity: step === 1 ? 1 : 0.6,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              <p style={{ fontSize: 10, fontWeight: 700, color: "#8a8a70", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "1px" }}>Step 01</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a0e", margin: 0 }}>Service Selection</p>
            </div>
            {/* Step 2 Tab */}
            <div
              onClick={() => step > 2 && setStep(2)}
              style={{
                backgroundColor: step === 2 ? "#fff" : "#ece3db",
                padding: "24px 32px",
                borderBottom: step === 2 ? "4px solid #5c6b1e" : "none",
                opacity: step === 2 ? 1 : 0.6,
                cursor: step > 2 ? "pointer" : "default",
                transition: "all 0.2s ease"
              }}
            >
              <p style={{ fontSize: 10, fontWeight: 700, color: "#8a8a70", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "1px" }}>Step 02</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a0e", margin: 0 }}>Schedule & Time</p>
            </div>
            {/* Step 3 Tab */}
            <div
              className="tab-step-3"
              style={{
                backgroundColor: step === 3 ? "#fff" : "#ece3db",
                padding: "24px 32px",
                borderTopRightRadius: 20,
                borderBottom: step === 3 ? "4px solid #5c6b1e" : "none",
                opacity: step === 3 ? 1 : 0.6,
                transition: "all 0.2s ease"
              }}
            >
              <p style={{ fontSize: 10, fontWeight: 700, color: "#8a8a70", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "1px" }}>Step 03</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a0e", margin: 0 }}>Personal Details</p>
            </div>
          </div>

          {/* FORM BODY */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "48px 64px 56px",
              borderBottomLeftRadius: 32,
              borderBottomRightRadius: 32,
              boxShadow: "0 12px 32px rgba(0,0,0,0.04)",
            }}
            className="form-container"
          >
            {step === 1 && (
              <>
                <div style={{ textAlign: "center", marginBottom: 40 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 800, color: "#1a1a0e", margin: "0 0 8px" }}>What brings you in today?</h2>
                  <p style={{ fontSize: 14, color: "#6a6a50", margin: 0 }}>Choose from our curated range of signature treatments.</p>
                </div>

                {/* Selection Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }} className="selection-grid">
                  
                  {/* Option 1 */}
              <div
                onClick={() => setSelectedService("General Wellness")}
                style={{
                  border: selectedService === "General Wellness" ? "1.5px solid #5c6b1e" : "1.5px solid transparent",
                  backgroundColor: selectedService === "General Wellness" ? "#fcfaeb" : "#f8f5ed",
                  borderRadius: 16,
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5c6b1e" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                    <path d="M9 16l2 2 4-4"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a0e", margin: "0 0 6px" }}>General Wellness</h3>
                <p style={{ fontSize: 12, color: "#6a6a50", margin: 0 }}>Comprehensive exam & cleaning</p>
              </div>

              {/* Option 2 */}
              <div
                onClick={() => setSelectedService("Cosmetic Artistry")}
                style={{
                  border: selectedService === "Cosmetic Artistry" ? "1.5px solid #5c6b1e" : "1.5px solid transparent",
                  backgroundColor: selectedService === "Cosmetic Artistry" ? "#fcfaeb" : "#f8f5ed",
                  borderRadius: 16,
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a8a70" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a0e", margin: "0 0 6px" }}>Cosmetic Artistry</h3>
                <p style={{ fontSize: 12, color: "#6a6a50", margin: 0 }}>Whitening & Aesthetic design</p>
              </div>

              {/* Option 3 */}
              <div
                onClick={() => setSelectedService("Restorative Care")}
                style={{
                  border: selectedService === "Restorative Care" ? "1.5px solid #5c6b1e" : "1.5px solid transparent",
                  backgroundColor: selectedService === "Restorative Care" ? "#fcfaeb" : "#f8f5ed",
                  borderRadius: 16,
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a8a70" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.51 4.49 10 9.99 10 5.52 0 10-4.49 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a0e", margin: "0 0 6px" }}>Restorative Care</h3>
                <p style={{ fontSize: 12, color: "#6a6a50", margin: 0 }}>Implants, Crowns & Bridges</p>
              </div>

              {/* Option 4 */}
              <div
                onClick={() => setSelectedService("Urgent Care")}
                style={{
                  border: selectedService === "Urgent Care" ? "1.5px solid #5c6b1e" : "1.5px solid transparent",
                  backgroundColor: selectedService === "Urgent Care" ? "#fcfaeb" : "#f8f5ed",
                  borderRadius: 16,
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a8a70" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a0e", margin: "0 0 6px" }}>Urgent Care</h3>
                <p style={{ fontSize: 12, color: "#6a6a50", margin: 0 }}>Emergency pain management</p>
              </div>

                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div style={{ textAlign: "center", marginBottom: 40 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 800, color: "#1a1a0e", margin: "0 0 8px" }}>When would you like to visit?</h2>
                  <p style={{ fontSize: 14, color: "#6a6a50", margin: 0 }}>Select an available date and time for your appointment.</p>
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 48 }} className="selection-grid">
                  {/* Date Picker Dummy */}
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a0e", margin: "0 0 16px" }}>Select Date</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                       {["Mon, 12th", "Tue, 13th", "Wed, 14th", "Thu, 15th", "Fri, 16th", "Sat, 17th"].map((d) => (
                          <div 
                            key={d} 
                            onClick={() => setSelectedDate(d)} 
                            style={{ 
                              border: selectedDate === d ? "1.5px solid #5c6b1e" : "1.5px solid #e8e0cc", 
                              backgroundColor: selectedDate === d ? "#fcfaeb" : "#fbf9f4", 
                              borderRadius: 12, padding: "16px 0", textAlign: "center", cursor: "pointer", transition: "all 0.2s ease" 
                            }}>
                            <span style={{ fontSize: 13, fontWeight: 700, color: selectedDate === d ? "#1a1a0e" : "#555540" }}>{d}</span>
                          </div>
                       ))}
                    </div>
                  </div>
                  {/* Time Slots Dummy */}
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a0e", margin: "0 0 16px" }}>Select Time</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                       {["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"].map((t) => (
                          <div 
                            key={t} 
                            onClick={() => setSelectedTime(t)} 
                            style={{ 
                              border: selectedTime === t ? "1.5px solid #5c6b1e" : "1.5px solid #e8e0cc", 
                              backgroundColor: selectedTime === t ? "#fcfaeb" : "#fbf9f4", 
                              borderRadius: 12, padding: "16px 0", textAlign: "center", cursor: "pointer", transition: "all 0.2s ease" 
                            }}>
                            <span style={{ fontSize: 13, fontWeight: 700, color: selectedTime === t ? "#1a1a0e" : "#555540" }}>{t}</span>
                          </div>
                       ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div style={{ textAlign: "center", marginBottom: 40 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 800, color: "#1a1a0e", margin: "0 0 8px" }}>Your Details</h2>
                  <p style={{ fontSize: 14, color: "#6a6a50", margin: 0 }}>Please provide your contact information to finalize the booking.</p>
                </div>
                
                <div style={{ maxWidth: 480, margin: "0 auto 48px" }}>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#8a8a70", marginBottom: 8 }}>Full Name</label>
                    <input 
                      type="text" 
                      value={userDetails.name} 
                      onChange={(e) => setUserDetails({...userDetails, name: e.target.value})} 
                      style={{ width: "100%", padding: "14px 16px", fontSize: 14, borderRadius: 12, border: "1px solid #e8e0cc", backgroundColor: "#fbf9f4", outline: "none", color: "#1a1a0e", fontFamily: "Inter, sans-serif" }} 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#8a8a70", marginBottom: 8 }}>Email Address</label>
                    <input 
                      type="email" 
                      value={userDetails.email} 
                      onChange={(e) => setUserDetails({...userDetails, email: e.target.value})} 
                      style={{ width: "100%", padding: "14px 16px", fontSize: 14, borderRadius: 12, border: "1px solid #e8e0cc", backgroundColor: "#fbf9f4", outline: "none", color: "#1a1a0e", fontFamily: "Inter, sans-serif" }} 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#8a8a70", marginBottom: 8 }}>Phone Number</label>
                    <input 
                      type="tel" 
                      value={userDetails.phone} 
                      onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})} 
                      style={{ width: "100%", padding: "14px 16px", fontSize: 14, borderRadius: 12, border: "1px solid #e8e0cc", backgroundColor: "#fbf9f4", outline: "none", color: "#1a1a0e", fontFamily: "Inter, sans-serif" }} 
                      placeholder="+1 (555) 000-0000" 
                    />
                  </div>
                </div>
              </>
            )}

            {/* Bottom Actions */}
            <div className="form-actions" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#6a6a50",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back
                  </button>
                )}
                {step === 1 && (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555540" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span style={{ fontSize: 11, color: "#555540" }}>Secure data encryption active</span>
                  </>
                )}
              </div>
              
              <button
                className="action-btn"
                onClick={handleNext}
                disabled={
                  (step === 1 && !selectedService) ||
                  (step === 2 && (!selectedDate || !selectedTime)) ||
                  (step === 3 && (!userDetails.name || !/^\S+@\S+\.\S+$/.test(userDetails.email) || !userDetails.phone))
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 28px",
                  backgroundColor: (
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime)) ||
                    (step === 3 && (!userDetails.name || !/^\S+@\S+\.\S+$/.test(userDetails.email) || !userDetails.phone))
                  ) ? "#8a8a70" : "#5c6b1e",
                  opacity: (
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime)) ||
                    (step === 3 && (!userDetails.name || !/^\S+@\S+\.\S+$/.test(userDetails.email) || !userDetails.phone))
                  ) ? 0.5 : 1,
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  border: "none",
                  borderRadius: 30,
                  cursor: (
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime)) ||
                    (step === 3 && (!userDetails.name || !/^\S+@\S+\.\S+$/.test(userDetails.email) || !userDetails.phone))
                  ) ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {step === 3 ? "Submit Appointment" : "Continue"}
                {step !== 3 && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — TRUST BADGES
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "48px 0 88px" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 48,
          }}
          className="trust-flex-row"
        >
          {/* Badge 1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginBottom: 16 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8a8a70" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#8a8a70", textTransform: "uppercase", letterSpacing: "1.5px", margin: 0 }}>HIPAA COMPLIANT</p>
          </div>
          
          {/* Badge 2 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginBottom: 16 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8a8a70" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <rect x="9" y="10" width="6" height="6" rx="1"/>
                <path d="M10 10V8a2 2 0 0 1 4 0v2"/>
              </svg>
            </div>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#8a8a70", textTransform: "uppercase", letterSpacing: "1.5px", margin: 0 }}>256-BIT ENCRYPTION</p>
          </div>

          {/* Badge 3 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginBottom: 16 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8a8a70" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"/>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                <path d="M12 8L12 8"/>
              </svg>
            </div>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#8a8a70", textTransform: "uppercase", letterSpacing: "1.5px", margin: 0 }}>ADA MEMBER</p>
          </div>

          {/* Badge 4 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginBottom: 16 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8a8a70" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#8a8a70", textTransform: "uppercase", letterSpacing: "1.5px", margin: 0 }}>SAFE & SECURE</p>
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
          .appointment-hero-grid,
          .footer-grid { grid-template-columns: 1fr !important; }
          .selection-grid { grid-template-columns: 1fr !important; }
          .trust-flex-row { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .form-container { padding: 32px 24px !important; }
          
          .tabs-container { grid-template-columns: 1fr !important; }
          .tab-step-3 { border-top-right-radius: 0 !important; }
          .form-actions { 
            flex-direction: column-reverse !important; 
            align-items: stretch !important; 
            gap: 24px !important; 
          }
          .action-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </main>
  );
}

/* ── Shared style objects ── */
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
