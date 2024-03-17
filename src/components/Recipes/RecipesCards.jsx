import React, { useContext, useEffect } from "react";
import RecipesItem from "./RecipesItem";
import { RecipesContext } from "../../context/RecipesContext";
import axios from "axios";
import NoResultSvg from "./NoResultSvg";

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
        <div className="flex flex-col items-center justify-center mt-16">
          <p className="logoname md:text-4xl font-semibold text-gray-500">No results found!</p>
          <NoResultSvg />
        </div>
        )
      }
    </div>
  );
};

export default RecipesCards;