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
                  style={{ color: `white`, textDecoration: `none` }}
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
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} RETRO JERSEY | All rights reserved
            | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
