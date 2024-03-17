import React from "react";
import SearchMeal from "../components/SearchMeal";
import RecipesCards from "../components/Recipes/RecipesCards";

const Recipes = () => {
  return (
    <div className="p-4">
      <SearchMeal />
      <div>
        <RecipesCards />
      </div>
    </div>
  );
};

export default Recipes;
