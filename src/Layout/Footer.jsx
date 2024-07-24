import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import gmail from "../assets/img/gmail.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex align-items-center gy-5">
          <Col size={12} sm={6}>
            <div className="d-flex align-items-center justify-content-start">
              <span className="logo">KARTHICK KN</span>
            </div>
            <ul className="footer_cta">
              <li><p>karthickcareers03@gmail.com</p></li>
              <li><p>+91-8973684428</p></li>
            </ul>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/karthick-kn-530468243" target="_blank">
                <img src={navIcon1} alt="linkedin logo" />
              </a>
              <a href="https://wa.me/+918973684428" target="_blank">
                <img src={whatsapp} alt="whatsapp logo" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=karthickcareers03@gmail.com"
                target="_blank"
              >
                <img src={gmail} alt="gamil logo" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
