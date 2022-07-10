import React, { forwardRef, useState } from "react";
import { NavLinkList, NavAnchor } from "./navBarStyle";
import { Strings } from "../constant/stringConstants";

const NavDataSkeleton = (props, ref) => {
  const initialState = Strings.home;
  const [active, setActive] = useState(initialState);
  let activeSection = Strings.home;

  const { method, change } = props;
  const { homeRef, aboutRef, projectRef, experienceRef, contactRef } = ref;
  return (
    <>
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
    </>
  );
};

export default forwardRef(NavDataSkeleton);
