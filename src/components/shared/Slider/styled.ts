import styled from "styled-components";

export const Wrapper = styled.div<{ $gap: number; $peekRight: number }>`
  position: relative;
  overflow: visible;
  margin-right: -24px; /* stretch to page edge if parent has 24px padding */
  padding-right: 24px;
  overflow: hidden;

  /* reveal a part of next item on the right */
  .mask-right {
    width: ${({ $peekRight }) => $peekRight}px;
  }
`;

export const Inner = styled.div<{ $gap: number; $peekRight?: number }>`
  display: grid;
  grid-auto-flow: column;
  gap: ${({ $gap }) => $gap}px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding-bottom: 20px; /* avoid scrollbar overlap */
  -webkit-overflow-scrolling: touch;
  padding-right: ${({ $peekRight }) => ($peekRight ? `${$peekRight}px` : "0")};
  margin-right: ${({ $peekRight }) => ($peekRight ? `-${$peekRight}px` : "0")};

  /* hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
    height: 0;
    width: 0;
  }
`;

export const SlideItem = styled.div`
  scroll-snap-align: start;
  width: 340px;
`;

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
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 30px;
`;

export const NavBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  &[data-right] {
    left: auto;
    right: 12px;
  }
  &:hover {
    background: #fff3e8;
  }
  @media (max-width: 575px) {
    display: none;
  }
`;
