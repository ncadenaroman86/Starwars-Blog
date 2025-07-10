import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { type, uid } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${uid}`)
      .then((res) => res.json())
      .then((res) => setData(res.result.properties));
  }, [type, uid]);

  return (
    <div className="container text-center mt-5">
      {data ? (
        <>
          <h1 className="mb-4">{data.name}</h1>
          <img
            src={`https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}s/${uid}.jpg`}
            alt={data.name}
            className="img-fluid mb-3"
          />
          <pre className="text-start">{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
