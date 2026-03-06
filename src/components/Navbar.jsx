import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

const navbarStyle = {
  background: "rgba(34, 34, 34, 0.85)",
  padding: "0.8rem 2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
  borderBottom: "2px solid #FFD600",
  position: "fixed",          // ✅ fixed navbar
  top: 0,
  width: "100%",              // ✅ full width
  zIndex: 1000,
};

const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.7rem",
  textDecoration: "none",
};

const logoImgStyle = {
  height: "38px",
  width: "38px",
  objectFit: "contain",
  marginRight: "0.3rem",
};

const logoStyle = {
  color: "#FFD600",
  fontWeight: "bold",
  fontSize: "2rem",
  letterSpacing: "2px",
  textDecoration: "none",
  textShadow: "1px 1px 0 #222, 2px 2px 4px #FFD60055",
  fontFamily: "Montserrat, sans-serif",
};

const navLinksStyle = {
  display: "flex",
  gap: "1rem",
  justifyContent: "flex-start", 
  marginRight: "5rem",        
};
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "1.15rem",
  padding: "0.4rem 1.1rem",
  borderRadius: "8px",
  transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
  background: "transparent",
  fontFamily: "Montserrat, sans-serif",
  letterSpacing: "0.5px",
};

const linkHoverStyle = {
  background: "#FFD600",
  color: "#222",
  boxShadow: "0 2px 8px rgba(255,214,0,0.12)",
};

const NavLink = ({ to, children, ...props }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Link
      to={to}
      style={hover ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoContainerStyle}>
        <img src={logo} alt="MonkBike Logo" style={logoImgStyle} />
        <span style={logoStyle}>MonkBike</span>
      </Link>
      <div style={navLinksStyle}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bikes">Bikes</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {user && <NavLink to="/my-bookings">My Bookings</NavLink>}
        {!user ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              ...linkStyle,
              background: "#FFD600",
              color: "#222",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
