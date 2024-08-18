import "../Styles/Home.css";
import Nav from "../Components/Nav";
import WorkTable from "../Components/WorkTable";
import DecoImages from "../Components/DecoImages";
import { useRef, useEffect, useState } from "react";
import downArrow from "../assets/website/down-arrow.png";
import Footer from "../Components/Footer";

function Home() {
  /*   const randomXY =()=>{
    const x = 
  } */

  const handleWorkClick = () => {
    document
      .getElementById("table-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nav></Nav>
      <div className="outer-wrapper">
        <div className="big-title">
          <h1>Aachal Shrestha</h1>
          <p>A blooming multimedia artist</p>
        </div>
        <a href="#table-container">
          <img className="down-arrow" src={downArrow}></img>
        </a>
        <WorkTable></WorkTable>
      </div>
      <DecoImages className="deco"></DecoImages>
      <Footer></Footer>
    </div>
  );
}

export default Home;
