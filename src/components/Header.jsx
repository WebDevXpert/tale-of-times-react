import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-96 bg-slate-100 text-black transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="text-2xl font-bold w-[87%] m-4 text-right"
        onClick={toggleSidebar}
      >
        ✕
      </button>
      <nav className="flex flex-col mt-10">
        <button
          onClick={() => handleScroll("home")}
          className="mx-5 text-blue-400 my-2"
        >
          Home
        </button>
        <button
          onClick={() => handleScroll("stock-market")}
          className="mx-5 hover:text-blue-400  my-2"
        >
          Stock Market
        </button>
        <button
          onClick={() => handleScroll("technology")}
          className="mx-5 hover:text-blue-400 my-2"
        >
          Technology
        </button>
        <button
          onClick={() => handleScroll("politics")}
          className="mx-5 hover:text-blue-400 my-2"
        >
          Politics
        </button>
      </nav>
    </div>
  );
};

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // For hamburger menu
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="p-3">
        <div className="topbar flex items-center justify-around">
          <Icon icon="ic:twotone-search" width="2.3em" height="2.3em" />
          <Link to="/" className="">
            <h1 className="text-2xl font-bold">Tale of Times</h1>
          </Link>
          <div className="flex items-center gap-4">
            <p>{user?.user?.firstName}</p>
            {/* <button
              className="text-[15px] p-[5px] group hover:bg-black border-black border-[1px]"
              onClick={() => (user?.user ? logout() : navigate("/login"))}
            >
              <p className="group-hover:text-white font-bold">
                {user?.user ? "Logout" : "Login"}
              </p>
            </button> */}
          </div>
        </div>

        <div className="flex justify-center p-4">
          {user?.user?.role === "admin" ? (
            <>
              <button onClick={() => handleScroll("home")} className="mx-5">
                Home
              </button>
              <button
                onClick={() => handleScroll("stock-market")}
                className="mx-5"
              >
                Stock Market
              </button>
              <button
                onClick={() => handleScroll("technology")}
                className="mx-5"
              >
                Technology
              </button>
              <button onClick={() => handleScroll("politics")} className="mx-5">
                Politics
              </button>
              <Link to="/admin/blogs" className="mx-5">
                Blogs
              </Link>
            </>
          ) : (
            <>
              <button onClick={() => handleScroll("home")} className="mx-5">
                Home
              </button>
              <button
                onClick={() => handleScroll("stock-market")}
                className="mx-5"
              >
                Stock Market
              </button>
              <button
                onClick={() => handleScroll("technology")}
                className="mx-5"
              >
                Technology
              </button>
              <button onClick={() => handleScroll("politics")} className="mx-5">
                Politics
              </button>
              {user?.user && (
                <Link to="/admin/blogs" className="mr-10 ml-3">
                  Blogs
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
