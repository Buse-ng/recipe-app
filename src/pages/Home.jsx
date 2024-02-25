import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  // Lookup a single random meal
  // www.themealdb.com/api/json/v1/1/random.php

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
  const clipPathStyle = {
    clipPath:"polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
  };
  return (
    <div className="bg-gray-100">
      <div>
        {randomMeal == null ? (
          <p>Not found</p>
        ) : (
          <div className="flex justify-between mx-auto">
            <h2 
                className="text-5xl"
            >
                {randomMeal.strMeal}
            </h2>

            <img
             style={clipPathStyle}
              src={randomMeal.strMealThumb}
              alt="randomImg"
              className="w-80 h-80"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
