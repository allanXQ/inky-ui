import React, { useState } from "react";

const inputs = [
  {
    title: "About You",
    fields: [
      { label: "First Name", id: "FirstName", type: "text" },
      { label: "Last Name", id: "LastName", type: "text" },
      { label: "Position", id: "Position", type: "text" },
      { label: "Email", id: "Email", type: "email" },
    ],
  },
  {
    title: "Company Information",
    fields: [
      { label: "Company Name", id: "CompanyName", type: "text" },
      { label: "Company Phone", id: "CompanyPhone", type: "tel" },
      { label: "Company Website", id: "CompanyWebsite", type: "text" },
      {
        label: "Organization Type",
        id: "OrganizationType",
        type: "select",
        options: [
          "Religious Organisation",
          "Small and Medium Enterprises(SMEs)",
          "Corporate",
          "Educational Institution",
          "Other",
        ],
      },
      {
        label: "Company Address",
        id: "CompanyAddress",
        type: "text",
        width: "full",
      },
    ],
  },
  {
    title: "Event Details",
    fields: [
      {
        label: "Event Name",
        id: "EventName",
        type: "text",
      },
      {
        label: "Event Topic",
        id: "EventTopic",
        type: "text",
      },
      {
        label: "Event Date(s) of Interest",
        id: "EventDate",
        type: "date",
      },
      {
        label: "Event Budget for Speaker",
        id: "EventBudget",
        type: "text",
      },
      {
        label: "Venue Name and Address",
        id: "VenueNameAddress",
        type: "text",
      },
      {
        label: "Closest Airport",
        id: "ClosestAirport",
        type: "text",
      },
      {
        label: "Planned Number of Attendees",
        id: "Attendees",
        type: "text",
      },
      {
        label: "What are you booking MD for?",
        id: "BookingFor",
        type: "select",
        options: [
          "Corporate Training",
          "Live and Virtual Keynotes",
          "Breakout Sessions",
          "Corporate Emcee",
          "Professional Development Consulting",
        ],
      },
      {
        label: "Will this event be open to the public?",
        id: "OpenToPublic",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        label: "Will you record this event?",
        id: "Recorded",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        label: "Will tickets be sold for this event?",
        id: "TicketsSold",
        type: "radio",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    title: "Presentation/Speech Details",
    fields: [
      {
        label: "Event Start Time",
        id: "EventStartTime",
        type: "time",
        // width: "half",
      },
      {
        label: "Speaking Time",
        id: "SpeakingTime",
        type: "text",
        // width: "half",
        placeholder: "Include the time MD would speak",
      },
      {
        label: "Expected Duration",
        id: "ExpectedDuration",
        type: "text",
        placeholder: "30 min, 1 hour, etc",
        // width: "half",
      },
      {
        label: "Email",
        id: "Email",
        type: "email",
        // width: "half",
      },
      {
        label: "Additional Information",
        id: "AdditionalInformation",
        type: "textarea",
        width: "full",
        notrequired: true,
      },
    ],
  },
];

const TextField = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full"
          ? "w-72 sm:w-80 md:w-96 lg:w-full"
          : width === "half"
          ? "w-[30rem]"
          : "w-72 sm:w-80 lg:w-60"
      }`}
    >
      <label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`border-2 rounded-md p-2 bg-[#f6f6f6] hover:border-[#F6C228] focus:border-[#F6C228] ${
          error ? "border-red-500" : "border-gray-300"
        } outline-none`}
      />
    </div>
  );
};

const TextArea = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full"
          ? "w-72 sm:w-80 md:w-96 lg:w-full"
          : width === "half"
          ? "w-[30rem]"
          : "w-72 sm:w-80 lg:w-60"
      }`}
    >
      <label htmlFor={id}>
        {label} {!required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        className={`border-2 rounded-md p-2 bg-[#f6f6f6] hover:border-[#F6C228] focus:border-[#F6C228] ${
          error ? "border-red-500" : "border-gray-300"
        } outline-none`}
      />
    </div>
  );
};

