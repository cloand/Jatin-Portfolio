import styled from "styled-components";
import StyledComponents from "styled-components";
import AppColors from "../constant/colors";
import TextTheme from "../constant/theme";

const ContactOuter = StyledComponents.div`
  
  max-width:1700px;
  margin:auto;
  padding-top:.1em;
  
`;

const ContactInner = StyledComponents.div`
 
  margin-top:6em;
`;

const TopSection = StyledComponents.div`

max-width:800px;
margin:auto;
text-align:center;
color:${AppColors.white};
`;

const TopHeading = StyledComponents.div`

font-size:${TextTheme.heading3.fontSize};
font-family:${TextTheme.heading3.fontFamily};
`;

const TopPara = StyledComponents.div`
 
  font-size:${TextTheme.heading6.fontSize};
  padding-top:.3em;
  font-family: ${TextTheme.heading6.fontFamily};
`;

const BottomSection = StyledComponents.div`

max-width:1300px;
margin:auto;
`;

const CardOuter = StyledComponents.div`

display:flex;
justify-content:space-between;
margin:4em 0;
background:${AppColors.background300};
border-radius:20px;
box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.25);
`;

const CardLeft = StyledComponents.div`
  
  padding:3em;
  width:30%;
  color:${AppColors.white};
  background:${AppColors.secondary500};
  border-radius:20px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
`;

const LeftHeader = StyledComponents.div`
  
  font-size:${TextTheme.heading5.fontSize};
  padding-bottom:2em;
  font-family: ${TextTheme.heading5.fontFamily};
`;

const Contacts = StyledComponents.div`
  padding:4em 0;
`;

const LeftContacts = StyledComponents.div`
  padding:1em 0;
  font-family: ${TextTheme.subtitle1.fontFamily};

`;

const LeftDisc = StyledComponents.div`
font-family: ${TextTheme.subtitle1.fontFamily};
`;

const LeftMessage = StyledComponents.div`
font-size:${TextTheme.button.fontSize};
font-family: ${TextTheme.button.fontFamily};
`;

const LeftIcons = StyledComponents.div`
  padding-top:2em;
`;

const CardRight = StyledComponents.div`
  
  width:67%;
  border-radius:20px;
  padding:1.5em 1.5em 1.5em 1.5em;
`;

export {
  ContactOuter,
  ContactInner,
  TopSection,
  BottomSection,
  CardOuter,
  CardLeft,
  LeftContacts,
  CardRight,
  TopHeading,
  TopPara,
  LeftHeader,
  LeftDisc,
  Contacts,
  LeftMessage,
  LeftIcons,
};
