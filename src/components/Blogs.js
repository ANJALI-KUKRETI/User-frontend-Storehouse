import React, { useEffect, useState } from "react";

import "./Blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, getNextBlogs, getPrevBlogs } from "../Reducers/dataSlice";
import CardContainer from "./CardContainer";

const Blogs = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  const blogs = useSelector((state) => state.data.blogs);
  const last = useSelector((state) => state.data.last);
  const first = useSelector((state) => state.data.first);
  const length = useSelector((state) => state.data.length);
  const status = useSelector((state) => state.data.status);
  const moveNextHandler = (e) => {
    e.preventDefault();
    dispatch(getNextBlogs(last));
    setPage(page + 1);
  };
  const movePrevHandler = (e) => {
    e.preventDefault();
    setPage(page - 1);
    dispatch(getPrevBlogs(first));
  };
  return (
    <div>
      <CardContainer data={blogs} />
      {status === "idle" && (
        <div className="pageBtns">
          <div>
            {page > 1 && <button onClick={movePrevHandler}>Prev</button>}
          </div>
          <div>
            {length / (4 * page) > 1 && (
              <button onClick={moveNextHandler}>Next</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
