import styled from "styled-components";

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background-color: #fff;
  padding: 12px 40px;

  a {
    &:hover {
      text-decoration: none;
      color: #ff671f;
    }
  }
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