const SelectField = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  options,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full"
          ? "w-[65rem]"
          : width === "half"
          ? "w-[30rem]"
          : "w-72 sm:w-80 lg:w-60"
      }`}
    >
      <label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        name={id}
        className={`border-2 rounded-md p-2 bg-[#f6f6f6] hover:border-[#F6C228] focus:border-[#F6C228] ${
          error ? "border-red-500" : "border-gray-300"
        } outline-none`}
      >
        {Array.isArray(options) &&
          options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

const RadioField = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
  options,
}) => {
  return (
    <div className="flex flex-col gap-2 self-start min-w-72 sm:min-w-80">
      <label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex gap-2">
        {Array.isArray(options) &&
          options.map((option) => (
            <div className="flex items-center gap-2" key={option}>
              <input
                type="radio"
                id={option}
                name={id}
                value={option}
                className="bg-[#f6f6f6]"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

const TimeField = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full"
          ? "w-[65rem]"
          : width === "half"
          ? "w-[30rem]"
          : "w-72 sm:w-80 lg:w-60"
      }`}
    >
      <label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={`border-2 rounded-md p-2 bg-[#f6f6f6] hover:border-[#F6C228] focus:border-[#F6C228] ${
          error ? "border-red-500" : "border-gray-300"
        } outline-none`}
      />
    </div>
  );
};

const DateField = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full"
          ? "w-[65rem]"
          : width === "half"
          ? "w-[30rem]"
          : "w-72 sm:w-80 lg:w-60"
      }`}
    >
      <label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={`border-2 rounded-md p-2 bg-[#f6f6f6] hover:border-[#F6C228] focus:border-[#F6C228] ${
          error ? "border-red-500" : "border-gray-300"
        } outline-none`}
      />
    </div>
  );
};

const BookForm = () => {
  const [formData, setFormData] = useState(
    inputs.reduce((acc, section) => {
      section.fields.forEach((field) => {
        acc[field.id] = "";
      });
      return acc;
    }, {})
  );
  const [errors, setErrors] = useState({});

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleBlur = (id, required) => {
    if (required && !formData[id]) {
      setErrors({ ...errors, [id]: "This field is required" });
    }
  };

  return (
    <form className="flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col gap-5 max-w-screen-sm sm:max-w-screen-md md:max-w-[67rem]">
        {inputs.map((input) => (
          <div className="flex flex-col gap-5 px-5" key={input.title}>
            <h2 className="text-xl text-center lg:text-start font-bold text-[#F6C228] uppercase text-wrap ">
              {input.title}
            </h2>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-normal">
              {input.fields.map(
                ({ label, id, type, width, placeholder, options }) => {
                  const isRequired = !input.notrequired;
                  switch (type) {
                    case "text":
                    case "email":
                    case "tel":
                      return (
                        <TextField
                          key={id}
                          label={label}
                          id={id}
                          type={type}
                          width={width}
                          placeholder={placeholder}
                          required={isRequired}
                          value={formData[id]}
                          onChange={(e) => handleChange(id, e.target.value)}
                          onBlur={() => handleBlur(id, isRequired)}
                          error={errors[id]}
                        />
                      );
                    case "textarea":
                      return (
                        <TextArea
                          label={label}
                          id={id}
                          type={type}
                          width={width}
                          required={isRequired}
                          placeholder={placeholder}
                          key={id}
                        />
                      );
                    case "select":
                      return (
                        <SelectField
                          label={label}
                          id={id}
                          type={type}
                          options={options}
                          required={isRequired}
                          width={width}
                          key={id}
                        />
                      );
                    case "radio":
                      return (
                        <RadioField
                          label={label}
                          id={id}
                          type={type}
                          options={options}
                          required={isRequired}
                          key={id}
                        />
                      );
                    case "time":
                      return (
                        <TimeField
                          label={label}
                          id={id}
                          type={type}
                          width={width}
                          required={isRequired}
                          key={id}
                        />
                      );
                    case "date":
                      return (
                        <DateField
                          label={label}
                          id={id}
                          type={type}
                          key={id}
                          required={isRequired}
                        />
                      );
                    default:
                      return null;
                  }
                }
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="lg:self-start mt-4 ml-4 bg-[#F6C228] text-black p-2 rounded-md w-52">
        Submit
      </button>
    </form>
  );
};

const Book = () => {
  return (
    <main id="book" className="w-full">
      <div id="book-hero">{/* <img src="./bookhero.webp" /> */}</div>

      <div className="flex justify-center items-center pt-10">
        <BookForm />
      </div>
    </main>
  );
};

export default Book;
