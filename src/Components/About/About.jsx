import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle.jsx";
import Github from "./Github.jsx";
import Techstack from "./TechStack.jsx";
import Aboutcard from "./AboutCard.jsx";
import laptopImg from "../../assets/about.png";
import Toolstack from "./ToolStack.jsx";

function About() {
  return (
    <>
      <Helmet>
        <title>About | Jerin John</title>
        <meta name="description" content="Learn about Jerin John — a Software Engineer with expertise in React, Node.js, TypeScript, .NET, and cloud-native development." />
        <link rel="canonical" href="https://jerinjohn.dev/about" />
        <meta property="og:title" content="About | Jerin John" />
        <meta property="og:description" content="Learn about Jerin John — a Software Engineer with expertise in React, Node.js, TypeScript, .NET, and cloud-native development." />
        <meta property="og:url" content="https://jerinjohn.dev/about" />
        <meta name="twitter:title" content="About | Jerin John" />
        <meta name="twitter:description" content="Learn about Jerin John — a Software Engineer with expertise in React, Node.js, TypeScript, .NET, and cloud-native development." />
      </Helmet>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <section aria-labelledby="about-heading">
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 id="about-heading" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="Jerin John working on a laptop" className="img-fluid" />
            </Col>
          </Row>
          </section>
          <section aria-labelledby="skillset-heading">
          <h1 id="skillset-heading" className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />
          </section>

          <section aria-labelledby="tools-heading">
          <h1 id="tools-heading" className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
          </section>

          <section aria-labelledby="github-heading">
            <Github />
          </section>
        </Container>
      </Container>
    </>
  );
}

export default About;
