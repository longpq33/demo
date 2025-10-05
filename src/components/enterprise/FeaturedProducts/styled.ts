import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: #0b1a3a;
  margin-bottom: 16px;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #666;
  font-size: 16px;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #ff4d4f;
  font-size: 16px;
  background: #fff2f0;
  border: 1px solid #ffccc7;
  border-radius: 8px;
`;

export const EmptyMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #999;
  font-size: 16px;
  background: #f5f5f5;
  border-radius: 8px;
`;