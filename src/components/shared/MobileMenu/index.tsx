"use client";
import React, { useState, useEffect } from "react";
import SearchInput from "../Search";
import { 
  Overlay, 
  MenuContainer, 
  MenuHeader, 
  BackButton, 
  LoginButton, 
  MenuContent, 
  MenuItem, 
  MenuItemTitle, 
  MenuItemSubtitle, 
  MenuItemIcon,
  MenuItemArrow,
  MenuDivider
} from "./styled";
import ChevronLeft from "@/assets/icons/chevron-left";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 300); 
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <Overlay $isAnimating={isAnimating} onClick={onClose}>
      <MenuContainer $isAnimating={isAnimating} onClick={(e) => e.stopPropagation()}>
        <MenuHeader>
          <BackButton onClick={onClose}>
            <ChevronLeft color="#111" />
          </BackButton>
          <LoginButton>Đăng nhập</LoginButton>
        </MenuHeader>

        <MenuContent>
          <SearchInput placeholder="Quý khách cần tìm kiếm gì?" />
          
          <MenuItem>
            <div>
              <MenuItemTitle>Bạn đang xem trang</MenuItemTitle>
              <MenuItemSubtitle>Trang chủ</MenuItemSubtitle>
            </div>
            <MenuItemArrow>›</MenuItemArrow>
          </MenuItem>

          <MenuDivider />

          <MenuItem>
            <div>
              <MenuItemTitle>Ngôn ngữ</MenuItemTitle>
              <MenuItemSubtitle>Việt Nam</MenuItemSubtitle>
            </div>
            <MenuItemIcon>🇻🇳</MenuItemIcon>
          </MenuItem>

          <MenuDivider />

          <MenuItem>
            <div>
              <MenuItemTitle>Liên hệ & Hỗ trợ</MenuItemTitle>
            </div>
          </MenuItem>

          <MenuDivider />

          <MenuItem>
            <div>
              <MenuItemTitle>Tải app MSB mBank</MenuItemTitle>
            </div>
          </MenuItem>

          <MenuDivider />

          <MenuItem>
            <div>
              <MenuItemTitle>Tuyển dụng</MenuItemTitle>
            </div>
          </MenuItem>
        </MenuContent>
      </MenuContainer>
    </Overlay>
  );
}
