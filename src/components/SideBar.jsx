import React, { useState } from "react";
import { MdClose, MdFavorite } from "react-icons/md";
import { HiSquaresPlus } from "react-icons/hi2";
import { LuClipboardList, LuMenu } from "react-icons/lu";
import CollectionContent from "./CollectionContent";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm 
          text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 
          focus:outline-none focus:ring-2 
          focus:ring-gray-200"
          onClick={menuHandle}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close" : "Open"} sidebar
          </span>
          <div className="w-6 h-6">
            <LuMenu className="w-6 h-6 text-gray-500 " />
          </div>
        </button>

        <aside
          id="default-sidebar"
          aria-label="Sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform   
          ${isMenuOpen ? "" : "-translate-x-full"} sm:translate-x-0`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200">
            <div className="flex flex-col items-center justify-center">
              <button onClick={menuHandle} className="md:hidden">
                <MdClose />
              </button>
              <h2 className="logoname font-semibold text-gray-800 text-3xl italic md:mt-4">Chefie</h2>
              <div className="relative inline-flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-400 rounded-full md:mt-12 md:mb-4">
                <span className="font-medium text-gray-200">
                  JD
                </span>
              </div>
              <h2 className="font-medium md:mb-16 md:text-lg">
                John Doe
              </h2>
            </div>

            <ul className="space-y-2 font-medium">
              {/* recipes */}
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300 group"
                >
                  <span
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-600"
                    aria-hidden="true"
                  >
                    <LuClipboardList className="w-6 h-6" />
                  </span>
                  <span className="ms-3">Recipes</span>
                </a>
              </li>
              {/* collection */}
              <li>
                <a
                  href="#"
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
                </a>
              </li>
              {/* favorites */}
              <li>
                <a
                  href="#"
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
                    3
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64" onClick={handleClose}>
         
          <CollectionContent />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
