// filepath: e:\Monk-Bike\monk-bike\src\pages\SecondPage.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const SecondPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Welcome to Our Bike Rental Service</h1>
      <p style={descriptionStyle}>
        At Monk Bike Rentals, we offer a wide range of bikes to suit every need. Whether you're looking for a leisurely ride through the park or an adventurous mountain biking experience, we have the perfect bike for you.
      </p>
      
      <h2 style={subHeaderStyle}>Our Services</h2>
      <ul style={servicesListStyle}>
        <li>Daily and Weekly Rentals</li>
        <li>Free Helmets with Every Rental</li>
        <li>24/7 Customer Support</li>
        <li>Delivery and Pickup Options Available</li>
      </ul>

      <h2 style={subHeaderStyle}>Customer Testimonials</h2>
      <div style={testimonialStyle}>
        <p>"The best bike rental service I've ever used! Highly recommend!"</p>
        <p style={ratingStyle}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
        <p>- Sarah J.</p>
      </div>
      <div style={testimonialStyle}>
        <p>"Great bikes and excellent service. Will definitely rent again!"</p>
        <p style={ratingStyle}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
        <p>- Mike T.</p>
      </div>

      <h2 style={callToActionStyle}>Ready to Ride?</h2>
      <p style={ctaDescriptionStyle}>
        Book your bike today and experience the freedom of the open road!
      </p>
      <button style={ctaButtonStyle} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to Home
      </button>
    </div>
  );
};

// Styles
const pageStyle = {
  padding: "2rem",
  backgroundColor: "#f9f9f9",
  minHeight: "100vh",
};

const headerStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#333",
};

const descriptionStyle = {
  fontSize: "1.2rem",
  color: "#555",
  marginBottom: "1.5rem",
};

const subHeaderStyle = {
  fontSize: "2rem",
  fontWeight: "600",
  color: "#333",
  marginTop: "2rem",
};

const servicesListStyle = {
  listStyleType: "disc",
  marginLeft: "2rem",
  color: "#555",
};

const testimonialStyle = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "1rem",
  margin: "1rem 0",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const ratingStyle = {
  color: "#FFD600",
};

const callToActionStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#333",
  marginTop: "2rem",
};

const ctaDescriptionStyle = {
  fontSize: "1.2rem",
  color: "#555",
  marginBottom: "1rem",
};

const ctaButtonStyle = {
  padding: "0.8rem 1.5rem",
  backgroundColor: "#FFD600",
  color: "#222",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s",
};

export default SecondPage;