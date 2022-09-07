import React from "react";
import "../css/bootstrap.min.css";

const Createblog = () => {
  return (
    <form action="" method="post" className="form container">
      <div className="form-group">
        <label htmlFor="">Blog Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Blog Title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Blog Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Blog description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Blog Author</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Blog Author"
        />
      </div>
      <button className="btn btn-outline-primary">Save Blog</button>
    </form>
  );
};

export default Createblog;
