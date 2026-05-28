import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { MdLanguage } from "react-icons/md";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ml", label: "മലയാളം", flag: "🇮🇳" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

function NavBar() {
  const { t, i18n } = useTranslation();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <span><b>Jerin John</b></span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} aria-hidden="true" /> {t("nav.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} aria-hidden="true" /> {t("nav.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} aria-hidden="true" />
                {t("nav.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} aria-hidden="true" /> {t("nav.resume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/blogs" onClick={() => updateExpanded(false)}>
                <ImBlog style={{ marginBottom: "2px" }} aria-hidden="true" /> {t("nav.blogs")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Dropdown align="end" onToggle={() => {}}>
                <Dropdown.Toggle
                  as="button"
                  className="nav-link lang-toggle"
                  aria-label="Select language"
                  style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "8px 6px",
                  }}
                >
                  <MdLanguage style={{ fontSize: "1.2em", marginBottom: "2px" }} aria-hidden="true" />
                  <span style={{ fontSize: "0.85em" }}>{currentLang.flag} {currentLang.code.toUpperCase()}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: "140px" }}>
                  {LANGUAGES.map((lang) => (
                    <Dropdown.Item
                      key={lang.code}
                      active={i18n.language === lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        updateExpanded(false);
                      }}
                    >
                      {lang.flag} {lang.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button href="https://github.com/jerin/MyPortfolio" target="_blank" rel="noreferrer" aria-label="Fork or star this project on GitHub" className="fork-btn-inner">
                <CgGitFork style={{ fontSize: "1.2em" }} aria-hidden="true" />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} aria-hidden="true" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
