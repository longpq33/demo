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
  padding: 12px 16px;
  border: none;
  outline: none;
  &:focus{
    outline: none;
    border: none;
  }
`;

export const Icon = styled(SearchOutlined)`
  font-size: 20px;
`;