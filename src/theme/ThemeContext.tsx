import React, { createContext, useContext } from "react";
import { theme, ThemeType, ThemeProviderProps } from "./";

const ThemeContext = createContext<ThemeType>(theme);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
