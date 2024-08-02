import React, { Children } from "react";
import { Outlet } from "react-router";

const Layout = ({ children }) => {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <nav className="flex items-center justify-between text-white w-screen px-10">
        <div className="">
          <img src="./inkylogo.png" width={100} height={100} alt="Inky Logo" />
        </div>
        <ul className="flex items-center gap-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li className="bg-[#F6C228] text-black font-bold py-1 px-3 rounded-lg">
            <a href="#">Book Now</a>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer className="flex flex-col items-center justify-center gap-2 mt-10 w-screen">
        <img src="./footerlogo.png" />
        <div className="flex items-center justify-center gap-2">
          <img src="./ig.webp" />
          <img src="./fb.webp" />
          <img src="./x.webp" />
          <img src="./linkedin.webp" />
          <img src="./yt.webp" />
        </div>
        <p className="text-white text-center">
          © 2023 by Inky Johnson. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
