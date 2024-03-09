import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 shadow w-full">
        <hr />
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 overflow-hidden">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/home"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                className="h-16"
                alt="Logo"
              />
              <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-[#D60324]">
                Recipe
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2024
            <Link to="/" className="hover:underline ml-1">
              Recipe™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
