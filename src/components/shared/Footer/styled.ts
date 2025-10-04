import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #0f2743;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100; /* High z-index to overlay content above */
`;

export const CollapseButton = styled.button<{ $isCollapsed: boolean }>`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  color: #ff4d00;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10000; /* Highest z-index for collapse button */
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateX(-50%) translateY(-2px);
  }

  &:active {
    transform: translateX(-50%) translateY(0px);
  }

  svg {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ $isCollapsed }) =>
      $isCollapsed ? "rotate(0deg)" : "rotate(180deg)"};
  }
`;

export const TopSection = styled.div<{ $isCollapsed: boolean }>`
  padding: ${({ $isCollapsed }) =>
    $isCollapsed ? "40px 24px 32px" : "0 24px"};
  height: ${({ $isCollapsed }) => ($isCollapsed ? "auto" : "0")};
  max-height: ${({ $isCollapsed }) => ($isCollapsed ? "1000px" : "0")};
  overflow: hidden;
  transition: padding 0.4s ease, height 0.4s ease, max-height 0.4s ease;
  
`;

export const BottomSection = styled.div<{ $isCollapsed: boolean }>`
  padding: 32px 24px 40px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  margin-top: ${({ $isCollapsed }) => ($isCollapsed ? "0" : "40px")};
`;

export const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 40px 0;
  border-bottom: 1px solid #888;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
`;

export const LinkItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;
  opacity: 0.9;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 1;
    text-decoration: none;
    color: #ff671f;
  }
`;

export const AppSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AppButton = styled.button`
  border: none;
  border-radius: 4px;
  /* padding: 12px 16px; */
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background 0.2s ease;
  border: 0.5px solid #fff;
  width: fit-content;
  overflow: hidden;

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const CompanyInfo = styled.div`
  flex: 1;
  gap: 10px;
`;

export const Logo = styled.div`
  background: #ed1c24;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 12px;
`;

export const CompanyName = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
`;

export const Address = styled.p`
  font-size: 14px;
  color: #fff;
  opacity: 0.9;
  line-height: 1.5;
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1;
`;

export const ContactTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0;
`;

export const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    text-decoration: none;
    color: #ff671f;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.fb {
    background: #1877f2;
  }

  &.linkedin {
    background: #0077b5;
    border-radius: 0;
  }

  &.youtube {
    background: #ff0000;
    width: 35px;
    height: 25px;
  }

  &.zalo {
    background:rgb(3, 149, 228);
  }

  &.tiktok {
    background: #000;
    border-radius: 0;

    svg {
      color: #fff;
    }
  }
`;

export const PhoneSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;
  flex: 1;
`;

export const PhoneItem = styled.div`
  display: flex;
  gap: 4px;
`;

export const PhoneLabel = styled.span`
  font-size: 14px;
  color: #fff;
  opacity: 0.9;
`;

export const PhoneNumber = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;

export const YouTube = styled.div`
  width: 100%;
  height: 100%;
  background: #ff0000;
  border-radius: 5px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid transparent;
    border-left: 5px solid #000;
    margin-left: 4px;
  }
`;

export const BrandName = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: #fff;
`;