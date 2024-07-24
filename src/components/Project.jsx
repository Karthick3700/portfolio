import React from "react";
import {
  Col,
  Container,
  Nav,
  Row,
  Tab,
  TabContainer,
  TabContent,
} from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";
import first from "../assets/img/first.png";
import second from "../assets/img/second.png";
import third from "../assets/img/third.png";

const Project = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: first,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: second,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: third,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col md={12}>
            <TrackVisibility>
              {({ isVisible }) => {
                return (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <TabContainer id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <TabContent
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                      </TabContent>
                    </TabContainer>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;
