import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 24px;
  background: #fff;
  margin-bottom: 150px;
  @media (max-width: 768px) {
    margin-bottom: 200px;
  }
`;

export const Header = styled.div`
  text-align: left;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #0f2743;
  line-height: 1.1;
  margin-bottom: 16px;

  span:first-child {
    font-size: 40px;
    display: block;
  }

  span:last-child {
    font-size: 48px;
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    
    span:first-child {
      font-size: 32px;
    }
    
    span:last-child {
      font-size: 36px;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  max-width: 600px;
`;

export const Content = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-end;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  flex: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SupportButton = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;

  @media (max-width: 1024px) {
    margin-top: 24px;
    min-width: auto;
  }

  .ant-btn {
    background: #1890ff;
    border-color: #1890ff;
    color: #fff;
    height: 48px;
    padding: 0 32px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;

    &:hover {
      background: #40a9ff !important;
      border-color: #40a9ff !important;
      color: #fff !important;
    }
  }
`;
