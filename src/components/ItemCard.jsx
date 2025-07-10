import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import "./ItemCard.css"; // Asegúrate de tenerlo

export default function ItemCard({ item, type }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const isFavorite = favorites.some((fav) => fav.name === item.name);

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(item.name) : addFavorite({ ...item, type });
  };

  const imageUrl = `https://starwars-visualguide.com/assets/img/${
    type === "people" ? "characters" : type
  }s/${item.uid}.jpg`;

  return (
    <div className="card item-card">
      <img
        src={imageUrl}
        className="card-img-top item-img"
        alt={item.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text small">
          {type === "people" && (
            <>
              <strong>Gender:</strong> {item.gender}<br />
              <strong>Hair:</strong> {item.hair_color}<br />
              <strong>Eyes:</strong> {item.eye_color}
            </>
          )}
          {type === "planet" && (
            <>
              <strong>Population:</strong> {item.population}<br />
              <strong>Climate:</strong> {item.climate}
            </>
          )}
          {type === "vehicle" && (
            <>
              <strong>Model:</strong> {item.model}<br />
              <strong>Class:</strong> {item.vehicle_class}
            </>
          )}
        </div>
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => navigate(`/details/${type}/${item.uid}`)}
          >
            Learn more
          </button>
          <button className="btn btn-sm btn-outline-warning" onClick={toggleFavorite}>
            {isFavorite ? "❤️" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}
