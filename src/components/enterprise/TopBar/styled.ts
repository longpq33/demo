import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 24px;
  background: #fff;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .viewing {
    color: #666;
    font-size: 12px;
  }

  .segment {
    border-radius: 20px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .lang {
    padding: 0 8px;
  }
`;


