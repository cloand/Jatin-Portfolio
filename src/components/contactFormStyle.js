import StyledComponents from "styled-components";
import AppColors from "../constant/colors";
import TextTheme from "../constant/theme";

export const Form = StyledComponents.form`
    color:${AppColors.secondary500};
    background-color:${AppColors.background300};
    display:grid;
    gap:2rem;
    grid-template-columns:repeat(2,1fr);
   
`;

export const InputOutline = StyledComponents.div`
    width:100%;
`;

export const InputOutlineMessage = StyledComponents.div`
    grid-column:span 2;
    
`;

export const TextInput = StyledComponents.input`
    background-color:${AppColors.background700};
    border:0;
    width:100%;
    color:${AppColors.text500};
    font-size:1rem;
    padding:.5em;
    border-radius: 8px;
    height: 48px;
     @media(max-width:400px){
        font-size:.7rem;
    }
    `;

export const MessageInput = StyledComponents.textarea`
    width:100%;
    background:${AppColors.background700};
    border:0;
    color:${AppColors.text500};
    font-size:1rem;
    padding:.5em;
    border-radius: 8px;
    min-height: 96px;
    resize:none;
     @media(max-width:400px){
     font-size:.7rem;   
    }

    &::placeholder{
        font-family:${TextTheme.heading6.fontFamily};
         @media(max-width:400px){
        font-size:.7rem;
    }
    }
`;

export const Service = StyledComponents.form`
   padding-top:1em;
`;

export const ServiceHeading = StyledComponents.div`
    padding-bottom:1.5em;
`;

export const ServiceOutline = StyledComponents.div`
    padding:.5em 0;
    @media(max-width:400px){
        display:block;
    }
`;

export const Labels = StyledComponents.label`
  display:block;
  padding-bottom:1em;
  font-family: ${TextTheme.subtitle1.fontFamily};

`;

export const ServiceLabels = StyledComponents.label`
    padding:0 1em;
    font-family: ${TextTheme.subtitle1.fontFamily};
`;

export const CheckInput = StyledComponents.input`
    // @media(max-width:400px){
    //     display:block;
    // }
`;

export const Submit = StyledComponents.input`
    font-size:${TextTheme.heading6.fontSize};
    background:${AppColors.secondary500};
    color:${AppColors.white};
    padding:.5em .7em;
    width:250px;
    border-radius:10px;
    border:0;
    align:right;
    &:hover{
        cursor:pointer;
    }
     @media(max-width:800px){
     font-size:${TextTheme.body1.fontSize};   
    }
`;

export const ButtonSubmit = StyledComponents.div`
grid-column:span 2;
width:100%;
    display:flex;
    justify-content:flex-end;

    
`;
