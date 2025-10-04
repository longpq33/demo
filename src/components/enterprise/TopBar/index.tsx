"use client";
import React from "react";
import { Button } from "antd";
import Image from "next/image";
import { Bar, Left, Right } from "./styled";
import VN from "@/assets/vn-flag.png";
import ChevronDown from "@/assets/icons/chevron-down";
import { LinkItem } from "@/components/shared/AppHeader";
import { QuestionCircleOutlined } from "@ant-design/icons";
import SearchInput from "@/components/shared/Search";

export interface TopBarProps {
  children?: React.ReactNode; // slot for menu
}

export default function TopBar({ children }: TopBarProps) {
  return (
    <Bar>
      <Left>
        <span className="viewing">Bạn đang xem trang</span>
        <Button className="segment">
          Doanh nghiệp <ChevronDown color="#171717" />
        </Button>
        {children}
      </Left>
      <Right>
        <SearchInput placeholder="Quý khách đang tìm kiếm gì?" className="custom-search" />
        <LinkItem href="#" label="Liên hệ & Hỗ trợ" icon={<QuestionCircleOutlined />} />
        <Button className="language-button">
          <Image src={VN} alt="VN" width={24} height={24} />
          <ChevronDown color="#222" />
        </Button>
      </Right>
    </Bar>
  );
}
