import React from "react";
import styledComponents from "styled-components";
import AppColors from "../constant/colors";
import TextTheme from "../constant/theme";

export const PageOuter = styledComponents.div`
// border:2px solid green;
max-width:1700px;
margin:auto;
`;
export const PageInner = styledComponents.div`
// border:2px solid green;
margin:3em 0;
`;

export const PageTop = styledComponents.div`
// border:2px solid green;
max-width:100px;
margin:auto;
`;

export const Headers = styledComponents.div`
// border:2px solid green;
font-size:${TextTheme.heading3.fontSize};
font-family:${TextTheme.heading3.fontFamily};
color:${AppColors.white};

`;

export const PageBottom = styledComponents.div`
// border:2px solid green;
margin-top:3em;
margin-bottom:2em;
`;

export const BottomInner = styledComponents.div`
// border:2px solid green;
margin-top:2.5em;
margin:auto;
display:grid;
gap:1em;
grid-template-columns:repeat(3,1fr);

@media(max-width:1650px){
    grid-template-columns:repeat(2,1fr);
}
@media(max-width:1300px){
    grid-template-columns:repeat(1,1fr);
}
`;

export const ButtonSection = styledComponents.div`
    margin:auto;
    max-width:200px;
   
`;
