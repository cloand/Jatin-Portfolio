import StyledComponents from "styled-components";
import AppColors from "../constant/colors";
import TextTheme from "../constant/theme";

export const Project = StyledComponents.div`

max-width:1700px;
margin:auto;
padding:4.5em 0;
`;

export const ProjectInner = StyledComponents.div`

`;

export const TopSection = StyledComponents.div`

max-width:400px;
margin:auto;
text-align:center;
margin-bottom:2.5em;
`;

export const TopHeading = StyledComponents.div`
font-size:${TextTheme.heading3.fontSize};
font-family:${TextTheme.heading3.fontFamily};
font-weight:${TextTheme.heading3.fontWeight};
color:${AppColors.white};


`;

export const BottomSection = StyledComponents.div`
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
