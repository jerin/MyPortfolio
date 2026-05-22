import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
// import images from '../../Assets/Blogs/'; // Adjust path

function BlogsItem(props) {
  return (
    <Card className="blog-card-view">
      <Card.Img variant="top" src={"/assets/Blogs/" + props.blog.imgUrl} alt="card-img" width="200" height="200"/>
      <Card.Body>
        <Card.Title> {props.blog.title}</Card.Title>
        <Card.Subtitle>{props.blog.date}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.blog.snippet}
          <Card.Link>
            <Link to={`/blogs/${props.blog.id}`} className="purple">Read More</Link>
          </Card.Link>
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}
export default BlogsItem;
