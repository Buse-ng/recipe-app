import React from "react";
import SearchMeal from "../components/SearchMeal";
import MealCards from "../components/Meals/MealCards";

const Recipes = () => {
  return (
    <div>
      <SearchMeal />
      <div>
        <MealCards />
      </div>
    </div>
  );
};

export default Recipes;
