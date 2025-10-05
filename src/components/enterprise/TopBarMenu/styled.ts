import styled from "styled-components";

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background-color: #fff;
  padding: 12px 40px;

  @media (max-width: 768px) {
    overflow: auto;
    padding: 12px 0;
  }


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

  @media (max-width: 768px) {
    gap: 10px;

    a {
      display: inline-block;
      width: max-content;
    }
  }
`;
