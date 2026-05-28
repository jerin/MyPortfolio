import React from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("aboutCard.intro1")} <span className="purple">{t("aboutCard.name")}</span>{" "}
            {t("aboutCard.intro2")}{" "}
            <span className="purple">{t("aboutCard.location")}</span>.
            <br />
            {t("aboutCard.workPrefix")}{" "}
            <span className="purple">{t("aboutCard.workRole")}</span>{" "}
            <br />
            {t("aboutCard.eduPrefix")}{" "}
            <span className="purple">{t("aboutCard.eduDegree")}</span>{" "}
            {t("aboutCard.eduFrom")}{" "}
            <span className="purple">{t("aboutCard.eduInstitute")}</span>.
            <br />
            <br />
            {t("aboutCard.hobbiesIntro")}
          </p>

          <ul aria-label="My hobbies and interests">
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> {t("aboutCard.hobby1")}
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> {t("aboutCard.hobby2")}
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> {t("aboutCard.hobby3")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>{t("aboutCard.quote")}</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
