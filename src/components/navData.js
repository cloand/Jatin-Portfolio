import React, { forwardRef, useContext, useEffect, useState } from "react";
import NavDataDisplay from "./navDataDisplay";
import { Strings, AppColors, navHeadings } from "../constant/constant";
import NavDataDesktop from "./navDataDesktop";
import smooth from "react-scroll/modules/mixins/smooth";

import { NavLinkList, NavListOutline, NavAnchor } from "./navBarStyle";

const NavData = (props, ref) => {
  const { method, change } = props;
  const { homeRef, aboutRef, projectRef, experienceRef, contactRef } = ref;

  return (
    <a>
      <NavDataDesktop
        method={method}
        change={change}
        ref={{ homeRef, aboutRef, projectRef, experienceRef, contactRef }}
      />
    </a>
  );

  // const navData = navHeadings.map((heading, index) => (
  //   <a
  //     onClick={() => {
  //       setActive(heading);
  //     }}
  //     key={index}
  //   >
  //     <ul>
  //       <NavDataDisplay
  //         heading={heading}
  //         active={active}
  //         ref={{ homeRef, aboutRef, projectRef, experienceRef, contactRef }}
  //         method={method}
  //         change={change}
  //       />
  //     </ul>
  //   </a>
  // ));
  // return navData;
};

export default forwardRef(NavData);
