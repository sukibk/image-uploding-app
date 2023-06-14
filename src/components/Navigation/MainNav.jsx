import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../../assets/site-logo.png";

function MainNav(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className={"fixed"}>
      <Navbar
        color="faded"
        light
        className={
          "px-10 w-screen h-[10dvh] min-h-[92px] bg-gray-500 bg-opacity-70 rounded-b-[1rem]"
        }
      >
        <NavbarBrand
          href="/"
          className="text-white self-center font-bold text-[35px]"
        >
          M&J
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="bg-white" />
      </Navbar>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={
          "w-2/3 md:w-1/3 mx-auto my-0 text-[25px] bg-gray-500 bg-opacity-70 rounded-b-[1rem]"
        }
      >
        <Nav navbar className={"w-1/3 mx-auto my-0"}>
          <NavItem className={"mx-auto my-0"}>
            <NavLink className={"text-white"} href="/components/">
              Gallery
            </NavLink>
          </NavItem>
          <NavItem className={"mx-auto my-0"}>
            <NavLink
              className={"text-white"}
              href="https://github.com/reactstrap/reactstrap"
            >
              Upload
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </div>
  );
}

export default MainNav;
