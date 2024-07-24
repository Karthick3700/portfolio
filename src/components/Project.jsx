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
      title: "Justtry Technologies",
      description: "Front End Development",
      imgUrl: first,
      siteUrl: "https://justtrytech.com",
    },
    {
      title: "Task Manager",
      description: "Front End Development",
      imgUrl: second,
      siteUrl: "https://consoler-todo-list.vercel.app/",
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
                      Over the years, I've had the opportunity to work on a
                      variety of projects that have challenged me to grow and
                      develop my skills. Each project has been a unique
                      experience, allowing me to apply my knowledge and learn
                      new technologies. Below, you'll find a selection of these
                      projects, each with a brief overview of its purpose, the
                      technologies used, and the challenges encountered during
                      development.
                    </p>
                    <TabContainer id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Personal</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Practice</Nav.Link>
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
                        <Tab.Pane eventKey="second">
                          <p>Coming soon...</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Coming soon...</p>
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
