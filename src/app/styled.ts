import styled from "styled-components";

export const Content = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  left: 40px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: all 0.3s ease;
  
  h1 {
    font-size: 32px;
    font-weight: 800;
    color: ${({ $isHovered }) => $isHovered ? '#fff' : '#1f1f1f'};
    margin-bottom: 0;
    transition: color 0.3s ease;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ $isHovered }) => $isHovered ? '#fff' : '#1f1f1f'};
    margin-bottom: 16px;
    transition: color 0.3s ease;
  }

  p {
    font-size: 16px;
    color: ${({ $isHovered }) => $isHovered ? '#fff' : '#555'};
    font-weight: 400;
    margin-bottom: 12px;
    line-height: 1.5;
    transition: color 0.3s ease;
  }
`;

export const SearchBox = styled.div`
  width: 500px;
`;