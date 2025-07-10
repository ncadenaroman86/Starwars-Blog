import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="star-wars-intro"
      style={{
        backgroundColor: "black",
        color: "white",
        backgroundImage:
          "url('https://gizmodo.com/app/uploads/2019/09/stosypjwlnzuowss8kt6.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "rgba(0, 0, 0, 0.8)"
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          alt="Star Wars"
          style={{ height: "60px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </nav>

      {/* Intro Text */}
      <p
        className="intro-text"
        style={{ color: "white", textAlign: "center", marginTop: "20px" }}
      >
        A long time ago in a galaxy far,<br /> far away...
      </p>

      {/* Crawl Text */}
      <div className="crawl-wrapper">
        <div className="crawl">
          <div className="title">
            <p>Episode I</p>
            <h1>React Awakens</h1>
          </div>
          <p>
            Welcome to the Star Wars React Universe. Explore People, Planets, or
            Vehicles and discover the power of the SWAPI. Add your favorites and
            use the Force to guide your path.
          </p>
        </div>
      </div>

      {/* Action Cards */}
      <div className="cinematic-card-grid">
        <div className="cinematic-card" onClick={() => navigate("/people")}>
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/originals/b2/a9/f1/b2a9f18ff56bc522129f61f8bdb05720.gif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px"
            }}
          />
          <div className="card-overlay">
            <h4>👤 People</h4>
            <p>Explore iconic Star Wars characters</p>
          </div>
        </div>

        <div className="cinematic-card" onClick={() => navigate("/planets")}>
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url('https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px"
            }}
          />
          <div className="card-overlay">
            <h4>🌍 Planets</h4>
            <p>Discover fascinating galaxies and worlds</p>
          </div>
        </div>

        <div className="cinematic-card" onClick={() => navigate("/vehicles")}>
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/originals/df/d8/f5/dfd8f533a8ccd047dfe30693a9ffdc51.gif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px"
            }}
          />
          <div className="card-overlay">
            <h4>🚀 Vehicles</h4>
            <p>Speeders, starships, and more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
