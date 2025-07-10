import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { useContext } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="navbar navbar-dark bg-black px-4 py-3">
      {/* Logo on the left */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          alt="Star Wars Logo"
          className="navbar-logo"
        />
      </Link>

      {/* Favorites Button */}
      <div className="ml-auto d-flex align-items-center gap-3">
        <Link to="/favorites">
          <button className="btn btn-warning">
            ⭐ Favorites {favorites.length > 0 && `(${favorites.length})`}
          </button>
        </Link>
      </div>
    </nav>
  );
};
