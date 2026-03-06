import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const SecondPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Welcome to Our Bike Rental Service</h1>
      <p style={descriptionStyle}>
        At our bike rental service, we offer a wide range of bicycles to suit
        every need. Whether you're looking for a leisurely ride through the
        park or a high-performance bike for a challenging trail, we have the
        perfect option for you. Our bikes are well-maintained and regularly
        serviced to ensure a safe and enjoyable experience.
      </p>

      <h2 style={subHeaderStyle}>Our Services</h2>
      <ul style={servicesListStyle}>
        <li>Daily and weekly rentals</li>
        <li>Guided tours and adventure packages</li>
        <li>Bike accessories and safety gear rental</li>
        <li>Delivery and pickup services</li>
      </ul>

      <h2 style={subHeaderStyle}>Customer Testimonials</h2>
      <div style={testimonialContainerStyle}>
        <div style={testimonialStyle}>
          <FaQuoteLeft style={quoteIconStyle} />
          <p style={testimonialTextStyle}>
            "The best bike rental experience I've ever had! The staff was
            friendly and the bikes were in excellent condition."
          </p>
          <FaQuoteRight style={quoteIconStyle} />
          <p style={customerNameStyle}>- Sarah J.</p>
        </div>
        <div style={testimonialStyle}>
          <FaQuoteLeft style={quoteIconStyle} />
          <p style={testimonialTextStyle}>
            "I loved the guided tour! It was a great way to explore the city
            while enjoying a bike ride."
          </p>
          <FaQuoteRight style={quoteIconStyle} />
          <p style={customerNameStyle}>- Mark T.</p>
        </div>
      </div>

      <h2 style={callToActionStyle}>Ready to Ride?</h2>
      <p style={descriptionStyle}>
        Book your bike today and experience the freedom of cycling!
      </p>
      <button style={bookNowButtonStyle}>Book Now</button>
    </div>
  );
};

// Styles
const pageStyle = {
  padding: "2rem",
  backgroundColor: "#f9f9f9",
  color: "#333",
  fontFamily: "Arial, sans-serif",
};

const headerStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
};

const descriptionStyle = {
  fontSize: "1.2rem",
  lineHeight: "1.6",
  marginBottom: "2rem",
};

const subHeaderStyle = {
  fontSize: "2rem",
  fontWeight: "600",
  marginTop: "2rem",
  marginBottom: "1rem",
};

const servicesListStyle = {
  listStyleType: "disc",
  marginLeft: "2rem",
  marginBottom: "2rem",
};

const testimonialContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  marginBottom: "2rem",
};

const testimonialStyle = {
  background: "#fff",
  borderRadius: "8px",
  padding: "1rem",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const quoteIconStyle = {
  color: "#FFD600",
  fontSize: "1.5rem",
};

const testimonialTextStyle = {
  fontStyle: "italic",
  margin: "0.5rem 0",
};

const customerNameStyle = {
  textAlign: "right",
  fontWeight: "bold",
};

const callToActionStyle = {
  fontSize: "2rem",
  fontWeight: "600",
  marginTop: "2rem",
};

const bookNowButtonStyle = {
  padding: "0.8rem 1.6rem",
  borderRadius: "8px",
  border: "none",
  background: "#FFD600",
  color: "#222",
  fontWeight: "600",
  fontSize: "1.1rem",
  cursor: "pointer",
  transition: "background 0.3s ease",
};

export default SecondPage;