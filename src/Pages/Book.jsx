import React, { useState } from "react";

const TextField = ({ label, id, width }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} className="w-full" />
    </div>
  );
};

const Book = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear errors
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentErrors = {};
    // Simple validation: checks if the field is empty
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        currentErrors[field] = "This field is required";
      }
    });
    setErrors(currentErrors);
    if (Object.keys(currentErrors).length === 0) {
      console.log("Form data:", formData);
      // Submit form logic here
    }
  };
  return (
    <main id="book" className="w-screen ">
      <div id="book-hero">
        <img src="./bookhero.webp" />
      </div>

      <div className="flex flex-col justify-center items-center gap-10 pt-10">
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label
                  htmlFor={key}
                  className="block text-sm font-medium text-gray-700 capitalize"
                >
                  {key.replace(/([A-Z])/g, " $1")} *
                </label>
                <input
                  type="text"
                  name={key}
                  id={key}
                  value={value}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors[key] ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder={`Enter ${key}`}
                />
                {errors[key] && (
                  <p className="mt-2 text-sm text-red-600">{errors[key]}</p>
                )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Book;
