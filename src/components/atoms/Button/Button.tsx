import React from "react";
import { ButtonContainer } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", size = "medium", ...props }, ref) => {
    return (
      <ButtonContainer ref={ref} variant={variant} size={size} {...props}>
        {children}
      </ButtonContainer>
    );
  }
);
