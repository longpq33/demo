import styled from "styled-components";

export const Bar = styled.nav`
  position: fixed;
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
`;

export const Item = styled.a`
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

  &:hover {
    background: #fff;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;


