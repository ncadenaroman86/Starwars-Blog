import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then(res => res.json())
      .then(data => {
        const fetches = data.results.map((item) =>
          fetch(item.url)
            .then(res => res.json())
            .then(resData => ({
              ...resData.result.properties,
              uid: item.uid
            }))
        );
        Promise.all(fetches).then(setPlanets);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-success text-center mb-4">Planets</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {planets.map((planet, i) => (
          <div className="col" key={i}>
            <ItemCard item={planet} type="planet" />
          </div>
        ))}
      </div>
    </div>
  );
}
