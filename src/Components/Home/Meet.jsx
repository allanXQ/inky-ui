import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MeetMD = () => {
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

  const { scrollYProgress } = useScroll();
  const maxTranslateX = 200;
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [maxTranslateX, -maxTranslateX]
  );

  return (
    <div
      id="meetmd"
      className="flex items-center justify-center flex-wrap gap-10"
    >
      <div className="flex flex-col max-w-[600px] px-2 mt-10 md:mt-20">
        <div className="flex gap-4">
          <motion.img
            src="./lines.png"
            variants={linesVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.0 }}
          />

          <div className="flex flex-col gap-4 max-w-[600px] px-2">
            <h3 className="about-h3 text-[#F6C228]">MEET MD</h3>
            <p className="about-p1-text">
              MD is a dynamic personality and highly sought-after resource in
              corporate & professional circles, small business owners, and
              community/church leaders from all sectors of society striving to
              expand prospects.
            </p>
            <p className="about-p2-text">
              MD, is a trailblazing figure in the realms of Transformational
              Leadership Coaching, Motivational Speaking and Customer service
              Training. With a magnetic presence and an unwavering commitment to
              igniting change, MD Has redefined the very essence of inspiration,
              leaving an indelible mark on all who encounter his teachings.
              Prepare to embark on a profound journey of transformation as MD
              shares invaluable insights, equipping you with the essential
              tools, mindset, and strategies needed to not only lead with
              purpose but to soar to unparalleled heights of success. Through
              electrifying presentations and unparalleled expertise, MD empowers
              individuals and organizations alike to unlock their fullest
              potential, fostering a culture of excellence and achievement
            </p>
            <div className="flex items-center border border-white rounded-lg w-40 ml-2">
              <button
                id="about-btn"
                className="py-2 px-4 border-r border-white"
                onClick={() => navigate("/about")}
              >
                <p className="text-md">Learn More</p>
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
        </div>
      </div>
      <div className={"md:mt-20"}>
        <motion.img
          src="./meet-md.png"
          className="max-w-[300px] md:max-w-[600px]"
          style={{ x: translateX }}
          transition={{ type: "just" }}
        />
      </div>
    </div>
  );
};

export default MeetMD;
