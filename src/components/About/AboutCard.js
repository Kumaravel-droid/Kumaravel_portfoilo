import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suresh Kumar R </span>
            from <span className="purple"> Krishnagiri, Tamil Nadu, India.</span>
            <br />
            I am <span className="purple">Frontend Developer & Cloud Infrastructure Engineer(AWS)</span> with 3.5 years Experience.
            <br />
            I hold a Bachelor of Engineering (<span className="purple">B.E.</span>) degree in Electronics and Communication Engineering (<span className="purple">ECE</span>), awarded by Adhiyamaan College of Engineering in 2021.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learn New Technologie
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
