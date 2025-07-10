import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-bg d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
        alt="Star Wars"
        style={{ width: "300px", marginBottom: "40px" }}
      />
      <h1 className="text-white mb-5">Explore the Star Wars Universe</h1>
      <div className="d-flex flex-column gap-4 w-75">
        <button className="btn home-btn btn-danger" onClick={() => navigate("/people")}>
          👤 People
        </button>
        <button className="btn home-btn btn-success" onClick={() => navigate("/planets")}>
          🌍 Planets
        </button>
        <button className="btn home-btn btn-primary" onClick={() => navigate("/vehicles")}>
          🚗 Vehicles
        </button>
      </div>
    </div>
  );
}
