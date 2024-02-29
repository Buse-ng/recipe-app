import axios from "axios";
import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { MealsContext } from "../context/MealsContext";

const SearchMeal = () => {
  const { 
    URL, setSearchResult,
    search, setSearch 
  } = useContext(MealsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${URL}/search.php?s=${search}`);
      setSearchResult(response.data.meals);
      setSearch("");
    } catch (error) {
      console.error(error);
      setSearchResult(null);
    }
  };

  return (
    <div>
      <form className="max-w-xl mx-auto text-sm" onSubmit={handleSubmit}>
        <label
          htmlFor="search-area"
          className="mb-2  font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div 
            className="absolute inset-y-0 start-0 flex items-center 
            text-gray-400 ps-3 pointer-events-none"
          >
            <FaSearch />
          </div> 
          <input
            type="search"
            id="search-area"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full p-4 ps-10 text-gray-900 
            border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Search..."
            required=""
          />
          <button
            type="submit"
            className="absolute end-2.5 bottom-2.5 bg-green-700 px-4 py-2
            hover:bg-green-800 font-medium rounded-lg text-white "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchMeal;
