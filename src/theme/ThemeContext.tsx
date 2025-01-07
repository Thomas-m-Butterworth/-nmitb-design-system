import React from "react";
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from "styled-components";
import { ThemeType } from "./types";
import { GlobalStyles } from "./GlobalStyles";

export interface ThemeProviderProps {
  theme: ThemeType;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return (
    <StyledThemeProvider theme={theme as DefaultTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
