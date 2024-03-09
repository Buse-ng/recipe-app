import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MealsContext } from "../context/MealsContext";
import { Link } from "react-router-dom";
import { GiHotMeal, GiMeal } from "react-icons/gi";
import { FaArrowRight, FaMapLocationDot } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";

const HomeDesign = () => {
  const [randomMeal, setRandomMeal] = useState(null);
  const { URL } = useContext(MealsContext);
  const randomMealUrl = `${URL}/random.php`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch random meal
        const randomMealResponse = await axios.get(randomMealUrl);
        setRandomMeal(randomMealResponse.data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="flex items-center justify-start w-full 
      h-screen bg-cover bg-no-repeat bg-center bg-[url('assets/a.jpg')]"
    >
      <div className="text-gray-600 text-start p-2 text-xl m-6">
        <h2 className="text-5xl font-bold mb-6">
          Master the Art of Cooking:
          <span className="block text-3xl my-2">
            Discover, Create, and Savor!
          </span>
        </h2>
        <div className="flex flex-col text-gray-400 text-sm ">
          Push the boundaries of flavor! Explore unique recipes with Recipe App
          in the kitchen.
          <span>
            Hundreds of options, easy usage, and unlimited culinary experiences
            await you
          </span>
        </div>
        <div className="flex justify-between items-center mt-16">
          <div className="font-semibold flex gap-16">
            <div className="mb-4 flex flex-col tracking-wide ">
              <div className="flex gap-2 items-center">
                <span className="text-3xl text-[#D60324]">
                  <GiHotMeal />
                </span>
                300+
              </div>
              <p>Recipes</p>
            </div>

            <div className="mb-4 flex flex-col tracking-wide ">
              <div className="flex gap-2 items-center">
                <span className="text-3xl text-[#D60324]">
                  <FaMapLocationDot />
                </span>
                28
              </div>
              <p>Countries</p>
            </div>
          </div>
          <div
            className="bg-[#D60324] hover:bg-[#DC0213] text-base 
          p-2 rounded-xl font-semibold w-36 cursor-pointer animate-pulse"
          >
            <Link to="/recipes" className="">
              <p className="flex items-center justify-center gap-4  text-gray-100">
                See More
                <span className="">
                  <MdArrowForwardIos />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDesign;