import React from "react";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";
import "../styles/Home.css"; // ✅ Import the shared CSS

export default function Planets() {
  return (
    <>
      <Navbar />
      <h1 style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
        🌍 Star Wars Planets
      </h1>
      <div className="cinematic-card-grid">
        <ItemCard
          title="Tatooine"
          subtitle="Desert Planet"
          image="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg"
        />
        <ItemCard
          title="Hoth"
          subtitle="Icy Wasteland"
          image="https://static.wikia.nocookie.net/starwars/images/c/cb/Hoth_SWCT.png"
        />
        <ItemCard
          title="Endor"
          subtitle="Forest Moon"
          image="https://static.wikia.nocookie.net/starwars/images/1/1d/Endor_Forest_Moon.png"
        />
      </div>
    </>
  );
}
