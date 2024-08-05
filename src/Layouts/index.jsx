import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const closeSideNav = () => {
    setSideNavOpen(false);
  };

  return (
    <>
      <ScrollToTop />
      <div className="w-screen flex flex-col items-center justify-center relative">
        <nav className="flex items-center justify-between text-white w-[95vw] px-10 absolute top-0">
          <img
            src="./inkylogo.png"
            width={110}
            height={110}
            alt="Inky Logo"
            className=""
          />
          <ul className="hidden sm:flex items-center gap-8">
            <li>
              <NavLink activeClassName="active" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li className="bg-[#F6C228] text-black font-bold py-1 px-3 rounded-lg">
              <Link to="/book">Book Now</Link>
            </li>
          </ul>
          <div onClick={toggleSideNav} className="sm:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F6C228"
              className="size-6"
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
              <li className="bg-[#F6C228] text-black font-bold py-1 px-3 rounded-lg">
                <Link to="/book" onClick={closeSideNav}>
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <Outlet />
        <footer className="flex flex-col items-center justify-center gap-2 mt-10 w-screen">
          <img src="./footerlogo.png" alt="Footer Logo" />
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
