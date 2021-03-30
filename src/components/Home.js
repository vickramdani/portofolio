import React from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import profile from "../asset/profile.png";
import photo from "../asset/photo.png";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  HomeWrapper,
  NameHeaderOne,
  NameHeaderTwo,
  JobTitle,
} from "./styled-components/HomeStyled";

const Home = () => {
  return (
    <HomeWrapper>
      <div className="header-txt">
        <NameHeaderOne>Muhammad</NameHeaderOne>
        <NameHeaderTwo>Vickramdani</NameHeaderTwo>
        <JobTitle>Front End Developer</JobTitle>
        <Link to="/project">
          <Button variant="danger" size="lg" className="btn">
            View Projects
          </Button>
        </Link>
      </div>
      <div>
        <img src={photo} alt="profile" className="photo" />
      </div>

      <div>
        <img src={profile} alt="profile" className="profile" />
      </div>
    </HomeWrapper>
  );
};

export default Home;
