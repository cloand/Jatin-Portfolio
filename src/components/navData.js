import React, { useState } from "react";
import NavDataDisplay from "./navDataDisplay";
import { Strings, AppColors, navHeadings } from "../constant/constant";

const NavData = () => {
  const initialState = Strings.home;
  const [active, setActive] = useState(initialState);
  let activeSection = Strings.home;

  const navData = navHeadings.map((heading, index) => (
    <a onClick={() => setActive(heading)} key={index}>
      <ul>
        <NavDataDisplay heading={heading} active={active} />
      </ul>
    </a>
  ));
  return navData;
};

export default NavData;
