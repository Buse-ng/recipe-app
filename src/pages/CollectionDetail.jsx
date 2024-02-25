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
  const { title, time, img, category, ingredients, method, servings } = recipe;

  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <h2 className="font-semibold text-xl">{title}</h2>
        <span className="">{category}</span>
        <img src={img} alt="" className="w-32 h-32" />
      </div>
      <div className="flex gap-4">
        <div className="border border-gray-400 rounded-lg p-2">Cook Time: {time}</div>
        <div className="border border-gray-400 rounded-lg p-2">Servings: {servings}</div>
      </div>

      <div className="flex justify-between gap-6 p-2 border-2 border-gray-800 rounded-lg">
        <div className="border-r-4 border-dotted border-gray-700 p-2">
          <h2 className="font-semibold pb-2">Ingredients:</h2>
          <p>{ingredients}</p>
        </div>
        <div className="p-2">
          <h2 className="font-semibold pb-2">Method:</h2>
          <p>{method}</p>
        </div>
      </div>
    </div>
  );
};
export default CollectionDetail;
