import React from "react";
import { GameHeaderComponent } from "./GameHeader.styles";

export const GameHeader = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ children, ...props }, ref) => {
  return (
    <GameHeaderComponent ref={ref} {...props}>
      {children}
    </GameHeaderComponent>
  );
});
