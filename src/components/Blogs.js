import React from "react";
import demo from "../assets/demo.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import eye from "../assets/eye.png";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="bannerImage">
          <img src={demo} alt="demo" />
          <div className="title">Storehouse is funded in 2018</div>
        </div>
        <div className="cardContent">
          <div className="one">
            <div className="date">02 Jan, 2023</div>
            <div className="views">
              <img src={eye} /> 5k View
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            commodi ullam numquam facilis voluptatem hic ducimus nulla
            voluptatum ad error sunt doloremque inventore beatae
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
      <div className="card">
        <div className="bannerImage">
          <img src={demo} alt="demo" />
          <div className="title">Storehouse is funded in 2018</div>
        </div>
        <div className="cardContent">
          <div className="one">
            <div className="date">02 Jan, 2023</div>
            <div className="views">
              <img src={eye} /> 5k View
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            commodi ullam numquam facilis voluptatem hic ducimus nulla
            voluptatum ad error sunt doloremque inventore beatae
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
      <div className="card">
        <div className="bannerImage">
          <img src={demo} alt="demo" />
          <div className="title">Storehouse is funded in 2018</div>
        </div>
        <div className="cardContent">
          <div className="one">
            <div className="date">02 Jan 2023</div>
            <div className="views">
              <img src={eye} /> 5k View
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            commodi ullam numquam facilis voluptatem hic ducimus nulla
            voluptatum ad error sunt doloremque inventore beatae
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
      <div className="card">
        <div className="bannerImage">
          <img src={demo} alt="demo" />
          <div className="title">Storehouse is funded in 2018</div>
        </div>
        <div className="cardContent">
          <div className="one">
            <div className="date">02 Jan 2023</div>
            <div className="views">
              <img src={eye} /> 5k View
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            commodi ullam numquam facilis voluptatem hic ducimus nulla
            voluptatum ad error sunt doloremque inventore beatae
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
    </div>
  );
};

export default Blogs;
