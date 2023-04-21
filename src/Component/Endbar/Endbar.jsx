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
    </div>
  );
}
