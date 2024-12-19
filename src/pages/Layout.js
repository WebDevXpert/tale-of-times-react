import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();

  // Define routes where Navbar and Footer should not be displayed
  const excludedRoutes = ["/login"];

  return (
    <>
      {!excludedRoutes.includes(location.pathname) && <Header />}
      <div className="content">
        <Outlet />
      </div>
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
