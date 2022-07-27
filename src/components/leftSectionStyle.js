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
 height:80vh;
//  border:2px solid red;
  @media(max-width:400px){
     padding:0; 
   
    }
  
`;

const LeftSectionData = styledComponents.div`
    margin:auto;
    width:50%;
    // border:2px solid green;
   @media(max-width:400px){
        width:100%;
       
    }
`;
const RightSectionStyle = styledComponents.div`
    width:50%;
  @media(max-width:400px){
     display:none;   
    }
`;

const LinksStyle = styledComponents.div`
    display:flex;
    flex-direction:column;
    padding-right:1.5em;
    justify-content:space-between;
`;

const SingleLink = styledComponents.li`
 
   position:relative;
    height:35px;
    width:35px;
   
 
    background-color:${AppColors.background500};
    color:${AppColors.white};
    text-decoration:none;
    display:inline-block;

    // border:2px solid white;
      border-radius:50%;
    
      transition:all .2s ease-in-out;
    &:hover{
        // background-color:${({ colors }) => colors};
        background-color:${AppColors.background300};
        color:${(colors) => colors}
    // border:2px solid white;   
    box-shadow:0 0 2px white;
   
   
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
 @media(max-width:400px){
        
     font-size:${TextTheme.body1.fontSize};
    }

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
@media(max-width:400px){
    font-size:${TextTheme.heading1.fontSize};
   }
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
@media(max-width:400px){
     letter-Spacing:0.4em;
        
     font-size:${TextTheme.caption.fontSize};
    }
`;

const BioText = styledComponents.div`
    padding-left: 1em;
    padding:0;
    
`;

const ButtonStyle = styledComponents.div`
    // border:2px solid red;
    padding-top:4em;
   
  width:100%;
   
`;

const ButtonOuter = styledComponents.div`

        display:flex;
        justify-content:space-between;
       width:100%;
       padding:0;
      
`;

const ButtonInner = styledComponents.div`
     text-align:center;
width:100%;
   
`;

const Anchored = styledComponents.a`
    &:hover{
        transform:scale(1.2);
    }
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
  Anchored,
};
