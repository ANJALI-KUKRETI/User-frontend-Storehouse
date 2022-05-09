import React from "react";
import { v4 as uuidv4 } from "uuid";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import eye from "../assets/eye.png";
import formatDate from "../utils/formate-date";
import truncate from "../utils/truncate-string";
import spinner from "../assets/spinner.gif";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CardContainer = ({ data }) => {
  const status = useSelector((state) => state.data.status);

  return (
    <div className="cardContainer">
      {status === "loading" && (
        <div className="loading">
          <img src={spinner} alt="spinner" />
        </div>
      )}
      {status === "loadingBlogs" && (
        <div className="loading">
          <img src={spinner} alt="spinner" />
        </div>
      )}
      {data.length === 0 && status === "idle" && (
        <div style={{ color: "white" }}>No Blogs Found!</div>
      )}
      {status === "idle" &&
        data.map((blog) => (
          <div className="card" key={uuidv4()}>
            <div className="bannerImage">
              <img src={blog.titleImage} alt={blog.title} />
              <div className="overlay"></div>
              <div className="title">{blog.title}</div>
            </div>
            <div className="cardContent">
              <div className="one">
                <div className="date">{formatDate(blog.date)}</div>
                <div className="views">
                  <img src={eye} alt="eye" /> 5k View
                </div>
              </div>
              <div className="content">
                {truncate(blog.content, 200)}{" "}
                <NavLink to={`/detail/${blog.id}`}> Read More</NavLink>
              </div>
              <div className="social">
                <img src={instagram} alt="insta" />
                <img src={youtube} alt="youtube" />
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardContainer;
