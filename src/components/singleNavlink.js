import React from "react";
import { forwardRef } from "react";
import NavDataDisplay from "./navDataDisplay";
import { Strings, AppColors, navHeadings } from "../constant/constant";

const SingleNavLink = ({ heading, active }) => {
  return <NavDataDisplay heading={heading} active={active} />;
};

export default SingleNavLink;
