import React from "react";
import "./NavBar.css";
import Front from "../Frontbar/Front";

export default function NavBar() {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg ">
          <div className="column">
            <a className="navbar-brand" href="/logo">
              <b> A+</b>Studio
            </a>
          </div>

          <div className="column">
            <ul className="navbar-nav ml-auto justify-content-start">
              <li className="nav-item active">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/do">
                  What We Do
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/service">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/project">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Front />
    </>
  );
}
