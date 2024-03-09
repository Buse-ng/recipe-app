import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { MealsContext } from "../../context/MealsContext";

const MealItem = ({ item }) => {
  const { toggleFavorites, favorites } = useContext(MealsContext);
  const isFavorite = favorites.some((favorite) => favorite.idMeal === item.idMeal);

  return (
    <div className="flex items-center justify-center mt-16 gap-2">
      <div className="bg-gray-300 w-52 h-64 rounded-t-3xl rounded-b-lg">
        <div className="relative flex items-center justify-center">
          <img
            className="absolute -top-10 bg-white rounded-full w-36 h-36"
            src={item.strMealThumb}
            alt="recipeImg" 
          />
        </div>
        <div className="p-5 mt-28 overflow-y-visible">
          <div className="flex flex-col items-center justify-center mb-3">
            <Link to={``}>
              <h2 className="font-bold tracking-tight text-gray-900">
                {item.strMeal}
              </h2>
            </Link>
            <p className="text-gray-400">
              {item.strCategory ? item.strCategory : "Starter"}
            </p>
          </div>
          <div className="bg-gray-200 w-40 py-[1px]"></div>
          <div className="flex items-center justify-between mt-2">
            <button 
              onClick={() => toggleFavorites(item.idMeal)}
              className={`text-2xl cursor-pointer
                ${isFavorite 
                ? "text-red-600" 
                : "text-gray-400 hover:text-red-500"
                }`}
            >
              <MdFavorite />
            </button>
            <Link
              to={``}
              className="inline-flex items-center text-center
              text-sm font-medium text-white bg-green-700 
              rounded-lg hover:bg-green-800 px-3 py-2"
            >
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
