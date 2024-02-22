import {createContext} from 'react';

export const RecipesContext = createContext(); 

export const RecipesProvider = ({ children }) =>{
    return(
        <RecipesContext.Provider value={{}}>
            {children}
        </RecipesContext.Provider>
    )
}