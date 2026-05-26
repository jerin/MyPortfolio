import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import C from "../../assets/TechIcons/C++.svg";
import Javascript from "../../assets/TechIcons/Javascript.svg";
import Node from "../../assets/TechIcons/Node.svg";
import ReactIcon from "../../assets/TechIcons/React.svg";
import HaskellIcon from "../../assets/TechIcons/Haskell.svg";
import Python from "../../assets/TechIcons/Python.svg";
import Typescript from "../../assets/TechIcons/Typescript.svg";
import Git from "../../assets/TechIcons/Git.svg";
import Redis from "../../assets/TechIcons/Redis.svg";
import Docker from "../../assets/TechIcons/Docker.svg";
import Mongo from "../../assets/TechIcons/Mongo.svg";
import SQL from "../../assets/TechIcons/SQL.svg";
import Redux from "../../assets/TechIcons/Redux.svg";
import Tailwind from "../../assets/TechIcons/Tailwind.svg";
import MUI from "../../assets/TechIcons/MUI.svg";
import Postman from "../../assets/TechIcons/Postman.svg";
import AWS from "../../assets/TechIcons/AWS.svg";
import Kafka from "../../assets/TechIcons/Kafka.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="" aria-hidden="true" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity fontSize={"24px"} aria-hidden="true" />
        <div className="tech-icons-text">Solidity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} aria-hidden="true" />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Postgresql</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HaskellIcon} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Haskell</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="" aria-hidden="true" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaRust fontSize={"24px"} aria-hidden="true" />
        <div className="tech-icons-text">Rust</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="" aria-hidden="true" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Kafka} alt="" aria-hidden="true" className="tech-icon-images" />
        <div className="tech-icons-text">Kafka</div>
      </Col>
    </Row>
  );
}

export default Techstack;