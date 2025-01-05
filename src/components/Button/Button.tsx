import React from "react";
import { ButtonContainer } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
