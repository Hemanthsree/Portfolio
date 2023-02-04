import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div className="title">
        <p>Resume</p>
      </div>
      <hr />

      <h1 id="edu">Education</h1>
      <p className="degree">BACHELOR OF TECHNOLOGIES</p>
      <div className="year">
        <p>2018-2022</p>
      </div>
      <div className="college">
        <p>Siddartha educational academy group of institutions , Tirupati</p>
      </div>
      <div className="stream">
        stream of computer science and engineering | percentage-72% | JNTU
        Anantapur (2018-22).
      </div>
      <br />
      <p className="degree">INTERMEDIATE</p>
      <div className="year">
        <p>2016-2018</p>
      </div>
      <div className="college">
        <p>IRM junior college,Kuppam</p>
      </div>
      <div className="stream">
        {" "}
        INTERMEDIATE (MPC) | percentage-67.6% | board of intermediate education
        Andhra Pradesh (2016-18).
      </div>
      <br />
      <p className="degree">SSC</p>
      <div className="year">
        <p>2015-2016</p>
      </div>
      <div className="college">
        <p></p>A.P.Model school, shanthipuram{" "}
      </div>
      <div className="stream">
        SSC | CGPA 8.5 | board of secondary education Andhra Pradesh (2015-16).
      </div>
    </div>
  );
};

export default Resume;
