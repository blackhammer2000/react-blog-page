import React from "react";
import "../css/bootstrap.min.css";
import Blog from "./Blog";
import { news } from "../../database/database";

const Blogs = () => {
  return (
    <div className="container d-flex justify-content-start align-items-center mt-4 flex-column">
      {news.map((bulletin, index) => {
        return <Blog data={bulletin} index={index} />;
      })}
    </div>
  );
};

export default Blogs;
