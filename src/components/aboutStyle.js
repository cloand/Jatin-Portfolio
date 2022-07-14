import StyledComponents from "styled-components";
import TextTheme from "../constant/theme";
import AppColors from "../constant/colors";

export const About = StyledComponents.div`
    color:${AppColors.white};
   padding:7em;
   
    max-width:1700px;
    margin:auto;
    `;

export const AboutInner = StyledComponents.div`
  
    `;

export const TopSection = StyledComponents.div`
    font-size:${TextTheme.heading3.fontSize};
    font-family:${TextTheme.heading3.fontFamily};
    font-weight:${TextTheme.heading3.fontWeight};
    max-width:350px;
    text-align:center;
    margin:auto;
    margin-bottom:1.5em;
 
    `;

export const BottomSection = StyledComponents.div`
 
    display:flex;
    justify-content:space-between;
    @media(max-width:1100px){
        display:block;
       
    }
    `;

export const BottomLeft = StyledComponents.div`
  
    max-width:35%;
    @media(max-width:1100px){
        margin:auto;
        width:80%;
    }
    `;

export const BottomRight = StyledComponents.div`
    font-family: ${TextTheme.heading4.fontFamily};
    font-size:${TextTheme.heading4.fontSize};
    font-weight:${TextTheme.heading4.fontWeight};
    max-width:60%;
  
    @media(max-width:1100px){
        margin:auto;
       
    }
     @media(max-width:1100px){
        font-family: ${TextTheme.heading6.fontFamily};
    font-size:${TextTheme.heading6.fontSize};
    font-weight:${TextTheme.heading6.fontWeight};
    }
    `;

export const MyImage = StyledComponents.img`
   
    width:100%;
`;
