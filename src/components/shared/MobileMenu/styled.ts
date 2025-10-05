import styled from "styled-components";
import { Button } from "antd";

export const Overlay = styled.div<{ $isAnimating: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  animation: ${({ $isAnimating }) => $isAnimating ? 'fadeIn 0.3s ease' : 'fadeOut 0.3s ease'};
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

export const MenuContainer = styled.div<{ $isAnimating: boolean }>`
  width: 100%;
  max-width: 400px;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  animation: ${({ $isAnimating }) => $isAnimating ? 'slideIn 0.3s ease' : 'slideOut 0.3s ease'};
  z-index: 1001;
  
  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
  
  &:hover {
    background: #f5f5f5;
  }
  
  svg {
    font-size: 18px;
    color: #333;
  }
`;

export const LoginButton = styled(Button)`
  background: linear-gradient(269.99deg, #ed1c24 0.01%, #ef4029 19.15%, #ff671f 99.99%);
  color: #fff;
  border: none;
  border-radius: 8px;
  height: 40px;
  padding: 0 16px;
  font-weight: 500;
  
  &:hover {
    color: #fff !important;
    background: linear-gradient(269.99deg, #ff671f 0.01%, #ed1c24 19.15%, #ed1c24 99.99%) !important;
  }
`;

export const MenuContent = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f8f9fa;
    margin: 0 -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const MenuItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

export const MenuItemSubtitle = styled.div`
  font-size: 14px;
  color: #666;
`;

export const MenuItemIcon = styled.div`
  font-size: 20px;
`;

export const MenuItemArrow = styled.div`
  font-size: 18px;
  color: #999;
  font-weight: bold;
`;

export const MenuDivider = styled.div`
  height: 1px;
  background: #f0f0f0;
  margin: 8px 0;
`;
