import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Device } from "../media-queries/Breakpoint";

const activeClassName = "nav-item-active";

export const NavWrapper = styled.section`
  /* position: absolute;
  top: 0;
  right: 0;
  font-size: 1.5em;
  padding: 20px 80px 20px 0px;
  z-index: 10; */
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px 80px 20px 0px;
  display: none;
  @media ${Device.mobile} {
    display: none;
  }
  @media ${Device.tablet} {
    display: block;
    padding: 17px;
    text-align: right;
  }
`;

export const NavLinks = styled(NavLink).attrs({ activeClassName })`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  margin-right: 60px;
  font-family: "Montserrat", sans-serif;
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s;
  }
  &:hover:after {
    width: 100%;
    //transition: width .3s;
  }
  &:hover {
    text-decoration: none;
    color: #fff;
  }
  &.${activeClassName} {
    border-bottom: 1px solid #fff;
  }
  @media ${Device.tablet} {
    font-size: 1.5rem;
  }
`;
