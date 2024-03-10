import React from "react";
import Cards from "../components/Collection/Cards";
import CreateRecipe from "../components/Collection/CreateRecipe";

const Collection = () => {
  return (
    <div className="p-4">
      <div className="mb-6 flex items-center justify-start p-4">
        <CreateRecipe />
      </div> 
      <Cards />
    </div>
  );
};

export default Collection;
