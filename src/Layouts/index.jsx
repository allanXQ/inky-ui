import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center relative">
      {/* <nav className="flex items-center justify-between text-white w-screen px-10 absolute top-0">
        <div className="">
          <img
            src="./inkylogo.png"
            width={110}
            height={110}
            alt="Inky Logo"
            className="ml-28 mt-2"
          />
        </div>
        <ul className="flex items-center gap-8">
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
      </nav> */}
      <Outlet />
      {/* <footer className="flex flex-col items-center justify-center gap-2 mt-10 w-screen">
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
      </footer> */}
    </div>
  );
};

export default Layout;
