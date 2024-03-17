import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import CollectionProvider from "./context/CollectionContext";
import { RecipesProvider } from "./context/RecipesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <RecipesProvider>
        <CollectionProvider>
          <App />
        </CollectionProvider>
      </RecipesProvider>
    </Router>
  </React.StrictMode>
);
