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
import useGetCollection from "../customHooks/useGetCollection";
import useGetDoc from "../customHooks/useGetData";

const LeftSection = () => {
  const [about, aboutError, isAboutLoading] = useGetDoc("dashboard", "data");
  const [socials, socialsError, isSocialsLoading] = useGetCollection("socials");

  const { rive, RiveComponent } = useRive({
    src: "../assets/duck.riv",
  });

  if (isAboutLoading || isSocialsLoading) {
    return <div>wait</div>;
  }

  return (
    <LeftSectionStyle>
      <LeftSectionData>
        <BioOuter>
          <LinksStyle>
            {socials.map((x) => (
              <IconDisplay x={x} />
            ))}
          </LinksStyle>

          <BioText>
            <Salutation>Hi, I'm</Salutation>
            <NameStyle>{about.name}</NameStyle>
            <DesignationStyle>{about.designation}</DesignationStyle>
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
