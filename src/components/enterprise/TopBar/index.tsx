"use client";
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import Image from "next/image";
import { Bar, Left, Right } from "./styled";
import VN from "@/assets/vn-flag.png";
import ChevronDown from "@/assets/icons/chevron-down";
import { LinkItem } from "@/components/shared/AppHeader";
import { QuestionCircleOutlined } from "@ant-design/icons";
import SearchInput from "@/components/shared/Search";
import BottomNav from "@/components/shared/BottomNav";
import { useClickOutside } from "@/hooks";

export interface TopBarProps {
  children?: React.ReactNode;
}

export default function TopBar({ children }: TopBarProps) {
  const [isShow, setIsShow] = useState(false);
  const [enableClickOutside, setEnableClickOutside] = useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsShow(!isShow);
  };

  const handleCloseBottomNav = () => {
    setIsShow(false);
  };

  // Enable click outside after a small delay when BottomNav is shown
  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => {
        setEnableClickOutside(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setEnableClickOutside(false);
    }
  }, [isShow]);

  const bottomNavRef = useClickOutside<HTMLDivElement>({
    callback: handleCloseBottomNav,
    enabled: enableClickOutside,
    excludeRefs: [buttonRef],
  });

  return (
    <Bar>
      <Left>
        <span className="viewing">Bạn đang xem trang</span>
        <Button ref={buttonRef} className="segment" onClick={handleClick}>
          Doanh nghiệp <ChevronDown color="#171717" />
        </Button>
        {children}
      </Left>
      <Right>
        <SearchInput
          placeholder="Quý khách đang tìm kiếm gì?"
          className="custom-search"
        />
        <LinkItem
          href="#"
          label="Liên hệ & Hỗ trợ"
          icon={<QuestionCircleOutlined />}
        />
        <Button className="language-button">
          <Image src={VN} alt="VN" width={24} height={24} />
          <ChevronDown color="#222" />
        </Button>
      </Right>
      {isShow && (
        <div className="bottom-nav-container" ref={bottomNavRef}>
          <BottomNav className="bottom-nav" isHome={false} />
        </div>
      )}
    </Bar>
  );
}
