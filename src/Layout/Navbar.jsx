import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import gmail from "../assets/img/gmail.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // State to manage navbar collapse

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    // Close the navbar menu on link click for mobile screens
    setExpanded(false);
  };

  return (
    <Router>
      <Navbar
        expand="md"
        className={scrolled ? "scrolled" : ""}
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="/">
            <span className="logo">KARTHICK KN</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#education"
                className={
                  activeLink === "education"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("education")}
              >
                Work & Studies
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://linkedin.com/in/karthick-kn-530468243"
                  target="_blank"
                >
                  <img src={navIcon1} alt="linkedin logo" />
                </a>
                <a
                  href="https://wa.me/+918973684428"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={whatsapp} alt="whatsapp logo" />
                </a>
                <a href="mailto:karthickcareers03@gmail.com">
                  <img src={gmail} alt="gmail logo" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default Header;
