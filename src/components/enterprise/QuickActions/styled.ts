import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  margin-bottom: 32px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
`;

export const Item = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 96px;
  text-decoration: none;
  color: #0f2743;
  gap: 8px;
  padding: 12px;

  &:hover {
    background: #feefe7;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
  }
`;


