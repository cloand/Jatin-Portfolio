import styledComponents from "styled-components";
import {
  AppColors,
  TextTheme,
  Strings,
  NumericConstant,
} from "../constant/constant";

const { fontFamily, fontSize } = TextTheme.subtitle1;

const NavStyle = styledComponents.div`  
position:sticky;
top:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  max-width:1700px;
  margin:auto;
  background:${AppColors.background500};
  
  `;

const NavLinkStyle = styledComponents.ul`

  color:${AppColors.white};
  list-style-type:none;
  
  
`;

const relative = "relative";
const absolute = "absolute";
const block = "block";
const NavLinkList = styledComponents.li`

list-style : none;
  padding:0 2.5em .3em 2.5em;
  font-size: ${fontSize};
  font-family:${fontFamily};
  position:relative;
  transition:all 500ms ease;
  color:${({ label, active }) =>
    label === active ? AppColors.white : AppColors.text500};
    
    &:hover{
      
      color:${({ label, active }) =>
        label === active ? AppColors.white : AppColors.primary500};
    }
    &::before{
      content:'';
      position:absolute;
      background:${AppColors.primary500};
      top:100%;
      
      right:100%;
      
      
      transition:${({ label, active }) =>
        label === active ? "all 0 ease" : "all 500ms ease"};
      
    }
    &:hover::before{
      content:'';
      position:absolute;
      background:${({ label, active }) =>
        label === active ? AppColors.background500 : AppColors.primary500};;
      top:90%;
      left:35%;
      right:35%;
      bottom:0%;
      

    }
    &:active{
      color:${AppColors.white};
    }
`;

const LogoStyle = styledComponents.div`
width:25%;
height: 25%;

`;

const NavAnchor = styledComponents.a`
    text-decoration:none;
    cursor:pointer;
   
`;

const NavListOutline = styledComponents.ul`
    display:flex;
`;

export {
  NavListOutline,
  NavStyle,
  NavLinkStyle,
  NavLinkList,
  LogoStyle,
  NavAnchor,
};
