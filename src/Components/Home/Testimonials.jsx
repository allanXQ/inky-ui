import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookButton from "../BookButton";

const Testimonials = ({ openTestimonialModal, testimonialContent }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialContent.length);
    }, 3000); // Change the testimonial every 3 seconds
    return () => clearInterval(interval);
  }, [testimonialContent.length]);

  const variants = {
    enter: (direction) => ({
      y: 300,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      y: -300,
      opacity: 0,
      transition: {
        y: { stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <div id="testimonials" className="w-full overflow-hidden">
      <div className="flex flex-col gap-20 sm:flex-row sm:gap-0 md:gap-24 mt-4 items-center justify-center px-2 sm:px-0 w-full">
        <div className="flex gap-5">
          <div className="flex flex-col gap-10 sm:gap-4 flex-wrap items-center justify-center">
            <div className="flex items-center gap-5">
              <img src="./lines.png" className="hidden sm:block" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-4">
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
        <div className="testimonial-container flex flex-col gap-5 border border-[#636363] rounded-xl sm:max-w-[60vw] md:max-w-[45vw] h-fit p-10 relative max-h-[400px]">
          <img
            src="./topquote.png"
            className="absolute top-[-40px] left-[-5px] md:left-[0px] animate-slideInLeft-1 w-18"
          />
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <div className="max-h-80 overflow-hidden">
                <p className="big-shoulders-regular overflow-hidden">
                  {testimonialContent[current]?.text}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="font-bold text-2xl">
                  - {testimonialContent[current]?.name}
                </p>
                <p className="clients-h2 uppercase">
                  {testimonialContent[current]?.position}
                </p>
                <div className="flex items-center border border-white rounded-lg w-56">
                  <button
                    id="about-btn"
                    className="py-2 px-4"
                    onClick={() => openTestimonialModal(current)}
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
            </motion.div>
          </AnimatePresence>
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
