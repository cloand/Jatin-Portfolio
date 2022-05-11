import React, { useState } from "react";
import { SingleLink } from "./leftSectionStyle";
import { AppColors } from "../constant/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconDisplay = ({ x }) => {
  const [checkMouse, setCheckMouse] = useState(false);

  return (
    <SingleLink colors={x.color}>
      <a href={x.link} target="_blank">
        <FontAwesomeIcon
          icon={x.icon}
          onMouseOver={() => setCheckMouse(true)}
          onMouseOut={() => setCheckMouse(false)}
          color={checkMouse ? x.color : AppColors.white}
        />
      </a>
    </SingleLink>
  );
};
export default IconDisplay;
