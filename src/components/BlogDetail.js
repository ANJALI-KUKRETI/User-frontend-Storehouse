import React, { useEffect } from "react";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import formatDate from "../utils/formate-date";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./BlogDetail.css";
import { getBlogs } from "../Reducers/dataSlice";

const BlogDetail = () => {
  const blogId = useParams().id;
  const blogs = useSelector((state) => state.data.blogs);
  const currBlog = blogs.find((blog) => blog.id === blogId);
  return (
    <div className="wrapper">
      <div className="bannerImg">
        <img src={currBlog.titleImage} alt="" />
        <div className="icons">
          <img src={instagram} alt="insta" />
          <img src={youtube} alt="youtube" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
      <div className="wrapperDown">
        <div className="titleDetail">{currBlog.title}</div>
        <div className="authorAndView">
          <div className="author">{currBlog.author}</div>
          <div className="views">5k View</div>
        </div>
        <div className="contentDetail">{currBlog.content}</div>
        <div className="dateDetail">{formatDate(currBlog.date)}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
