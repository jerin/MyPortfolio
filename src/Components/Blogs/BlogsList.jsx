import React from "react";
import { Helmet } from "react-helmet-async";
import Particle from "../Particle.jsx";
import { Container, Row, Col } from "react-bootstrap";
import BlogsItem from "./BlogsItem.jsx";
import Data from "../../Data/Blogs/BlogsData.json";

export default function BlogsList() {
  return (
    <Container fluid className="blog-section">
      <Helmet>
        <title>Blogs | Jerin John</title>
        <meta name="description" content="Read Jerin John's blog — articles on software engineering, React, Node.js, system design, and developer experience." />
        <link rel="canonical" href="https://jerinjohn.dev/blogs" />
        <meta property="og:title" content="Blogs | Jerin John" />
        <meta property="og:description" content="Read Jerin John's blog — articles on software engineering, React, Node.js, system design, and developer experience." />
        <meta property="og:url" content="https://jerinjohn.dev/blogs" />
        <meta name="twitter:title" content="Blogs | Jerin John" />
        <meta name="twitter:description" content="Read Jerin John's blog — articles on software engineering, React, Node.js, system design, and developer experience." />
      </Helmet>
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
