import React, { forwardRef, useContext, useEffect, useState } from "react";
import NavDataDisplay from "./navDataDisplay";
import { Strings, AppColors, navHeadings } from "../constant/constant";

import smooth from "react-scroll/modules/mixins/smooth";

import { NavLinkList, NavListOutline, NavAnchor } from "./navBarStyle";

import { myContext } from "../App";

const NavData = (props, ref) => {
  const initialState = Strings.home;
  const [active, setActive] = useState(initialState);
  let activeSection = Strings.home;

  const { method, change } = props;
  const { homeRef, aboutRef, projectRef, experienceRef, contactRef } = ref;

  return (
    <a>
      <NavListOutline>
        <NavLinkList
          label={Strings.home}
          active={active}
          onClick={() => {
            change();
            setActive(Strings.home);
            method(homeRef.current);
          }}
        >
          <NavAnchor active={active}>{Strings.home}</NavAnchor>
        </NavLinkList>

        <NavLinkList
          label={Strings.about}
          active={active}
          onClick={() => {
            change();
            setActive(Strings.about);
            method(aboutRef.current);
          }}
        >
          <NavAnchor active={active}>{Strings.about}</NavAnchor>
        </NavLinkList>

        <NavLinkList
          label={Strings.contact}
          active={active}
          onClick={() => {
            change();
            setActive(Strings.contact);
            method(contactRef.current);
          }}
        >
          <NavAnchor active={active}>{Strings.contact}</NavAnchor>
        </NavLinkList>

        <NavLinkList
          label={Strings.projects}
          active={active}
          onClick={() => {
            change();
            setActive(Strings.projects);
            method(projectRef.current);
          }}
        >
          <NavAnchor active={active}>{Strings.projects}</NavAnchor>
        </NavLinkList>

        <NavLinkList
          label={Strings.experience}
          active={active}
          onClick={() => {
            change();
            setActive(Strings.experience);
            method(experienceRef.current);
          }}
        >
          <NavAnchor active={active}>{Strings.experience}</NavAnchor>
        </NavLinkList>
      </NavListOutline>
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
