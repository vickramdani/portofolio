import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  HomeWrapper,
  HeaderTittle,
  HeaderTxt,
  FirstName,
  LastName,
  Proffesion,
} from "./styled-components/HomeStyled";
import Illust from "../asset/ilust.png";

const Home = () => {
  return (
    <HomeWrapper>
      <img
        src={Illust}
        alt="coding-illustration"
        className="illust"
        data-aos="slide-right"
      />
      <HeaderTittle data-aos="slide-right">
        <HeaderTxt>
          <FirstName>Muhammad</FirstName>
          <LastName>Vickramdani</LastName>
          <Proffesion>Frontend Developer</Proffesion>
        </HeaderTxt>
        <NavLink to="/project">
          <Button variant="outline-primary" size="lg">
            View Projects
          </Button>
        </NavLink>
      </HeaderTittle>
    </HomeWrapper>
  );
};

export default Home;
