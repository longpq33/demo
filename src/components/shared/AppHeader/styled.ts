import { Button, Flex } from "antd";
import styled from "styled-components";

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px;

  .language-button {
    display: flex;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: none;
    box-shadow: none;
    &:hover {
      background: transparent !important;
      border: none;
      color: #fff;
    }
  }
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LinkText = styled.a`
  color: #1f1f1f;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonLogin = styled(Button)`
  background: linear-gradient(269.99deg, #ed1c24 .01%, #ef4029 19.15%, #ff671f 99.99%);;
  color: #fff;
  border: none;

  &:hover {
    color: #fff !important;
    background: linear-gradient(269.99deg, #ff671f .01%, #ed1c24 19.15%, #ed1c24 99.99%) !important;
  }
`;

export const FlexCustom = styled(Flex)<{ $background?: string }>`
  padding: 6px;
  border-radius: 8px;
  &:hover {
    background: ${({ $background }) => $background || "transparent"};
    a {
      color: ${({ $background }) => $background ? "#d8bd88" : "#1f1f1f"};   
  }
  }  

  a {
    line-height: 1;
    &:hover {
      text-decoration: none;
      color: ${({ $background }) => $background ? "#d8bd88" : "#ff671f"};
    }
   
  }
`;

