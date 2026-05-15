import React from "react";
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
      <Particle />
      <Container fluid={true} className="blog-section">
        <Row>
          <Col md={12}>
            <h1 className="blog-title">{blog.title}</h1>
            <p className="blog-author">
              By {blog.author} on {blog.date}
            </p>
            <div className="blog-img-top">
              <img
                src={"../src/Assets/Blogs/" + blog.imgUrl}
                fluid
                className="img-fluid w-100"
                alt="Article image"
              />
            </div>

            <div className="blog-content">{blog.content}</div>
            {/* Add more detailed content here */}
            {/* Comments section can go here */}
          </Col>

          {/* Sidebar Area (can be the same component as the list page) */}
          <Link to="/blogs" className="purple">
            Back to Home
          </Link>
        </Row>
      </Container>
    </>
  );
}
