import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import CollectionProvider from "./context/CollectionContext";
import { MealsProvider } from "./context/MealsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MealsProvider>
        <CollectionProvider>
          <App />
        </CollectionProvider>
      </MealsProvider>
    </Router>
  </React.StrictMode>
);
