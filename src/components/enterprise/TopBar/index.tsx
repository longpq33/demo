"use client";
import React from "react";
import { Input, Button } from "antd";
import Image from "next/image";
import { Bar, Left, Right } from "./styled";
import BrandLogo from "@/components/shared/BrandLogo";
import VN from "@/assets/vn-flag.png";
import ChevronDown from "@/assets/icons/chevron-down";

export interface TopBarProps {
  children?: React.ReactNode; // slot for menu
}

export default function TopBar({ children }: TopBarProps) {
  return (
    <Bar>
      <Left>
        <span className="viewing">Bạn đang xem trang</span>
        <Button className="segment">Doanh nghiệp <ChevronDown color="#fff" /></Button>
        {children}
      </Left>
      <Right>
        <Input.Search placeholder="Quý khách đang tìm kiếm gì?" />
        <Button className="lang"><Image src={VN} alt="VN" width={18} height={18} /></Button>
        <Button type="primary">Đăng nhập</Button>
      </Right>
    </Bar>
  );
}


