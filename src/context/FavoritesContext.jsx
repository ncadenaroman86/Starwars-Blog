import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (character) => {
    if (!favorites.some((fav) => fav.name === character.name)) {
      setFavorites([...favorites, character]);
    }
  };

  const removeFavorite = (name) => {
    setFavorites(favorites.filter((fav) => fav.name !== name));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
