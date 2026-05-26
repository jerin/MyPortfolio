import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Data from "../../Data/Blogs/BlogsData.json";
import Particle from "../Particle.jsx";
export default function BlogsDetails() {
  const blogData = Data;

  const { id } = useParams();

  const blog = blogData.find((blog) => blog.id === parseInt(id));

  return (
    <>
      <Helmet>
        <title>{blog.title} | Jerin John</title>
        <meta name="description" content={blog.description || `Read "${blog.title}" by Jerin John.`} />
        <link rel="canonical" href={`https://jerinjohn.dev/blogs/${id}`} />
        <meta property="og:title" content={`${blog.title} | Jerin John`} />
        <meta property="og:description" content={blog.description || `Read "${blog.title}" by Jerin John.`} />
        <meta property="og:url" content={`https://jerinjohn.dev/blogs/${id}`} />
        <meta name="twitter:title" content={`${blog.title} | Jerin John`} />
        <meta name="twitter:description" content={blog.description || `Read "${blog.title}" by Jerin John.`} />
      </Helmet>
      <Particle />
      <Container fluid={true} className="blog-section" aria-label="Blog post">
        <Row>
          <Col md={12}>
            <h1 className="blog-title">{blog.title}</h1>
            <p className="blog-author">
              By {blog.author} on {blog.date}
            </p>
            <div className="blog-img-top">
              <img
                src={"/assets/Blogs/" + blog.imgUrl}
                fluid
                className="img-fluid w-100"
                alt={blog.title}
              />
            </div>

            <article className="blog-content" aria-label={blog.title}>{blog.content}</article>
          </Col>

          <Link to="/blogs" className="purple">
            Back to Blogs
          </Link>
        </Row>
      </Container>
    </>
  );
}
