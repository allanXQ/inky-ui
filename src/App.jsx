import React, { useEffect, useState } from "react";

import "./App.css";

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

export default function App() {
  return (
    <main className="w-screen h-screen text-white flex flex-col gap-8">
      <div id="nav-hero" className="h-screen">
        <nav className=" flex justify-between px-24 pt-5">
          <div className="ml-20">
            <img
              src="./inkylogo.png"
              width={100}
              height={100}
              alt="Inky Logo"
            />
          </div>
          <ul className="flex gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Book Now</a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col  gap-4 items-center justify-center min-w-full min-h-screen ">
          <div className="flex items-center justify-center gap-4 w-2/3">
            <img
              id="hero-inky"
              src="./Inky.webp"
              width={349}
              height={700}
              className="absolute left-52 top-20"
            />
            <div className="flex flex-col items-center justify-center gap-1 z-20">
              <p
                className="text-4xl font-normal 
            font-stretch-100 
             uppercase 
             text-[#F6C228] text-center indent-0"
              >
                THE PROCESS:
              </p>
              <p
                className="text-4xl font-normal not-italic 
             uppercase 
             text-white text-center indent-0"
              >
                TRUST IT.
                <br />
                RESPECT IT.
                <br />
                EMBRACE IT.
              </p>
              <p className="text-[19px] w-8/12 text-center tracking-wide">
                Inky Johnson inspires the masses with his story of faith and
                perseverance.
              </p>
            </div>
          </div>
          <div className="bg-[#F6C228] text-black flex items-center rounded-lg w-36">
            <button
              id="hero-book-btn"
              className=" px-4 py-2  border-r-2 border-black"
            >
              Book Inky
            </button>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 px-1"
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
      <div
        id="clients"
        className="flex flex-col items-center justify-center mt-52"
      >
        <h2>SOME OF INKY'S CLIENTS INCLUDE</h2>
        <div className="animate-fade-down">
          <img src="./clientlogos.png" />
        </div>
      </div>
      <div className="">
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
    </main>
  );
}
