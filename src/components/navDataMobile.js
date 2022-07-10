import React, { forwardRef, useEffect } from "react";
import { NavListHanburg } from "./navBarStyle";
import NavDataSkeleton from "./navDataSkeleton";

const NavDataMobile = (props, ref) => {
  const { method, change, stateCheck } = props;
  const { homeRef, aboutRef, projectRef, experienceRef, contactRef } = ref;

  useEffect(() => {
    console.log(stateCheck);
  }, [stateCheck]);

  return (
    <NavListHanburg state={stateCheck}>
      <NavDataSkeleton
        method={method}
        change={change}
        ref={{ homeRef, aboutRef, projectRef, experienceRef, contactRef }}
      />
    </NavListHanburg>
  );
};

export default forwardRef(NavDataMobile);
