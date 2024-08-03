import React, { useState } from "react";

const inputs = [
  {
    title: "About You",
    fields: [
      { label: "First Name", id: "FirstName", type: "text", width: "normal" },
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
        width: "full",
      },
      {
        label: "Closest Airport",
        id: "ClosestAirport",
        type: "text",
        width: "full",
      },
      {
        label: "Will tickets be sold for this event?",
        id: "TicketsSold",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        label: "Planned Number of Attendees",
        id: "Attendees",
        type: "text",
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
    ],
  },
  {
    title: "Presentation/Speech Details",
    fields: [
      {
        label: "Event Start Time",
        id: "EventStartTime",
        type: "time",
        width: "half",
      },
      {
        label: "Speaking Time",
        id: "SpeakingTime",
        type: "text",
        width: "half",
        placeholder: "Include the time MD would speak",
      },
      {
        label: "Expected Duration",
        id: "ExpectedDuration",
        type: "text",
        placeholder: "30 min, 1 hour, etc",
        width: "half",
      },
      {
        label: "Email",
        id: "Email",
        type: "email",
        width: "half",
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

const TextField = ({ label, id, type, width, placeholder }) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full" ? "w-full" : width === "half" ? "w-[32rem]" : "w-56"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 bg-[#f6f6f6]"
      />
    </div>
  );
};

const TextArea = ({ label, id, type, width, placeholder }) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full" ? "w-full" : width === "half" ? "w-1/2" : "w-56"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 bg-[#f6f6f6]"
      />
    </div>
  );
};

const SelectField = ({ label, id, type, options, width }) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full" ? "w-full" : width === "half" ? "w-1/2" : "w-56"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={id}
        className="border border-gray-300 rounded-sm p-2 max-w-52 bg-[#f6f6f6]"
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

const RadioField = ({ label, id, type, options }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
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

const TimeField = ({ label, id, type, width }) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full" ? "w-full" : width === "half" ? "w-[32rem]" : "w-56"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="border border-gray-300 rounded-md p-2 bg-[#f6f6f6]"
      />
    </div>
  );
};

const DateField = ({ label, id, type, width }) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full" ? "w-full" : width === "half" ? "w-1/2" : "w-56"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="border border-gray-300 rounded-md p-2 bg-[#f6f6f6]"
      />
    </div>
  );
};

const BookForm = () => {
  return (
    <form className="flex flex-col gap-2 p-4 w-[70rem]">
      {inputs.map((input) => (
        <div className="flex flex-col gap-5 p-4 " key={input.title}>
          <h2 className="text-lg font-semibold">{input.title}</h2>
          <div className="flex flex-wrap gap-6">
            {input.fields.map((field) => {
              switch (field.type) {
                case "text":
                case "email":
                case "tel":
                  return (
                    <TextField
                      label={field.label}
                      id={field.id}
                      type={field.type}
                      width={field.width}
                      placeholder={field.placeholder}
                      key={field.id}
                    />
                  );
                case "textarea":
                  return (
                    <TextArea
                      label={field.label}
                      id={field.id}
                      type={field.type}
                      width={field.width}
                      placeholder={field.placeholder}
                      key={field.id}
                    />
                  );
                case "select":
                  return (
                    <SelectField
                      label={field.label}
                      id={field.id}
                      type={field.type}
                      options={field.options}
                      width={field.width}
                      key={field.id}
                    />
                  );
                case "radio":
                  return (
                    <RadioField
                      label={field.label}
                      id={field.id}
                      type={field.type}
                      options={field.options}
                      key={field.id}
                    />
                  );
                case "time":
                  return (
                    <TimeField
                      label={field.label}
                      id={field.id}
                      type={field.type}
                      width={field.width}
                      key={field.id}
                    />
                  );
                case "date":
                  return (
                    <DateField
                      label={field.label}
                      id={field.id}
                      type={field.type}
                      key={field.id}
                    />
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      ))}
      <button className="mt-4 ml-4 bg-[#F6C228] text-black p-2 rounded-md w-52">
        Submit
      </button>
    </form>
  );
};

const Book = () => {
  return (
    <main id="book" className=" ">
      <div id="book-hero">
        <img src="./bookhero.webp" />
      </div>

      <div className="flex flex-col justify-center items-center gap-10 pt-10">
        <BookForm />
      </div>
    </main>
  );
};

export default Book;
