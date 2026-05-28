import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Particle from "./Particle.jsx";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Container fluid role="main" className="home-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Particle />
      <div style={{ textAlign: "center", zIndex: 1, position: "relative" }}>
        <p aria-hidden="true" style={{ fontSize: "8rem", fontWeight: 700, color: "#c770f0", lineHeight: 1, margin: 0 }}>404</p>
        <h1 className="heading" style={{ marginBottom: "1rem" }}>{t("notFound.title")}</h1>
        <p style={{ color: "white", marginBottom: "2rem" }}>{t("notFound.description")}</p>
        <Link
          to="/"
          className="fork-btn-inner"
          style={{ padding: "0.6rem 1.5rem", borderRadius: "5px", textDecoration: "none" }}
        >
          {t("notFound.backHome")}
        </Link>
      </div>
    </Container>
  );
}
