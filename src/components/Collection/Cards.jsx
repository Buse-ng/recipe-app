import React, { useContext, useState } from "react";
import { CollectionContext } from "../../context/CollectionContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import showToast from "./ToastMessage";

const Cards = () => {
  const { id, recipes, setRecipes } = useContext(CollectionContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const deleteRecipe = (id) => {
    const newRecipes = recipes.filter((item) => {
      return item.id !== id;
    });
    setRecipes(newRecipes);
    setIsOpenModal(false);
    showToast(`Recipe deleted successfully` , 'success');
  };

  const openDeletModal = () => {setIsOpenModal(true);}
  const closeDeletModal = () => {setIsOpenModal(false);}
  
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
      xl:grid-cols-5 gap-8 max-w-sm md:max-w-none mx-auto"
    >
      {recipes.map((item) => (
        <div
          key={item.id}
          className="max-w-xs border rounded-lg 
          bg-gray-200 border-gray-100 my-auto"
        >
          <div className="relative">
            <Link to={`/recipes/${item.id}`}>
              <img
                className="rounded-t-lg object-cover w-full h-44"
                src={item.img}
                alt="image"
              />
            </Link>
          </div>

          <div className="p-3 text-gray-900">
            <Link to={`/recipes/${item.id}`}>
              <h5
                className="text-lg mb-2 md:text-2xl font-bold 
              tracking-tight truncate"
              >
                {item.title}
              </h5>
            </Link>

            <div className="flex justify-between">
              <p className="mb-3 text-gray-600">{item.category}</p>
              <p>{item.total_time} min</p>
            </div>

            <div
              className="flex justify-between items-center 
              text-sm md:text-base"
            >
              <Link
                to={`/recipes/${item.id}`}
                className="inline-flex items-center px-3 py-2 
                font-medium text-center text-white 
                rounded-lg bg-green-700 hover:bg-green-800"
              >
                View Recipe
              </Link>

              <button
                onClick={openDeletModal}
                className="flex items-center justify-center 
                rounded-lg bg-gray-300 p-2"
              >
                <FaTrashAlt className="text-gray-500 hover:text-red-600" />
              </button>
              {/*delete modal*/}
              {isOpenModal && (
              <div className={`${isOpenModal ? "flex" : "hidden"} 
                overflow-y-auto overflow-x-hidden fixed top-0 right-0 
                left-0 z-50 justify-center items-center w-full 
                md:inset-0 h-[calc(100%-1rem)] max-h-full`}
              >
                <div className="p-4 w-full max-w-md max-h-full">
                  <div
                    className="p-4 md:p-5 text-center rounded-lg 
                    shadow bg-gray-300 text-white text-sm"
                  >
                    <h3 className="mb-5 text-lg font-semibold text-gray-700">
                      Are you sure you want to delete this recipe?
                    </h3>
                    <button
                      className="bg-red-600 hover:bg-red-700 font-medium 
                      rounded-lg inline-flex items-center px-5 py-2.5"
                      onClick={() => deleteRecipe(item.id)}
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      className="py-2.5 px-5 ms-3 font-medium rounded-lg 
                      border bg-gray-700 border-gray-600 hover:bg-gray-800"
                      onClick={closeDeletModal}
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
