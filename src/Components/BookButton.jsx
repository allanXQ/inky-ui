import React from "react";
import { useNavigate } from "react-router";

const BookButton = ({ text, path, onClick }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F6C228] text-black flex items-center rounded-lg w-[10rem] h-[2.6rem] hover:rounded-lg hover:cursor-pointer">
      <button
        id="hero-book-btn"
        className="py-2 px-4  hover:bg-black hover:text-white flex items-center h-[2.6rem]"
        onClick={onClick ? onClick : () => navigate(`/${path}`)}
      >
        <p className="montserrat-regular text-sm font-medium">{text}</p>
      </button>

      <div
        style={{
          borderRight: "1px solid black",
          height: "2.6rem",
        }}
      ></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 pl-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  );
};

export default BookButton;
