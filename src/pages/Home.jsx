import axios from "axios";
import { useEffect, useState } from "react";
import SearchMeal from "../components/SearchMeal";

const Home = () => {
  const [randomMeal, setRandomMeal] = useState(null);
  const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        const response = await axios.get(randomMealUrl);
        const data = response.data;
        setRandomMeal(data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRandomMeal();
  }, []);
  // https://www.themealdb.com/api/json/v1/1/categories.php

  return (
    <div className="bg-gray-100">
      <div>
        {randomMeal == null ? (
          <p>Not found</p>
        ) : (
          <div>
            <hr />
            <div className="flex">
              <div className="rounded-full p-4 bg-red-300">category1</div>
              <div className="rounded-full p-4 bg-red-300">category1</div>
              <div className="rounded-full p-4 bg-red-300">category1</div>
              <div className="rounded-full p-4 bg-red-300">category1</div>
              <div className="rounded-full p-4 bg-red-300">category1</div>
              <div className="rounded-full p-4 bg-red-300">category1</div>
              <div className="rounded-full p-4 bg-red-300">category1</div>
            </div>
            <hr />
            <div className="grid grid-cols-2">
              <div className="relative col-span-1">
                <h2 className="absolute bg-yellow-300 text-xl font-semibold bottom-0">
                  {randomMeal.strMeal}
                </h2>

                <img
                  src={randomMeal.strMealThumb}
                  alt="randomImg"
                  className="w-64 h-64"
                />
              </div>
              <div className="col-span-1">
                <div className="bg-red-300 p-4 m-3">description</div>
                <div className="bg-red-300 p-4 m-3">description</div>
                <div className="bg-red-300 p-4 m-3">description</div>
              </div>
            </div>

            <div>
              <div className="w-full absolute">
                <SearchMeal />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
