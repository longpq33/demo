import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 180ms ease, box-shadow 180ms ease,
    outline-color 180ms ease;

  &:hover {
    box-shadow: 0 12px 8px rgba(0, 0, 0, 0.16);
    outline: 1.5px solid #ff4d00; /* brand */
    outline-offset: -1px;
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    img {
      height: 140px !important;
      border-radius: 8px !important;
    }
  }
`;

export const CardMask = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 45%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.96) 75%,
    #fff 100%
  );
  transition: height 220ms ease, background 220ms ease, opacity 220ms ease;
  pointer-events: none;
  ${Card}:hover & {
    height: 60%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.96) 60%,
      #fff 95%
    );
  }
`;

export const CardTitle = styled.div`
  background-color: #fff;
  font-weight: 600;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  z-index: 9999;
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 30px 0 20px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
    font-weight: 400;
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #777;
  padding: 10px;
  padding-top: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  background-color: #fff;
  overflow: hidden;
  z-index: 9999;
  height: 40px;
  position: relative;
`;
