import React from "react";
import { TextTheme, AppColors, ButtonType } from "../constant/constant";
import styledComponents from "styled-components";

const ButtonStyle = styledComponents.button`
  position: relative;
  text-decoration: none;
  z-index: 1;
  border-radius:10px;
  width:60%;
  min-height:3em;
  &:hover {
    cursor: pointer;
   
  }
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    bottom:0;
    
    background:${({ buttonChoice }) =>
      buttonChoice == primaryButton
        ? AppColors.primary300
        : AppColors.background300};
        transform:scaleX(0);
  z-index: -1;
  transition:transform .5s ease-in-out;
  transform-origin:left;
  }
  &:hover::before{
    transform:scaleX(1);
    border-radius:10px;
  }
`;

function Button({ children: label, buttonType = ButtonType.primary }) {
  const _buttonType =
    buttonType === ButtonType.primary ? primaryButton : textOnlyButton;
  return (
    <ButtonStyle
      buttonChoice={_buttonType}
      href="#"
      style={{
        border: 0,
        ...TextTheme.button,
        
        ..._buttonType,
        textAlign: "center",
      }}
    >
      {label}
    </ButtonStyle>
  );
}

const primaryButton = {
  background: AppColors.primary500,
  color: AppColors.white,

  
};

const textOnlyButton = {
  background: AppColors.background500,
  color: AppColors.primary500,
 
  
};

export { Button, textOnlyButton };
