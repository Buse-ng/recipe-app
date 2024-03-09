import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { HiHome, HiSquaresPlus } from "react-icons/hi2";
import { LuClipboardList } from "react-icons/lu";
import { MdFavorite } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <nav className="border-gray-200 bg-[#F5F0F6]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link
            to="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <img src={logo} className="w-16 h-16" alt="Logo" />
            <span className="logoname mt-4 self-center text-2xl font-bold whitespace-nowrap text-[#D60324]">
              Recipe
            </span>
          </Link>

          <div>
            <ul className=" font-medium flex items-center justify-center">
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
                  </Link>
                </li>
            </ul>
          </div>
          {/* <>
            <SideBar />
          </> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
