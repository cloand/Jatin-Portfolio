import React, { forwardRef, useEffect } from "react";
import {
  NavStyle,
  NavLinkStyle,
  LogoStyle,
  Hamburg,
  HamburgLine,
} from "./navBarStyle";
import NavData from "./navData";
import { ReactComponent as Logo } from "../assets/jatinLogo.svg";
import { apiData } from "../services/services";

const NavBar = (props, ref) => {
  const { method, change } = props;
  const { homeRef, aboutRef, projectRef, experienceRef, contactRef } = ref;
  return (
    <NavStyle>
      <Logo />
      <Hamburg>
        <HamburgLine></HamburgLine>
        <HamburgLine></HamburgLine>
        <HamburgLine></HamburgLine>
      </Hamburg>
      <NavLinkStyle>
        <NavData
          method={method}
          change={change}
          ref={{ homeRef, aboutRef, projectRef, experienceRef, contactRef }}
        />
      </NavLinkStyle>
    </NavStyle>
  );
};

export default forwardRef(NavBar);
