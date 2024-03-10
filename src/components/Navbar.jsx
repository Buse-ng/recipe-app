import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import NavItems from "./NavItems";
import "./module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="border-gray-200 bg-[#F5F0F6] overflow-x-clip">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link
            to="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <img src={logo} className="w-8 h-8 md:w-16 md:h-16" alt="Logo" />
            <span className="logoname mt-4 self-center text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap text-[#D60324]">
              Recipe
            </span>
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex items-center p-1 sm:p-2 mt-2 rounded-lg
          text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={menuHandle}
          >
            <div className="w-6 h-6">
              <LuMenu className="w-6 h-6 text-gray-500" />
            </div>
          </button>
          <div
            className={`${isMenuOpen
              ? "block fixed top-0 right-0 z-40 max-w-full h-full transition-transform sm:translate-x-0 md:h-auto md:static md:w-auto"
              : "hidden md:block"}`}
          >
            <>
              <NavItems menuHandle = {menuHandle} />
            </>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
