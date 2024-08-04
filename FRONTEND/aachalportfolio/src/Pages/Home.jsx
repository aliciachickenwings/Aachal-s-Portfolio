import "../Styles/Home.css";
import Nav from "../Components/Nav";
import { useRef, useEffect, useState } from "react";
import flowerDgreen from "../assets/website/FLOWER_dgreen.png";
import flowerDpink from "../assets/website/FLOWER_dpink.png";
import flowerPink from "../assets/website/FLOWER_pink.png";
import flowerGreen from "../assets/website/FLOWER_green.png";

function Home() {
  /*   const randomXY =()=>{
    const x = 
  } */

  return (
    <div>
      <Nav></Nav>
      <div className="outer-wrapper">
        <div className="big-title">
          <h1>Aachal Shrestha</h1>
        </div>
        <div className="deco-images">
          <img
            className="flower"
            src={flowerDgreen}
            alt="flower"
            style={{
              width: "30%",
              position: "absolute",
              top: "50px",
              left: "10px",
            }}
          />
          <img
            className="flower"
            src={flowerDpink}
            alt="flower"
            style={{ position: "absolute", top: "130px", right: "-20px" }}
          />
          <img
            className="flower"
            src={flowerPink}
            alt="flower"
            style={{ position: "absolute", top: "400px", left: "-20px" }}
          />
          <img
            className="flower"
            src={flowerGreen}
            alt="flower"
            style={{ position: "absolute", top: "600px", right: "-20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
