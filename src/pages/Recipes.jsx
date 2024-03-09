import React from "react";
import SearchMeal from "../components/SearchMeal";
import MealCards from "../components/Meals/MealCards";

const Recipes = () => {
  return (
    <div className="p-4">
      <SearchMeal />
      <div>
        <MealCards />
      </div>
    </div>
  );
};

export default Recipes;
