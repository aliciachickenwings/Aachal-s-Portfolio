import "../Styles/Footer.css";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/website/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="footer-wrapper" id="footer">
      <div className="footer-inner-wrapper">
        <div className="footer-wrapper-inner">
          <div className="footer-item">
            <p>Thank You for viewing my portfolio,</p>
            <h2>and don't stop blooming! :)</h2>
          </div>
          <div className="footer-item footer-contact">
            <h3>Contact me</h3>
            <div>
              <p>
                <a href="mailto:aachalshresth@gmail.com" className="link">
                  Email
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/aachal-shrestha-002068234/"
                  className="link"
                >
                  Linkedin
                </a>
              </p>
            </div>
          </div>
          <div className="footer-item legal">
            <p>
              <a href="/privacy">Privacy</a>
            </p>
            <a href="/legal">Legal</a>
          </div>
        </div>
        <div className="copywright">
          <p>&copy; Aachal Shrestha 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
