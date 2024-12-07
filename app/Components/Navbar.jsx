"use client"; // Ensures client-side rendering

import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/Logo1.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0a192f] shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4 text-[#b7c2e1]">
        {/* Logo */}
        <Image
          className="cursor-pointer"
          src={Logo}
          width={50}
          height={50}
          alt="Oluwaseun's Logo"
          priority
        />

        {/* Hamburger Icon */}
        <div
          className="flex md:hidden flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
         <FaBars className="text-2xl cursor-pointer md:hidden" />
        </div>

        {/* Menu Links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:gap-8 absolute md:static top-[64px] left-0 w-full md:w-auto bg-[#0a192f] md:bg-transparent transition-transform duration-300 ${
            menuOpen ? "translate-x-full" : "-translate-x-0"
          } md:translate-x-0`}
        >
          <li className="py-2 md:py-0 text-center md:text-left cursor-pointer font-Mono text-sm hover:text-[#64feda] transition-all duration-200 ease-in-out">
            <span className="text-[#64feda] font-Mono">01.</span> About
          </li>
          <li className="py-2 md:py-0 text-center md:text-left cursor-pointer font-Mono text-sm hover:text-[#64feda] transition-all duration-200 ease-in-out">
            <span className="text-[#64feda] font-Mono">02.</span> Experience
          </li>
          <li className="py-2 md:py-0 text-center md:text-left cursor-pointer font-Mono text-sm hover:text-[#64feda] transition-all duration-200 ease-in-out">
            <span className="text-[#64feda] font-Mono">03.</span> Work
          </li>
          <li className="py-2 md:py-0 text-center md:text-left cursor-pointer font-Mono text-sm hover:text-[#64feda] transition-all duration-200 ease-in-out">
            <span className="text-[#64feda] font-Mono">04.</span> Contact
          </li>
          <li className="py-2 md:py-0 text-center">
            <button className="px-4 py-2 border-[1px] font-Mono border-[#64feda] text-[#64feda] rounded-md transition-all duration-200 ease-in-out hover:outline hover:outline-3">
              <a href="/Oluwaseun Resume.pdf" download="Oluwaseun_Resume.pdf">
                Resume
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
