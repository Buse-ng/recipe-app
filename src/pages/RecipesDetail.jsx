import axios from "axios";
import ReactPlayer from "react-player";
import PageNotFound from "./PageNotFound";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";
import React, { useContext, useEffect, useState } from "react";

const RecipesDetail = () => {
  const { URL } = useContext(RecipesContext);
  const [recipe, setRecipe] = useState([]); 
  let { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${URL}/lookup.php?i=${id}`);
        console.log(response.data);
        if (response.data.meals) {
          setRecipe(response.data.meals[0]);
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) { 
    return <PageNotFound />; 
  }

  const mergeIngredients = (recipe) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      if (
        ingredient &&
        measure &&
        !ingredients.some((item) => item.ingredient === ingredient)
      ) {
        ingredients.push({
          ingredient,
          measure,
        });
      }
    }

    return ingredients;
  };

  const ingredients = mergeIngredients(recipe);

  return (
    <>
      <div className="md:grid md:grid-cols-9 sm:p-4">
        {/* image */}
        <div className="md:col-span-4 p-4 md:mt-16">
          <img
            src={recipe.strMealThumb}
            alt="recipe img"
            className=" md:sticky md:right-0 md:top-0 md:w-full md:h-full md:object-cover"
          />
        </div>
        {/* content */}
        <div className="md:col-span-5 p-4">
          <h2 className="mt-10 font-semibold text-xl sm:text-3xl md:text-5xl text-green-800 md:tracking-wide">
            {recipe.strMeal}
          </h2>
          <p className="mt-2 md:mx-1 text-gray-400 font-semibold tracking-wider md:text-lg">
            {recipe.strCategory}
          </p>
          <div className="flex flex-col justify-between gap-6 md:p-2 rounded-lg mt-6">
            <div className="md:flex md:justify-between md:gap-4 md:flex-wrap">
              <div>
                <h2 className="font-semibold md:my-2">Ingredients</h2>
                <ul>
                  {ingredients.map((ingredient, index) => (
                    <li
                      className="md:list-disc md:ml-5"
                      key={index}
                    >{`${ingredient.measure}  ${ingredient.ingredient}`}</li>
                  ))}
                </ul>
              </div>
              <div className="my-4 md:my-8">
                <ReactPlayer
                  url={recipe.strYoutube}
                  controls={true}
                  playing={false}
                  volume={0}
                  className=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div>
              <h2 className="md:my-2 font-semibold">Method</h2>
              <p>{recipe.strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipesDetail;
