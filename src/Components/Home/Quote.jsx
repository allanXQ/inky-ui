import React from "react";

const Quote = () => {
  return (
    <div
      id="quote"
      className="flex flex-col items-center justify-center w-full relative px-4 mt-36 md:mt-24"
    >
      <div id="comp-ky2hvz0a" data-motion-enter="done" className="relative">
        <div
          data-testid="svgRoot-comp-ky2hvz0a"
          className="max-w-24 md:max-w-36  mt-16 md:mt-0"
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="0 0 770.35 1260.4"
            viewBox="0 0 770.35 1260.4"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="presentation"
            aria-hidden="true"
          >
            <g>
              <path
                d="M456 210.92q10.37-54.67 19.16-75C306.82 265.76 140.68 430.42 195.6 659.86Q158.89 602.47 161 498q-35.15 121.74-32.85 301.22C113 754.81 102.81 651.36 111.3 590.77 26.78 692.34-17.87 931.93 80.94 1010.4 70.76 1036.21 27.58 1167.58 0 1259.84c0 0 .48.21 1.4.56l51.27-42c94.09-377.35 281.19-808.2 547.89-1093.68q-304.69 430.2-439.83 874.42c269.69-95.91 209.45-395.57 349.6-523.35-40.48 7-78.95 42.61-102.46 70.28C446.65 453.81 551.81 462.59 592 296.2 615.42 199.05 694.48 80.87 770.35 0Q512.27 62 456 210.92z"
                fill="#f6c228"
                data-color="1"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center max-w-[45rem] border border-[#636363] rounded-lg py-10 px-12">
        <p className="text-xl md:text-2xl text-center anton-regular">
          <span className={"text-[#F6C228]"}>Resilience</span> isn't just a
          trait—it's a skill we must cultivate. I've faced my own hurdles, but
          what I've learned is that true strength lies not in avoiding
          challenges, but in transforming them into opportunities for growth. My
          mission is to{" "}
          <span className={"text-[#F6C228]"}>
            empower others to harness their potential
          </span>
          , no matter the obstacles, and to{" "}
          <span className={"text-[#F6C228]"}>
            inspire a relentless commitment to excellence
          </span>{" "}
          in every aspect of your journey.
        </p>
        <p className=" text-xl text-center">
          <span className={"font-bold"}>MD</span> <br /> Corporate Trainer{" "}
          <span className="hidden md:inline">|</span>Transformational Speaker
        </p>
      </div>
    </div>
  );
};

export default Quote;
