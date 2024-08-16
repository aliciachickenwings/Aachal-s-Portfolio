import "../Styles/Home.css";
import Nav from "../Components/Nav";
import WorkTable from "../Components/WorkTable";
import DecoImages from "../Components/DecoImages";
import { useRef, useEffect, useState } from "react";

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
          <p>A blooming multimedia artist</p>
        </div>
        <WorkTable></WorkTable>
      </div>
      <DecoImages className="deco"></DecoImages>
    </div>
  );
}

export default Home;
