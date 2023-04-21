import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <>
      <div class="card-container">
        <div class="card">
          <img
            style={{ width: "70px", marginLeft: "33%" }}
            src="./images/finance.png"
            alt="Image 2"
          />
          <div class="card-body">
            <h3 class="card-title">Financial Planning System</h3>
            <p style={{ fontSize: "12px" }} class="card-text">
              Protocols apart from aengage models, pricing billing
            </p>
          </div>
        </div>
        <div class="card">
          <img
            style={{ width: "70px", marginLeft: "33%" }}
            src="./images/bussiness.png"
            alt="Image 2"
          />
          <div class="card-body">
            <h3 class="card-title">Business Idea Planning</h3>
            <p style={{ fontSize: "12px" }} class="card-text">
              We present you a proposal and discuss niffty-gritty like
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
