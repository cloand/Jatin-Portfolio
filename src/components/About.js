import React from "react";
import useGetDoc from "../customHooks/useGetData";
import useGetCollection from "../customHooks/useGetCollection";
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

const AboutComp = () => {
  const [about, error, isAboutLoading] = useGetDoc("dashboard", "data");
  console.log(about, "aboutSection");
  if (isAboutLoading) {
    return <>wait</>;
  }

  return (
    <About>
      <AboutInner>
        <TopSection>About</TopSection>
        <BottomSection>
          <BottomLeft>
            <MyImage src="#" />
          </BottomLeft>
          <BottomRight>{about.description}</BottomRight>
        </BottomSection>
      </AboutInner>
    </About>
  );
};

export default AboutComp;
