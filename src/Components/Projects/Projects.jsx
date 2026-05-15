import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectDetails from "./ProjectDetails.jsx";
import Particle from "../Particle.jsx";
import flight from "../../assets/Projects/flight_tracker_app_thumbnail.svg";
import StreamLab from "../../assets/Projects/apache_kafka_poc_thumbnail.svg";
import emotion from "../../assets/Projects/emotion.png";
import editor from "../../assets/Projects/codeEditor.png";
import chatify from "../../assets/Projects/chatify.png";
import suicide from "../../assets/Projects/suicide.png";
import Authentication from "../../assets/Projects/keycloak.png";

function Projects() {
  return (
    <section>
      <Container fluid={true} className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectDetails
              ghLink="https://github.com/jerin/kafka-poc"
                imgPath={StreamLab}
                isBlog={false}
                title="StreamLab"
                description="A minimal proof-of-concept demonstrating Apache Kafka producer/consumer messaging using Python.Producers (event-service, order-service, metrics-agent) → Kafka Broker Cluster → Consumers
                Key metrics bar at the bottom showing throughput, p99 latency, replication factor, and retention"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectDetails
                  ghLink="https://github.com/jerin/react-redux-node-keycloak"
                imgPath={Authentication}
                isBlog={false}
                title="Redhat SSO Authentication"
                description="Keycloak is an open-source Identity and Access Management (IAM) solution by Red Hat. Here are the key description points: Web-based Admin Console for managing realms, clients, users, and roles.
                Client adapters for Spring Boot, Node.js, Angular, React, and more"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectDetails
                  ghLink="https://github.com/jerin/realtime-flight-tracker"
                imgPath={flight}
                isBlog={false}
                title="Flight Tracker App"
                description="Flight Tracker is a real-time flight monitoring application that allows users to track live aircraft movements across the globe. It provides up-to-date information on flight status, routes, altitude, speed, and estimated arrival times — all visualized on an interactive map interface."
              />
            </Col>

            
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
