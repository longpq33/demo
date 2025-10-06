import { colors } from "@/theme";
import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 24px;
  background: #fff;
  width: 100%;
  position: relative;

  .bottom-nav-container {
    position: absolute;
    top: 100%;
    left: 5.5%;
    width: 60%;
    z-index: 999;

    .bottom-nav {
      width: 100%;
      grid-template-columns: repeat(7, 1fr);
      background: ${colors.surface.base};
      padding: 20px;
      position: relative;

      > div {
        &:hover {
          background-color: #feefe7;
        }
      }
    }
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;

  .viewing {
    color: #666;
    font-size: 12px;
  }

  .segment {
    border-radius: 20px;
    &:hover {
      border-color: #d9d9d9 !important;
      span,
      svg {
        color: #ff671f;
        stroke: #ff671f;
      }
    }
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex: 1;

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

  .custom-search {
    border-radius: 30px;
    background-color: #f0f0f0;
    width: 300px;
    height: 40px;
  }
`;
