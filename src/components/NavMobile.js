import React, { useState } from "react";
import NavModal from "./NavModal";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Device } from "./media-queries/Breakpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

const NavBtn = styled(Button)`
  display: none;
  @media ${Device.mobile} {
    display: block;
    position: absolute;
    top: 1%;
    right: 5%;
    color: #fff;
    font-size: 3em;
    &:hover {
      color: #fff;
    }
  }
`;

const NavMobile = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sideBar);

  return (
    <div className="navbar">
      <NavBtn variant="none" onClick={showSidebar}>
        <NavLink to="#" className="menu-bars">
          <FontAwesomeIcon icon={faAlignJustify} />
        </NavLink>
      </NavBtn>

      <NavModal sideBar={sideBar} showSidebar={showSidebar} />
    </div>
  );
};

export default NavMobile;
