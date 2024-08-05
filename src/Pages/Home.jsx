import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ImageSlider = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 3000); // Adjust the delay time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slider-container">
      <div className={`image-set ${startAnimation ? "animate" : ""}`}>
        <img src="path-to-image1.jpg" alt="Image 1" />
        <img src="path-to-image2.jpg" alt="Image 2" />
      </div>
      <div className={`image-set ${startAnimation ? "animate" : ""}`}>
        <img src="path-to-image3.jpg" alt="Image 3" />
        <img src="path-to-image4.jpg" alt="Image 4" />
      </div>
      {/* Add more image sets as needed */}
    </div>
  );
};

const ButtonArrow = ({ text }) => {
  return (
    <div className="bg-[#F6C228] text-black flex items-center rounded-lg w-40 ">
      <button id="hero-book-btn" className=" px-5 py-2 border-r-2 border-black">
        {text}
      </button>

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
  );
};

const messages = [
  "Transformational leadership",
  "Customer service excellence",
  "Capacity Building",
  "Mental health",
  "Professional development",
  "Personal branding",
];

const Button = ({ text }) => {
  return (
    <div className="bg-[#F6C228] text-black flex items-center justify-center rounded-lg w-40 ">
      <button id="hero-book-btn" className="  py-2 ">
        {text}
      </button>
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <main id="home" className="w-screen  text-white flex flex-col gap-8">
      <div id="nav-hero" className="h-screen">
        <div
          id="inner-hero"
          className="flex flex-col  gap-4 items-center justify-center  min-h-screen "
        >
          <div className="flex items-center justify-center gap-4 w-2/3">
            {/* <img
              id="hero-inky"
              src="./Inky.webp"
              width={349}
              height={700}
              className="absolute left-44 top-20"
            /> */}
            <div
              id="hero-text"
              className="flex flex-col items-center justify-center z-20 mt-20 sm:mt-56 gap-6"
            >
              <div className="flex flex-col items-start sm:items-center justify-start leading-none gap-2">
                <p className="hero-big text-[#F6C228]">THE PROCESS:</p>
                <p className="hero-big">TRUST IT.</p>
                <p className="hero-big">RESPECT IT.</p>
                <p className="hero-big">EMBRACE IT.</p>
              </div>
              <p className="hero-long max-w-[530px] text-center  text[#efefef]">
                MD's insights, fueled by his personal story, spark leadership,
                inspire greatness, and elevate service.
              </p>
              <div className="bg-[#F6C228] text-black flex items-center rounded-lg w-36 ">
                <button
                  id="hero-book-btn"
                  className="py-2 px-4 border-r border-black"
                  onClick={() => navigate("/book")}
                >
                  <p className="text-sm">Book MD</p>
                </button>

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
      </div>
      {/*  <div
        id="clients"
        className="flex flex-col items-center justify-center mt-52"
      >
        <h2 className="clients-h2 max-w-[530px] text-center text[#efefef]">
          SOME OF MD'S CLIENTS INCLUDE
        </h2>
        <div className="animate-fade-down">
          <img src="./clientlogos.png" />
        </div>
      </div>
      <div id="video" className="">
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          className="h-[480px] w-full object-cover"
        >
          <source src="./file.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="meetinky" className="flex items-center justify-center gap-4">
        <img src="./lines.png" />
        <div className="flex flex-col gap-4 max-w-[600px]">
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
            shares invaluable insights, equipping you with the essential tools,
            mindset, and strategies needed to not only lead with purpose but to
            soar to unparalleled heights of success. Through electrifying
            presentations and unparalleled expertise, MD empowers individuals
            and organizations alike to unlock their fullest potential, fostering
            a culture of excellence and achievement
          </p>
          <div className="flex items-center border border-white rounded-lg w-40 ">
            <button
              id="about-btn"
              className="py-2 px-4 border-r border-white"
              onClick={() => navigate("/about")}
            >
              <p className="text-md">Learn More</p>
            </button>

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
        <img src="./inky2.webp" />
      </div>
      <div
        id="quote"
        className="flex flex-col items-center justify-center w-full relative"
      >
        <div>
          <div id="comp-ky2hvz0a" data-motion-enter="done">
            <div data-testid="svgRoot-comp-ky2hvz0a">
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
        </div>
        <div className="flex flex-col gap-2 items-center max-w-[45rem] border border-[#636363] rounded-lg py-10 px-16">
          <p className="text-2xl">
            The one thing we all have in common is that we will encounter
            adversity, but we have to decide how we respond to it. My arm and my
            hand are paralyzed but my heart isn’t, my mind isn’t, my dedication
            isn’t, my work ethic isn’t, my commitment isn’t.”
          </p>
          <p className="font-bold text-xl">- MD</p>
        </div>
      </div>
      <div
        id="booking"
        className="flex flex-col items-center justify-center gap-4"
      >
        <p className="about-h3 text-[#F6C228]">MD IS CURRENTLY BOOKING FOR:</p>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col items-center justify-center gap-2 w-52 h-48 border border-[#636363] rounded-md">
            <img src="./keynote.png" />
            <p className="text-center">Live & Virtual Keynotes</p>
            <Button text="Book Now" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-52 h-48 border border-[#636363] rounded-md">
            <img src="./breakout.png" />
            <p className="text-center">Breakout Sessions</p>
            <Button text="Book Now" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-52 h-48 border border-[#636363] rounded-md">
            <img src="./breakout.png" />
            <p className="text-center">Corporate Emcee </p>
            <Button text="Book Now" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-52 h-48 border border-[#636363] rounded-md">
            <img src="./breakout.png" />
            <p className="text-center">Corporate Training </p>
            <Button text="Book Now" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-52 h-48 border border-[#636363] rounded-md">
            <img src="./breakout.png" />
            <p className="text-center">Team Building</p>
            <Button text="Book Now" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <p className="about-h3 text-[#F6C228]">SIGNATURE MESSAGE TOPICS:</p>
        <div className="flex items-center justify-center gap-4">
          {messages.map((message) => (
            <div
              key={message}
              className="flex  items-center justify-center gap-2 px-2 w-40 h-16 border border-[#636363] rounded-lg"
            >
              <p className="text-center">{message}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#F6C228] text-black flex items-center rounded-lg w-36 ">
          <button
            id="hero-book-btn"
            className="py-2 px-4 border-r border-black"
            onClick={() => navigate("/book")}
          >
            <p className="text-md">Book Now</p>
          </button>

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
      <div
        id="testimonials"
        className="flex gap-24 items-center justify-center"
      >
        <div className="flex gap-5">
          <img src="./lines.png" />
          <div className="flex flex-col gap-10  justify-center">
            <div className="flex flex-col font-bold gap-2 text-5xl">
              <div className="flex  gap-2">
                <p>BOOK</p> <p className="text-[#F6C228]">MD</p>
              </div>
              <p>TODAY!</p>
            </div>
            <div className="bg-[#F6C228] text-black flex items-center rounded-lg w-36 ">
              <button
                id="hero-book-btn"
                className="py-2 px-4 border-r border-black"
                onClick={() => navigate("/book")}
              >
                <p className="text-md">Book Now</p>
              </button>

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
        <div className="testimonial-container flex flex-col gap-5 border border-[#636363] rounded-xl max-w-[600px] min-h-[300px] p-10 relative ">
          <img
            src="./topquote.png"
            width={50}
            height={50}
            className="absolute top-[-30px] left-[-10px]"
          />
          <p>
            The messages of dealing with adversity, building character and
            having faith could not have been more timely. Throughout 2020 I was
            always able to refer back to the message that Inky conveyed as the
            people of Smithereen navigated an uncertain and challenging time. I
            truly believe that Inky played a key role in my company's continued
            success.
          </p>
          <div className="flex flex-col items-end gap-2">
            <p className="font-bold">-JACK JENNINGS</p>
            <p className="clients-h2">PRESIDENT, SMITHEREEN PEST MANAGEMENT</p>
            <div className="flex items-center border border-white rounded-lg w-56 ">
              <button
                id="about-btn"
                className="py-2 px-4 border-r border-white"
                onClick={() => navigate("/about")}
              >
                <p className="text-md">Read Full Testimonial</p>
              </button>

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
            width={50}
            height={50}
            className="absolute bottom-[-30px] right-[-10px]"
          />
        </div>
      </div>
      <div id="cta" className=" flex items-center justify-center mt-5">
        <form>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <p className="text-white text-3xl">Ready to elevate your team?</p>
              <p className="text-white text-sm">
                Subscribe to our mailing list
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="border border-white rounded-md w-64 px-4 py-2"
              />
              <Button text="Subscribe" />
            </div>
          </div>
        </form>
      </div> */}
    </main>
  );
}
