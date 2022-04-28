import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="card">
      <div className="headingR">Categories</div>
      <div className="categoriesR">
        <div className="cat active">Self Storage</div>
        <div className="cat">Storage</div>
        <div className="cat">Moving</div>
        <div className="cat">Packing</div>
        <div className="cat">Packing and Moving </div>
      </div>
    </div>
  );
};

export default Categories;
