import React from "react";
import Particle from "../Particle.jsx";
import { Container, Row, Col } from "react-bootstrap";
import BlogsItem from "./BlogsItem.jsx";
import Data from "../../Data/Blogs/BlogsData.json";

export default function BlogsList() {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">My Awesome Blog</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "3px" }}>
          {Data.map((blog) => (
            <Col md={4} className="blog-card" key={blog.id}>
              <BlogsItem blog={blog} />
            </Col>
          ))}
          
        </Row>
      </Container>
    </Container>
  );
}
