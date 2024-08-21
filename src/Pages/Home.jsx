import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "../Components/Modal";
import axios from "axios";
import BookButton from "../Components/BookButton";

export default function Home() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isTestimonial, setIsTestimonial] = useState(false);
  const [bookingTypes, setBookingTypes] = useState([]);
  const [signatureMessages, setSignatureMessages] = useState([]);

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
        signaturemsg.push(msg.topic);
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

  const toggleTestimonial = () => {
    setIsTestimonial(!isTestimonial);
  };

  const openTestimonialModal = () => {
    setModalContent(
      <div>
        <h2 className="text-2xl font-bold mb-4">Full Testimonial</h2>
        <p>
          The messages of dealing with adversity, building character and having
          faith could not have been more timely. Throughout 2020 I was always
          able to refer back to the message that Inky conveyed as the people of
          Smithereen navigated an uncertain and challenging time. I truly
          believe that Inky played a key role in my company's continued success.
        </p>
        <p className="mt-4 font-bold">- JACK JENNINGS</p>
        <p className="clients-h2">PRESIDENT, SMITHEREEN PEST MANAGEMENT</p>
      </div>
    );
    toggleModal();
    toggleTestimonial();
  };

  return (
    <main id="home" className="w-screen  text-white flex flex-col gap-8">
      <div id="nav-hero" className="h-screen">
        <div
          id="inner-hero"
          className="flex flex-col  gap-4 items-center justify-center  min-h-screen "
        >
          <div className="flex items-center justify-center gap-4 w-2/3">
            <img
              id="hero-inky"
              src="./Inky.webp"
              width={349}
              height={700}
              className="absolute  md:left-48 top-32 md:top-24"
            />
            <div
              id="hero-text"
              className="flex flex-col items-center justify-center z-20 mt-60 sm:mt gap-6"
            >
              <div className="flex flex-col items-start sm:items-center justify-start leading-none gap-2 uppercase">
                <p className="text-[#F6C228] anton-large">MD DELIVERS:</p>
                <p className="anton-large">Insight.</p>
                <p className="anton-large">Inspiration.</p>
                <p className="anton-large">Action.</p>
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
        className="flex flex-col items-center justify-center mt-80 xl:mt-52"
      >
        <h2 className="clients-h2 max-w-[530px] text-center text[#efefef]">
          SOME OF MD'S CLIENTS INCLUDE
        </h2>
        <div className="animate-fade-down">
          <img src="./clientlogos.png" />
        </div>
      </div>
      <div
        id="video"
        className="video-container faded-top faded-bottom relative"
      >
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

        <div className="absolute inset-0 bg-gradient"></div>
      </div>

      <Modal
        show={isModalOpen}
        onClose={toggleModal}
        isTestimonial={isTestimonial}
      >
        {modalContent}
      </Modal>

      <div
        id="meetinky"
        className="flex items-center justify-center flex-wrap gap-4"
      >
        <div className="flex flex-col gap-4 max-w-[600px] px-2">
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
        <img src="./inky2.webp" />
      </div>
      <div
        id="quote"
        className="flex flex-col items-center justify-center w-full relative px-4"
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
        <div className="flex flex-col gap-2 items-center max-w-[45rem] border border-[#636363] rounded-lg py-10 px-12">
          <p className="text-2xl text-center">
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
      <div className="flex flex-col items-center gap-8">
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
      <div id="testimonials">
        <div className="flex flex-col sm:flex-row gap-20 md:gap-24 mt-4 items-center justify-center px-2 sm:px-0 max-w-[98vw]">
          <div className="flex gap-5">
            <div className="flex flex-col gap-10 sm:gap-4 flex-wrap items-center justify-center">
              <div className="flex items-center">
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
          <div className="testimonial-container flex flex-col gap-5 border border-[#636363] rounded-xl lg:max-w-[40vw] h-fit p-10 relative ">
            <img
              src="./topquote.png"
              width={70}
              height={30}
              className="absolute top-[-30px] left-[-30px]"
            />
            <p>
              The messages of dealing with adversity, building character and
              having faith could not have been more timely. Throughout 2020 I
              was always able to refer back to the message that Inky conveyed as
              the people of Smithereen navigated an uncertain and challenging
              time. I truly believe that Inky played a key role in my company's
              continued success.
            </p>
            <div className="flex flex-col items-end gap-2">
              <p className="font-bold">-JACK JENNINGS</p>
              <p className="clients-h2">
                PRESIDENT, SMITHEREEN PEST MANAGEMENT
              </p>
              <div className="flex items-center border border-white rounded-lg w-56 ">
                <button
                  id="about-btn"
                  className="py-2 px-4 border-r border-white"
                  onClick={openTestimonialModal}
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
              width={70}
              height={30}
              className="absolute bottom-[-30px] right-[-20px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
