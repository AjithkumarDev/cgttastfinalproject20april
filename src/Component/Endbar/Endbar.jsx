import React from "react";
import "./Endbar.css";

export default function Endbar() {
  return (
    <div>
      <div className="container">
        <img
          className="imgContent1"
          src="./images/personsingle.png"
          alt="......"
        />

        <div className="textContent04">
          <h1 style={{ fontSize: "30px" }}>Matthew Paul</h1>
          <p style={{ fontSize: "15px" }}>
            Perfect, very good job! Thank you for the amazing design and work.
            Really impressed with the high quality and quick turnaround time.
            Highly recommend.
          </p>
        </div>

        <img className="imgContent2" src="./images/groupimage.png" alt="...." />
      </div>
      <div className="subscribe">
        <div className="card">
          <div class="text-segment">
            <h2>Subscribe Newsletter</h2>
            <p>I will update good news and promotion service not spam</p>
          </div>
          <form action="">
            <input
              type="search"
              className="search form-control-lg"
              placeholder="Enter your email address..."
            />
            <span className="btn btn-sucess">Contact Now</span>
          </form>
          <div class="image-segment">
            <img
              style={{ height: "250px" }}
              src="./images/blueback.png"
              alt="Your Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
