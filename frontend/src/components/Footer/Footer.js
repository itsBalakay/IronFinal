import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>About Us</h4>
            <ui className="list-unstyled">
              <li>Story</li>
              <li>
                <a
                  style={{ color: `white` }}
                  href="https://www.linkedin.com/in/blakestillwell/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blake Stillwell
                </a>
              </li>
              <li>Mahim Pritom</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Services</h4>
            <ui className="list-unstyled">
              <li>Marketing</li>
              <li>Consulting</li>
              <li>Design</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact Us</h4>
            <ui className="list-unstyled">
              <li>United States</li>
              <li>United Kingdom</li>
              <li>Australia</li>
              <li>Support</li>
            </ui>
          </div>
          <div className="col">
            <h4>Social</h4>
            <ui className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>
                <a
                  style={{ color: `white` }}
                  href="https://twitter.com/PritomNYC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  style={{ color: `white` }}
                  href="https://www.youtube.com/channel/UCpcTrCXblq78GZrTUTLWeBw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            🇺🇸 USA &copy;{new Date().getFullYear()} RETRO SHIRT | All rights
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
