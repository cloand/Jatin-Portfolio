import React from "react";
import styledComponents from "styled-components";
import { AppColors, TextTheme } from "../constant/constant";

const LeftSectionStyle = styledComponents.div`
    max-width:800px;
    padding:18% 0 0 0;
   
`;

const LeftSectionData = styledComponents.div`
    
    max-width:60%;
   
`;

const LinksStyle = styledComponents.div`
    display:flex;
    flex-direction:column;
    padding-right:1.5em;
`;

const SingleLink = styledComponents.div`
    padding:.55em;
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
`;

const NameStyle = styledComponents.div`
color:${AppColors.white};
font-family:${TextTheme.display.fontFamily};
font-size:${TextTheme.display.fontSize};
font-style:${TextTheme.display.fontStyle};
font-weight:${TextTheme.display.fontWeight};

letter-Spacing:${TextTheme.display.letterSpacing};
text-align:${TextTheme.display.textAlign};

`;

const DesignationStyle = styledComponents.div`

    color:${AppColors.text300};
font-family:${TextTheme.body1.fontFamily};
font-size:${TextTheme.body1.fontSize};
font-style:${TextTheme.body1.fontStyle};
font-weight:${TextTheme.body1.fontWeight};    
line-height:${TextTheme.body1.lineHeight};
letter-Spacing:0.4em;
text-align:${TextTheme.body1.textAlign};
`;

const BioText = styledComponents.div`
    padding-left: 1em;
    padding:0;
    
`;

const ButtonStyle = styledComponents.div`
    display:flex;
    padding:7em 0;
    
   
   
`;

const ButtonInner = styledComponents.div`
    padding-right:2em;
     max-width:50%;
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
};
