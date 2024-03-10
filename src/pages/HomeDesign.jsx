import { Link } from "react-router-dom";
import { GiHotMeal } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import a from "../assets/a.jpg";

const HomeDesign = () => {
  return (
    <div
      className="flex items-center justify-start w-full 
      h-screen bg-cover bg-no-repeat bg-center bg-[url('assets/a.jpg')]"
    >
      {/* lg:max-w-lg xl:max-w-xl */}
      <div className="text-gray-600 text-start p-2 text-xs md:text-xl m-6 overflow-ellipsis overflow-hidden">
        <h2 className="text-base lg:text-5xl font-bold mb-6">
          Master the Art of Cooking:
          <span className="block lg:text-3xl my-2">
            Discover, Create, and Savor!
          </span>
        </h2>
        <div className="hidden md:flex flex-col text-gray-400 text-sm">
          Push the boundaries of flavor! Explore unique recipes with Recipe App
          in the kitchen.
          <span>
            Hundreds of options, easy usage, and unlimited culinary experiences
            await you.
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:mt-16">
          <div className="font-semibold flex gap-4 md:gap-16">
            <div className="mb-4 flex flex-col tracking-wide ">
              <div className="flex gap-2 items-center">
                <span className="md:text-3xl text-[#D60324]">
                  <GiHotMeal />
                </span>
                300+
              </div>
              <p>Recipes</p>
            </div>

            <div className="mb-4 flex flex-col tracking-wide ">
              <div className="flex gap-2 items-center">
                <span className="md:text-3xl text-[#D60324]">
                  <FaMapLocationDot />
                </span>
                28
              </div>
              <p>Countries</p>
            </div>
          </div>
          <div
            className="bg-[#D60324] hover:bg-[#DC0213] md:text-base 
            p-2 rounded-xl font-semibold md:w-36 cursor-pointer animate-pulse"
          >
            <Link to="/recipes">
              <p className="flex items-center justify-center md:gap-4 text-gray-100">
                See More
                <span>
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
