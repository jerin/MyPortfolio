import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("homeDetails.heading")}{" "}
              <span className="purple">{t("homeDetails.headingHighlight")}</span>{" "}
              {t("homeDetails.headingSuffix")}
            </h1>
            <p className="home-about-body">
              {t("homeDetails.para1")}
              <br />
              <br />
              {t("homeDetails.para2Start")}
              <i>
                <b className="purple"> {t("homeDetails.para2Tech")} </b>
              </i>
              {t("homeDetails.para2End")}
              <br />
              <br />
              {t("homeDetails.para3Start")}
              <i>
                <b className="purple"> {t("homeDetails.para3Highlight")} </b>
              </i>
              {t("homeDetails.para3End")}
              <br />
              <br />
              {t("homeDetails.para4Start")}
              <b className="purple"> {t("homeDetails.para4Node")} </b>{t("homeDetails.para4And")}{" "}
              <i>
                <b className="purple">{t("homeDetails.para4React")}</b>{" "}
                {t("homeDetails.para4And2")}{" "}
                <b className="purple">{t("homeDetails.para4Next")}</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Jerin John's profile photo" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
