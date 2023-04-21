import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <>
      <div>
        <div className="container">
          <div className="textcard" style={{ float: "inherit" }}>
            <h1 className="textcardh1">How can we help your Business ?</h1>
            <p className="textcardp">
              We build readymade websites, mobile applications, and elaborate
              online business services.
            </p>
          </div>
          <div>
            <div className="card-container">
              <div style={{ margin: "10% 3%" }} className="card">
                <img
                  style={{ width: "70px", marginLeft: "33%" }}
                  src="./images/finance.png"
                  alt="Imag2"
                />
                <div className="card-body">
                  <h3 className="card-title">Financial Planning System</h3>
                  <p style={{ fontSize: "12px" }} className="card-text">
                    Protocols apart from aengage models, pricing billing
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  style={{ width: "70px", marginLeft: "33%" }}
                  src="./images/bussiness.png"
                  alt="Imag"
                />
                <div className="card-body">
                  <h3 className="card-title">Business Idea Planning</h3>
                  <p style={{ fontSize: "12px" }} className="card-text">
                    We present you a proposal and discuss niffty-gritty like
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card-container">
            <div style={{ margin: "10% 3%", width: "33%" }} className="card">
              <img
                style={{ width: "70px", marginLeft: "33%" }}
                src="./images/develoment.png"
                alt="Imag"
              />
              <div className="card-body">
                <h3 className="card-title">Development Website and App</h3>
                <p style={{ fontSize: "12px" }} className="card-text">
                  Communication protocols apart from engagement models
                </p>
              </div>
            </div>
            <div style={{ width: "30%" }} className="card">
              <img
                style={{ width: "70px", marginLeft: "33%" }}
                src="./images/marketananlyst.png"
                alt="Ima2"
              />
              <div className="card-body">
                <h3 className="card-title">Market Analysis Project</h3>
                <p style={{ fontSize: "12px" }} className="card-text">
                  Protocols apart from aengage models, pricing billing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
