import { createContext, useState, useEffect } from "react";

export const CollectionContext = createContext();

const CollectionProvider = ({ children }) => {
  const [id, setId] = useState(0);
  const initialValues = {
    id: id,
    title: "",
    img: "",
    prep_time: "",
    cook_time: "",
    total_time: "",
    category: "",
    servings: "",
    ingredients: "",
    method: "",
  };
  const [values, setValues] = useState(initialValues);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setValues(initialValues);
    console.log("recipes", recipes);
  }, [recipes]);

  return (
    <CollectionContext.Provider
      value={{
        id,
        setId,
        initialValues,
        values,
        setValues,
        recipes,
        setRecipes,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
export default CollectionProvider;
