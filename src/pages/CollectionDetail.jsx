import React, { useContext } from "react";
import { CollectionContext } from "../context/CollectionContext";
import { useParams } from "react-router-dom";

const CollectionDetail = () => {
  let { id } = useParams();
  const { recipes } = useContext(CollectionContext);

  const recipe = recipes.find((item) => {
    return item.id === id;
  });

  if (!recipe) {
    return <section>Loading...</section>;
  }
  const {
    title,
    prep_time,
    cook_time,
    total_time,
    img,
    category,
    ingredients,
    method,
    servings,
  } = recipe;

  return (
    <div className="md:grid md:grid-cols-9 sm:p-4">
      {/* image */}
      <div className="md:col-span-4 p-4 md:mt-16">
        {img && (
          <img
            src={img}
            alt=""
            className=" md:sticky md:right-0 md:top-0 md:w-full md:h-full md:object-cover"
          />
        )}
      </div>
      {/* content */}
      <div className="md:col-span-5 p-4">
        <h2 className="mt-10 font-semibold text-xl sm:text-3xl md:text-6xl text-green-800 md:tracking-wide">
          {title}
        </h2>
        <p className="mt-2 md:mx-1 text-gray-400 font-semibold tracking-wider md:text-lg">
          {category}
        </p>

        <div className="flex flex-col md:flex-row justify-between text-sm sm:text-base mt-10 md:mx-2 font-semibold text-gray-800 text-center md:tracking-wide w-fit sm:w-auto">
          {prep_time && (
            <div className="flex items-center md:flex-col gap-2 md:gap-0">
              Prep Time
              <p className="flex items-center justify-end">{prep_time}</p>
              <span className="text-xs text-gray-500">mins</span>
            </div>
          )}
          {cook_time && (
            <div className="flex items-center md:flex-col gap-2 md:gap-0">
              Cook Time
              <p>{cook_time}</p>
              <span className="text-xs text-gray-500">mins</span>
            </div>
          )}
          {total_time && (
            <div className="flex items-center md:flex-col gap-2 md:gap-0">
              Total Time
              <p>{total_time}</p>
              <span className="text-xs text-gray-500">mins</span>
            </div>
          )}
          <div className="flex items-center md:flex-col gap-2 md:gap-0">
            Servings
            <p>{servings}</p>
            <span className="text-xs text-gray-500">person</span>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 md:p-2 rounded-lg mt-6">
          <div className="">
            <h2 className="font-semibold md:my-2">Ingredients</h2>
            {ingredients && ingredients.split('\n').map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
          </div>
          <div>
            <h2 className="md:my-2 font-semibold">Method</h2>
            <p>{method}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CollectionDetail;
