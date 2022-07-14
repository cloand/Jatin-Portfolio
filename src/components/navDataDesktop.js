import React, { forwardRef } from "react";
import { NavListOutline } from "./navBarStyle";
import NavDataSkeleton from "./navDataSkeleton";

const NavDataDesktop = (props, ref) => {
  const { method, change, active, changingActive } = props;
  const { homeRef, aboutRef, projectRef, experienceRef, contactRef } = ref;

  return (
    <NavListOutline>
      <NavDataSkeleton
        method={method}
        change={change}
        ref={{ homeRef, aboutRef, projectRef, experienceRef, contactRef }}
        active={active}
        changingActive={changingActive}
      />
    </NavListOutline>
  );
};

export default forwardRef(NavDataDesktop);
