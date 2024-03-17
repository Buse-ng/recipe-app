import axios from 'axios'; 
import { createContext, useEffect, useState } from "react";
import showToast from "../components/Collection/ToastMessage";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
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

  const toggleFavorites = async (mealId) => {
    try {
      const isFavorite = favorites.some((favorite) => favorite.idMeal === mealId);
  
      if (isFavorite) {
        setFavorites((prevFavorites) =>
          prevFavorites.filter((favorite) => favorite.idMeal !== mealId)
        );
        showToast(`Removed from favorites` , 'success');
      } else {
        const response = await axios.get(`${URL}/lookup.php?i=${mealId}`);
        const mealDetail = response.data.meals[0];
        setFavorites((prevFavorites) => [...prevFavorites, mealDetail]);
        showToast(`Added to favorites` , 'success');
      }
    } catch (error) {
      console.error(error);
    }
  };
 
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])
  
  return (
    <RecipesContext.Provider
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
    </RecipesContext.Provider>
  );
};
