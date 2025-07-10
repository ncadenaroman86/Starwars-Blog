import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
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
        Promise.all(fetches).then(setPeople);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-danger text-center mb-4">People</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {people.map((person, i) => (
          <div className="col" key={i}>
            <ItemCard item={person} type="people" />
          </div>
        ))}
      </div>
    </div>
  );
}
