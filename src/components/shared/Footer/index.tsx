"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FooterContainer,
  CollapseButton,
  TopSection,
  BottomSection,
  NavigationGrid,
  Column,
  ColumnTitle,
  LinkItem,
  AppSection,
  AppButton,
  CompanyInfo,
  Logo,
  CompanyName,
  Address,
  ContactSection,
  ContactTitle,
  ContactLink,
  SocialIcons,
  SocialIcon,
  PhoneSection,
  PhoneItem,
  PhoneLabel,
  PhoneNumber,
} from "./styled";
import ChevronDown from "@/assets/icons/chevron-down";
import GooglePlay from "@/assets/icons/google-store.png";
import AppStore from "@/assets/icons/app-store.png";
import Facebook from "@/assets/icons/facebook.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import YouTube from "@/assets/icons/youtube.svg";
import Zalo from "@/assets/icons/zalo.png";
import TikTok from "@/assets/icons/tiktok.svg";

export default function Footer() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <FooterContainer>
      <CollapseButton onClick={toggleCollapse} $isCollapsed={isCollapsed}>
        <ChevronDown color="#ff4d00" />
        {isCollapsed ? "Thu gọn" : "Liên kết khác"}
      </CollapseButton>

      <TopSection $isCollapsed={isCollapsed}>
        <NavigationGrid>
          <Column>
            <ColumnTitle>Về chúng tôi</ColumnTitle>
            <LinkItem href="#">Phát triển bền vững</LinkItem>
            <LinkItem href="#">Nhà đầu tư</LinkItem>
            <LinkItem href="#">Tuyển dụng</LinkItem>
            <LinkItem href="#">Tin tức</LinkItem>
            <LinkItem href="#">Về MSB</LinkItem>
          </Column>

          <Column>
            <ColumnTitle>Khách hàng cá nhân</ColumnTitle>
            <LinkItem href="#">Ngân hàng số</LinkItem>
            <LinkItem href="#">Tài khoản & tiết kiệm</LinkItem>
            <LinkItem href="#">Thẻ</LinkItem>
            <LinkItem href="#">Vay</LinkItem>
            <LinkItem href="#">Đầu tư</LinkItem>
            <LinkItem href="#">Bảo hiểm</LinkItem>
          </Column>

          <Column>
            <ColumnTitle>Khách hàng doanh nghiệp</ColumnTitle>
            <LinkItem href="#">Ngân hàng số</LinkItem>
            <LinkItem href="#">Tài khoản & Thanh toán</LinkItem>
            <LinkItem href="#">Vay</LinkItem>
            <LinkItem href="#">Tài trợ thương mại</LinkItem>
            <LinkItem href="#">Ngoại hối & Thị trường vốn</LinkItem>
            <LinkItem href="#">Tư vấn, đầu tư & bảo hiểm</LinkItem>
          </Column>

          <Column>
            <ColumnTitle>MSB Digital Bank</ColumnTitle>
            <AppSection>
              <AppButton>
                <Image
                  src={GooglePlay}
                  alt="Google Play"
                  width={80}
                  height={40}
                />
              </AppButton>
              <AppButton>
                <Image src={AppStore} alt="App Store" width={80} height={40} />
              </AppButton>
            </AppSection>
          </Column>
        </NavigationGrid>
      </TopSection>

      <BottomSection>
        <CompanyInfo>
          <Logo>MSB</Logo>
          <CompanyName>Ngân hàng TMCP Hàng Hải Việt Nam</CompanyName>
          <Address>
            Số 54A Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, Thành phố
            Hà Nội, Việt Nam
          </Address>
        </CompanyInfo>

        <ContactSection>
          <ContactTitle>Liên hệ</ContactTitle>
          <ContactLink href="#">ATM và chi nhánh</ContactLink>
          <SocialIcons>
            <SocialIcon href="#">
              <Image src={Facebook} alt="Facebook" width={24} height={24} />
            </SocialIcon>
            <SocialIcon href="#">
              <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
            </SocialIcon>
            <SocialIcon href="#">
              <Image src={YouTube} alt="YouTube" width={24} height={24} />
            </SocialIcon>
            <SocialIcon href="#">
              <Image src={Zalo} alt="Zalo" width={24} height={24} />
            </SocialIcon>
            <SocialIcon href="#">
              <Image src={TikTok} alt="TikTok" width={24} height={24} />
            </SocialIcon>
          </SocialIcons>
        </ContactSection>

        <PhoneSection>
          <PhoneItem>
            <PhoneLabel>Cá nhân</PhoneLabel>
            <PhoneNumber>1900 6083</PhoneNumber>
          </PhoneItem>
          <PhoneItem>
            <PhoneLabel>Doanh nghiệp</PhoneLabel>
            <PhoneNumber>1800 6260</PhoneNumber>
          </PhoneItem>
          <PhoneItem>
            <PhoneLabel>M-First</PhoneLabel>
            <PhoneNumber>1800 599 999</PhoneNumber>
          </PhoneItem>
        </PhoneSection>
      </BottomSection>
    </FooterContainer>
  );
}
