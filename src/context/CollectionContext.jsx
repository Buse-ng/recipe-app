import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CollectionContext = createContext();

const CollectionProvider = ({ children }) => {
  const initialValues = {
    id: uuidv4(),
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
