import React from "react";
import styledComponents from "styled-components";
import { AppColors, TextTheme } from "../constant/constant";

const CardMain = styledComponents.div`
    padding:4em 0 0 4em;
    min-height:40vh;
min-width:45%
`;

const CardOuter = styledComponents.div`
   
    
    padding-right:4em;
    background:${AppColors.primary700};
    border-radius:0 16px 16px 0;
    min-height:inherit;
`;

const CardInner = styledComponents.div`
    display:flex;
    align-items:space-between;
    padding:1em;
    justify-content:space-between;
    
   background:${AppColors.background500};
   border-radius:0 16px 16px 0;
   min-height:inherit;
`;

const CardData = styledComponents.div`

   
`;

const CardLeft = styledComponents.div`

    width:30%;
    
     transform:translate(-70px,-70px);
   
`;

const CardRight = styledComponents.div`
  
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
   
`;

const HeadingStyle = styledComponents.div`
    color:${AppColors.white};
font-family:${TextTheme.heading3.fontFamily};
font-size:${TextTheme.heading3.fontSize};
font-style:${TextTheme.heading3.fontStyle};
font-weight:${TextTheme.heading3.fontWeight};
line-height:${TextTheme.heading3.lineHeight};
letter-Spacing:${TextTheme.heading3.letterSpacing};
text-align:${TextTheme.heading3.textAlign};

`;

const TagsStyle = styledComponents.div`
    color:${AppColors.white};
font-family:${TextTheme.heading5.fontFamily};
font-size:${TextTheme.heading5.fontSize};
font-style:${TextTheme.heading5.fontStyle};
font-weight:${TextTheme.heading5.fontWeight};
line-height:${TextTheme.heading5.lineHeight};
letter-Spacing:${TextTheme.heading5.letterSpacing};
text-align:${TextTheme.heading5.textAlign};

    border-radius:5px;
`;
const TagOuter = styledComponents.div`
    display:flex;
    justify-content:space-between;
    padding-top:.5em;
    flex-wrap:wrap;
`;
export {
  CardData,
  CardInner,
  CardLeft,
  CardOuter,
  CardRight,
  TagsStyle,
  HeadingStyle,
  TagOuter,
  CardMain,
};
