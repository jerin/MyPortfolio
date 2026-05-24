import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
       <Container>
          <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
            <Col md={12} className="home-about-social">
              <h1>Find Me On</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me or{" "}
                <a href="mailto:john.jerin2@gmail.com" className="purple" style={{ textDecoration: "none" }}>
                  drop me an email
                </a>
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/jerin"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://x.com/jerin_john"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    aria-label="Twitter / X"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/jerin-john-engineer/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/jerin_john_kinattingal?igsh=a2NranJnaXJqc2t2&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:john.jerin2@gmail.com"
                    aria-label="Email"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  );
}
