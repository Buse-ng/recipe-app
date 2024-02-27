import axios from "axios";
import MealCards from "./MealCards";
import SearchMeal from "../SearchMeal";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const defaultMeal =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=starter";

  const [defaultItems, setDefaultItems] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(defaultMeal);
        setDefaultItems(response.data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <SearchMeal
        search={search}
        setSearch={setSearch}
        setSearchResult={setSearchResult}
      />
      <div>
        <MealCards 
          defaultItems={defaultItems} 
          searchResult={searchResult} 
        />
      </div>
    </div>
  );
};

export default Meals;
