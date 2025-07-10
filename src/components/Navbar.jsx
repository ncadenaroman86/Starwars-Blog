import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="navbar navbar-light bg-light px-3">
      <div className="container-fluid justify-content-between">
        <Link to="/" className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            alt="Star Wars"
            height="40"
          />
        </Link>

        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <span className="badge bg-light text-dark">{favorites.length}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {favorites.length === 0 ? (
              <li className="dropdown-item text-muted">No favorites yet</li>
            ) : (
              favorites.map((fav, index) => (
                <li key={index} className="dropdown-item">
                  ❤️ {fav.name}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
