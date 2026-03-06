import React, { useState } from "react";

const BookingModal = ({ bike, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    days: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("monkBikeUser"));

    const bookingInfo = {
      bikeName: bike.name,
      name: formData.name,
      email: user?.email, // ✅ include user email
      date: formData.date,
      days: formData.days,
      bookedAt: new Date().toLocaleString(),
    };

    const prevBookings =
      JSON.parse(localStorage.getItem("monkBikeBookings")) || [];
    prevBookings.push(bookingInfo);
    localStorage.setItem("monkBikeBookings", JSON.stringify(prevBookings));

    setConfirmed(true);
    setTimeout(() => {
      onClose(); // Auto-close modal
    }, 2000);
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalBoxStyle}>
        <h2>Book: {bike.name}</h2>

        {confirmed ? (
          <p style={{ color: "green" }}>Booking Confirmed!</p>
        ) : (
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="days"
              placeholder="Number of Days"
              value={formData.days}
              onChange={handleChange}
              required
              min="1"
            />
            <button type="submit">Confirm Booking</button>
            <button type="button" onClick={onClose} style={{ marginTop: "10px" }}>
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// 🔧 Inline Styles
const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};

const modalBoxStyle = {
  background: "white",
  padding: "2rem",
  borderRadius: "8px",
  width: "300px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export default BookingModal;
