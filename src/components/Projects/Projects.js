import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ml from "../../Assets/Projects/ml.png";
import react from "../../Assets/Projects/react.png";
import angular from "../../Assets/Projects/angular.png";
import database from "../../Assets/Projects/database.png";
import speech from "../../Assets/Projects/speech.png";
import leaf from "../../Assets/Projects/leaf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          See our Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          We providing excite projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Machine Learning"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. Vivamus porttitor quam diam, id pellentesque erat dignissim eget. Fusce vel massa metus."
              ghLink="https://github.com"
              demoLink="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="React Portfolio website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. Vivamus porttitor quam diam, id pellentesque erat dignissim eget. Fusce vel massa metus."
              ghLink="https://github.com"
              demoLink="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={angular}
              isBlog={false}
              title="Angular Portfolio website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. Vivamus porttitor quam diam, id pellentesque erat dignissim eget. Fusce vel massa metus."
              ghLink="https://github.com"
              demoLink="https://google.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={database}
              isBlog={false}
              title="Database Application"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. Vivamus porttitor quam diam, id pellentesque erat dignissim eget. Fusce vel massa metus."
              ghLink="https://github.com"
              demoLink="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speech}
              isBlog={false}
              title="Voice Recognition"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. Vivamus porttitor quam diam, id pellentesque erat dignissim eget. Fusce vel massa metus."
              ghLink="https://github.com"
              demoLink="https://google.com" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Hangman Using Python"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. Vivamus porttitor quam diam, id pellentesque erat dignissim eget. Fusce vel massa metus."
              ghLink="https://github.com"
              demoLink="https://google.com"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
