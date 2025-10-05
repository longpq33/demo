import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  /* Background gradient removed to show image clearly */
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 8px;
  }

  @media (min-width: 768px) {
    padding: 48px 24px;
    gap: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #1f1f1f;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  color: #555;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SearchBox = styled.div`
  max-width: 560px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const HeaderSlot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;