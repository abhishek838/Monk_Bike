import React, { useState } from "react";
import bulletImage from "../assets/bullet.png";
import activaImage from "../assets/activa.jpg";
import jupiterImage from "../assets/jupiter.png";
import dioImage from "../assets/dio.png";
import activa5gImage from "../assets/activa5g.png";
import shineImage from "../assets/shine.png";
import avengerImage from "../assets/avenger.png";
import yamahaImage from "../assets/yamaha.png";


const bikes = [
  {
    name: "Honda Activa",
    price: 4200,
    image: activaImage,
    tag: "Best seller",
    tagColor: "#5a3fc0",
    left: 1,
  },
  {
    name: "TVS JUPITER",
    price: 4399,
    image: jupiterImage,
    tag: "",
    tagColor: "",
    left: 1,
  },
  {
    name: "Honda Dio",
    price: 4200,
    image: dioImage,
    tag: "",
    tagColor: "",
    left: 1,
  },

  {
    name: "YAMAHA FZ S",
    price: 4200,
    image: yamahaImage,
    tag: "Best seller",
    tagColor: "#5a3fc0",
    left: 1,
  },
  {
    name: "Honda CB Shine",
    price: 4399,
    image: shineImage,
    tag: "",
    tagColor: "",
    left: 1,
  },
  {
    name: "Honda Activa 5G",
    price: 4200,
    image: activa5gImage,
    tag: "",
    tagColor: "",
    left: 1,
  },

  {
    name: "Bullet Classic",
    price: 4200,
    image: bulletImage,
    tag: "Best seller",
    tagColor: "#5a3fc0",
    left: 1,
  },
  {
    name: "Bajaj Avenger Street 150",
    price: 4399,
    image: avengerImage,
    tag: "",
    tagColor: "",
    left: 1,
  },
  {
    name: "Honda Dio",
    price: 4200,
    image: dioImage,
    tag: "",
    tagColor: "",
    left: 1,
  },
  {
    name: "Honda Activa",
    price: 4200,
    image: activaImage,
    tag: "Best seller",
    tagColor: "#5a3fc0",
    left: 1,
  },
  {
    name: "TVS JUPITER",
    price: 4399,
    image: jupiterImage,
    tag: "",
    tagColor: "",
    left: 1,
  },
  {
    name: "Honda Dio",
    price: 4200,
    image: dioImage,
    tag: "",
    tagColor: "",
    left: 1,
  },
];

const locations = [
  "Select your nearest location",
  "Baner",
  "Kothrud",
  "Wakad",
  "Viman Nagar",
];

const Bikes = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh", padding: "2rem", marginTop: "3rem" }}>
      {/* Centered Booking Calendar Section */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            background: "#fff",
            padding: "1.2rem 2rem",
            borderRadius: "10px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            maxWidth: "fit-content",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
            <span style={{ fontWeight: 500, marginRight: "0.5rem" }}>
              <svg width="22" height="22" fill="#222" style={{verticalAlign: "middle", marginRight: "0.3rem"}} viewBox="0 0 24 24"><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm12 6v2H5V8h14zm0 4v8H5v-8h14z"/></svg>
              <input
                type="datetime-local"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                  minWidth: "220px",
                }}
              />
            </span>
            <span style={{ fontWeight: 500, marginRight: "0.5rem" }}>
              <svg width="22" height="22" fill="#222" style={{verticalAlign: "middle", marginRight: "0.3rem"}} viewBox="0 0 24 24"><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm12 6v2H5V8h14zm0 4v8H5v-8h14z"/></svg>
              <input
                type="datetime-local"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                  minWidth: "220px",
                }}
              />
            </span>
          </div>
          <button
            style={{
              background: "#e53935",
              color: "#fff",
              border: "none",
              borderRadius: "7px",
              padding: "0.7rem 2.2rem",
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: "pointer",
              marginLeft: "1.2rem",
              boxShadow: "0 2px 8px rgba(229,57,53,0.08)",
              transition: "background 0.18s",
            }}
          >
            Modify Search
          </button>
        </div>
      </div>

      {/* Models Found */}
      <div style={{ fontSize: "1.2rem", margin: "2rem 0 1.5rem 1.5rem", fontWeight: 500 }}>
        Models Found: {bikes.length}
      </div>

      {/* Bike Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))",
          gap: "2.5rem",
          justifyItems: "center",
        }}
      >
        {bikes.map((bike, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.09)",
              padding: "0 0 0 0",
              position: "relative",
              width: "390px",
              minHeight: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Tag */}
            {bike.tag && (
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  left: "0",
                  background: bike.tagColor,
                  color: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  padding: "0.3rem 1.1rem 0.3rem 0.9rem",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  zIndex: 2,
                }}
              >
                {bike.tag}
              </div>
            )}
            {/* Price Ribbon */}
            <div
              style={{
                position: "absolute",
                top: "18px",
                right: "0",
                background: "#222",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.1rem",
                padding: "0.4rem 1.2rem 0.4rem 1.1rem",
                borderTopLeftRadius: "6px",
                borderBottomLeftRadius: "6px",
                zIndex: 2,
                letterSpacing: "1px",
              }}
            >
              ₹ {bike.price}
            </div>
            {/* Bike Image */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2.5rem",
                marginBottom: "1.2rem",
                position: "relative",
              }}
            >
              <img
                src={bike.image}
                alt={bike.name}
                style={{
                  width: "264px",
                  height: "187px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            
            </div>
            {/* Bike Name and Left */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%", margin: "0 auto 0.5rem auto" }}>
              <div style={{ fontWeight: 500, fontSize: "1.15rem" }}>{bike.name}</div>
              <div style={{ color: "#b71c1c", fontWeight: 500, fontSize: "1.08rem" }}>
                <span style={{ borderBottom: "2px solid #b71c1c" }}>{bike.left} left</span>
              </div>
            </div>
            {/* Location Dropdown */}
            <select
              value={selectedLocation}
              onChange={e => setSelectedLocation(e.target.value)}
              style={{
                width: "90%",
                padding: "0.7rem 1rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                marginBottom: "0.7rem",
                background: "#fafafa",
                outline: "none",
                boxSizing: "border-box",
              }}
            >
              {locations.map((loc, i) => (
                <option key={i} value={loc}>{loc}</option>
              ))}
            </select>
            {/* Buttons */}
            <div style={{ display: "flex", gap: "1rem", width: "100%", marginTop: "0.5rem" }}>
              <button
                style={{
                  flex: 1,
                  background: "#e53935",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "0.6rem",
                  fontWeight: 450,
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(229,57,53,0.08)",
                  transition: "background 0.18s",
                  minWidth: "120px",
                  maxWidth: "60px",
                  display: "block",
                  margin: "0 auto",
                }}
                onMouseOver={e => (e.target.style.background = "#b71c1c")}
                onMouseOut={e => (e.target.style.background = "#e53935")}
              >
                BOOK NOW
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bikes;