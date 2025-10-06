import { colors } from "@/theme";
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
    padding: 0;
    position: sticky;
    top: 55px;
    z-index: 99999;
    background-color: #fafafa;
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

  a {
    color: #000;

    &:first-child {
      border-bottom: 2px solid ${colors.brand.primary};
    }
  }

  @media (max-width: 768px) {
    gap: 10px;

    a {
      display: inline-block;
      width: max-content;
    }
  }
`;
