import React, { useEffect, useState } from "react";
import { IoAddCircleOutline, IoClose } from "react-icons/io5";
import ModalBody from "./ModalBody";

const CreateRecipe = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const handleCreateBtn = () => {
    setIsBtnClicked(!isBtnClicked);
    console.log("tiklandi", isBtnClicked);
  };
  const closeModal = () => {
    setIsBtnClicked(false);
  };

  return (
    <div>
      {/* create new recipe button */}
      <div
        className={`flex items-center gap-x-2 p-2 bg-green-500 rounded-md 
        font-semibold text-gray-900 hover:bg-green-600 text-center
        focus:ring-4 focus:outline-none focus:ring-green-300 cursor-pointer`}
        onClick={handleCreateBtn}
      >
        <span className="text-2xl">
          <IoAddCircleOutline />
        </span>
        Create new recipe
      </div>

      {/* MODAL  */}
      <div>
        {/* Main modal */}
        <div
          id="crud-modal"
          tabIndex={-1}
          aria-hidden="true"
          className={`${
            isBtnClicked
              ? "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              : "hidden"
          }`}
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-gray-200 rounded-lg shadow">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-300">
                <h3 className="text-lg font-semibold text-gray-900">
                  Create New Recipe
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center
                   hover:bg-gray-300 hover:text-white"
                  data-modal-toggle="crud-modal"
                  onClick={closeModal}
                >
                  <span className="w-5 h-5" aria-hidden="true">
                    <IoClose className="w-5 h-5 text-center" />
                  </span>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <ModalBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default CreateRecipe;
