import React, { useState } from "react";
import bg from "../assets/bg4.png";
import { TypeAnimation } from "react-type-animation";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaSearch } from "react-icons/fa";
import SecondPage from "./SecondPage";
import BikeList from '../components/BikeList';
import { useEffect } from "react";

const Home = () => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [users, setUsers] = useState([]);

  const handleRentNow = () => {
    if (!city || !startDate || !startTime || !endDate || !endTime) {
      alert("Please fill all the details");
      return;
    }
    alert(
      `Booking Details:\nCity: ${city}\nStart: ${startDate} ${startTime}\nEnd: ${endDate} ${endTime}`
    );
  };

  useEffect(() => {
    fetch("http://localhost:8080/user/all")
    .then((res) => res.json())
    .then((data) => { 
    setUsers(data);  
    console.log(data)})
    .catch((error) => {console.log(error)})
  },[]);

  function getbikes(){
    fetch("http://localhost:8080/bikes/all")
    .then((res) => res.json())
    .then((data) => { 
    // setUsers(data);  
    console.log(data)})
    .catch((error) => {console.log(error)})

  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Text Box */}
        <div
          style={{
            marginTop: "80px",
            marginLeft: "5%",
            maxWidth: "600px",
            padding: "2.5rem 2rem",
            borderRadius: "18px",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#111",
              marginBottom: "1.2rem",
            }}
          >
            <TypeAnimation
              sequence={["Find Your Best", 1000, "Dream Bike for Rental", 1500]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              style={{ display: "inline-block", color: "#ff9800" }}
            />
          </h1>

          <p
            style={{
              fontSize: "1.18rem",
              color: "#333",
              marginBottom: "2rem",
              lineHeight: "1.7",
            }}
          >
            Experience the ultimate in comfort, performance, and convenience with
            our two-wheeler rentals. From scooters to bikes, we offer a range of
            premium vehicles to suit your preferences and lifestyle.
          </p>
          <button
            style={viewBikeBtnStyle}
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
            onMouseOver={(e) => {
              e.target.style.background = "rgb(255, 214, 0)";
              e.target.style.color = "black";
              e.target.style.border = "2px solid #222";
              e.target.style.transform = "scale(1.07)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "#fff";
              e.target.style.color = "#222";
              e.target.style.border = "2px solid #222";
              e.target.style.transform = "scale(1)";
            }}
          >
            View all Bikes &nbsp;→
          </button>
        </div>

        {/* Booking Box */}
        <div style={bookingBoxOuterStyle}>
          <div style={bookingBoxInnerStyle}>
            {/* Pickup Location */}
            <div style={fieldColStyle}>
              <label style={labelStyle}>Pickup Location</label>
              <div style={inputGroupStyle}>
                <FaMapMarkerAlt style={iconStyle} />
                <input
                  type="text"
                  placeholder="Enter City, Airport, or Address"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={inputStyleLight}
                />
              </div>
            </div>

            {/* Pickup Date & Time */}
            <div style={fieldColStyle}>
              <label style={labelStyle}>Pickup Date & Time</label>
              <div style={dualInputContainer}>
                <div style={inputGroupStyle}>
                  <FaCalendarAlt style={iconStyle} />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    style={inputStyleLight}
                  />
                </div>
                <div style={inputGroupStyle}>
                  <FaClock style={iconStyle} />
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    style={inputStyleLight}
                  />
                </div>
              </div>
            </div>

            {/* Return Date & Time */}
            <div style={fieldColStyle}>
              <label style={labelStyle}>Return Date & Time</label>
              <div style={dualInputContainer}>
                <div style={inputGroupStyle}>
                  <FaCalendarAlt style={iconStyle} />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    style={inputStyleLight}
                  />
                </div>
                <div style={inputGroupStyle}>
                  <FaClock style={iconStyle} />
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    style={inputStyleLight}
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <button
                onClick={handleRentNow}
                style={searchBtnStyle}
                onMouseOver={e => {
                  e.target.style.transform = "scale(1.07)";
                  e.target.style.backgroundColor = "#ffe066";
                }}
                onMouseOut={e => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.backgroundColor = "#FFD600";
                }}
              >
                <FaSearch style={{ marginRight: "0.7rem" }} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bike List Section */}
      <div style={{
        padding: "4rem 2rem",
        backgroundColor: "#f5f5f5",
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "3rem",
          fontSize: "2.5rem",
          color: "#333",
          fontWeight: "bold"
        }}>Available Bikes</h2>
        <BikeList />
      </div>

      <SecondPage />
      <div>
        {users && users.length > 0 ?
        users.map((item, index)=>{
          return (
            <div>
              <p>{item.name}</p>
              <p>{item.email} </p> 
            </div>
          )
        })
        :null }
        <button> Get Bikes </button>
      </div>

    </>
  );
};

// Styles
const viewBikeBtnStyle = {
  padding: "0.7rem 1.4rem",
  borderRadius: "8px",
  border: "2px solid #222",
  background: "#fff",
  color: "#222",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "all 0.3s ease, transform 0.18s cubic-bezier(.4,2,.6,1)",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  textTransform: "uppercase",
};

const bookingBoxOuterStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 0 2rem 0",
};

const bookingBoxInnerStyle = {
  background: "rgba(0,0,0,0.75)",
  borderRadius: "16px",
  padding: "1.5rem 2rem",
  display: "grid",
  gridTemplateColumns: "2fr 2fr 2fr 1fr",
  gap: "1.2rem",
  width: "90%",
  maxWidth: "1200px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.32)",
  alignItems: "end",
};

const fieldColStyle = {
  display: "flex",
  flexDirection: "column",
};

const dualInputContainer = {
  display: "flex",
  gap: "0.8rem",
};

const labelStyle = {
  color: "#fff",
  fontWeight: "700",
  marginBottom: "0.7rem",
  fontSize: "1.1rem",
};

const inputGroupStyle = {
  display: "flex",
  alignItems: "center",
  background: "#fff",
  borderRadius: "8px",
  padding: "0.6rem 1rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  flex: 1,
};

const iconStyle = {
  color: "#FFD600",
  fontSize: "1rem",
  marginRight: "0.6rem",
};

const inputStyleLight = {
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: "1rem",
  color: "#222",
  width: "100%",
};

const searchBtnStyle = {
  padding: "0.9rem 2rem",
  backgroundColor: "#FFD600",
  color: "#222",
  fontWeight: 600,
  fontSize: "1.1rem",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  height: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "0.5rem",
  paddingLeft: "1.2rem",
  transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
};

export default Home;