import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import RecipesItem from "../components/Recipes/RecipesItem";

const Favorites = () => {
  const { defaultMeals, favorites } = useContext(RecipesContext);

  if (defaultMeals === null) {
    return <p className="p-4 text-gray-400">Empty</p>;
  }

  return (
    <div className="container mx-auto overflow-hidden p-4">
      <h2 className="text-2xl font-bold my-4 mx-auto text-gray-700">
        Favorites
      </h2>
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-6 max-w-sm md:max-w-none mx-auto md:mx-0"
      >
        {favorites.map((item) => (
          <div key={item.idMeal}>
            <RecipesItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
