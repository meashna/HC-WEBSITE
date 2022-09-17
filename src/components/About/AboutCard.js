import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            We are a student run community working as a subsidiary of <span className="purple">HACK CLUB. </span>
            
            <br /> We focus on developing technical skills of our members , setting them on the right path to programming while also maintaining a very friendly space so that our members feel just like family💕.
            <br />
            <br />
            Apart from coding, there is fun  activities that  we  love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Talks
            </li>
            <li className="about-activity">
              <ImPointRight /> Demo
            </li>
          </ul>

          <p style={{ color: "rgb(33 31 39)" }}>
            "For the students by the students"{" "}
          </p>
          <footer className="blockquote-footer">Hack Club Kmea</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
