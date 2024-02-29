import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  const URL = "https://www.themealdb.com/api/json/v1/1";

  const [search, setSearch] = useState("");
  const [defaultMeals, setDefaultMeals] = useState(null);
  const [searchResult, setSearchResult] = useState(defaultMeals);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = async (id) => {
    try {
      const response = await axios.get(`${URL}/lookup.php?i=${id}`)
      const mealDetail = response.data.meals[0];
      setFavorites((prevFavorites) => [...prevFavorites, mealDetail]);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleFavorites = (mealId) => {
    const isFavorite = favorites.includes(mealId);
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== mealId))
    } else {
      setFavorites([...favorites, mealId]);
    }
    addToFavorites(mealId);
  }
  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])
  
  return (
    <MealsContext.Provider
      value={{
        URL,
        search, setSearch,
        defaultMeals, setDefaultMeals,
        searchResult, setSearchResult,
        favorites, setFavorites,
        toggleFavorites, addToFavorites,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};
