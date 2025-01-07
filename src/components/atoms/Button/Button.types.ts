import { ButtonHTMLAttributes } from "react";

type ButtonType = "primary" | "secondary" | "tertiary";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
  children: React.ReactNode;
}
