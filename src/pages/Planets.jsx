// Planets.jsx
import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import "../pages/Home.css";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((item) =>
          fetch(item.url)
            .then((res) => res.json())
            .then((resData) => ({
              ...resData.result.properties,
              uid: item.uid
            }))
        );
        Promise.all(fetches).then(setPlanets);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        backgroundImage:
          "url('https://gizmodo.com/app/uploads/2019/09/stosypjwlnzuowss8kt6.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Star Wars Logo */}
      <div className="star-wars-logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          alt="Star Wars"
          className="star-wars-logo-small"
          onClick={() => (window.location.href = "/")}
        />
      </div>

      <div className="container mt-5">
        <h2 className="text-danger text-center mb-4">Planets</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {planets.map((planet, i) => (
            <div className="col" key={i}>
              <ItemCard item={planet} type="planets" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
