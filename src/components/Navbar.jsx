import React from "react";
import logo from "../assets/recipeLogo.png";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
const Navbar = () => {
  return (
    <>
      <nav className="border-gray-200 bg-gray-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="w-20 h-20"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-400">
              Recipe
            </span>
          </Link>
          <>
            <SideBar />
          </>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
