import React from "react";
import "./css/bootstrap.min.css";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <div className="container  d-flex justify-content-center align-items-center">
      <ul className="list-unstyled d-flex justify-content-center align-items-center ">
        <li className="mx-1 px2 ">
          <button className="btn btn-outline-primary border-0" type="submit">
            Home
          </button>
        </li>
        <li className="mx-1 px2 ">
          <button className="btn btn-outline-primary border-0" type="submit">
            About
          </button>
        </li>
        <li className="mx-1 px2 ">
          <button className="btn btn-outline-primary border-0" type="submit">
            Services
          </button>
        </li>
        <li className="mx-1 px2 ">
          <button className="btn btn-outline-primary border-0" type="submit">
            Projects
          </button>
        </li>
        <li className="mx-1 px2 ">
          <button className="btn btn-outline-primary border-0" type="submit">
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
