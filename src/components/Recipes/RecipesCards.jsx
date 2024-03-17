import React, { useContext, useEffect } from "react";
import RecipesItem from "./RecipesItem";
import { RecipesContext } from "../../context/RecipesContext";
import axios from "axios";

const RecipesCards = () => {
  const { 
    URL,
    searchResult, setSearchResult, 
    defaultMeals, setDefaultMeals 
  } = useContext(RecipesContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/filter.php?c=starter`);
        setDefaultMeals(response.data.meals);
        setSearchResult(response.data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {searchResult ? (
        <div>
          <h2 className="my-8 text-xl font-semibold mb-2">
            Results:
          </h2>
          <div 
            className="max-w-sm md:max-w-none mx-auto md:mx-0
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {searchResult && searchResult.map((item) => (
              <div key={item.idMeal}>
                <RecipesItem item={item} />
              </div>
            ))}
          </div>
        </div>
      ) 
      : (
        // default recipes : I choose "starter meals"
        <div>
          <h2 className="my-8 text-xl font-semibold mb-2">
            Starter Meals
          </h2>
          <div 
            className="max-w-sm md:max-w-none mx-auto md:mx-0 
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {defaultMeals && defaultMeals.map((item) => (
              <div key={item.idMeal}>
                <RecipesItem item={item} />
              </div>
            ))}
          </div>
        </div>
        )
      }
    </div>
  );
};

export default RecipesCards;