import React from "react";
import { Link } from "react-router-dom";
import GithubLogo from "../assets/GITHUBicon.png";

function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              Redux Cart
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <li className="hover:scale-x-110 transition-transform">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:scale-x-110 transition-transform">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li className=" hover:scale-105 transition-transform">
            <a
              target="_blank"
              className="text-xl"
              href="https://github.com/AVIN4SH"
            >
              <img
                src={GithubLogo}
                alt="Github Logo"
                className="w-9  bg-black rounded-full"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
