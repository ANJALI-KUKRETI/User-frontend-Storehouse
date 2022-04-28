import React, { useEffect } from "react";
import demo from "../assets/demo.png";
import instagram from "../assets/instagram.png";
import { v4 as uuidv4 } from "uuid";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import eye from "../assets/eye.png";
import "./Blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../Reducers/dataSlice";

const Blogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const blogs = useSelector((state) => state.data.blogs);
  console.log(blogs);
  return (
    <div className="cardContainer">
      {blogs.map((blog) => (
        <div className="card" key={uuidv4()}>
          <div className="bannerImage">
            <img src={blog.titleImage} alt="demo" />
            <div className="title">{blog.title}</div>
          </div>
          <div className="cardContent">
            <div className="one">
              <div className="date">02 Jan, 2023</div>
              <div className="views">
                <img src={eye} /> 5k View
              </div>
            </div>
            <div className="content">{blog.content}</div>
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

export default Blogs;
