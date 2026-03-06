import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }
    localStorage.setItem("monkBikeUser", JSON.stringify(formData));
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div style={backgroundStyle}>
      {/* Decorative blurred shapes */}
      <div style={blurShape1} />
      <div style={blurShape2} />
      {/* Form card */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={cardStyle}>
          <h2 style={headingStyle}>Create Account</h2>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              style={inputStyle}
            />
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              style={inputStyle}
            />
            <label style={labelStyle}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              style={inputStyle}
            />
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              style={inputStyle}
            />
            {/* I agree checkbox */}
            <div style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0 18px 0",
              fontSize: "1rem"
            }}>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
                required
              />
              <span>
                I agree to the{" "}
                <a href="#" style={{ color: "#FFD600", textDecoration: "none" }}>Terms of Service</a> and{" "}
                <a href="#" style={{ color: "#FFD600", textDecoration: "none" }}>Privacy Policy</a>
              </span>
            </div>
            <button type="submit" style={buttonStyle}>Create Account</button>
            {/* Already have account */}
            <div style={{ marginTop: "22px", textAlign: "center", fontSize: "1.08rem" }}>
              <span style={{ color: "#6b7280" }}>Already have an account? </span>
              <Link
                to="/login"
                style={{
                  color: "#FFD600",
                  fontWeight: "bold",
                  textDecoration: "none",
                  marginLeft: "4px",
                }}
                onMouseOver={e => e.target.style.textDecoration = "underline"}
                onMouseOut={e => e.target.style.textDecoration = "none"}
              >
                Sign in here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const labelStyle = {
  fontWeight: 500,
  color: "#222",
  marginBottom: "4px",
  marginTop: "10px",
  display: "block",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1rem",
};

const backgroundStyle = {
  minHeight: "118vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(120deg, #fffbe6 0%, #ffe066 100%)",
};

const blurShape1 = {
  position: "absolute",
  top: "-120px",
  left: "-120px",
  width: "420px",
  height: "420px",
  background: "radial-gradient(circle at 60% 40%, #ffd60088 60%, #fffbe6 100%)",
  filter: "blur(32px)",
  zIndex: 0,
};

const blurShape2 = {
  position: "absolute",
  bottom: "-100px",
  right: "-100px",
  width: "320px",
  height: "320px",
  background: "radial-gradient(circle at 40% 60%, #ffe06699 60%, #fffbe6 100%)",
  filter: "blur(28px)",
  zIndex: 0,
};

const cardStyle = {
  background: "rgba(255,255,255,0.97)",
  padding: "0rem 2.5rem 2.5rem 2.5rem",
  borderRadius: "18px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.13)",
  width: "100%",
  maxWidth: "385px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const headingStyle = {
  marginBottom: "2rem",
  color: "#222",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "bold",
  fontSize: "2rem",
  letterSpacing: "1px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "8px 0 16px 0",
  borderRadius: "7px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  background: "#fafafa",
  outline: "none",
  transition: "border 0.2s",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#FFD600",
  color: "#222",
  border: "none",
  borderRadius: "7px",
  fontWeight: "bold",
  fontSize: "1.1rem",
  cursor: "pointer",
  marginTop: "16px",
  transition: "background 0.2s, box-shadow 0.2s, transform 0.18s",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

export default Register;