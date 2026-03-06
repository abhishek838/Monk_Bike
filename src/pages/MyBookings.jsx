import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user || !user.email) {
      setBookings([]);
      return;
    }

    const allBookings = JSON.parse(localStorage.getItem("monkBikeBookings")) || [];
    // Only show bookings made by this user
    const userBookings = allBookings.filter((b) => b.email === user.email);
    setBookings(userBookings);
  }, [user]);

  const handleCancel = (indexToRemove) => {
    const updatedBookings = bookings.filter((_, i) => i !== indexToRemove);
    setBookings(updatedBookings);

    // Update localStorage: remove only this user's booking
    const allBookings = JSON.parse(localStorage.getItem("monkBikeBookings")) || [];
    const remaining = allBookings.filter(
      (b) => b.email !== user.email || updatedBookings.find(u => u.bookedAt === b.bookedAt)
    );
    localStorage.setItem("monkBikeBookings", JSON.stringify(remaining));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Bike</th>
              <th>Name</th>
              <th>Date</th>
              <th>Days</th>
              <th>Booked At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i}>
                <td>{b.bikeName}</td>
                <td>{b.name}</td>
                <td>{b.date}</td>
                <td>{b.days}</td>
                <td>{b.bookedAt}</td>
                <td>
                  <button onClick={() => handleCancel(i)} style={cancelBtnStyle}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "1rem",
  textAlign: "left",
};

const cancelBtnStyle = {
  backgroundColor: "#dc3545",
  color: "white",
  padding: "6px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default MyBookings;