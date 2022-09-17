import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ml from "../../Assets/Projects/image.png";
import "./Team.css"


function Projects1() {
  return (
            
            
    
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Meet our TEAM</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
           <div className="heading6">Tech team</div>
           
            <ProjectCard 
              imgPath={ml}
              isBlog={false}
              title="ASHNA T"
              description="-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. -"
              ghLink="https://twitter.com/ashnat__"
              demoLink="https://google.com"
              
            />
          </Col>
          <Col md={4} className="project-card">
           <div className="heading6">Tech team</div>
           
            <ProjectCard 
              imgPath={ml}
              isBlog={false}
              title="ASHNA T"
              description="-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. -"
              ghLink="https://twitter.com/ashnat__"
              
              
            />
          </Col>

          <Col md={4} className="project-card">
           <div className="heading6">Tech team</div>
           
            <ProjectCard 
              imgPath={ml}
              isBlog={false}
              title="ASHNA T"
              description="-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. -"
              ghLink="https://twitter.com/ashnat__"
              
              
            />
          </Col>

          <Col md={4} className="project-card">
           <div className="heading6">Tech team</div>
           
            <ProjectCard 
              imgPath={ml}
              isBlog={false}
              title="ASHNA T"
              description="-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. -"
              ghLink="https://twitter.com/ashnat__"
              
              
            />
          </Col>

          <Col md={4} className="project-card">
           <div className="heading6">Tech team</div>
           
            <ProjectCard 
              imgPath={ml}
              isBlog={false}
              title="ASHNA T"
              description="-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. -"
              ghLink="https://github.com"
             
              
            />
          </Col>

          <Col md={4} className="project-card">
           <div className="heading6">Tech team</div>
           
            <ProjectCard 
              imgPath={ml}
              isBlog={false}
              title="ASHNA T"
              description="-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. -"
              ghLink="https://github.com"
              
              
            />
          </Col>
          <Col md={4} className="project-card">
           <div className="heading6">Tech team</div>
           
            <ProjectCard 
              imgPath={ml}
              isBlog={false}
              title="ASHNA T"
              description="-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. -"
              ghLink="https://github.com"
              
              
            />
          </Col>
          <Col md={4} className="project-card">
           <div className="heading6">Tech team</div>
           
            <ProjectCard 
              imgPath={ml}
              isBlog={false}
              title="ASHNA T"
              description="-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. -"
              ghLink="https://github.com"
              
              
            />
          </Col>
          <Col md={4} className="project-card">
           <div className="heading6">Tech team</div>
           
            <ProjectCard 
              imgPath={ml}
              isBlog={false}
              title="ASHNA T"
              description="-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque turpis nec dignissim placerat. -"
              ghLink="https://github.com"
              
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects1;
