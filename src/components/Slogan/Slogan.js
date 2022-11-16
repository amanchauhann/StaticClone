import React from "react";
import { SloganContent } from "./SloganContent";
import "./Slogan.css";

const Slogan = () => {
  return (
    <main className="sloganSection">
      <div className="sloganSection-content">
        <div className="sloganSection-topcontent">
          <h1 className="free-slogan-heading">Free slogan maker</h1>
          <h5 className="slogan-desc">
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
          </h5>
          <label htmlFor="user_data" className="inputData">
          Word for your slogan
          </label>
          <input
            type="search"
            placeholder="Enter your Keyword..."
            name="keyword"
            id="search"
            defaultValue="cozy"
          />
          <button className="sloganGenerate-btn">Generate Slogans</button>
        </div>
        <div className="headingMain">
          <h5 className="slogan-results">We have generated 1,023 slogans for “cozy”</h5>
          <button className="downloadAll-btn">Download All</button>
        </div>
        <SloganContent />
      </div>
    </main>
  );
};

export { Slogan };
