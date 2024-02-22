import React from "react";
import CreateRecipe from "./CreateRecipe";
import Cards from "./Cards";

const CollectionContent = () => {

  return (
    <div>
      <div className="mb-6 flex items-center justify-end p-4 sm:ml-64">
        <CreateRecipe />
      </div> 
      <Cards />
    </div>
  );
};
export default CollectionContent;
