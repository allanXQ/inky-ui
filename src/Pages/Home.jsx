import React, { useEffect, useState } from "react";

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
  "Leadership",
  "Teamwork",
  "Excelling in the Midst of Adversity",
  "Embracing Change",
  "Mental Agility",
  "Perseverance",
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
  return (
    <main className="w-screen  text-white flex flex-col gap-8">
      <div id="nav-hero" className="h-screen">
        <div className="flex flex-col  gap-4 items-center justify-center min-w-full min-h-screen ">
          <div className="flex items-center justify-center gap-4 w-2/3">
            <img
              id="hero-inky"
              src="./Inky.webp"
              width={349}
              height={700}
              className="absolute left-48 top-20"
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
          <ButtonArrow text="Book Inky" />
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
        <div className="flex flex-col gap-4 max-w-80">
          <p>MEET INKY</p>
          <p>
            Husband, father, collegiate athlete, entrepreneur and author, Inky
            Johnson is one of the most highly sought after speakers in the
            world.
          </p>
          <p>
            For over a decade, executives, professional sports teams, business
            owners and people all over have benefited from the raw energy of his
            thought provoking and inspirational presentations. Whether the topic
            is leadership, teamwork, excelling in the midst of adversity,
            embracing change, mental agility or perseverance, Inky’s message is
            effective and efficient.
          </p>
          <ButtonArrow text="Learn More" />
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
        <div className="flex flex-col gap-2 items-center w-[600px] border border-[#636363] rounded-lg p-10 ">
          <p>
            The one thing we all have in common is that we will encounter
            adversity, but we have to decide how we respond to it. My arm and my
            hand are paralyzed but my heart isn’t, my mind isn’t, my dedication
            isn’t, my work ethic isn’t, my commitment isn’t.”
          </p>
          <p>-INKY</p>
        </div>
      </div>
      <div
        id="booking"
        className="flex flex-col items-center justify-center gap-4"
      >
        <p>INKY JOHNSON IS CURRENTLY BOOKING FOR:</p>
        <div className="flex gap-4 items-center">
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
            <img src="./voiceovers.png" />
            <p className="text-center">Voiceovers</p>
            <Button text="Book Now" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p>SIGNATURE MESSAGE TOPICS:</p>
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
        <ButtonArrow text="Book Now" />
      </div>
      <div
        id="testimonials"
        className="flex gap-10 items-center justify-center"
      >
        <div className="flex gap-4">
          <img src="./lines.png" />
          <div className="flex flex-col gap-4 items-center justify-center">
            <p>BOOK INKY TODAY!</p>
            <ButtonArrow text="Book Now" />
          </div>
        </div>
        <div className="flex flex-col gap-4 border border-[#636363] max-w-[600px] p-10 relative">
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
            <p>-JACK JENNINGS</p>
            <p>PRESIDENT, SMITHEREEN PEST MANAGEMENT</p>
            <ButtonArrow text="Read Full Testimonial" />
          </div>
          <img
            src="./bottomquote.png"
            width={50}
            height={50}
            className="absolute bottom-[-30px] right-[-10px]"
          />
        </div>
      </div>
      <div
        id="cta"
        className="bg-[#F6C228] flex items-center justify-center h-72 mt-10"
      >
        <div>
          <p>TEXT "INKSPIRATION" TO 404-948-5613</p>
          <p>TO RECEIVE WEEKLY INKSPIRATIONAL MESSAGES FROM INKY</p>
        </div>
        <img src="./phone.webp" className="mb-6" />
      </div>
    </main>
  );
}
