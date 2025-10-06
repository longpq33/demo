import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0 10px;
  background-color: #fff;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 0;
  border: none;
  outline: none;
  color: #000;
  
  &:focus {
    outline: none;
    border: none;
  }
`;

export const Icon = styled(SearchOutlined)`
  font-size: 20px;
`;