import React, { useContext } from "react";
import { IoAddOutline } from "react-icons/io5";
import { BiSolidImageAdd } from "react-icons/bi";
import { CollectionContext } from "../../context/CollectionContext";

const ModalBody = () => {
  const { id, setId, values, setValues, recipes, setRecipes } =
    useContext(CollectionContext);

  const onChangeInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log("values ", values);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      values?.title === "" ||
      (!values?.title?.trim() && values?.time === "") ||
      (!values?.time?.trim() && values?.ingredients === "") ||
      !values?.ingredients?.trim()
    ) {
      return false;
    }
    setRecipes([...recipes, values]);
    setId(id + 1);
    console.log("values:", values);
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
        <div className="grid gap-4 mb-4 grid-cols-4">
          {/* input file(img)  */}
          <div className="col-span-4 sm:col-span-2 sm:row-span-2">
            <div className="flex items-center justify-center w-full h-full">
              <label
                htmlFor="img-file"
                className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
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
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Recipe Title
            </label>
            <input
              type="text"
              name="title"
              value={values.title}
              id="title"
              onChange={onChangeInput}
              className="bg-gray-300 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
              placeholder="Type recipe name"
              required=""
            />
          </div>

          {/* cook */}
          <div className="col-span-4 sm:col-span-1">
            <label
              htmlFor="cook"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Time
            </label>
            <input
              value={values.time}
              onChange={onChangeInput}
              name="time"
              id="cook"
              className="bg-gray-300 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
              placeholder="Cook or additional time"
              required=""
            />
          </div>

          {/* category */}
          <div className="col-span-4 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Category
            </label>

            <select
              id="category"
              onChange={handleCategory}
              value={values.category}
              className="bg-gray-300 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-500 focus:border-primary-500"
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
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Servings
            </label>

            <select
              id="servings"
              onChange={handleServings}
              value={values.servings}
              className="bg-gray-300 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="" disabled>
                Select Serving
              </option>
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="10-12">10-12</option>
            </select>
          </div>
          {/* Ingredients */}
          <div className="col-span-4 sm:col-span-2">
            <label
              htmlFor="ingredients"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Ingredients
            </label>
            <textarea
              id="ingredients"
              onChange={onChangeInput}
              value={values.ingredients}
              name="ingredients"
              rows={8}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-200 placeholder-gray-500"
              placeholder="Write ingredients here"
              // defaultValue={""}
            />
          </div>
          {/* Method */}
          <div className="col-span-4 sm:col-span-2">
            <label
              htmlFor="method"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Method
            </label>
            <textarea
              id="method"
              name="method"
              value={values.method}
              onChange={onChangeInput}
              rows={8}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-200 placeholder-gray-500"
              placeholder="Write recipe method here"
              // defaultValue={""}
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
      </form>
    </>
  );
};

export default ModalBody;