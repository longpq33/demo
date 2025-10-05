"use client";
import React from "react";
import { Layout, Space, Button } from "antd";
import BrandLogo from "../../shared/BrandLogo";
import { HeaderBar, RightArea, LinkText, ButtonLogin, FlexCustom, HamburgerButton } from "./styled";
import Customer from "@/assets/customer.png";
import Image, { StaticImageData } from "next/image";
import { QuestionCircleOutlined, MenuOutlined } from "@ant-design/icons";
import CareerIcon from "@/assets/career.png";
import VN from "@/assets/vn-flag.png";
import ChevronDown from "@/assets/icons/chevron-down";
import { useMobile } from "@/hooks";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import Mifirst from "@/assets/mifirst.png";

export function LinkItem({
  href,
  label,
  icon,
  imageUrl,
  width,
  height,
  background,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  imageUrl?: StaticImageData;
  width?: number;
  height?: number;
  background?: string;
}) {
  return (
    <FlexCustom align="center" gap={8} $background={background}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={label}
          width={width ||18}
          height={height || 18}
          style={{ verticalAlign: "text-bottom" }}
        />
      )}
      {icon ? icon : null}
      <LinkText href={href}>{label}</LinkText>
    </FlexCustom>
  );
}

export default function AppHeader() {
  const { toggleMenu } = useMobileMenu();
  const isMobile = useMobile();

  return (
    <>
      <Layout.Header style={{ background: "transparent", padding: 0 }}>
        <HeaderBar>
          <BrandLogo />
          <RightArea>
            {!isMobile ? (
              <>
                <Space size={16}>
                  <LinkItem href="#" label="Khách hàng ưu tiên" imageUrl={Customer} background="#131920" />
                  <LinkItem href="#" label="Liên hệ & Hỗ trợ" icon={<QuestionCircleOutlined />} />
                  <LinkItem href="#" label="Tuyển dụng" imageUrl={CareerIcon} width={24} height={24} />
                </Space>
                <Space size={12}>
                  <Button className="language-button">
                    <Image src={VN} alt="VN" width={24} height={24} />
                    <ChevronDown color="#fff" />
                  </Button>
                  <ButtonLogin>Đăng nhập</ButtonLogin>
                </Space>
              </>
            ) : (
              <>
                <Button className="mifirst-button">
                  <Image src={Mifirst} alt="User" width={50} height={24} />
                </Button>
                <HamburgerButton onClick={toggleMenu}>
                  <MenuOutlined color="#fff" />
                </HamburgerButton>
              </>
            )}
          </RightArea>
        </HeaderBar>
      </Layout.Header>
    </>
  );
}
