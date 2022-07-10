import React, { useState } from "react";
import {
  BioOuter,
  LeftSectionStyle,
  LinksStyle,
  Salutation,
  NameStyle,
  DesignationStyle,
  BioText,
  ButtonStyle,
  ButtonInner,
  LeftSectionData,
  RightSectionStyle,
  ButtonOuter,
} from "./leftSectionStyle";

import { Button, textOnlyButton } from "./Button";
import Rive, { useRive } from "rive-react";
import IconDisplay from "./fontAwesomeDisplay";
import Duck from "../assets/duck.riv";

const LeftSection = ({ post }) => {
  const { rive, RiveComponent } = useRive({
    src: "../assets/duck.riv",
  });

  return (
    <LeftSectionStyle>
      <LeftSectionData>
        <BioOuter>
          <LinksStyle>
            {post.socials.map((x) => (
              <IconDisplay x={x} />
            ))}
          </LinksStyle>

          <BioText>
            <Salutation>Hi, I'm</Salutation>
            <NameStyle>{post.name}</NameStyle>
            <DesignationStyle>{post.designation}</DesignationStyle>
          </BioText>
        </BioOuter>
        <ButtonStyle>
          <ButtonOuter>
            <ButtonInner style={{ width: "46%" }}>
              <Button>Hire Me</Button>
            </ButtonInner>
            <ButtonInner style={{ width: "46%" }}>
              <Button buttonType={textOnlyButton}>Explore</Button>
            </ButtonInner>
          </ButtonOuter>
        </ButtonStyle>
      </LeftSectionData>
      <RightSectionStyle>
        <Rive src={Duck} useOffscreenRenderer={false} />
      </RightSectionStyle>
    </LeftSectionStyle>
  );
};

export default LeftSection;
