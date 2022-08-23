import React from "react";
import "../css/bootstrap.min.css";
import "../css/footer.css";
import { currentYear } from "../../utilities/year";

const Footer = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <h6 className="text-center text-white-50 font-italic font-weight-bold">
        &copy; PANG'ANG'A {currentYear}
      </h6>
    </div>
  );
};

export default Footer;
