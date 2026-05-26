import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Jerin John</span> from{" "}
            <span className="purple">Toronto, Canada</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">
              Front-end engineer at Intuit, Toronto, Canada
            </span>{" "}<br/>
            I hold a B.Tech and Diploma in{" "}
            <span className="purple">Computer Science and Engineering</span> from{" "}
            <span className="purple">MG University, Kerala, India</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul aria-label="My hobbies and interests">
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Traveling and Exploring New Places 🌍
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
