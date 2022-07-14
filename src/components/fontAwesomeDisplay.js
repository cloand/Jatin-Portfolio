import React, { useState } from "react";
import { SingleLink, Anchored } from "./leftSectionStyle";
import { AppColors } from "../constant/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconDisplay = ({ x }) => {
  const [checkMouse, setCheckMouse] = useState(false);

  return (
    <Anchored
      href={x.link}
      target="_blank"
      // style={{ border: " 2px solid white" }}
    >
      <SingleLink colors={x.color}>
        <FontAwesomeIcon
          icon={x.icon}
          color={AppColors.white}
          style={{ position: "absolute", left: "29.5%", top: "26%" }}
          // onMouseOver={() => setCheckMouse(true)}
          // onMouseOut={() => setCheckMouse(false)}
          // color={checkMouse ? x.color : AppColors.white}
        />
      </SingleLink>
    </Anchored>
  );
};
export default IconDisplay;
