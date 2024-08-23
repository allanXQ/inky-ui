import React, { useState } from "react";
import axios from "axios";
import { Outlet, NavLink, Link } from "react-router-dom";
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

  return (
    <>
      <ScrollToTop />
      <div className="w-screen flex flex-col items-center justify-center relative">
        <nav className="flex items-center justify-between text-white w-[95vw] px-10 fixed top-0 z-10">
          <img
            src="./inkylogo.png"
            width={150}
            height={150}
            alt="Inky Logo"
            className=""
          />
          <ul className="hidden sm:flex items-center gap-8 ">
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
            <li className="bg-[#F6C228] text-black font-semibold w-[6.5rem] h-[2rem] rounded-md flex items-center justify-center hover:bg-white hover:text-black">
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
        {sideNavOpen && (
          <nav
            id="side-nav"
            className="flex z-20 sm:hidden flex-col py-10 px-5 bg-black bg-opacity-90 absolute top-0 right-0 w-40 h-fit"
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
            <ul className="flex flex-col text-white items-center gap-8">
              <li>
                <NavLink
                  activeClassName="active"
                  to="/home"
                  onClick={closeSideNav}
                >
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
              <li className="bg-[#F6C228] text-black font-bold py-2 px-4 rounded-lg">
                <Link className="book-nav" to="/book" onClick={closeSideNav}>
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <Outlet />
        <footer className="flex flex-col items-center justify-center gap-2 mt-10 w-screen">
          <div id="cta" className="flex items-center justify-center mt-5">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-white text-3xl text-center">
                    Ready to elevate your team?
                  </p>
                  <p className="text-white text-sm">Request a Service Quote</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="border border-white rounded-md w-64 px-4 py-2"
                    value={email}
                    onChange={handleEmailChange}
                  />
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
            width={150}
            height={150}
          />
          <div className="flex items-center justify-center gap-2">
            <img src="./ig.webp" alt="Instagram" />
            <img src="./fb.webp" alt="Facebook" />
            <img src="./x.webp" alt="X" />
            <img src="./linkedin.webp" alt="LinkedIn" />
            <img src="./yt.webp" alt="YouTube" />
          </div>
          <p className="text-white text-center">
            © 2023 by Inky Johnson. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
