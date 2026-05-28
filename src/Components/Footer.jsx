import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>{t("footer.heading")}</h1>
            <p>
              {t("footer.subtext")}{" "}
              <span className="purple">{t("footer.connect")} </span>
              {t("footer.subtextMid")}{" "}
              <a href="mailto:john.jerin2@gmail.com" className="purple" style={{ textDecoration: "none" }}>
                {t("footer.emailLink")}
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
                  <AiFillGithub aria-hidden="true" />
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
                  <AiOutlineTwitter aria-hidden="true" />
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
                  <FaLinkedinIn aria-hidden="true" />
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
                  <AiFillInstagram aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:john.jerin2@gmail.com"
                  aria-label="Email"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
