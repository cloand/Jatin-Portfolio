import React from "react";
import {
  About,
  AboutInner,
  BottomLeft,
  BottomRight,
  BottomSection,
  TopSection,
  MyImage,
} from "./aboutStyle";
import {
  BioOuter,
  LeftSectionData,
  LeftSectionStyle,
  RightSectionStyle,
} from "./leftSectionStyle";

const AboutComp = ({ data }) => {
  return (
    <About>
      <AboutInner>
        <TopSection>About</TopSection>
        <BottomSection>
          <BottomLeft>
            <MyImage src={data.image} />
          </BottomLeft>
          <BottomRight>{data.description}</BottomRight>
        </BottomSection>
      </AboutInner>
    </About>
  );
};

export default AboutComp;
