import StyledComponents from "styled-components";
import TextTheme from "../constant/theme";
import AppColors from "../constant/colors";

export const About = StyledComponents.div`
    color:${AppColors.white};
   padding:7em;
//    border:2px solid red;
   max-width:1700px;
   margin:auto;
    @media(max-width:400px){
     padding:0;   
    }
   `;

export const AboutInner = StyledComponents.div`
   
// border:2px solid green;
   `;

export const TopSection = StyledComponents.div`
//    border:2px solid white;
    font-size:${TextTheme.heading3.fontSize};
    font-family:${TextTheme.heading3.fontFamily};
    font-weight:${TextTheme.heading3.fontWeight};
    max-width:350px;
    text-align:center;
    margin:auto;
    margin-bottom:1.5em;
     @media(max-width:400px){
     max-width:100%;   
    }
 
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
        max-width:100%;
    }
    `;

export const BottomRight = StyledComponents.div`
// border:2px solid yellow;
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
     @media(max-width:400px){
     max-width:100%;
   padding-top:2em;
    }
    `;

export const MyImage = StyledComponents.img`
   
    width:100%;
`;
