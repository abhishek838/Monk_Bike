import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111827E6",
        color: "#ffffff",
        padding: "60px 20px 20px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        {/* Logo and Description */}
        <div style={{ flex: "1 1 250px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
    <div
              
            >
              <img
                src={logo}
                alt="MonkBike Logo"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                  display: "block",
                  paddingRight: "10px",
                }}
              />
            </div>
            <span
              style={{
                color: "#FFD700",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              MonkBike
            </span>
          </div>
          <p style={{ color: "rgb(156 163 175)", lineHeight: "1.7" }}>
            Ride the future with MonkBike. We provide premium bike and scooter
            rentals for your next adventure. Sustainable, reliable, and always
            ready to go.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, idx) => (
              <Icon
                key={idx}
                style={{
                  ...iconStyle,
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#FFD700";
                  e.target.style.transform = "scale(1.2)";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#FFD700";
                  e.target.style.transform = "scale(1)";
                }}
              />
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={footerColumnStyle}>
          <h3 style={columnTitleStyle}>Quick Links</h3>
          <ul style={linkListStyle}>
            {["Home", "About Us", "Our Bikes", "Rental Process", "Contact"].map(
              (text, index) => (
                <li key={index}>
                  <a
                    href={`/${text.toLowerCase().replace(/ /g, "")}`}
                    style={linkStyle}
                    onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                    onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                  >
                    {text}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div style={footerColumnStyle}>
          <h3 style={columnTitleStyle}>Contact Info</h3>
          <p style={{ color: "rgb(156 163 175)" }}>
            <FaMapMarkerAlt style={contactIconStyle} /> 123 Future Street, Tech City
          </p>
          <p style={{ color: "rgb(156 163 175)" }}>
            <FaPhoneAlt style={contactIconStyle} /> +91-9876543210
          </p>
          <p style={{ color: "rgb(156 163 175)" }}>
            <FaEnvelope style={contactIconStyle} /> support@monkbike.com
          </p>
        </div>

        {/* Newsletter */}
        <div style={footerColumnStyle}>
          <h3 style={columnTitleStyle}>Stay Updated</h3>
          <p style={{ color: "rgb(156 163 175)" }}>
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              marginTop: "10px",
              width: "100%",
              fontSize: "1rem",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <button
            style={subscribeBtnStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#ffe066";
              e.target.style.transform = "scale(1.04)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#FFD700";
              e.target.style.transform = "scale(1)";
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          borderTop: "1px solid #334155",
          marginTop: "5px",
          paddingTop: "20px",
          textAlign: "center",
          color: "#ffffff",
          fontSize: "0.9rem",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          © 2025 MonkBike. All rights reserved. Ride responsibly.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (text, index) => (
              <a
                key={index}
                href={`/${text.toLowerCase().replace(/ /g, "")}`}
                style={bottomLinkStyle}
                onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                onMouseOut={(e) => (e.target.style.color = "#ffffff")}
              >
                {text}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

const iconStyle = {
  backgroundColor: "#1e293b",
  color: "#FFD700",
  padding: "10px",
  borderRadius: "50%",
  fontSize: "1rem",
  cursor: "pointer",
};

const contactIconStyle = {
  marginRight: "10px",
  color: "#FFD700",
};

const footerColumnStyle = {
  flex: "1 1 200px",
};

const columnTitleStyle = {
  marginBottom: "20px",
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: "#ffffff",
};

const linkListStyle = {
  listStyle: "none",
  padding: 0,
  lineHeight: "2",
};

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const bottomLinkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const subscribeBtnStyle = {
  marginTop: "10px",
  padding: "10px 20px",
  backgroundColor: "#FFD700",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
  width: "100%",
  transition: "all 0.3s ease",
};

export default Footer;
