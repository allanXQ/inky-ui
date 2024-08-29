import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingFor = () => {
  const [bookingTypes, setBookingTypes] = useState([]);

  useEffect(() => {
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

    fetchBookingTypes();
  }, []);

  const typeswithicons = [];

  bookingTypes.forEach((type) => {
    switch (type) {
      case "Live & Virtual Keynotes":
        typeswithicons.push({ type, icon: "./icons/speaker.png" });
        break;
      case "Breakout Sessions":
        typeswithicons.push({ type, icon: "./icons/happy-children.png" });
        break;
      case "Corporate Emcee":
        typeswithicons.push({ type, icon: "./icons/microphone.png" });
        break;
      case "Corporate Training":
        typeswithicons.push({ type, icon: "./icons/breakout.png" });
        break;
      case "Team Building":
        typeswithicons.push({ type, icon: "./icons/arm-wrestling.png" });
        break;
      default:
        break;
    }
  });

  return (
    <div
      id="booking"
      className="flex flex-col items-center justify-center gap-4"
    >
      <p className="about-h3 text-[#F6C228] text-center">
        MD IS CURRENTLY BOOKING FOR:
      </p>
      <div className="flex gap-4 items-center justify-center flex-wrap">
        {typeswithicons.map((type) => (
          <div
            key={type.type}
            className="flex flex-col items-center justify-center gap-2 w-52 h-48 border border-[#636363] rounded-md"
          >
            <img src={type.icon} />
            <p className="text-center">{type.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingFor;
