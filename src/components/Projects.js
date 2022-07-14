import React, { useState } from "react";
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
  Counter,
  TagsOuter,
} from "./projectCardStyle";

const ProjectsCard = ({ name, tags, icon }) => {
  const count = tags.length - 2;
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
          <TagsOuter>
            <TagNames>
              {tags.map((i, index) => {
                if (index < 2) {
                  return <SingleTag colors={i.color}>{i.label}</SingleTag>;
                }
              })}
            </TagNames>
            {count > 0 ? <Counter> +{count}</Counter> : null}
          </TagsOuter>
        </div>
        <Expand>Read More</Expand>
      </RightProjectSection>
    </CardMain>
  );
};

export default ProjectsCard;
