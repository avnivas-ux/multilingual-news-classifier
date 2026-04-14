import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar
fixed top-0 left-0 z-50 bg-[#00040f] px-6">

      {/* LOGO */}
      <h1 className="text-white text-xl font-bold">
        Fake News Detector
      </h1>

      {/* DESKTOP MENU */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
  
  {/* HOME */}
  <li className="mr-10 text-white cursor-pointer">
    <a href="#home">Home</a>
  </li>

  {/* PREDICTION (ROUTE) */}
  <li className="mr-10 text-white cursor-pointer">
    <a href="#prediction">Prediction</a>
  </li>

  {/* ABOUT */}
  <li className="mr-10 text-white cursor-pointer">
    <a href="#about">About Us</a>
  </li>

  {/* FEEDBACK */}
  <li className="text-white cursor-pointer">
    <a href="#feedback">Feedback</a>
  </li>

</ul>

      {/* MOBILE MENU */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? "hidden" : "flex"} 
          p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>

          <ul className="list-none flex flex-col">
            <li className="mb-4 text-white">
              <Link to="/" onClick={() => setToggle(false)}>Home</Link>
            </li>
            <li className="text-white">
              <Link to="/prediction" onClick={() => setToggle(false)}>Prediction</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;