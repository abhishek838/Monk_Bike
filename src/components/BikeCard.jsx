import React from "react";

const BikeCard = ({ image, name, price, onBook }) => {
  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h3>{name}</h3>
      <p>Price: ₹{price} / day</p>
      <button style={buttonStyle} onClick={onBook}>Book Now</button>
    </div>
  );
};

// Same styles as earlier
const cardStyle = {
  width: "250px",
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  textAlign: "center",
  margin: "1rem",
};

const imageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "8px",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  background: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default BikeCard;
