import React from "react";
import { NavStyle, NavLinkStyle, LogoStyle } from "./navBarStyle";
import NavData from "./navData";
import { ReactComponent as Logo } from "../assets/jatinLogo.svg";

const NavBar = () => {
  return (
    <NavStyle>
      <Logo
        style={{
          height: 6 + "%",
          width: 6 + "%",
        }}
      />

      <NavLinkStyle>
        <NavData />
      </NavLinkStyle>
    </NavStyle>
  );
};

export default NavBar;
