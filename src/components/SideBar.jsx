import React, { useContext, useState } from "react";
import { MdClose, MdFavorite } from "react-icons/md";
import { HiHome, HiSquaresPlus } from "react-icons/hi2";
import { LuClipboardList, LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import "./module.css";
import { MealsContext } from "../context/MealsContext";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { favorites } = useContext(MealsContext);

  return (
    <div>
      <div>
        <button
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm 
          text-gray-500 rounded-lg hover:bg-gray-200 
          focus:outline-none focus:ring-2 
          focus:ring-gray-200"
          onClick={menuHandle}
        >
          <div className="w-6 h-6">
            <LuMenu className="w-6 h-6 text-gray-500 " />
          </div>
        </button>
        {isMenuOpen && (
          <aside
            id="sidebar"
            className={`fixed top-0 right-0 z-40 w-64 h-screen transition-transform   
            ${isMenuOpen ? "" : "translate-x-full"} sm:translate-x-0`}
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200">
              <div
                onClick={menuHandle}
                className="flex justify-end text-2xl text-gray-500 mb-4 md:mb-0 cursor-pointer"
              >
                <MdClose />
              </div>
              <div className="flex flex-col items-center justify-center gap-y-4 md:gap-y-0">
                <h2 className="logoname font-semibold text-gray-800 text-3xl italic md:mt-4">
                  Chefie
                </h2>
                <div className="relative inline-flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-400 rounded-full md:mt-12 md:mb-4">
                  <span className="font-medium text-gray-200">JD</span>
                </div>
                <h2 className="font-medium md:mb-16 md:text-lg">John Doe</h2>
              </div>

              <ul className="space-y-2 font-medium">
                {/* home */}
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300 group"
                  >
                    <span
                      className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-600"
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
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300 group"
                  >
                    <span
                      className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-600"
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
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300 group"
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-600"
                      aria-hidden="true"
                    >
                      <HiSquaresPlus className="w-6 h-6" />
                    </span>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Collection
                    </span>
                  </Link>
                </li>
                {/* favorites */}
                <li>
                  <Link
                    to="/favorites"
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300 group"
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-600"
                      aria-hidden="true"
                    >
                      <MdFavorite className="w-6 h-6" />
                    </span>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Favorites
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-gray-100 bg-gray-600 rounded-full">
                      {favorites.length}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default SideBar;
