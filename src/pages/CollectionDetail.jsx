import React, { useContext } from "react";
import { CollectionContext } from "../context/CollectionContext";
import { useParams } from "react-router-dom";

const CollectionDetail = () => {
  let { id } = useParams();
  const { recipes } = useContext(CollectionContext);

  const recipe = recipes.find((item) => {
    return item.id === id - 1;
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
    <div className="grid grid-cols-9 p-4">
      <div className="col-span-5 p-4">
        <h2 className="mt-10 font-semibold text-6xl text-green-800 tracking-wide">
          {title}
        </h2>
        <p className="mt-2 mx-1 text-gray-400 font-semibold tracking-wider text-lg">
          {category}
        </p>
        <div className="flex justify-between mt-10 mx-2 font-semibold text-gray-800 text-center">
          {prep_time && (
            <div className="flex flex-col tracking-wide">
              Prep Time
              <p>{prep_time}</p>
              <span className="text-xs text-gray-500">mins</span>
            </div>
          )}
          {cook_time && (
            <div className="flex flex-col tracking-wide">
              Cook Time
              <p>{cook_time}</p>
              <span className="text-xs text-gray-500">mins</span>
            </div>
          )}
          {total_time && (
            <div className="flex flex-col tracking-wide">
              Total Time
              <p>{total_time}</p>
              <span className="text-xs text-gray-500">mins</span>
            </div>
          )}
          <div className="flex flex-col">
            Servings
            <p>{servings}</p>
            <span className="text-xs text-gray-500">person</span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 p-2 rounded-lg mt-6">
          <div className="">
            <h2 className="font-semibold ">Ingredients</h2>
            <p>{ingredients}</p>
          </div>
          <div className="">
            <h2 className="font-semibold">Method</h2>
            <p>{method}</p>
          </div>
        </div>
      </div>

      <div className="col-span-4 p-4 mt-16">
        {img && (
          <img
            src={img}
            alt=""
            className="sticky right-0 top-0 w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};
export default CollectionDetail;
