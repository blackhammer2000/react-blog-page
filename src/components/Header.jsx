import React from "react";
import "./css/bootstrap.min.css";
import "./css/header.css";
import Heading from "./Heading";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container  text-center mt-3">
      <Heading />
      <Navbar />
    </div>
  );
};

export default Header;
