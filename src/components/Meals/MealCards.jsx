import React from "react";
import MealItem from "./MealItem";

const MealCards = ({ defaultItems, searchResult }) => {
  return (
    <div>
      {searchResult ? (
        <div>
          <h2 className="my-8 text-xl font-semibold mb-2">
            Search Results:
          </h2>
          <div 
            className="max-w-sm md:max-w-none mx-auto md:mx-0
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {searchResult && searchResult.map((item) => (
              <div key={item.idMeal}>
                <MealItem item={item} />
              </div>
            ))}
          </div>
        </div>
      ) 
      : (
        // default recipes
        <div>
          <h2 className="my-8 text-xl font-semibold mb-2">
            Starter Meals
          </h2>
          <div 
            className="max-w-sm md:max-w-none mx-auto md:mx-0 
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {defaultItems && defaultItems.map((item) => (
              <div key={item.idMeal}>
                <MealItem item={item} />
              </div>
            ))}
          </div>
        </div>
        )
      }
    </div>
  );
};

export default MealCards;