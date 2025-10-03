import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  left: 40px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 5px;
  h1 {
    font-size: 32px;
    font-weight: 800;
    color: #1f1f1f;
    margin-bottom: 0;
  }
  p {
    font-size: 16px;
    color: #555;
    font-weight: 400;
  }
`;

export const SearchBox = styled.div`
  width: 500px;
`;