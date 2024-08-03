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
          className="flex flex-col  gap-4 items-center justify-center min-w-full min-h-screen "
        >
          <div className="flex items-center justify-center gap-4 w-2/3">
            <img
              id="hero-inky"
              src="./Inky.webp"
              width={349}
              height={700}
              className="absolute left-44 top-20"
            />
            <div
              id="hero-text"
              className="flex flex-col items-center justify-center z-20 mt-56 gap-6"
            >
              <div className="flex flex-col items-center justify-start leading-none gap-2">
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
      <div
        id="clients"
        className="flex flex-col items-center justify-center mt-52"
      >
        <h2>SOME OF MD'S CLIENTS INCLUDE</h2>
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
        <div className="flex flex-col gap-4 max-w-[480px]">
          <p className="font-bold text-[#F6C228]">MEET MD</p>
          <p className="font-bold">
            MD is a dynamic personality and highly sought-after resource in
            corporate & professional circles, small business owners, and
            community/church leaders from all sectors of society striving to
            expand prospects.
          </p>
          <p>
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
        <div className="flex flex-col gap-2 items-center max-w-[70rem] border border-[#636363] rounded-lg p-10 ">
          <p>
            MD brings a rich reservoir of experience and proficiency, boasting a
            distinguished history of triumph in leadership development and
            business growth strategies, MD has finely tuned his skills through
            years of devoted study, hands-on application, and coaching diverse
            teams and leaders across industries and institutions. Acknowledged
            for his knack for sparking transformation, MD is a highly
            sought-after speaker and trainer. His educational background
            includes a master's degree in strategic management, a bachelor's
            degree in entrepreneurship, and a plethora of additional
            certificates from esteemed institutions. These include
            certifications in people management, corporate governance, business
            analysis and process modeling, and trainer of trainers, among
            others. Throughout his illustrious career spanning over a decade, he
            has successfully worked with national and international
            corporations, steadily progressing from a subordinate position to
            ultimately becoming a respected business leader. MD's narrative
            within the business sector exudes confidence and highlights
            exponential development prospects. He captivates his audience by
            emphasizing the importance of avoiding complacency and aiming high,
            demonstrating how one can achieve great success and positively
            impact others. It is not only his impressive personality but also
            his exceptional way with words and life-changing anecdotes that
            inspire people to take unprecedented action. MD's remarkable
            credentials, combined with his inspiring stories and ability to
            convey his message effectively, make him a truly influential figure
            who motivates individuals to reach new heights and make a lasting
            difference in their lives, the lives of others and that of the
            organization. With a fervent dedication to achieving excellence in
            every endeavor and a consistent history of remarkable
            accomplishments,
          </p>
          {/* <p>-MD</p> */}
        </div>
      </div>
      <div
        id="booking"
        className="flex flex-col items-center justify-center gap-4"
      >
        <p>MD IS CURRENTLY BOOKING FOR:</p>
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
            <p>BOOK MD TODAY!</p>
            <ButtonArrow text="Book Now" />
          </div>
        </div>
        <div className="flex flex-col gap-4 border border-[#636363] max-w-[900px] p-10 relative">
          <img
            src="./topquote.png"
            width={50}
            height={50}
            className="absolute top-[-30px] left-[-10px]"
          />
          <p>
            MD offers a rich reservoir of knowledge and experience poised to
            elevate any project or initiative. He brings a relentless commitment
            to excellence, a keen eye for detail, and a collaborative spirit
            that fosters synergy and drives results. His track record speaks
            volumes, characterized by a string of successes and accolades that
            underscore his ability to deliver tangible value and exceed
            expectations. As He embark on new ventures, He remains steadfast in
            his pursuit of excellence, poised to make a lasting impact and
            inspire positive change. MD stands as a towering figure in the
            realms of speaking and training, basking in widespread acclaim and
            recognition garnered through a multitude of avenues. From delivering
            spellbinding keynote addresses at prestigious conferences to making
            impactful appearances in the media spotlight, MD's influence
            resonates far and wide. Testimonials from esteemed executives serve
            as a testament to the transformative power of MD's teachings, with
            clients hailing the lasting change and exceptional results they have
            witnessed firsthand. Through a seamless blend of expertise,
            charisma, and unwavering dedication, MD continues to leave an
            indelible mark on individuals and organizations alike, shaping
            futures and inspiring greatness with each engagement.
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
