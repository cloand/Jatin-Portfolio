import React from "react";
import { LeftSectionStyle } from "./leftSectionStyle";
import {
  CardInner,
  CardLeft,
  CardMain,
  CardOuter,
  CardRight,
  HeadingStyle,
  ImageStyle,
  TagOuter,
  TagsStyle,
} from "./projectCardStyle";

const ProjectsCard = ({ name, tags }) => {
  return (
    <CardMain>
      <CardOuter>
        <CardInner>
          <CardLeft>
            <img
              src="https://i.postimg.cc/YqXZ7HWY/projets-ingenieurs-esilv-720x421.webp"
              alt="project image"
              width="100%"
              height="120%"
              style={{ borderRadius: "18px" }}
            ></img>
          </CardLeft>
          <CardRight>
            <HeadingStyle>{name}</HeadingStyle>
            <TagOuter>
              {tags.map((x) => (
                <TagsStyle>{x}</TagsStyle>
              ))}
            </TagOuter>
          </CardRight>

          <img
            src="https://i.postimg.cc/mgFC8Y3J/project-management.png"
            alt="hello"
            width="10%"
            height="10%"
          ></img>
        </CardInner>
      </CardOuter>
    </CardMain>
  );
};

export default ProjectsCard;
