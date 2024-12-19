import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBiohazard,
  FaCheese,
  FaFacebook,
  FaInstagram,
  FaMagnet,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const DropDown = ({ isOpen, toggleDropdown }) => {
  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className=" text-black font-bold ml-[0.5px]"
      >
        ☰
      </button>

      {isOpen && (
        <nav className="absolute mt-2 right-1 z-10 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <button
            onClick={() => handleScroll("home")}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("stock-market")}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Stock Market
          </button>
          <button
            onClick={() => handleScroll("technology")}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Technology
          </button>
          <button
            onClick={() => handleScroll("politics")}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Politics
          </button>
        </nav>
      )}
    </div>
  );
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const [isMobile, setIsMobile] = useState(false); // State for mobile detection

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1262); // Change this value based on your design breakpoint
  };

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleResize(); // Check initial window size
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);
  return (
    <div className="bg-slate-100 mt-64 relative h-[100%]">
      <div>
        <div className="pt-28 flex justify-between items-center mx-8 border-b-2 border-black py-10">
          <h1 className="text-2xl font-bold">Tale of Times</h1>
          {isMobile ? (
            <DropDown isOpen={isOpen} toggleDropdown={toggleDropdown} />
          ) : (
            <div className="flex justify-center p-4">
              <button
                onClick={() => handleScroll("home")}
                className="mx-5 text-blue-500 hover:text-black"
              >
                Home
              </button>
              <button
                onClick={() => handleScroll("stock-market")}
                className="mx-5 text-blue-500 hover:text-black"
              >
                Stock Market
              </button>
              <button
                onClick={() => handleScroll("technology")}
                className="mx-5 text-blue-500 hover:text-black"
              >
                Technology
              </button>
              <button
                onClick={() => handleScroll("politics")}
                className="mx-5 text-blue-500 hover:text-black"
              >
                Politics
              </button>
            </div>
          )}
        </div>

        <div className="container mt-5 w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="about">
            <h1 className="text-lg font-bold mb-4">About</h1>
            <p className="text-sm">Your Daily Dose of Inspiration.</p>
          </div>
          <div className="company">
            <p className="text-lg font-bold mb-4">Follow Us</p>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/3Daqhbj"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/3ANQ1JF"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaFacebook /> Facebook
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/40QCvQ1"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/3YVRDc6"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaYoutube /> Youtube
              </a>
            </div>
          </div>

          <div className="company">
            <p className="text-lg font-bold mb-4">Company</p>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/40Wk9NL"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaSnapchat /> SnapChat
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/4g6438Y"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaCheese /> Jaco Video
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/49y2Cxw"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaBiohazard /> Bigo Live
              </a>
              {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/4g6438Y"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaCheese /> Cheele Video
              </a> */}
            </div>
          </div>

          <div className="company">
            <p className="text-lg font-bold mb-4">Legal</p>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/4eYRx9I"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaTiktok /> TikTok
              </a>
              {/* <a
                target="_blank"
                rel="noreferrer"
                href="/"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaSnapchat /> Snack Video
              </a> */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/3CTRejl"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaMagnet /> Mate Live
              </a>
              {/* <a
                target="_blank"
                rel="noreferrer"
                href="/"
                className="hover:text-blue-400 my-2 flex items-center gap-2"
              >
                <FaTwitter /> Threads
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center p-11 m-sm:mx-auto">
        <p>Copyright © 2024 Tale of Times Blog</p>
        <p>Powered by Tale of Times Blog</p>
      </div>
    </div>
  );
};

export default Footer;
