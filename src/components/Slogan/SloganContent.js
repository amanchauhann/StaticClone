import React from "react";
import "./SloganContent.css";

const sloganList = [
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "coziness building for tomorrow",
  "Review the facts cool is the best.",
];

function get_random(lengthOfArray) {
  return Math.floor(Math.random() * lengthOfArray);
}

const getRandomData = [...new Array(18)].map(() => {
  return sloganList[get_random(sloganList.length)];
});

const SloganContent = () => {
  return (
    <>
      <div className="sloganContainer">
        {getRandomData.map((data, index) => {
          return (
            <button className="eachSloganItem" key={index} onClick={() =>  navigator.clipboard.writeText(JSON.stringify({data}.data))} >
              <p>{data}</p>
            </button>
          );
        })}
      </div>
      <div className="pagination-Container">
        <div />
        <div className="pagination-Container">
          <button className="paginationNumber-Btn  active">1</button>
          <button className="paginationNumber-Btn">2</button>
          <button className="paginationNumber-Btn">3</button>
          <button className="paginationNumber-Btn">...</button>
          <button className="paginationNumber-Btn">21</button>
        </div>
        <div>
          <button className="next-btn">
            Next <img src="assets/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </>
  );
};

export { SloganContent };
