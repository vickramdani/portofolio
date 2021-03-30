import React from "react";
import { ProjectData } from "./portofolio-data/ProjectData";
import Card from "react-bootstrap/Card";
import {
  ProjectWrapper,
  ProjectList,
  ProjectCard,
} from "./styled-components/ProjectStyled";

const Project = () => {
  return (
    <ProjectWrapper>
      <div className="header" data-aos="fade-up">
        <h1>Project list:</h1>
      </div>
      <ProjectList>
        {ProjectData.map((project) => (
          <ProjectCard key={project.id}>
            <Card className="project-card shadow-lg" data-aos="fade-up">
              <Card.Img
                variant="top"
                src={project.image}
                className="project-img"
              />
              <Card.Body>
                <Card.Title className="project-title">
                  {project.title}
                </Card.Title>
                <Card.Text className="project-txt">
                  {project.description}
                </Card.Text>
              </Card.Body>
              <Card.Body className="project-links">
                <Card.Link href={project.github} target="_blank">
                  Source Code
                </Card.Link>
                <Card.Link href={project.linkWeb} target="_blank">
                  Preview
                </Card.Link>
              </Card.Body>
            </Card>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectWrapper>
  );
};

export default Project;
