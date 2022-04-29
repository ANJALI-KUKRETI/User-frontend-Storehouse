import React, { useEffect } from "react";

import "./Blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../Reducers/dataSlice";
import CardContainer from "./CardContainer";

const Blogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  const blogs = useSelector((state) => state.data.blogs);

  return <CardContainer data={blogs} />;
};

export default Blogs;
