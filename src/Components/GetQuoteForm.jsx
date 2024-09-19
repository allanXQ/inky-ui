// GetQuoteForm.js
import React, { useState } from "react";
import { TextField } from "./InputFields";

const GetQuoteForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    attendees: "",
    duration: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.company) newErrors.company = "Company is required.";
    if (!formData.attendees)
      newErrors.attendees = "Number of attendees is required.";
    if (!formData.duration)
      newErrors.duration = "Presentation duration is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error on input change
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-5">
        <TextField
          label="Name"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          label="Mobile"
          id="mobile"
          name="mobile"
          required
          value={formData.mobile}
          onChange={handleChange}
          error={errors.mobile}
        />
        <TextField
          label="Email"
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label="Company"
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
        />
        <TextField
          label="No of Attendees"
          id="attendees"
          name="attendees"
          type="number"
          required
          value={formData.attendees}
          onChange={handleChange}
          error={errors.attendees}
        />
        <TextField
          label="Presentation Duration"
          id="duration"
          name="duration"
          required
          value={formData.duration}
          onChange={handleChange}
          error={errors.duration}
        />
      </div>

      <div className="flex items-center justify-center space-x-2 w-[100%]">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#F6C228] text-black px-4 py-2 rounded hover:bg-yellow-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default GetQuoteForm;
