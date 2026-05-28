import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Particle from "../Particle.jsx";
import { Container, Row, Col } from "react-bootstrap";
import BlogsItem from "./BlogsItem.jsx";
import Data from "../../Data/Blogs/BlogsData.json";

export default function BlogsList() {
  const { t } = useTranslation();

  return (
    <Container fluid className="blog-section" aria-label="Blog posts">
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
        <h1 className="blog-heading">{t("blogs.heading")}</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "3px" }} role="list" aria-label="Blog articles">
          {Data.map((blog) => (
            <Col md={4} className="blog-card" key={blog.id} role="listitem">
              <BlogsItem blog={blog} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
