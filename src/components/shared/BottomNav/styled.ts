import styled from "styled-components";

export const Bar = styled.nav`
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 16px;
  margin: 0 auto;
  background: #fde8df;
  backdrop-filter: saturate(180%) blur(12px);
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
  z-index: 10;
  overflow: hidden;

  @media (max-width: 768px) {
    left: 16px;
    right: 16px;
    bottom: 30px;
    gap: 4px;
    border-radius: 16px;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
  color: #1f1f1f;
  text-decoration: none;
  font-size: 12px;
  gap: 6px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  min-height: 44px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 6px 2px;
    font-size: 10px;
    gap: 4px;
    min-height: 48px;
  }

  &:hover {
    background: #fff;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;


