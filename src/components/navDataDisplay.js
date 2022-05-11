import React, { useRef } from "react";
import smooth from "react-scroll/modules/mixins/smooth";
import Strings from "../constant/stringConstants";
import { NavLinkList } from "./navBarStyle";
import { NavAnchor } from "./navBarStyle";

const NavDataDisplay = ({ heading, active }) => {
  return (
    <NavAnchor href="#">
      <NavLinkList label={heading} active={active}>
        {heading}
      </NavLinkList>
    </NavAnchor>
  );
};

export default NavDataDisplay;
