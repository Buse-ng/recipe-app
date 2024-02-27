import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [area, setArea] = useState(null);
  const [randomMeal, setRandomMeal] = useState(null);
  const [categories, setCategories] = useState(null);

  const URL = "https://www.themealdb.com/api/json/v1/1";
  const areaUrl = `${URL}/list.php?a=list`;
  const randomMealUrl = `${URL}/random.php`;
  const categoriesUrl = `${URL}/categories.php`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch random meal
        const randomMealResponse = await axios.get(randomMealUrl);
        setRandomMeal(randomMealResponse.data.meals[0]);

        // Fetch categories
        const categoriesResponse = await axios.get(categoriesUrl);
        setCategories(categoriesResponse.data.categories);

        //Fetch area
        const areaResponse = await axios.get(areaUrl);
        setArea(areaResponse.data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 mx-3">
      <div>
        {randomMeal == null ? (<p>Not found</p>) : ( 
        <div>
          <hr />
          <div className="grid grid-cols-7 gap-2">
            {categories && categories.map((item) => (
              <div
                key={item.idCategory}
                className="flex flex-col items-center"
              >
                <img
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div className="rounded-full">
                  {item.strCategory}
                </div>
              </div>
            ))}
          </div>
          <hr />

          <div className="grid grid-cols-3 mx-auto">
            <div className="relative col-span-1">
              <div
                className="absolute bg-opacity-50 bg-orange-100 
                bottom-0 m-3 p-2 w-64 h-32 overflow-y-hidden"
              >
                <h2 className="text-lg font-semibold mb-2">
                  {randomMeal.strMeal}
                </h2>
                <p>{randomMeal.strCategory}</p>
                <p>{randomMeal.strArea}</p>
              </div>
              <div className="m-3">
                <img
                  src={randomMeal.strMealThumb}
                  alt="randomImg"
                  className="w-96 h-72 rounded-md"
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-wrap text-center">
              {area && area.map((item, index) => (
                <div className="w-28 h-16" key={index}>
                  <div 
                    className="bg-orange-300 m-1 my-3 p-2 rounded-md
                    hover:bg-orange-400 cursor-pointer"
                  >
                    {item.strArea}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default Home;