import React, { useState } from "react";
import NavModal from "./NavModal";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

import { NavBtn, NavBar } from "./styled-components/NavMobileStyled";

const NavMobile = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sideBar);

  return (
    <NavBar>
      <NavBtn variant="none" onClick={showSidebar}>
        <NavLink to="#" className="menu-bars burger">
          <FontAwesomeIcon icon={faAlignJustify} />
        </NavLink>
      </NavBtn>

      <NavModal sideBar={sideBar} showSidebar={showSidebar} />
    </NavBar>
  );
};

export default NavMobile;
