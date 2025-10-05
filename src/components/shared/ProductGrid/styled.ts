import styled from "styled-components";

export const GridContainer = styled.div<{ $gap: number }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ $gap }) => $gap}px;
  
  /* Mobile only - hide on desktop */
  @media (min-width: 769px) {
    display: none;
  }
`;
