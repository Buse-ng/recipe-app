import React from "react";
import Cards from "../components/Collection/Cards";
import CreateRecipe from "../components/Collection/CreateRecipe";

const Collection = () => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-end p-4 sm:ml-64">
        <CreateRecipe />
      </div> 
      <Cards />
    </div>
  );
};

export default Collection;