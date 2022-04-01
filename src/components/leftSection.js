import React from "react";
import {
  BioOuter,
  LeftSectionStyle,
  LinksStyle,
  Salutation,
  SingleLink,
  NameStyle,
  DesignationStyle,
  BioText,
  ButtonStyle,
  ButtonInner,
  LeftSectionData,
} from "./leftSectionStyle";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { Button, textOnlyButton } from "./Button";

const LeftSection = (props) => {
  return (
    <LeftSectionStyle>
      <LeftSectionData>
        <BioOuter>
          <LinksStyle>
            <SingleLink>
              <Instagram />
            </SingleLink>
            <SingleLink>
              <Twitter />
            </SingleLink>
            <SingleLink>
              <GitHub />
            </SingleLink>
            <SingleLink>
              <Linkedin />
            </SingleLink>
          </LinksStyle>

          <BioText>
            <Salutation>Hi, I'm</Salutation>
            <NameStyle>Jatin</NameStyle>
            <DesignationStyle>FLUTTER DEVELOPER</DesignationStyle>
          </BioText>
        </BioOuter>
        <ButtonStyle>
          <ButtonInner>
            <Button>Hire Me</Button>
          </ButtonInner>
          <ButtonInner>
            <Button buttonType={textOnlyButton}>See my Work</Button>
          </ButtonInner>
        </ButtonStyle>
      </LeftSectionData>
    </LeftSectionStyle>
  );
};

export default LeftSection;
