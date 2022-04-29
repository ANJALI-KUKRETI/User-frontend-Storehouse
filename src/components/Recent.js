import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../Reducers/dataSlice";
import spinner from "../assets/spinner.gif";
import { v4 as uuidv4 } from "uuid";
import formatDate from "../utils/formate-date";
import "./Recent.css";

const Recent = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.data.status);
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const blogs = useSelector((state) => state.data.recents);
  const temp = blogs.slice(0, 3);
  return (
    <div className="card">
      <div className="headingR">Recent Posts</div>
      {status === "loading" && (
        <div className="loading">
          <img src={spinner} alt="spinner" />
        </div>
      )}
      {temp.length === 0 && status === "idle" && (
        <div style={{ textAlign: "center" }}>No Blogs Found!</div>
      )}
      {temp.map((t) => (
        <div className="row" key={uuidv4()}>
          <div className="imageT">
            <img src={t.titleImage} />
          </div>
          <div className="details">
            <div className="titleR">{t.title}</div>
            <div className="down">
              <div className="dateR">{formatDate(t.date)}</div>
              <div className="comments">23 comments</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recent;
