import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DropDown = ({ isOpen, toggleDropdown }) => {
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
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Stock Market
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Technology
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Politics
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Automobile
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Health
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Interactive Sessions
          </Link>
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
              <Link to="/" className="mx-5 text-blue-500 hover:text-black">
                Home
              </Link>
              <Link to="/" className="mx-5 text-blue-500 hover:text-black">
                Stock Market
              </Link>
              <Link to="/" className="mx-5 text-blue-500 hover:text-black">
                Technology
              </Link>
              <Link to="/" className="mx-5 text-blue-500 hover:text-black">
                Politics
              </Link>
              <Link to="/" className="mx-5 text-blue-500 hover:text-black">
                Automobile
              </Link>
              <Link to="/" className="mx-5 text-blue-500 hover:text-black">
                Health
              </Link>
              <Link
                to="/"
                className="mr-10 ml-3 text-blue-500 hover:text-black"
              >
                Interactive Sessions
              </Link>
            </div>
          )}
        </div>

        <div className="container mt-5 w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="about">
            <h1 className="text-lg font-bold mb-4">About</h1>
            <p className="text-sm">Your Daily Dose of Inspiration.</p>
          </div>

          <div className="company">
            <p className="text-lg font-bold mb-4">Company</p>
            <div>
              <Link to="/" className="block hover:text-blue-400 my-2">
                About Us
              </Link>
              <Link to="/" className="block hover:text-blue-400 my-2">
                Contact Us
              </Link>
              <Link to="/" className="block hover:text-blue-400 my-2">
                Our Staff
              </Link>
              <Link to="/" className="block hover:text-blue-400 my-2">
                Advertise
              </Link>
            </div>
          </div>

          <div className="company">
            <p className="text-lg font-bold mb-4">Legal</p>
            <div>
              <Link to="/" className="block hover:text-blue-400 my-2">
                Privacy Policy
              </Link>
              <Link to="/" className="block hover:text-blue-400 my-2">
                Terms of Service
              </Link>
              <Link to="/" className="block hover:text-blue-400 my-2">
                Extra Crunch Terms
              </Link>
              <Link to="/" className="block hover:text-blue-400 my-2">
                Code of Conduct
              </Link>
            </div>
          </div>

          <div className="company">
            <p className="text-lg font-bold mb-4">Follow Us</p>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://youtube.com/@talesoftime02?si=msPORngoDTuvUGd7"
                className="block hover:text-blue-400 my-2"
              >
                Youtube
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/taleoftime02/profilecard/?igsh=MWZoZ2h6bjQwMGx4YQ=="
                className="block hover:text-blue-400 my-2"
              >
                Instagram
              </a>
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
