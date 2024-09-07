import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
} from "framer-motion";
import BookButton from "../BookButton";

const Testimonials = ({ openTestimonialModal, testimonialContent }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialContent.length]);

  const variants = {
    enter: {
      y: 300,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        opacity: { duration: 1, ease: "easeInOut" },
      },
    },
    exit: {
      y: -300,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const topQuoteVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bottomQuoteVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const linesVariants = {
    hidden: {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div id="testimonials" className="w-full overflow-hidden">
      <div className="flex flex-col gap-20 sm:flex-row sm:gap-0 md:gap-24 mt-4 items-center justify-center px-2 sm:px-0 w-full">
        <div className="flex gap-5">
          <div className="flex flex-col gap-10 sm:gap-4 flex-wrap items-center justify-center">
            <div className="flex items-center gap-5">
              <motion.img
                src="./lines.png"
                variants={linesVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.0 }}
              />
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
        <div>
          <div className="testimonial-container flex flex-col gap-5  sm:max-w-[60vw] md:max-w-[45vw] h-fit relative mt-10">
            <motion.img
              src="./topquote.png"
              initial="hidden"
              animate="visible"
              variants={topQuoteVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="absolute top-[-40px] left-[-5px] md:left-[0px] w-14 z-20"
              onViewportEnter={() => console.log("Top quote entered viewport")}
            />
            <AnimatePresence mode="wait" onExitComplete={() => null}>
              <motion.div
                key={current}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                className="flex flex-col overflow-hidden border border-[#636363] rounded-xl p-10"
              >
                <div className="max-h-[245px] overflow-y-hidden">
                  <p className="big-shoulders-regular text-ellipsis max-h-[245px] overflow-y-hidden">
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
            <motion.img
              src="./bottomquote.png"
              initial="hidden"
              animate="visible"
              variants={bottomQuoteVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="absolute bottom-[-35px] right-[5px] md:right-[-5px] w-14"
              onViewportEnter={() =>
                console.log("Bottom quote entered viewport")
              }
            />
          </div>
          <div className="flex justify-center mt-5">
            {testimonialContent.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${current === idx ? "active" : ""}`}
                onClick={() => handleDotClick(idx)}
                style={{ cursor: "pointer", padding: "5px" }}
              >
                ●
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
