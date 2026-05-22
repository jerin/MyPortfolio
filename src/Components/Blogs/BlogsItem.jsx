import React from "react";
import Card from "react-bootstrap/Card";

function BlogsItem({ blog }) {
  return (
    <Card className="blog-card-view">
      <Card.Img variant="top" src={"/assets/Blogs/" + blog.imgUrl} alt="card-img" width="200" height="200" />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Subtitle>{blog.date}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {blog.snippet}
        </Card.Text>
        {blog.url && (
          <a href={blog.url} target="_blank" rel="noreferrer" className="purple">
            Read on Medium →
          </a>
        )}
      </Card.Body>
    </Card>
  );
}
export default BlogsItem;
