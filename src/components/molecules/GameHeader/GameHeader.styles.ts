import styled from "styled-components";

export const GameHeaderComponent = styled.header`
  background-color: ${({ theme }) => theme.colors.blue[400]};
  font-family: ${({ theme }) => theme.fonts.specialHeader};
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
