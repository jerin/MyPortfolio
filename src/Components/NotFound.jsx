import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Particle from "./Particle.jsx";

export default function NotFound() {
  return (
    <Container fluid className="home-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Particle />
      <div style={{ textAlign: "center", zIndex: 1, position: "relative" }}>
        <h1 style={{ fontSize: "8rem", fontWeight: 700, color: "#c770f0", lineHeight: 1 }}>404</h1>
        <h2 className="heading" style={{ marginBottom: "1rem" }}>Page Not Found</h2>
        <p style={{ color: "white", marginBottom: "2rem" }}>
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="fork-btn-inner"
          style={{ padding: "0.6rem 1.5rem", borderRadius: "5px", textDecoration: "none" }}
        >
          Go Back Home
        </Link>
      </div>
    </Container>
  );
}
