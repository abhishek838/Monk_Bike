import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // <-- Add Link import
import { useAuth } from "../context/AuthContext";
import loginBg from "../assets/login.jpg"; // <-- update extension if needed

const backgroundStyle = {
  height: "100vh",
  width: "100vw",
  backgroundImage: `url(${loginBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const formContainerStyle = {
  position: "absolute",
  top: "50%",       // center vertically
  right: "11.6%",     // push it into yellow box (adjust as per image)
  transform: "translateY(-50%)",
  maxWidth: "350px",
  width: "100%",
  padding: "2.5rem 2rem",
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "20px",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#FFD600",
  color: "#222",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "1.1rem",
  cursor: "pointer",
  marginTop: "10px",
  transition: "background 0.2s",
  boxSizing: "border-box",
};

const headingStyle = {
  marginBottom: "1.5rem",
  color: "#222",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "bold",
  fontSize: "2rem",
  letterSpacing: "1px",
};

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("monkBikeUser"));

    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      login({ email: savedUser.email });
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div style={backgroundStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Login</h2>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* Remember me and Forgot Password */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px 0 18px 0"
          }}>
            <label style={{ display: "flex", alignItems: "center", color: "#222", fontSize: "1rem" }}>
              <input type="checkbox" style={{ marginRight: "8px" }} />
              Remember me
            </label>
            <a
              href="#"
              style={{
                color: "#222",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem"
              }}
              onMouseOver={e => e.target.style.textDecoration = "underline"}
              onMouseOut={e => e.target.style.textDecoration = "none"}
            >
              Forgot Password?
            </a>
          </div>

          <button type="submit" style={buttonStyle}>
            Login
          </button>

          {/* Sign up option */}
          <div style={{ marginTop: "18px", textAlign: "center", fontSize: "1.05rem" }}>
            <span style={{ color: "#6b7280" }}>Don't have an account? </span>
            <Link
              to="/register"
              style={{
                color: "#222",
                fontWeight: "bold",
                textDecoration: "none",
                marginLeft: "4px",
              }}
              onMouseOver={e => e.target.style.textDecoration = "underline"}
              onMouseOut={e => e.target.style.textDecoration = "none"}
            >
              Sign up here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;