import React from "react";
import Strings from "../constant/stringConstants";
import { NavLinkList } from "./navBarStyle";
import { NavAnchor } from "./navBarStyle";

const NavDataDisplay = ({ heading, active }) => (
  <NavAnchor href="#">
    <NavLinkList label={heading} active={active}>
      {heading}
    </NavLinkList>
  </NavAnchor>
);

export default NavDataDisplay;
