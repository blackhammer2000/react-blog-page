import React from "react";
import "../css/blog.css";
import "../css/bootstrap.min.css";

const Blog = ({ data, index }) => {
  return (
    <div className="container-fluid border my-3 py-3">
      <div className="container-fluid text-left text-underline">
        <h5>
          {index + 1}: {data.title}
        </h5>
      </div>
      <div className="container-fluid text-left">
        <p>
          {data.description}
          <span className="text-info link">Read more...</span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
