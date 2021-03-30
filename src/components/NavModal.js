import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NavModal = ({ sideBar, showSidebar }) => {
  return (
    <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
      <ul className="nav-menu-items" onClick={showSidebar}>
        <li className="navbar-toggle">
          <NavLink to="#" className="menu-bars">
            <FontAwesomeIcon icon={faTimes} />
          </NavLink>
        </li>
        <li className="links">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="links">
          <NavLink to="/project">Projects</NavLink>
        </li>
        <li className="links">
          <NavLink to="/about">About Me</NavLink>
        </li>
      </ul>
    </nav>

    // <NavLinks
    //   id="flyoutMenu"
    //   onMouseDown={handleMouseDown}
    //   className={`visibility: ${menuVisibility === true ? "show" : "hidden"}`}
    // >
    //   <h2 className="links">
    //     <NavLink to="/" exact>
    //       Home
    //     </NavLink>
    //   </h2>
    //   <h2 className="links">
    //     <NavLink to="/project">Projects</NavLink>
    //   </h2>
    //   <h2 className="links">
    //     <NavLink to="/about">About Me</NavLink>
    //   </h2>
    // </NavLinks>
  );
};

export default NavModal;
