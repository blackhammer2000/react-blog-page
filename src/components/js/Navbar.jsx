import React from "react";
import "../css/bootstrap.min.css";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container  d-flex justify-content-center align-items-center">
      <ul className="w-75 list-unstyled d-flex justify-content-center align-items-center ">
        <li className="mx-1 px2 ">
          <Link to={"/"} className="btn btn-outline-primary border-0">
            Home
          </Link>
        </li>
        <li className="mx-1 px2 ">
          <Link to={"/"} className="btn btn-outline-primary border-0">
            About
          </Link>
        </li>
        <li className="mx-1 px2 ">
          <Link to={"/"} className="btn btn-outline-primary border-0">
            Services
          </Link>
        </li>
        <li className="mx-1 px2 ">
          <Link to={"/"} className="btn btn-outline-primary border-0">
            Projects
          </Link>
        </li>
        <li className="mx-1 px2 ">
          <Link to={"/"} className="btn btn-outline-primary border-0">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
