import React, { useContext } from "react";
import { MdClose, MdFavorite } from "react-icons/md";
import { HiHome, HiSquaresPlus } from "react-icons/hi2";
import { LuClipboardList } from "react-icons/lu";
import { MealsContext } from "../context/MealsContext";
import { Link } from "react-router-dom";

const NavItems = ({ menuHandle }) => {
  const { favorites } = useContext(MealsContext);

  return (
    <div className="h-full px-3 py-4 md:p-0 overflow-y-auto bg-gray-200 md:bg-transparent">
      <div
        onClick={menuHandle}
        className="md:hidden flex justify-end text-2xl text-gray-500 mb-4 md:mb-0 cursor-pointer"
      >
        <MdClose />
      </div>

      <ul className="space-y-2 md:space-y-0 text-gray-900 font-medium md:flex md:items-center md:justify-center">
        {/* home */}
        <li>
          <Link
            to="/"
            className="flex items-center p-2 rounded-lg hover:bg-gray-300 
            md:hover:bg-transparent md:hover:underline md:hover:text-[#D60324] group"
          >
            <span
              className="md:hidden w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-600"
              aria-hidden="true"
            >
              <HiHome className="w-6 h-6" />
            </span>
            <span className="ms-3">Home</span>
          </Link>
        </li>
        {/* recipes */}
        <li>
          <Link
            to="/recipes"
            className="flex items-center p-2 rounded-lg hover:bg-gray-300 
              md:hover:bg-transparent md:hover:underline md:hover:text-[#D60324] group"
          >
            <span
              className="md:hidden w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-600"
              aria-hidden="true"
            >
              <LuClipboardList className="w-6 h-6" />
            </span>
            <span className="ms-3">Recipes</span>
          </Link>
        </li>
        {/* collection */}
        <li>
          <Link
            to="/Collection"
            className="flex items-center p-2 rounded-lg hover:bg-gray-300 
              md:hover:bg-transparent md:hover:underline md:hover:text-[#D60324] group"
          >
            <span
              className="md:hidden flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-600"
              aria-hidden="true"
            >
              <HiSquaresPlus className="w-6 h-6" />
            </span>
            <span className="flex-1 ms-3 whitespace-nowrap">Collection</span>
          </Link>
        </li>
        {/* favorites */}
        <li>
          <Link
            to="/favorites"
            className="flex items-center p-2 rounded-lg hover:bg-gray-300 
              md:hover:bg-transparent md:hover:underline md:hover:text-[#D60324] group"
          >
            <span
              className="md:hidden flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-600"
              aria-hidden="true"
            >
              <MdFavorite className="w-6 h-6 " />
            </span>
            <span className="flex-1 ms-3 whitespace-nowrap">Favorites</span>
            <span
              className="md:hidden inline-flex items-center justify-center w-2 h-2 p-3 ms-3 
              text-sm font-medium text-gray-100 bg-gray-600 rounded-full"
            >
              {favorites.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
