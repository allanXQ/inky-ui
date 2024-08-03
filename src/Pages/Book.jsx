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
        type: "textarea",
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
      },
      {
        label: "Speaking Time",
        id: "SpeakingTime",
        type: "text",
        placeholder: "Include the time MD would speak",
      },
      {
        label: "Expected Duration",
        id: "ExpectedDuration",
        type: "text",
        placeholder: "30 min, 1 hour, etc",
      },
      {
        label: "Email",
        id: "Email",
        type: "email",
      },
      {
        label: "Additional Information",
        id: "AdditionalInformation",
        type: "textarea",
        notrequired: true,
      },
    ],
  },
];

const TextField = ({ label, id, type, width, placeholder }) => {
  return (
    <div className={`flex flex-col gap-2 ${width === "full" ? "w-full" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
};

const TextArea = ({ label, id, type, width, placeholder }) => {
  return (
    <div className={`flex flex-col gap-2 ${width === "full" ? "w-full" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
};

const SelectField = ({ label, id, type, options }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={id}
        className="border border-gray-300 rounded-md p-2"
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
              <input type="radio" id={option} name={id} value={option} />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

const TimeField = ({ label, id, type }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
};

const BookForm = () => {
  return (
    <form className="flex flex-col gap-10">
      {inputs.map((input) => (
        <div className="flex flex-col gap-5" key={input.title}>
          <h2>{input.title}</h2>
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
                    key={field.id}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      ))}
      <button className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
    </form>
  );
};

const Book = () => {
  return (
    <main id="book" className="w-screen ">
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
