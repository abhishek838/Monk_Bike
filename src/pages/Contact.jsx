import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div style={{ background: "#0f172a", color: "#fff", padding: "40px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "50px auto" }}>

        {/* Header */}
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#FFD700", textAlign: "center" }}>
          Get in Touch
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#94a3b8", marginBottom: "40px", textAlign: "center" }}>
          Have questions about our bikes or rental process? We're here to help you start your next adventure.
        </p>

        {/* Form and Contact Info */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginBottom: "60px" }}>

          {/* Message Form Box */}
          <div style={{
            flex: "1 1 500px",
            background: "#1e293b",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px"
          }}>
            <div style={{ width: "100%" }}>
              <h2 style={{ fontSize: "1.6rem", marginBottom: "20px", fontWeight: "bold", textAlign: "center" }}>
                Send us a Message
              </h2>
              <form>
                <label style={labelStyle}>Full Name *</label>
                <input type="text" placeholder="Enter your full name" style={inputStyle} required />

                <label style={labelStyle}>Email Address *</label>
                <input type="email" placeholder="Enter your email address" style={inputStyle} required />

                <label style={labelStyle}>Subject *</label>
                <input type="text" placeholder="What's this about?" style={inputStyle} required />

                <label style={labelStyle}>Message *</label>
                <textarea placeholder="Tell us how we can help you..." style={textareaStyle} required />

                <button
                  type="submit"
                  style={submitButtonStyle}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#ffe066";
                    e.target.style.transform = "scale(1.03)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#FFD700";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {contactCards.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 217, 0, 0.83)",
                  color: "#111",
                  padding: "20px",
                  borderRadius: "16px",
                  display: "flex",
                  gap: "18px",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  border: "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid #FFD700";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid transparent";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div
                  style={{
                    fontSize: "2.1rem",
                    color: "#111",
                    minWidth: "2.5em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ marginBottom: "6px", fontWeight: "bold", color: "#111" }}>{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} style={{ color: "#111", margin: 0 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "40px", color: "#FFD700", textAlign: "center" }}>
          Frequently Asked Questions
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={faqCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FFD700";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1e293b";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <h3 style={{ color: "#fff", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ color: "#94a3b8" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles
const labelStyle = { display: "block", marginBottom: "5px", marginTop: "15px", color: "#fff" };
const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "#fff",
  fontSize: "1rem",
};
const textareaStyle = { ...inputStyle, height: "100px", resize: "vertical" };
const submitButtonStyle = {
  marginTop: "20px",
  backgroundColor: "#FFD700",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  padding: "12px",
  width: "100%",
  
  fontSize: "1rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
};
const faqCardStyle = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "10px",
  border: "2px solid #1e293b",
  transition: "all 0.3s ease",
  cursor: "default",
};

// Contact Info Cards
const contactCards = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    lines: ["+91-9876543210", "+91-9999999999"],
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    lines: ["info@monkbike.com", "support@monkbike.com"],
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    lines: ["123 Future Street", "Tech City, TC 12345"],
  },
  {
    icon: <FaClock />,
    title: "Business Hours",
    lines: ["Mon - Fri: 8:00 AM – 8:00 PM", "Sat - Sun: 9:00 AM – 6:00 PM"],
  },
];

// FAQs
const faqs = [
  {
    q: "How do I rent a bike?",
    a: "Browse bikes, choose your model, duration, and book online. Pick up or request delivery.",
  },
  {
    q: "What documents do I need?",
    a: "A valid driver's license, credit card for deposit, and proof of insurance.",
  },
  {
    q: "Can I cancel my reservation?",
    a: "Yes, cancel up to 24 hours before rental for a full refund. Small fee for late cancellations.",
  },
  {
    q: "Do you offer delivery service?",
    a: "Yes, within 25 miles of our location. Delivery scheduling available during business hours.",
  },
  {
    q: "Is there a late return fee?",
    a: "Yes, returning late may incur hourly charges. Let us know in advance if delayed.",
  },
  {
    q: "Are helmets and gear provided?",
    a: "Yes! We provide helmets and basic safety gear free of charge with every rental.",
  },
];

export default Contact;
