import StyledComponents from "styled-components";
import AppColors from "../constant/colors";
import TextTheme from "../constant/theme";

export const Project = StyledComponents.div`
border:2px solid red;
max-width:1700px;
margin:auto;
`;

export const ProjectInner = StyledComponents.div`
border:2px solid black;
`;

export const TopSection = StyledComponents.div`
border:2px solid green;
`;

export const TopHeading = StyledComponents.div`
font-size:${TextTheme.heading3.fontSize};
font-family:${TextTheme.heading3.fontFamily};
font-weight:${TextTheme.heading3.fontWeight};
color:${AppColors.white};
border:2px solid yellow;

`;

export const BottomSection = StyledComponents.div`
border:2px solid white;
`;
