import React from "react";
import demo from "../assets/demo.png";
import "./Recent.css";

const Recent = () => {
  return (
    <div className="card">
      <div className="headingR">Recent Posts</div>
      <div className="row">
        <div className="imageT">
          <img src={demo} />
        </div>
        <div className="details">
          <div className="titleR">Storehouse is founded in 2018</div>
          <div className="down">
            <div className="dateR">26 Sept, 3033</div>
            <div className="comments">23 comments</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="imageT">
          <img src={demo} />
        </div>
        <div className="details">
          <div className="titleR">Storehouse is founded in 2018</div>
          <div className="down">
            <div className="dateR">26 Sept, 3033</div>
            <div className="comments">23 comments</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="imageT">
          <img src={demo} />
        </div>
        <div className="details">
          <div className="titleR">Storehouse is founded in 2018</div>
          <div className="down">
            <div className="dateR">26 Sept, 3033</div>
            <div className="comments">23 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
