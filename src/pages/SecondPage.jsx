import React from "react";
import FeaturedVehicles from "../components/FeaturedVehicles";
import {
  FaHardHat,
  FaMapMarkedAlt,
  FaMoneyCheckAlt,
  FaRegClock,
} from "react-icons/fa";
import TiltedCard from "../components/TiltedCard";

// ✅ Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 0px",
    backgroundColor: "#f5f7fa",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    color: "#333",
  },
  featuresContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  overlayContent: {
    padding: "20px",
    textAlign: "center",
  },
  icon: {
    fontSize: "40px",
    color: "#007bff",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#555",
  },
};

// ✅ Feature cards data
const cardData = [
  {
    icon: <FaHardHat style={styles.icon} />,
    title: "Safety First",
    description: "We ensure all our bikes are regularly serviced for your safety.",
  },
  {
    icon: <FaMapMarkedAlt style={styles.icon} />,
    title: "Easy Pickup",
    description: "Locate and pick up your bike from multiple convenient locations.",
  },
  {
    icon: <FaMoneyCheckAlt style={styles.icon} />,
    title: "Affordable Pricing",
    description: "Enjoy flexible rental plans at the best market rates.",
  },
  {
    icon: <FaRegClock style={styles.icon} />,
    title: "24/7 Service",
    description: "We’re here for you anytime with round-the-clock customer support.",
  },
];

// ✅ Component
const SecondPage = () => {
  return (
    <div style={styles.container}>
      {/* Heading */}
      <h2 style={styles.heading}>
        Why Choose{" "}
        <span
          style={{
            color: "#FFD700", // Yellow
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)", // Black border effect
            fontWeight: "bold",
          }}
        >
          Monk Bike
        </span>
        ?
      </h2>

      {/* Tilted Cards */}
      <div style={styles.featuresContainer}>
        {cardData.map((card, index) => (
          <TiltedCard
            key={index}
            containerHeight="320px"
            containerWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div style={styles.overlayContent}>
                {card.icon}
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardDesc}>{card.description}</p>
              </div>
            }
          />
        ))}
      </div>

      {/* Featured Vehicles Section */}
      <div style={{ marginTop: "60px", width: "100%" }}>
        <FeaturedVehicles />
      </div>
    </div>
  );
};

export default SecondPage;
