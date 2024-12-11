"use client"; // Ensures client-side rendering

import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/Logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0a192f] shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4 text-[#b7c2e1]">
        {/* Logo */}
        <a href="#hero">
          <Image
            className="cursor-pointer w-10 h-auto md:w-14"
            src={Logo}
            alt="Oluwaseun's Logo"
            priority
          />
        </a>
        {/* Hamburger Icon */}
        <div
          className="flex md:hidden flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes className="text-2xl" /> // Close (X) icon
          ) : (
            <FaBars className="text-2xl" /> // Hamburger icon
          )}
        </div>

        {/* Menu Links */}
        <ul
          className={`flex flex-col items-center justify-center gap-6 md:flex-row md:items-center md:gap-8 absolute md:static top-[64px] left-0 w-full md:w-auto bg-[#0a192f] md:bg-transparent transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <li className="py-2 md:py-0 font-Mono text-sm hover:text-[#64feda] transition-all duration-200 ease-in-out">
            <Link href="#about" onClick={() => setMenuOpen(false)}>
              <span className="text-[#64feda] font-Mono">01.</span> About
            </Link>
          </li>
          <li className="py-2 md:py-0 font-Mono text-sm hover:text-[#64feda] transition-all duration-200 ease-in-out">
            <Link href="#experience" onClick={() => setMenuOpen(false)}>
              <span className="text-[#64feda] font-Mono">02.</span> Experience
            </Link>
          </li>
          <li className="py-2 md:py-0 font-Mono text-sm hover:text-[#64feda] transition-all duration-200 ease-in-out">
            <Link href="#projects" onClick={() => setMenuOpen(false)}>
              <span className="text-[#64feda] font-Mono">03.</span> Projects
            </Link>
          </li>
          <li className="py-2 md:py-0 font-Mono text-sm hover:text-[#64feda] transition-all duration-200 ease-in-out">
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              <span className="text-[#64feda] font-Mono">04.</span> Contact
            </Link>
          </li>
          <li className="py-2 md:py-0">
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
