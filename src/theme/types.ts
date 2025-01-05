import { ReactNode } from "react";
import { colors, fonts, typeScale } from "./";

export interface ThemeType {
  colors: typeof colors;
  fonts: typeof fonts;
  typeScale: typeof typeScale;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
