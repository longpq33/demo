import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  right: 40px;
  bottom: 100px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 768px) {
    right: 16px;
    bottom: 80px;
    gap: 8px;
  }
`;

export const Bubble = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: #1f1f1f;
    background-color: #fff;
    position: relative;
    padding: 8px;
    width: 70px;
    text-align: left;
    border-radius: 8px;
    margin-right: 10px;

    &:before {
      content: "";
      position: absolute;
      bottom: -10px;
      right: 5px;
      border: 5px solid transparent;
      border-top: 5px solid #fff;
    }
  }
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    269.99deg,
    #ed1c24 0.01%,
    #ef4029 19.15%,
    #ff671f 99.99%
  );

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }

  svg {
    color: #fff;
  }
`;
