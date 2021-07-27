import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h3>About Us</h3>
          <a href="#">Story</a>
          <a
            href="https://www.linkedin.com/in/blakestillwell/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blake Stillwell
          </a>
          <a href="#">Mahim Pritom</a>
        </div>
        <div className="footer-heading footer-2">
          <h3>Contact Us</h3>
          <Link style={{ color: `white` }} to="/Mymap">
            Find Stores
          </Link>
          <a href="#">Support</a>
        </div>
        <div className="footer-heading footer-3">
          <h3>Social Media</h3>
          <a
            href="https://twitter.com/PritomNYC"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/channel/UCpcTrCXblq78GZrTUTLWeBw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
        <div className="footer-email-form">
          <h3>Join our newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email address"
            className="footer-email"
          ></input>
          <input
            type="submit"
            value="Sign Up"
            className="footer-email-btn"
          ></input>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm" style={{ color: `white` }}>
            🇺🇸USA &copy;{new Date().getFullYear()} RETRO SHIRT | All rights
            reserved |
            <a
              style={{ color: `white` }}
              href="https://www.adidas.com/us/help/us-company-information/what-are-the-terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms Of Service
            </a>{" "}
            |{" "}
            <a
              style={{ color: `white` }}
              href="https://www.adidas.com/us/help/us-company-information/what-is-the-privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
