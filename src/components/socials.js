import React from "react";
import { AppColors } from "../constant/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = ({ icon, link }) => {
  return (
    <a href={link} target="_blank">
      <span>
        <FontAwesomeIcon icon={icon} color={AppColors.white} />
      </span>
    </a>
  );
};

export default Socials;
