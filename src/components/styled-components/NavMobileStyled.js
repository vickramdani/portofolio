import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Device } from "../media-queries/Breakpoint";

export const NavBar = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  right: 3%;
  z-index: 11;
  @media ${Device.tablet} {
    display: none;
  }
`;

export const NavBtn = styled(Button)`
  display: block;
  position: absolute;
  top: 1%;
  right: 5%;
  color: #fff;
  font-size: 3em;
  &:hover {
    color: #fff;
  }
`;
