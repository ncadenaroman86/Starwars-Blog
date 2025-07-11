import React from "react";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";
import "../styles/Home.css";

export default function People() {
  return (
    <>
      <Navbar />
      <h1 style={{ color: "white", textAlign: "center" }}>Star Wars Characters</h1>
      <div className="cinematic-card-grid">
        <ItemCard
          title="Luke Skywalker"
          subtitle="Jedi Knight"
          image="https://i.pinimg.com/originals/b2/a9/f1/b2a9f18ff56bc522129f61f8bdb05720.gif"
        />
      </div>
    </>
  );
}
