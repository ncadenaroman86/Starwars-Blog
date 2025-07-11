import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="intro-text">
        A long time ago in a galaxy far,<br /> far away...
      </h1>

      <div className="btn-group">
        <button onClick={() => navigate("/people")}>👤 People</button>
        <button onClick={() => navigate("/planets")}>🌍 Planets</button>
        <button onClick={() => navigate("/vehicles")}>🚀 Vehicles</button>
      </div>
    </div>
  );
}
