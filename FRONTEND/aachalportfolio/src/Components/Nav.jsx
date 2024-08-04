import "../Styles/Nav.css";
import { useRef, useEffect, useState } from "react";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    console.log("clicked on toggle");
    setIsActive(!isActive);
  };

  return (
    <div className="nav-wrapper">
      <div
        className={`toggle-button ${isActive ? "active" : ""}`}
        onClick={toggleNavbar}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`nav-elements ${isActive ? "active" : ""}`}>
        <a href="/">
          <p>HOME</p>
        </a>
        <a href="/aboutme">
          <p>ABOUT ME</p>
        </a>
        <a href="/work">
          <p>WORK</p>
        </a>
        <a href="/archive">
          <p>ARCHIVE</p>
        </a>
        <a href="/contact">
          <p>CONTACT</p>
        </a>
      </div>
    </div>
  );
}

export default Nav;
