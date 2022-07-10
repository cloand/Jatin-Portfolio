import React from "react";
import { LeftSectionStyle } from "./leftSectionStyle";
import {
  ProjectName,
  Titles,
  Icon,
  CardMain,
  TagNames,
  SingleTag,
  Expand,
  RightProjectSection,
} from "./projectCardStyle";

const ProjectsCard = ({ name, tags, icon }) => {
  return (
    <CardMain>
      <img
        src="https://i.postimg.cc/26178hsf/albert-dera-ILip77-Sbm-OE-unsplash.jpg"
        width="30%"
        height="100%"
        style={{ borderRadius: "25px" }}
      />

      <RightProjectSection>
        <div>
          <Titles>
            <Icon src={icon} />

            <ProjectName>{name}</ProjectName>
          </Titles>
          <TagNames>
            {tags.map((i) => {
              return <SingleTag colors={i.color}>{i.label}</SingleTag>;
            })}
          </TagNames>
        </div>
        <Expand>Read More</Expand>
      </RightProjectSection>
    </CardMain>
  );
};

export default ProjectsCard;
