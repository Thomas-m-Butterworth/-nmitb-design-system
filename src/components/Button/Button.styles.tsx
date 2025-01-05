import React from "react";
import styled from "styled-components";

export const ButtonContainer = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: ${({ theme }) => theme.colors.pink[300]};
  font-family: ${({ theme }) => theme.fonts.body};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pink[500]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.pink[200]};
  }
`;
