import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
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
        Promise.all(fetches).then(setVehicles);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-primary text-center mb-4">Vehicles</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {vehicles.map((v, i) => (
          <div className="col" key={i}>
            <ItemCard item={v} type="vehicle" />
          </div>
        ))}
      </div>
    </div>
  );
}
