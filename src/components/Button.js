import React from "react";
import { TextTheme, AppColors, ButtonType } from "../constant/constant";

function Button({ children: label, buttonType = ButtonType.primary }) {
  const _buttonType =
    buttonType === ButtonType.primary ? primaryButton : textOnlyButton;
  return (
    <button
      style={{
        border: 0,
        maxWidth: 100 + "%",
        ...TextTheme.button,
        ..._buttonType,
        textAlign: "center",
      }}
    >
      <h1>{label}</h1>
    </button>
  );
}

const primaryButton = {
  background: AppColors.primary500,
  color: AppColors.white,
  borderRadius: "10px",
  padding: ".5em 2em",
};

const textOnlyButton = {
  background: AppColors.background500,
  color: AppColors.primary500,
  borderRadius: "10px",
  padding: ".5em",
};

export { Button, textOnlyButton };
