import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemCard({ item, type }) {
  const navigate = useNavigate();

  const imageUrl = `https://starwars-visualguide.com/assets/img/${
    type === "people" ? "characters" : type === "planets" ? "planets" : "vehicles"
  }/${item.uid}.jpg`;

  return (
    <div className="card" style={{ minWidth: "250px", backgroundColor: "#222", color: "white" }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt={item.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text">
          {type === "people" && (
            <>
              <strong>Gender:</strong> {item.gender} <br />
              <strong>Hair Color:</strong> {item.hair_color} <br />
              <strong>Eye Color:</strong> {item.eye_color}
            </>
          )}
          {type === "planets" && (
            <>
              <strong>Climate:</strong> {item.climate} <br />
              <strong>Population:</strong> {item.population}
            </>
          )}
          {type === "vehicles" && (
            <>
              <strong>Model:</strong> {item.model} <br />
              <strong>Class:</strong> {item.vehicle_class}
            </>
          )}
        </div>
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => navigate(`/details/${type}/${item.uid}`)}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
