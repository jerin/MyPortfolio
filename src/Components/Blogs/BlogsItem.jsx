import React from "react";
import Card from "react-bootstrap/Card";

function BlogsItem({ blog }) {
  return (
    <Card className="blog-card-view">
      <Card.Img variant="top" src={"/assets/Blogs/" + blog.imgUrl} alt={blog.title} width="200" height="200" />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Subtitle>{blog.date}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {blog.snippet}
        </Card.Text>
        {blog.url && (
          <a href={blog.url} target="_blank" rel="noreferrer" className="purple" aria-label={`Read "${blog.title}" on Medium (opens in new tab)`}>
            Read on Medium <span aria-hidden="true">→</span>
          </a>
        )}
      </Card.Body>
    </Card>
  );
}
export default BlogsItem;
