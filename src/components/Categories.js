import React, { useEffect, useState } from "react";
import { getBlogsCategoryWise, getCategories } from "../Reducers/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import spinner from "../assets/spinner.gif";
import "./Categories.css";

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.data.status);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const showCategoryWiseHandler = (category) => {
    dispatch(getBlogsCategoryWise(category));
  };

  const categories = useSelector((state) => state.data.categories);

  const newCat = [{ categoryName: "All" }, ...categories];

  return (
    <div className="card">
      <div className="headingR">Categories</div>
      {status === "loading" && (
        <div className="loading">
          <img src={spinner} alt="spinner" />
        </div>
      )}
      <div className="categoriesR">
        {newCat.map((cat) => {
          let name = cat.categoryName;
          name = name.replace(/\s+/g, "-");
          const url = `/${name}`;
          return (
            <NavLink
              style={{ textDecoration: "none" }}
              to={url}
              className="cat"
              key={cat.categoryName}
              onClick={() => showCategoryWiseHandler(cat.categoryName)}
            >
              {cat.categoryName}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
