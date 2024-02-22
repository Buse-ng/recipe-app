import React, { useContext } from "react";
import { CollectionContext } from "../../context/CollectionContext";
import killua from "../../assets/killua.jpg";
import { Link } from "react-router-dom";

const Cards = () => {

  const {id, setId, values, setValues, recipes, setRecipes} = useContext(CollectionContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm md:max-w-none mx-auto md:mx-0">
      {recipes.map((item) => (
        <div className="max-w-xs border rounded-lg shadow bg-gray-200 border-gray-100" key={item.id}>
          <Link to={`/recipes/${id}`}>
            <img
              className="rounded-t-lg"
              src={killua}
              alt="image"
            />
          </Link>
          <div className="p-5">
            <Link to={`/recipes/${id}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">
              {item.category}
            </p>
            <div className="flex justify-between">
              <p>{item.time} min</p>
              <Link
                  to={`/recipes/${id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                  Detail
                  <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                  >
                  <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                  </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
