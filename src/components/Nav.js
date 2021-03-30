import React from "react";
import { NavWrapper, NavLinks } from "./styled-components/NavStyled";

const Nav = () => {
  return (
    <div>
      <NavWrapper>
        <ul>
          <NavLinks to="/" exact>
            Home
          </NavLinks>

          <NavLinks to="/project">Projects</NavLinks>

          <NavLinks to="/about">About Me</NavLinks>
        </ul>
      </NavWrapper>
    </div>
  );
};

export default Nav;
