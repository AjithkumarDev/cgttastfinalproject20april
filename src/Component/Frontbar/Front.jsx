import React from "react";
import "./Front.css";

export default function Front() {
  return (
    <div>
      <div className="fronttext">
        <div>
          <div className="container-fluid text-content1 align-items-start col-11 ">
            <h1 style={{ float: "left", paddingBottom: "10px" }}>
              A Digital Product Agency
            </h1>
            <p className="col-10">
              Leading digital agency with solid design and development
              expertise. we built readymade, mobiule applications and elaborate
              online business services.
            </p>
            <button
              style={{ borderRadius: "20px", fontSize: "20px" }}
              className="btn btn-primary "
            >
              Contact Now
            </button>
          </div>
        </div>
        <div className="container-fluid  p-0">
          <img src="./images/frontnavbg.png" alt="not show" />
          <img
            id="FrontbarImg"
            src="./images/frontnav.png"
            alt="Nothing to show"
          />
        </div>
      </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="column">
          <ul className="navbar-nav ml-auto justify-content-start">
            <li className="e">
              <h1>Our Client</h1>
              <p>Several Client who r believe</p>
            </li>
            <li className="nav-item">
              <img
                style={{ width: "100px" }}
                src="./images/google.png"
                alt=""
              />
            </li>
            <li className="nav-item">
              <img
                style={{ width: "100px" }}
                src="./images/airbnb.png"
                alt=""
              />
            </li>
            <li className="nav-item">
              <img
                style={{ width: "100px" }}
                src="./images/ubereats.png"
                alt=""
              />
            </li>
            <li className="nav-item">
              <img
                style={{ width: "100px" }}
                src="./images/amazon.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
