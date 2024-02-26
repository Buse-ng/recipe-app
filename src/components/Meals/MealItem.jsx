import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MealItem = () => {
  const [harf, setHarf] = useState(null);
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const responseData = response.data;
        setHarf(responseData.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="my-8 font-bold text-xl">~Categories~</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm md:max-w-none mx-auto md:mx-0">
        {harf &&
          harf.map((item) => (
            <div
              key={item.idMeal}
              className="flex items-center justify-center mt-16"
            >
              <div className="bg-gray-300 w-52 h-64 rounded-t-3xl rounded-b-lg ">
                <div className="relative flex items-center justify-center">
                  <img
                    className="absolute -top-10 bg-white rounded-full w-36 h-36"
                    src={item.strMealThumb}
                    alt="recipeImg"
                  />
                </div>
                <div className="p-5 mt-28 overflow-y-visible">
                  <div className="flex flex-col items-center justify-center mb-3 ">
                    <Link to={``}>
                      <h2 className="font-bold tracking-tight text-gray-900">
                        {item.strMeal}
                      </h2>
                    </Link>
                    <p className="text-gray-400">{item.strCategory}</p>
                  </div>
                  <div className="bg-white w-40 py-0.5" />
                  <div className="flex items-center justify-between mt-2">
                    <p>10 mins</p>
                    <Link
                      to={``}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Detail
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MealItem;
