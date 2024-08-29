import "../Styles/Nav.css";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/website/logo.png";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    console.log("clicked on toggle");
    setIsActive(!isActive);
  };

  const handleWorkClick = () => {
    document
      .getElementById("table-container")
      .scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 780) {
      toggleNavbar(); // This will close the navbar after clicking "WORK"
    }
  };

  const handleScrollToFooter = (e) => {
    e.preventDefault();
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
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
      <div className="nav-elements-wrapper">
        <div className="logo-wrapper">
          <a href="/" className="logo-link">
            <img src={logo} alt="logo" className="logo"></img>
          </a>
        </div>
        <div className={`nav-elements ${isActive ? "active" : ""}`}>
          <a href="/aboutme">
            <p>ABOUT ME</p>
          </a>
          <Link to="/#table-container" onClick={handleWorkClick}>
            <p>WORK</p>
          </Link>
          <a href="/archive">
            <p>ARCHIVE</p>
          </a>
          <a href="#footer" onClick={handleScrollToFooter}>
            <p>CONTACT</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
