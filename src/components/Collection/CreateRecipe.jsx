import React, { useEffect, useState } from "react";
import { IoAddCircleOutline, IoClose } from "react-icons/io5";
import ModalBody from "./ModalBody";

const CreateRecipe = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
 
  const handleCreateBtn = () => {
    setIsOpenModal(!isOpenModal);
    console.log("tiklandi", isOpenModal);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      {/* create new recipe button */}
      <div
        className={`flex items-center gap-x-2 p-2 bg-green-500 rounded-md 
        font-semibold text-gray-900 hover:bg-green-600 text-center cursor-pointer`}
        onClick={handleCreateBtn}
      >
        <span className="text-xl md:text-2xl">
          <IoAddCircleOutline />
        </span>
        Create
      </div>

      {/* MODAL  */}
      <div>
        {/* Main modal */}
        <div
          id="crud-modal"
          tabIndex={-1}
          aria-hidden="true"
          className={`
          ${isOpenModal
              ? `overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full
              flex justify-center items-center  md:inset-0 h-[calc(100%-1rem)] max-h-full`
              : "hidden"
          }`}
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-gray-200 rounded-lg shadow">
              {/* Modal header */}
              <div 
                className="flex items-center justify-between p-4 md:p-5 
                border-b rounded-t border-gray-300"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Create New Recipe
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent rounded-lg text-sm 
                  w-8 h-8 ms-auto inline-flex justify-center items-center
                  hover:bg-gray-300 hover:text-white"
                  onClick={closeModal}
                >
                  <span className="w-5 h-5" aria-hidden="true">
                    <IoClose className="w-5 h-5 text-center" />
                  </span>
                </button>
              </div>
              {/* Modal Body */}
              <>
                <ModalBody />
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default CreateRecipe;
