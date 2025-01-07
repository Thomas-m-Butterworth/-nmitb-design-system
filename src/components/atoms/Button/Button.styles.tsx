import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

const buttonVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.pink[300]};
    &:hover {
      background-color: ${({ theme }) => theme.colors.pink[500]};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.pink[200]};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.yellow[400]};
    color: ${({ theme }) => theme.colors.blue[400]};
    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow[500]};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.yellow[300]};
    }
  `,
  tertiary: css`
    background-color: ${({ theme }) => theme.colors.blue[300]};
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue[500]};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.blue[200]};
    }
  `,
};
const buttonSizes = {
  small: css`
    height: 30px;
    width: 80px;
    font-size: ${({ theme }) => theme.typeScale.helperText};
  `,
  medium: css`
    height: 35px;
    width: 90px;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
  `,
  large: css`
    height: 45px;
    width: 100px;
    font-size: ${({ theme }) => theme.typeScale.h5};
  `,
};

export const ButtonContainer = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 16px;
  cursor: pointer;

  ${({ variant = "primary" }) => buttonVariants[variant]}
  ${({ size = "medium" }) => buttonSizes[size]}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    border: 2px solid white;
  }
`;
