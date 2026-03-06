import React, { useEffect, useState } from "react";
import bulletImage from "../assets/bullet.png";
import activaImage from "../assets/activa.jpg";
import jupiterImage from "../assets/jupiter.png";
import dioImage from "../assets/dio.png";
import activa5gImage from "../assets/activa5g.png";
import shineImage from "../assets/shine.png";
import avengerImage from "../assets/avenger.png";
import yamahaImage from "../assets/yamaha.png";
import { FaMapMarkerAlt, FaRegThumbsUp, FaBullseye } from "react-icons/fa";

const vehicleList = [
  { name: "Honda Activa", price: 4200, image: activaImage },
  { name: "TVS JUPITER", price: 4399, image: jupiterImage },
  { name: "Honda Dio", price: 4200, image: dioImage },
  { name: "YAMAHA FZ S", price: 4200, image: yamahaImage },
  { name: "Honda CB Shine", price: 4399, image: shineImage },
  { name: "Honda Activa 5G", price: 4200, image: activa5gImage },
  { name: "Bullet Classic", price: 4200, image: bulletImage },
  { name: "Bajaj Avenger Street 150", price: 4399, image: avengerImage },
];

const FeaturedVehicles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vehicleList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleVehicles = () => {
    const len = vehicleList.length;
    const prev = (currentIndex - 1 + len) % len;
    const next = (currentIndex + 1) % len;
    return [vehicleList[prev], vehicleList[currentIndex], vehicleList[next]];
  };

  return (
    <>
      <div
        style={{
          padding: "5px 0",
          background: "#fef7f0",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "60px", color: "#222" }}>
          Exclusive <span style={{ color: "#e53935" }}>Deals</span>
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
            paddingBottom: "90px",
          }}
        >
          {getVisibleVehicles().map((vehicle, i) => (
            <div
              key={i}
              style={{
                width: i === 1 ? "360px" : "300px",
                height: i === 1 ? "330px" : "300px",
                transform: i === 1 ? "scale(1.15)" : "scale(0.98)",
                transition: "transform 0.4s ease",
                boxShadow: "0 4px 20px rgba(0,0,0,0.50)",
                borderRadius: "16px",
                padding: "30px 20px",
                background: "#ffffff",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  marginBottom: "20px",
                }}
              />
              <div style={{ fontWeight: "bold", color: "#b71c1c", fontSize: "1.4rem", marginBottom: "8px" }}>
                {vehicle.name}
              </div>
              <div style={{ color: "#444", fontSize: "1.1rem" }}>
                Rent starting from ₹{Math.floor(vehicle.price / 100)}/hour
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 👇 HOW IT WORKS SECTION */}
      <div style={{ background: "#f1f7f5", padding: "20px 20px 60px 0px" }}>
        <h2 style={{ fontSize: "2.4rem", textAlign: "center", marginBottom: "10px", fontWeight: "bold" }}>
          How{" "}
          <span
            style={{
              color: "#FFD700", // Yellow
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
              fontWeight: "bold",
            }}
          >
            Monk Bike
          </span>{" "}
          Works
        </h2>
        <p style={{ textAlign: "center", color: "#555", fontSize: "1.1rem", marginBottom: "60px" }}>
          Here’s a simple outline of how our rental service flows
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            {
              number: "01",
              icon: <FaMapMarkerAlt size={40} color="#000" />,
              title: "Select Pickup/Delivery",
              desc: "Choose date and location for your bike rental. Ensure pickup/drop-off suits your plan."
            },
            {
              number: "02",
              icon: <FaBullseye size={40} color="#00838f" />,
              title: "Reserve Your Bike",
              desc: "Check availability and reserve your preferred bike with best hourly rates."
            },
            {
              number: "03",
              icon: <FaRegThumbsUp size={40} color="#000" />,
              title: "Enjoy Your Ride",
              desc: "Pick up the bike and hit the road. Have fun with a smooth, secure riding experience."
            }
          ].map((step, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "14px",
                boxShadow: "0 0 20px rgba(33, 150, 243, 0.25)", // glow effect
                flex: "1",
                minWidth: "280px",
                maxWidth: "350px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(33, 150, 243, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(33, 150, 243, 0.25)";
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#eee" }}>{step.number}</div>
              <div style={{ margin: "20px 0" }}>{step.icon}</div>
              <h3 style={{ fontWeight: "bold", marginBottom: "12px" }}>{step.title}</h3>
              <p style={{ color: "#555" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default FeaturedVehicles;
