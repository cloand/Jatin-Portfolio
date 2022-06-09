import React from "react";
import { LeftSectionStyle } from "./leftSectionStyle";
import { ProjectName, CardMain, TagNames } from "./projectCardStyle";

const ProjectsCard = ({ name, tags }) => {
  return (
    <CardMain>
      <div>
        <img src="https://i.postimg.cc/26178hsf/albert-dera-ILip77-Sbm-OE-unsplash.jpg" />
      </div>
      <div>
        <div>
          <ProjectName>{name}</ProjectName>
          <TagNames></TagNames>
        </div>
        <div></div>
      </div>
    </CardMain>
  );
};

export default ProjectsCard;
