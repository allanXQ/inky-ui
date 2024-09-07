import React, { useState } from "react";
import axios from "axios";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookButton from "../Components/BookButton";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const closeSideNav = () => {
    setSideNavOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRequestQuote = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setIsLoading(true);
    setMessage("");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/request-quote",
        { email }
      );
      setMessage("Quote requested successfully! Please check your email.");
      setEmail(""); // Clear the input after successful submission
    } catch (error) {
      setMessage("Failed to request quote. Please try again.");
      console.error("Error requesting quote:", error);
    }
    setIsLoading(false);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (e) => {
    e.preventDefault();

    if (location.pathname !== "/home") {
      navigate("/home", { state: { scrollTo: "podcasts" } });
    } else {
      const section = document.getElementById("podcasts");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const SideNav = () => (
    <nav
      id="side-nav"
      className="flex z-20 sm:hidden flex-col py-10 px-5 bg-[rgba(0,0,0,0.9)] absolute top-0 right-0 w-[70vw] h-full"
    >
      <div className="flex justify-end mb-10">
        <div onClick={closeSideNav} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#F6C228"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex  justify-evenly">
        <div data-testid="svgRoot-comp-ky2hvz0a" className="w-36 ">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="0 0 770.35 1260.4"
            viewBox="0 0 770.35 1260.4"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="presentation"
            aria-hidden="true"
            className="absolute left-10 top-0 size-56"
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

        <ul className="flex flex-col text-white items-end gap-8 anton-nav max-w-44 mt-44">
          <li>
            <NavLink activeClassName="active" to="/home" onClick={closeSideNav}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/about"
              onClick={closeSideNav}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="podcasts"
              onClick={handleNavigation}
            >
              Podcast
            </NavLink>
          </li>
          <li className="bg-[#F6C228] text-black font-bold py-2 px-4 rounded-lg anton-nav">
            <Link className="book-nav" to="/book" onClick={closeSideNav}>
              Book MD
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <>
      <ScrollToTop />
      <div className="w-screen flex flex-col items-center justify-center relative">
        <nav className="flex items-center justify-between text-white w-full px-10 fixed top-0 z-10 py-2 mt-4 bg-opacity-85">
          <img src="./gold.png" alt="Inky Logo" className="h-14" />
          <ul className="hidden sm:flex items-end gap-8 ">
            <li>
              <NavLink
                activeClassName="active"
                to="/home"
                className="montserrat-nav"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="/about"
                className="montserrat-nav"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="podcasts"
                onClick={handleNavigation}
                className="montserrat-nav"
              >
                Podcast
              </NavLink>
            </li>
            <li className="bg-[#F6C228] text-black font-semibold py-[0.5px] px-2 rounded-md flex items-end justify-center hover:bg-white hover:text-black">
              <Link to="/book" className="text-lg hover:text-black">
                Book Now
              </Link>
            </li>
          </ul>
          <div onClick={toggleSideNav} className="sm:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F6C228"
              className="size-10"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </nav>
        {sideNavOpen && <SideNav />}
        <Outlet />
        <footer className="flex flex-col items-center justify-center gap-2 mt-10 w-screen">
          <div id="cta" className="flex items-center justify-center mt-5">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-white text-3xl text-center anton-regular">
                    Ready to elevate your team?
                  </p>
                  <p className="text-white text-sm">Request a Service Quote</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  {/*<input*/}
                  {/*  type="email"*/}
                  {/*  placeholder="Enter your email address"*/}
                  {/*  className="border border-white rounded-md w-64 px-4 py-2"*/}
                  {/*  value={email}*/}
                  {/*  onChange={handleEmailChange}*/}
                  {/*/>*/}
                  <BookButton
                    text={isLoading ? "Loading..." : "Get Quote"}
                    onClick={handleRequestQuote}
                  />
                </div>
                {message && (
                  <p className="text-center text-white mt-2">{message}</p>
                )}
              </div>
            </form>
          </div>
          <img
            src="./footerlogo.png"
            alt="Footer Logo"
            width={100}
            height={100}
          />
          <div>
            <p className="text-white text-md text-center">
              Affiliated Businesses
            </p>
            <div className={"flex justify-center text-sm"}>
              <a
                href={"#"}
                className={"text-gray-500 hover: text-[#F6C228] m-2"}
              >
                Skillfix
              </a>

              <a
                href={"#"}
                className={"text-gray-500 hover: text-[#F6C228] m-2"}
              >
                Viri
              </a>

              <a
                href={"#"}
                className={"text-gray-500 hover: text-[#F6C228] m-2"}
              >
                Techlup
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 w-[100%] h-14">
            <img src="./ig.webp" alt="Instagram" className="social-icons" />
            <img src="./fb.webp" alt="Facebook" className="social-icons" />
            <img src="./x.webp" alt="X" className="social-icons" />
            <img
              src="./linkedin.webp"
              alt="LinkedIn"
              className="social-icons"
            />
            <img src="./yt.webp" alt="YouTube" className="social-icons" />
          </div>
          <p className="text-white text-center mb-4">
            © 2024. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
