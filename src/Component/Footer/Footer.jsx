import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
      <hr />
      <footer className="footer">
        <div className="footer-row">
          <div className="footer-column">
            <h3>
              <b> A+</b>
              Studio
            </h3>
            <p>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>

          <div className="footer-column">
            <h3>What We Do</h3>
            <p>Web Design</p>
            <p> App Design </p>
            <p>Social Media </p>
            <p>Manage Market </p>
            <p>Analysis Project</p>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Career</p>
            <p>Become Investor </p>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <p>FAQ</p>
            <p>Policy</p>
            <p>Business </p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>WhatsApp</p>
            <p>Support 24</p>
          </div>
        </div>
      </footer>
    </>
  );
}
