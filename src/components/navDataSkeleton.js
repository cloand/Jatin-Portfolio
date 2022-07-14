import React, { forwardRef, useEffect, useState } from "react";
import { NavLinkList, NavAnchor } from "./navBarStyle";
import { Strings } from "../constant/stringConstants";

const NavDataSkeleton = (props, ref) => {
  let activeSection = Strings.home;

  const { method, change, active, changingActive } = props;
  const { homeRef, aboutRef, projectRef, experienceRef, contactRef } = ref;

  return (
    <>
      <NavLinkList
        label={Strings.home}
        active={active}
        onClick={() => {
          change();
          changingActive(Strings.home);
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
          changingActive(Strings.about);
          method(aboutRef.current);
        }}
      >
        <NavAnchor active={active}>{Strings.about}</NavAnchor>
      </NavLinkList>

      <NavLinkList
        label={Strings.projects}
        active={active}
        onClick={() => {
          change();
          changingActive(Strings.projects);
          method(projectRef.current);
        }}
      >
        <NavAnchor active={active}>{Strings.projects}</NavAnchor>
      </NavLinkList>
      <NavLinkList
        label={Strings.contact}
        active={active}
        onClick={() => {
          change();
          changingActive(Strings.contact);
          method(contactRef.current);
        }}
      >
        <NavAnchor active={active}>{Strings.contact}</NavAnchor>
      </NavLinkList>
    </>
  );
};

export default forwardRef(NavDataSkeleton);
