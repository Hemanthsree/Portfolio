import React from "react";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="title">
          About
        </div>
      <hr />
      <div className="content">
      Logical and organised individual with a strong foundation in software engineering. Proficient in front end technologies like Html,css,javascript,reactjs and nodejs.Excellent teamwork, interpersonal and communication skills. Looking to start a career as an entry-level professional with a reputed IT company.
      </div>
      <div className="display">
        <div className="img">
          <img src="./images/image2.jpg" alt="hello" />
        </div>
        <div className="head">
          <h1 className="developer">UI Developer & web developer</h1>
          <p>
          Iam able to work with back-end developers and web developers to ensure that the website is optimized for several devices and presented in an attractive way
          </p>
          <div className="box">
            <div className="col1" >
              <p>
                <span>birthday:</span> 10 may 2000
              </p>
              <p>
                <span>phone:</span> 9381529994
              </p>
              <p>
                <span>Country:</span> India
              </p>
            </div>
            <div className="col2" >
              <p>
                <span>Age :</span> 22
              </p>
              <p>
                <span>Degree: </span> B.Tech
              </p>
              <p>
                <span>Email:</span> hemanthsree555@gmail.com
              </p>
              
            </div>
          </div>
          <div className="theory">
            <p>
            Iam able to code an responsible for assisting with the creation of websites and updating existing web applications using scripting languages.
            </p>
          </div>
        </div>
      </div> 
    </div>
    </>
  );
};

export default About;
