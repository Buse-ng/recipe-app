import React, { useContext } from "react";
import { IoAddOutline } from "react-icons/io5";
import { BiSolidImageAdd } from "react-icons/bi";
import { CollectionContext } from "../../context/CollectionContext";
import showToast from "./ToastMessage";

const ModalBody = () => {
  const { 
    values, setValues, 
    recipes, setRecipes 
  } = useContext(CollectionContext);

  const onChangeInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log("values ", values); 
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["title", "total_time", "ingredients"];
    
    for (const field of requiredFields) {
      if(!values[field]?.trim()){
        showToast(`"${field}" field cannot be left blank.`, "warning");
        return false;
      }
    }
    setRecipes([...recipes, values]);
    console.log("values:", values);
    showToast("New recipe added successfully", "success");
  };

  const handleCategory = (e) => {
    setValues((item) => ({
      ...item,
      category: e.target.value,
    }));
  };
  const handleServings = (e) => {
    setValues((item) => ({
      ...item,
      servings: e.target.value,
    }));
  };

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setValues({ ...values, img: imageUrl });
      };

      reader.readAsDataURL(file);
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  return (
    <>
      <form className="p-4 md:p-5" id="form" onSubmit={onSubmit}>
        <div className="grid gap-4 mb-4 grid-cols-4 placeholder-gray-500 text-gray-900">
          {/* input file(img)  */}
          <div className="col-span-4 sm:col-span-1 sm:row-span-2">
            <div className="flex items-center justify-center text-center w-full h-full">
              <label
                htmlFor="img-file"
                className="flex flex-col items-center justify-center w-full h-full 
                border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
                bg-gray-50 hover:bg-gray-100"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <span className="w-8 h-8 mb-4 text-gray-500">
                    <BiSolidImageAdd className="w-8 h-8" />
                  </span>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload </span>
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="img-file"
                  name="img-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                />
              </label>
            </div>
          </div>
          {/* title */}
          <div className="col-span-4 sm:col-span-1">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium"
            >
              Recipe Title*
            </label>
            <input
              type="text"
              name="title"
              value={values.title}
              id="title"
              onChange={onChangeInput}
              className="bg-gray-300 border border-gray-200 
              text-sm rounded-lg block w-full p-2.5"
              placeholder="Type recipe name"
              required=""
            />
          </div>
          {/* category */}
          <div className="col-span-4 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium"
            >
              Category
            </label>
            <select
              id="category"
              onChange={handleCategory}
              value={values.category}
              className="bg-gray-300 border border-gray-200 
              text-sm rounded-lg block w-full p-2.5 
              focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Lunch">Lunchs</option>
              <option value="Dinner">Dinners</option>
              <option value="Salad">Salads</option>
              <option value="Desert">Deserts</option>
              <option value="Drink">Drinks</option>
            </select>
          </div>
          {/* Servings */}
          <div className="col-span-4 sm:col-span-1">
            <label
              htmlFor="servings"
              className="block mb-2 text-sm font-medium"
            >
              Servings
            </label>
            <select
              id="servings"
              onChange={handleServings}
              value={values.servings}
              className="bg-gray-300 border border-gray-200 
              text-sm rounded-lg block w-full p-2.5 
              focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="" disabled>
                Select Serving
              </option>
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="10-12">10-12</option>
            </select>
          </div>
          {/* prep time */}
          <div className="col-span-4 sm:col-span-1">
            <label
              htmlFor="prep_time"
              className="block mb-2 text-sm font-medium"
            >
              Prep Time
            </label>
            <input
              value={values.prep_time}
              onChange={onChangeInput}
              name="prep_time"
              id="prep_time"
              className="bg-gray-300 border border-gray-200 
              text-sm rounded-lg block w-full p-2.5"
              placeholder="Prep time"
              required=""
            />
          </div>
          {/* cook time */}
          <div className="col-span-4 sm:col-span-1">
            <label
              htmlFor="cook_time"
              className="block mb-2 text-sm font-medium"
            >
              Cook Time
            </label>
            <input
              value={values.cook_time}
              onChange={onChangeInput}
              name="cook_time"
              id="cook_time"
              className="bg-gray-300 border border-gray-200 
              text-sm rounded-lg block w-full p-2.5"
              placeholder="Cook time"
              required=""
            />
          </div>
          {/* total time */}
          <div className="col-span-4 sm:col-span-1">
            <label
              htmlFor="total_time"
              className="block mb-2 text-sm font-medium"
            >
              Total Time*
            </label>
            <input
              value={values.total_time}
              onChange={onChangeInput}
              name="total_time"
              id="total_time"
              className="bg-gray-300 border border-gray-200 
              text-sm rounded-lg block w-full p-2.5"
              placeholder="Total time"
              required=""
            />
          </div>
          {/* Ingredients */}
          <div className="col-span-4 sm:col-span-2">
            <label
              htmlFor="ingredients"
              className="block mb-2 text-sm font-medium"
            >
              Ingredients*
            </label>
            <textarea
              id="ingredients"
              onChange={onChangeInput}
              value={values.ingredients}
              name="ingredients"
              rows={8}
              className="block p-2.5 w-full text-sm bg-gray-300 
              rounded-lg border border-gray-200"
              placeholder="Write ingredients here"
            />
          </div>
          {/* Method */}
          <div className="col-span-4 sm:col-span-2">
            <label
              htmlFor="method"
              className="block mb-2 text-sm font-medium"
            >
              Method
            </label>
            <textarea
              id="method"
              name="method"
              value={values.method}
              onChange={onChangeInput}
              rows={8}
              className="block p-2.5 w-full text-sm bg-gray-300 
              rounded-lg border border-gray-200"
              placeholder="Write recipe method here"
            />
          </div>
        </div>
        {/* add new recipe */}
        <button
          type="submit"
          className="text-white inline-flex items-center bg-green-600 hover:bg-green-700 
          focus:ring-2 focus:outline-none font-medium rounded-lg text-sm 
          px-5 py-2.5 text-center focus:ring-green-300"
        >
          <IoAddOutline className="me-1 -ms-1 w-5 h-5" />
          Add new recipe
        </button>
        <span className="flex items-center justify-end text-xs">
          Fields marked with * cannot be left blank.
        </span>
      </form>
    </>
  );
};

export default ModalBody;
