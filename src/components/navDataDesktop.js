import React, { forwardRef } from "react";
import { NavListOutline } from "./navBarStyle";
import NavDataSkeleton from "./navDataSkeleton";

const NavDataDesktop = (props, ref) => {
  const { method, change } = props;
  const { homeRef, aboutRef, projectRef, experienceRef, contactRef } = ref;

  return (
    <NavListOutline>
      <NavDataSkeleton
        method={method}
        change={change}
        ref={{ homeRef, aboutRef, projectRef, experienceRef, contactRef }}
      />
    </NavListOutline>
  );
};

export default forwardRef(NavDataDesktop);
