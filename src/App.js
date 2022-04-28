import React from "react";
import search from "./assets/search.png";
import "./App.css";
import Blogs from "./components/Blogs";
import Recent from "./components/Recent";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="heading">Our Blogs</h1>
        <div className="searchBar">
          <form>
            <input
              type="text"
              className="searchInput"
              placeholder="Search keyword here"
            />
            <div type="submit" className="searchBtn">
              <img src={search} alt="search" />
            </div>
          </form>
        </div>
        <div className="container">
          <div className="blogs">
            <Blogs />
          </div>
          <div className="right">
            <div className="recent">
              <Recent />
            </div>
            <div className="categories">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
