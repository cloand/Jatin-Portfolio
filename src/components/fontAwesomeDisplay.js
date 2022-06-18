import React, { useState } from "react";
import { SingleLink } from "./leftSectionStyle";
import { AppColors } from "../constant/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconDisplay = ({ x }) => {
  const [checkMouse, setCheckMouse] = useState(false);

  return (
    <a href={x.link} target="_blank">
      <SingleLink colors={x.color}>
        <FontAwesomeIcon
          icon={x.icon}
          color={AppColors.white}

          // onMouseOver={() => setCheckMouse(true)}
          // onMouseOut={() => setCheckMouse(false)}
          // color={checkMouse ? x.color : AppColors.white}
        />
      </SingleLink>
    </a>
  );
};
export default IconDisplay;
