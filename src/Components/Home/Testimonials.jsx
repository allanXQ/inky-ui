import React from "react";
import BookButton from "../BookButton";

const Testimonials = ({ openTestimonialModal }) => {
  return (
    <div id="testimonials" className="w-full">
      <div className="flex flex-col gap-20 sm:flex-row sm:gap-0 md:gap-24 mt-4 items-center justify-center px-2 sm:px-0 w-full">
        <div className="flex gap-5">
          <div className="flex flex-col gap-10 sm:gap-4 flex-wrap items-center justify-center">
            <div className="flex items-center gap-5">
              <img src="./lines.png" className="hidden sm:block" />
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col gap-4 ">
                  <div className="font-bold text-5xl">
                    <div className="flex flex-wrap gap-2 anton-larger">
                      <p>BOOK</p> <p className="text-[#F6C228]">MD</p>
                    </div>
                    <p>TODAY!</p>
                  </div>
                  <BookButton text="Book Now" path="book" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-container flex flex-col gap-5 border border-[#636363] rounded-xl sm:max-w-[60vw] md:max-w-[45vw] h-fit p-10 relative ">
          <img
            src="./topquote.png"
            className="absolute top-[-40px]  left-[-5px] md:left-[0px] animate-slideInLeft-1 w-18"
          />
          <p className="big-shoulders-regular">
            I am writing to express our appreciation and commendation for the
            outstanding customer experience training session you conducted on
            24th of June 2024 for our team. Your ability to connect with the
            participants, convey complex concepts with clarity, and foster an
            interactive learning environment was very much appreciated. The
            feedback from our team has been very positive. The hands-on
            exercises and real-world examples you incorporated into the training
            made the material accessible and relatable. We are grateful for the
            time and effort you invested in this training.
          </p>
          <div className="flex flex-col items-end gap-2">
            <p className="font-bold text-2xl">- JOHN K KARIUIKI</p>
            <p className="clients-h2 uppercase">GROUP CEO, fincredit Ltd</p>

            <div className="flex items-center border border-white rounded-lg w-56 ">
              <button
                id="about-btn"
                className="py-2 px-4"
                onClick={openTestimonialModal}
              >
                <p className="text-md">Read Full Testimonial</p>
              </button>
              <div
                style={{
                  borderRight: "1px solid white",
                  height: "2.5rem",
                }}
              ></div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 pl-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
          <img
            src="./bottomquote.png"
            width={70}
            height={30}
            className="absolute bottom-[-35px] right-[5px] md:right-[-5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
