import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Modal from "../Components/Modal";
import BookButton from "../Components/BookButton";
import ImageSlider from "../Components/ImageSlider";
import MeetMD from "../Components/Home/Meet";
import SignatureMessages from "../Components/Home/SignatureMessages";
import BookingFor from "../Components/Home/BookingFor";
import LazyVideo from "../Components/Home/Video";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to a section
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openTestimonialModal = () => {
    setModalContent(
      <div className="flex flex-col items-center justify-center w-full p-3">
        <div className=" flex flex-col gap-5 big-shoulders-regular text-center">
          <p className="flex text-center">
            My sincere appreciation for the exceptional training you delivered
            to our team of managers on transformational leadership. Your
            expertise and engaging approach made a significant impact on our
            managers' leadership skills and their ability to inspire their
            teams. Your training sessions were informative, thought-provoking,
            and highly relevant to our organization. Your ability to convey
            complex concepts clearly and encourage active participation created
            a valuable learning environment. The feedback from our managers was
            overwhelmingly positive, highlighting the practicality and
            effectiveness of the training. Your professionalism, punctuality,
            and dedication were evident throughout the training program.
          </p>
          <p>
            Your passion for empowering leaders to reach their full potential
            was inspiring and left a lasting impression on our team. We are
            grateful for your contribution in fostering a culture of
            transformational leadership within our organization. I highly
            recommend your services to any organization seeking to enhance the
            leadership capabilities of their managers. Your expertise and
            ability to connect with participants make you an invaluable resource
            in the field of leadership development. Thank you once again for
            your outstanding training, and we look forward to future
            collaborations that will continue to enrich our organization's
            growth and success.
          </p>
        </div>
        <p className="mt-4 text-2xl font-bold">- WINNIE</p>
        <p className="clients-h2">HR MANAGER, MERIDIAN EQUATOR</p>
        <img
          src="./bottomquote.png"
          width={70}
          height={30}
          className="absolute bottom-[-20px] right-[-10px] md:right-[-30px]"
        />
      </div>
    );
    toggleModal();
  };

  const clientimages = [
    [
      "clients/coi.png",
      "clients/meridian.png",
      "clients/nokras.png",
      "clients/noname.png",
      "clients/noname2.png",
      "clients/y254.png",
      "clients/zetech.png",
    ],

    ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"],
  ];
  return (
    <main
      id="home"
      className="w-screen  text-white flex flex-col items-center gap-8 overflow-x-hidden"
    >
      <div id="nav-hero" className="h-screen w-full">
        <div
          id="inner-hero"
          className="flex flex-col  gap-4 items-top justify-top  min-h-screen "
        >
          <div className="flex items-center justify-center gap-4 -full">
            <div
              id="hero-text"
              className="flex flex-col items-center justify-center z-20 mt-60 sm:mt gap-6"
            >
              <div className="flex flex-col items-center justify-start leading-none gap-2 uppercase">
                <p className="text-[#F6C228] anton-large">MD DELIVERS:</p>
                <p className="anton-large animate-slideInLeft-1">Insight.</p>
                <p className="anton-large animate-slideInRight-1">
                  Inspiration.
                </p>
                <p className="anton-large animate-slideInLeft-2">Action.</p>
              </div>
              <p className="montserrat-regular max-w-[530px] text-center  text[#efefef]">
                His insights, fueled by his personal story, spark leadership,
                inspire greatness, and elevate service.
              </p>
              <BookButton text="Book MD" path="book" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="clients"
        className="flex flex-col w-full items-center justify-center mt-10 xl:mt-10"
      >
        <h2 className="clients-h2 max-w-[530px] text-center text[#efefef]">
          SOME OF MD'S CLIENTS INCLUDE
        </h2>
        <ImageSlider images={clientimages} />
      </div>
      <LazyVideo toggleModal={toggleModal} setModalContent={setModalContent} />
      <MeetMD />
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
            challenges, but in transforming them into opportunities for growth.
            My mission is to{" "}
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
      <BookingFor />
      <SignatureMessages />
      <div id="podcasts" className="w-full flex flex-col  gap-5">
        <div className="pod-img">
          <div className=" w-full flex items-center justify-center min-h-96">
            <img
              src="./Black and White Simple Podcast YouTube Channel Logo.png"
              className=" w-64 md:w-96 absolute"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="h-12 flex items-center">
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="0.005 0.008 415.034 71.514"
              viewBox="0.005 0.008 415.034 71.514"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              className="size-44"
            >
              <g>
                <g>
                  <path
                    d="m39.28 1.18 9.54 22.58 24.42 2.1a1.92 1.92 0 0 1 1.1 3.37L55.81 45.28l5.56 23.88a1.92 1.92 0 0 1-2.87 2.08l-21-12.65-21 12.65a1.92 1.92 0 0 1-2.86-2.08l5.56-23.88L.67 29.23a1.93 1.93 0 0 1 1.09-3.38l24.43-2.09 9.54-22.58a1.93 1.93 0 0 1 3.55 0z"
                    fill="#F6C228"
                    data-color="1"
                  ></path>
                  <path
                    d="m124.28 1.18 9.55 22.58 24.42 2.1a1.92 1.92 0 0 1 1.1 3.37l-18.53 16.05 5.55 23.88a1.92 1.92 0 0 1-2.87 2.08l-21-12.65-21 12.65a1.92 1.92 0 0 1-2.87-2.08l5.56-23.88-18.54-16a1.93 1.93 0 0 1 1.1-3.38l24.43-2.09 9.54-22.58a1.92 1.92 0 0 1 3.54 0z"
                    fill="#F6C228"
                    data-color="1"
                  ></path>
                  <path
                    d="m209.29 1.18 9.54 22.58 24.43 2.1a1.93 1.93 0 0 1 1.1 3.37l-18.53 16.05 5.55 23.88a1.92 1.92 0 0 1-2.87 2.08l-21-12.65-21 12.65a1.92 1.92 0 0 1-2.87-2.08l5.55-23.88-18.53-16a1.93 1.93 0 0 1 1.1-3.38l24.43-2.09 9.54-22.58a1.92 1.92 0 0 1 3.54 0z"
                    fill="#F6C228"
                    data-color="1"
                  ></path>
                  <path
                    d="m294.3 1.18 9.54 22.58 24.43 2.1a1.92 1.92 0 0 1 1.09 3.37l-18.52 16.05 5.55 23.88a1.92 1.92 0 0 1-2.87 2.08l-21-12.65-21 12.65a1.92 1.92 0 0 1-2.87-2.08l5.55-23.88-18.53-16a1.93 1.93 0 0 1 1.1-3.38l24.42-2.09 9.54-22.58a1.93 1.93 0 0 1 3.55 0z"
                    fill="#F6C228"
                    data-color="1"
                  ></path>
                  <path
                    d="m379.31 1.18 9.54 22.58 24.42 2.1a1.92 1.92 0 0 1 1.1 3.37l-18.53 16.05 5.56 23.88a1.92 1.92 0 0 1-2.87 2.08l-21-12.65-21 12.65a1.92 1.92 0 0 1-2.86-2.08l5.55-23.88-18.53-16a1.93 1.93 0 0 1 1.09-3.38l24.43-2.09 9.54-22.58a1.93 1.93 0 0 1 3.55 0z"
                    fill="#F6C228"
                    data-color="1"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <p className="anton-regular">RATED 5 STARS</p>
          <div className="flex gap-5">
            <img src="./googlepod.png" className="pod-logo" />
            <img src="./youtube.webp" className="pod-logo" />
          </div>
          <p className="max-w-[750px] montserrat-small text-center">
            Join MD for a transformative session where you'll discover how to
            turn challenges into growth opportunities, empowering both
            individuals and businesses to reach their full potential and drive
            excellence in every facet of the corporate world.
          </p>
          <div className="flex items-center border border-white rounded-lg w-40 ml-2 mb-5">
            <a
              id="about-btn"
              className="py-2 px-4 border-r border-white"
              href={"https://www.youtube.com/@skillfixeditionwithmd6203"}
              target={"_blank"}
            >
              <p className="text-md">Follow MD</p>
            </a>
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

      <div id="testimonials" className="w-full">
        <div className="flex flex-col gap-20 sm:flex-row sm:gap-0 md:gap-24 mt-4 items-center justify-center px-2 sm:px-0 w-full">
          <div className="flex gap-5">
            <div className="flex flex-col gap-10 sm:gap-4 flex-wrap items-center justify-center">
              <div className="flex items-center gap-5">
                <img src="./lines.png" className="hidden sm:block" />\{" "}
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
              exercises and real-world examples you incorporated into the
              training made the material accessible and relatable. We are
              grateful for the time and effort you invested in this training.
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

      <Modal show={isModalOpen} onClose={toggleModal}>
        {modalContent}
      </Modal>
    </main>
  );
}
