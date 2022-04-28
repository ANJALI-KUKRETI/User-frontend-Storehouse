import React, { useEffect } from "react";
import { getCategories } from "../Reducers/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import spinner from "../assets/spinner.gif";
import "./Categories.css";

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.data.status);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const categories = useSelector((state) => state.data.categories);
  console.log(categories);
  return (
    <div className="card">
      <div className="headingR">Categories</div>
      {status === "loading" && (
        <div className="loading">
          <img src={spinner} alt="spinner" />
        </div>
      )}
      <div className="categoriesR">
        {categories.map((cat) => (
          <div className="cat" key={cat.categoryName}>
            {cat.categoryName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
