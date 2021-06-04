import React from "react";

import { ProjectData } from "./portofolio-data/ProjectData";
// import Card from "react-bootstrap/Card";
import ScrollToTop from "./ScrollToTop";
import {
  ProjectWrapper,
  ProjectList,
  ProjectCard,
  BtnLinks,
} from "./styled-components/ProjectStyled";

const Project = () => {
  return (
    <ProjectWrapper>
      <div className="header" data-aos="fade-up">
        <h1>Project list:</h1>
      </div>
      <ScrollToTop />
      <ProjectList>
        {ProjectData.map((project) => (
          <ProjectCard key={project.id} data-aos="fade-up">
            <div className="card-inner">
              <div className="card-front">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-back">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="btn-links">
                  <BtnLinks
                    variant="outline-light"
                    href={project.github}
                    target="_blank"
                  >
                    Source Code
                  </BtnLinks>
                  <BtnLinks
                    variant="success"
                    href={project.linkWeb}
                    target="_blank"
                  >
                    Preview App
                  </BtnLinks>
                </div>
              </div>
            </div>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectWrapper>
  );
};

export default Project;
