import styled from "styled-components";

export const Bar = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Chip = styled.button`
  height: 36px;
  padding: 0 12px;
  border-radius: 9999px;
  border: 1px solid #e5e6eb;
  background: #fff;
  color: #0f2743;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const IconBtn = styled.button`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1000;
`;

export const Sheet = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 1001;
`;

export const SheetInner = styled.div`
  width: 86%;
  max-width: 420px;
  height: 100%;
  background: #fff;
  animation: slideIn 0.25s ease;
  overflow-y: auto;

  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  .sheet-item {
    width: 100%;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .title { font-size: 16px; font-weight: 600; color: #0b1a3a; }
  .sub { font-size: 14px; color: #666; }
  .arrow { font-weight: 700; color: #999; }
  .divider { height: 1px; background: #f0f0f0; }
`;


