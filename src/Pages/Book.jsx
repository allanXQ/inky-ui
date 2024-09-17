import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  TextArea,
  SelectField,
  RadioField,
  TimeField,
  DateField,
} from "../Components/InputFields";

const BookForm = () => {
  const [organizationTypes, setOrganizationTypes] = useState([]);
  const [bookingTypes, setBookingTypes] = useState([]);
  const inputs = [
    {
      title: "About You",
      fields: [
        { label: "First Name", id: "first_name", type: "text" },
        { label: "Last Name", id: "last_name", type: "text" },
        { label: "Position", id: "position", type: "text" },
        { label: "Email", id: "email", type: "email" },
      ],
    },
    {
      title: "Company Information",
      fields: [
        { label: "Company Name", id: "company_name", type: "text" },
        { label: "Company Phone", id: "company_phone", type: "tel" },
        { label: "Company Website", id: "company_website", type: "text" },
        {
          label: "Organization Type",
          id: "organization_type_name",
          type: "select",
          options: ["Select", ...organizationTypes],
        },
        {
          label: "Company Address",
          id: "company_address",
          type: "text",
          width: "full",
        },
      ],
    },
    {
      title: "Event Details",
      fields: [
        { label: "Event Name", id: "event_name", type: "text" },
        { label: "Event Topic", id: "event_topic", type: "text" },
        { label: "Event Date(s) of Interest", id: "event_date", type: "date" },
        { label: "Event Budget for Speaker", id: "event_budget", type: "text" },
        {
          label: "Venue Name and Address",
          id: "venue_name_address",
          type: "text",
        },
        { label: "Closest Airport", id: "closest_airport", type: "text" },
        {
          label: "Planned Number of Attendees",
          id: "planned_number_of_attendees",
          type: "text",
        },
        {
          label: "What are you booking MD for?",
          id: "booking_type_name",
          type: "select",
          options: ["Select", ...bookingTypes],
        },
        {
          label: "Will this event be open to the public?",
          id: "open_to_public",
          type: "radio",
          options: ["Yes", "No"],
        },
        {
          label: "Will you record this event?",
          id: "recorded",
          type: "radio",
          options: ["Yes", "No"],
        },
        {
          label: "Will tickets be sold for this event?",
          id: "tickets_sold",
          type: "radio",
          options: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Presentation/Speech Details",
      fields: [
        { label: "Event Start Time", id: "event_start_time", type: "time" },
        {
          label: "Speaking Time",
          id: "speaking_time",
          type: "text",
          placeholder: "Include the time MD would speak",
        },
        {
          label: "Expected Duration",
          id: "expected_duration",
          type: "text",
          placeholder: "30 min, 1 hour, etc",
        },
        { label: "Email", id: "additional_email", type: "email" },
        {
          label: "Additional Information",
          id: "additional_information",
          type: "textarea",
          width: "full",
          notrequired: true,
        },
      ],
    },
  ];

  const [formData, setFormData] = useState(
    inputs.reduce((acc, section) => {
      section.fields.forEach((field) => {
        acc[field.id] = "";
      });
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchOrganizationTypes = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/organization-types"
      );
      const orgtypes = [];
      response.data.forEach((org) => {
        orgtypes.push(org.name);
      });
      setOrganizationTypes(orgtypes);
    };

    const fetchBookingTypes = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/booking-types"
      );
      const booktypes = [];
      response.data.forEach((book) => {
        booktypes.push(book.name);
      });
      setBookingTypes(booktypes);
    };

    fetchOrganizationTypes();
    fetchBookingTypes();
  }, []);

  const handleChange = (id, value, type) => {
    if (type === "radio") {
      value = value === "true";
    }
    setFormData({ ...formData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/bookings",
        formData
      );
      alert("Form submitted successfully!");
      // Clear form or redirect user as needed
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        const error_res = error.response.data;
        console.log(error_res);
        setErrors(error_res);

        const msg = Object.keys(error_res);
        alert(error_res[msg[0]]);
      }
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-2"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-5 max-w-screen-sm sm:max-w-screen-md md:max-w-[67rem]">
        {inputs.map((input) => (
          <div className="flex flex-col gap-5 px-5 mb-5" key={input.title}>
            <h2 className="text-xl text-center lg:text-start font-bold text-[#F6C228] uppercase text-wrap anton-regular">
              {input.title}
            </h2>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
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
                          // error={errors[id]}
                        />
                      );
                    case "textarea":
                      return (
                        <TextArea
                          key={id}
                          label={label}
                          id={id}
                          type={type}
                          width={width}
                          placeholder={placeholder}
                          required={isRequired}
                          value={formData[id]}
                          onChange={(e) => handleChange(id, e.target.value)}
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
                          value={formData[id]}
                          onChange={(e) => handleChange(id, e.target.value)}
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
                          value={formData[id]}
                          onChange={(e) =>
                            handleChange(id, e.target.value, "radio")
                          }
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
                          value={formData[id]}
                          onChange={(e) => handleChange(id, e.target.value)}
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
                          value={formData[id]}
                          onChange={(e) => handleChange(id, e.target.value)}
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
      <button
        type="submit"
        className="lg:self-start mt-4 ml-4 bg-[#F6C228] text-black p-2 rounded-md w-52"
      >
        Submit
      </button>
    </form>
  );
};

const Book = () => {
  return (
    <main id="book" className="w-full">
      <div
        id="book-hero"
        className="flex flex-col justify-center text-white gap-2 pl-5  md:pl-52 pt-20 space-y-4"
      >
        <div className="flex  gap-2 text-5xl text-wrap flex-wrap font-extrabold anton-regular">
          <p className="text-[#F6C228]">BOOKING</p>
          <p>FORM</p>
        </div>
        <h2 className="clients-h2 max-w-[520px]  text[#efefef]">
          Complete the form below if you'd like more information about booking
          MD.
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F6C228"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <p>254798765432</p>
          </div>
          <div className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F6C228"
              className="size-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <p>booking@md.com</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-10">
        <BookForm />
      </div>
    </main>
  );
};

export default Book;
