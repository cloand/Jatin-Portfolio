import React, { forwardRef, useEffect, useState } from "react";
import { NavStyle, NavLinkStyle, Hamburg, Options } from "./navBarStyle";
import NavData from "./navData";
import { ReactComponent as Logo } from "../assets/jatinLogo.svg";
// import { apiData } from "../services/services";
import { useRive } from "rive-react";
import Menu from "../assets/menu.riv";

const NavBar = (props, ref) => {
  const { method, change, stateCheck, setHanburgStateCheck } = props;
  const { homeRef, aboutRef, projectRef, experienceRef, contactRef } = ref;
  const [anime, setAnime] = useState(null);

  const { RiveComponent, rive } = useRive({
    src: Menu,
    animations: anime,
    autoplay: false,
  });

  const clickableState = () => {
    if (stateCheck) {
      setAnime("close");
    } else {
      setAnime("open");
    }
  };

  return (
    <NavStyle>
      <Logo />

      <Hamburg>
        <RiveComponent
          onClick={() => {
            clickableState();
            setHanburgStateCheck();
          }}
          style={{
            height: "50px",
            width: "50px",
          }}
        />
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
