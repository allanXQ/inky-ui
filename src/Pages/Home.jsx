import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Modal from "../Components/Modal";
import axios from "axios";
import BookButton from "../Components/BookButton";
import ImageSlider from "../Components/ImageSlider";

export default function Home() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [bookingTypes, setBookingTypes] = useState([]);
  const [signatureMessages, setSignatureMessages] = useState([]);

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

  useEffect(() => {
    const fetchBookingTypes = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/booking-types"
      );
      const booktypes = [];
      response.data.forEach((book) => {
        booktypes.push(book.name);
      });
      setBookingTypes(booktypes);
    };
    const fetchSignatureMessages = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/signature-message-topics"
      );
      const signaturemsg = [];
      response.data.forEach((msg) => {
        signaturemsg.push(msg.name);
      });

      setSignatureMessages(signaturemsg);
    };

    fetchBookingTypes();
    fetchSignatureMessages();
  }, []);

  const typeswithicons = [];

  bookingTypes.forEach((type) => {
    switch (type) {
      case "Live & Virtual Keynotes":
        typeswithicons.push({ type, icon: "./icons/speaker.png" });
        break;
      case "Breakout Sessions":
        typeswithicons.push({ type, icon: "./icons/happy-children.png" });
        break;
      case "Corporate Emcee":
        typeswithicons.push({ type, icon: "./icons/microphone.png" });
        break;
      case "Corporate Training":
        typeswithicons.push({ type, icon: "./icons/breakout.png" });
        break;
      case "Team Building":
        typeswithicons.push({ type, icon: "./icons/arm-wrestling.png" });
        break;
      default:
        break;
    }
  });

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
      <div id="video" className="video-container  relative w-full">
        <div className="absolute inset-0 bg-gradient"></div>
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          className="h-[480px] w-full object-cover"
        >
          <source src="./file.mp4" type="video/mp4" />
        </video>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="size-28 z-20 absolute top-44 left-[44vw] cursor-pointer"
          onClick={() => {
            setModalContent(
              <video
                id="hero-video-modal"
                controls
                className="w-full h-full object-cover"
              >
                <source src="./file.mp4" type="video/mp4" />
              </video>
            );
            toggleModal();
          }}
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <Modal show={isModalOpen} onClose={toggleModal}>
        {modalContent}
      </Modal>

      <div
        id="meetinky"
        className="flex items-center justify-center flex-wrap gap-10"
      >
        <div className="flex flex-col gap-4 max-w-[600px] px-2 mt-10 md:mt-20">
          <div className="flex">
            <img src="./lines.png" className="" />

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
                Training. With a magnetic presence and an unwavering commitment
                to igniting change, MD Has redefined the very essence of
                inspiration, leaving an indelible mark on all who encounter his
                teachings. Prepare to embark on a profound journey of
                transformation as MD shares invaluable insights, equipping you
                with the essential tools, mindset, and strategies needed to not
                only lead with purpose but to soar to unparalleled heights of
                success. Through electrifying presentations and unparalleled
                expertise, MD empowers individuals and organizations alike to
                unlock their fullest potential, fostering a culture of
                excellence and achievement
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
          <img src="./meet-md.png" className="max-w-[300px] md:max-w-[500px]" />
        </div>
      </div>
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
      <div
        id="booking"
        className="flex flex-col items-center justify-center gap-4"
      >
        <p className="about-h3 text-[#F6C228] text-center">
          MD IS CURRENTLY BOOKING FOR:
        </p>
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {typeswithicons.map((type) => (
            <div
              key={type.type}
              className="flex flex-col items-center justify-center gap-2 w-52 h-48 border border-[#636363] rounded-md"
            >
              <img src={type.icon} />
              <p className="text-center">{type.type}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 mb-5">
        <p className="about-h3 text-[#F6C228] text-center">
          SIGNATURE MESSAGE TOPICS:
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {signatureMessages.map((message) => (
            <div
              key={message}
              className="flex  items-center justify-center gap-2 px-2 w-40 h-16 border border-[#636363] rounded-lg"
            >
              <p className="text-center">{message}</p>
            </div>
          ))}
        </div>
        <BookButton text="Book Now" path="book" />
      </div>
      <div id="podcasts" className="w-full flex flex-col  gap-5">
        <div className="pod-img">
          <div className=" w-full flex items-center justify-center min-h-96">
            {/*<img src="./inky and oak-final.webp" className=" mt-36 z-0" />*/}
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
    </main>
  );
}
