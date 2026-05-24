import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type.jsx";
import Home2 from "./HomeDetails.jsx";
import Particle from "../Particle.jsx";
import homeLogo from "../../assets/home-main.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export default function Home() {
  return (
    <section>
      <Helmet>
        <title>Jerin John | Software Engineer</title>
        <meta name="description" content="Hi, I'm Jerin John — a Software Engineer who loves building high-performance web applications and scalable backend systems with React, Node.js, TypeScript and .NET." />
        <link rel="canonical" href="https://jerinjohn.dev/" />
      </Helmet>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JERIN JOHN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}
