import styled from "styled-components";
import { Button } from "antd";

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  /* &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  } */
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardDate = styled.div`
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #0f2743;
  margin-bottom: 12px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 50px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductSection = styled.div`
  background: #feefe7;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const ProductHeader = styled.div`
  font-size: 12px;
  color: #ff4d00;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
`;

export const ProductName = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #0f2743;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 35px;
`;

export const ProductButton = styled(Button)`
  background: #ff4d00;
  border: none;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  height: 36px;
  padding: 0 20px;

  &:hover {
    background: #e64400 !important;
    color: #fff !important;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
