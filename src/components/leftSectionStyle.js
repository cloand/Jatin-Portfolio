import React from "react";
import styledComponents from "styled-components";
import { keyframes } from "styled-components";
import { AppColors, TextTheme } from "../constant/constant";

const singleDataAnimation = keyframes`
    0% {opacity:0%;transform: translateY(20px);}
    100% {opacity:100%;transform:translate(0)}
`;

const linkAnimation = keyframes`
    0% {opacity:0%;transform:translateX(-20px)}
    100%{opacity:100%;transform:translate(0)}
`;

const LeftSectionStyle = styledComponents.div`
    max-width:1400px;
    padding:4em 0 0 0;
   display:flex;
   margin:auto;
 height:100vh;
`;

const LeftSectionData = styledComponents.div`
    margin:auto;
    width:50%;
  
`;
const RightSectionStyle = styledComponents.div`
    width:50%;
 
`;

const LinksStyle = styledComponents.div`
    display:flex;
    flex-direction:column;
    padding-right:1.5em;
    justify-content:space-between;
`;

const SingleLink = styledComponents.div`
    padding:10px 10px;
    text-align:center;
    background-color:${AppColors.background500};
    color:${AppColors.white};
    text-decoration:none;
    border:2px solid ${AppColors.background500};
      border-radius:8px;
      transition:all 0.7s ease-in-out;
    &:hover{
        background-color:${({ colors }) => colors};
        color:${(colors) => colors}
    border:2px solid white;   
    }
    animation:${linkAnimation} 2s ease-in forwards;
`;

const BioOuter = styledComponents.div`
    color:${AppColors.white};
    display:flex;
    padding:0.5em;

`;

const Salutation = styledComponents.div`

color:${AppColors.text500};
font-family:${TextTheme.heading5.fontFamily};
font-size:${TextTheme.heading5.fontSize};
font-style:${TextTheme.heading5.fontStyle};
font-weight:${TextTheme.heading5.fontWeight};
line-height:${TextTheme.heading5.lineHeight};
letter-Spacing:${TextTheme.heading5.letterSpacing};
text-align:${TextTheme.heading5.textAlign};
opacity:0;
animation:${singleDataAnimation} 2s ease forwards;


`;

const NameStyle = styledComponents.div`
color:${AppColors.white};
font-family:${TextTheme.display.fontFamily};
font-size:${TextTheme.display.fontSize};
font-style:${TextTheme.display.fontStyle};
font-weight:${TextTheme.display.fontWeight};

letter-Spacing:${TextTheme.display.letterSpacing};
text-align:${TextTheme.display.textAlign};
animation-name:${singleDataAnimation};
opacity:0;
animation:${singleDataAnimation} 2s ease .7s forwards;
`;

const DesignationStyle = styledComponents.div`

    color:${AppColors.text300};
font-family:${TextTheme.body1.fontFamily};
font-size:${TextTheme.body1.fontSize};
font-style:${TextTheme.body1.fontStyle};
font-weight:${TextTheme.body1.fontWeight};    
line-height:${TextTheme.body1.lineHeight};
letter-Spacing:0.6em;
text-transform:uppercase;
text-align:${TextTheme.body1.textAlign};
animation-name:${singleDataAnimation};
animation:${singleDataAnimation} 2s ease 1s forwards;
opacity:0;
`;

const BioText = styledComponents.div`
    padding-left: 1em;
    padding:0;
    
`;

const ButtonStyle = styledComponents.div`
    
    padding:7em 0;
   
  width:100%;
   
`;

const ButtonOuter = styledComponents.div`

        display:flex;
       width:100%;
       padding:0;
      
`;

const ButtonInner = styledComponents.div`
     text-align:center;

   
`;

export {
  LeftSectionData,
  ButtonInner,
  ButtonStyle,
  BioText,
  LeftSectionStyle,
  LinksStyle,
  SingleLink,
  BioOuter,
  Salutation,
  NameStyle,
  DesignationStyle,
  RightSectionStyle,
  ButtonOuter,
};
