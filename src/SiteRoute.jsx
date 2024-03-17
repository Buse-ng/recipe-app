import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "./pages/Collection";
import CollectionDetail from "./pages/CollectionDetail";
import Favorites from "./pages/Favorites";
import Recipes from "./pages/Recipes";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import HomeDesign from "./pages/HomeDesign";
import RecipesDetail from "./pages/RecipesDetail";

const SiteRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeDesign />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/collection/:id" element={<CollectionDetail />} />
        <Route path="/recipes/:id" element={<RecipesDetail />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default SiteRoute;
