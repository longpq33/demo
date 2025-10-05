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
  YouTube,
} from "./styled";
import ChevronDown from "@/assets/icons/chevron-down";
import GooglePlay from "@/assets/icons/google-store.png";
import AppStore from "@/assets/icons/app-store.png";
import Facebook from "@/assets/icons/facebook.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import Zalo from "@/assets/icons/zalo.png";
import TikTok from "@/assets/icons/tiktok.svg";
import BrandLogo from "@/assets/msb-logo-white.png";
import Copyright from "../Copyright";
import { useMobile } from "@/hooks";
import { colors } from "@/theme";

export default function Footer() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useMobile();

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
        {isMobile ? (
          <NavigationGrid>
            <Column style={{ justifyContent: "center", alignItems: "center" }}>
              <ColumnTitle>MSB Digital Bank</ColumnTitle>

              <AppSection
                style={{
                  flexDirection: "row",
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AppButton>
                  <Image
                    src={GooglePlay}
                    alt="Google Play"
                    width={80}
                    height={40}
                  />
                </AppButton>
                <AppButton>
                  <Image
                    src={AppStore}
                    alt="App Store"
                    width={80}
                    height={40}
                  />
                </AppButton>
              </AppSection>
            </Column>
            <Column
              style={{
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ColumnTitle>Kết nối mạng xã hội</ColumnTitle>
              <Column
                style={{
                  flexDirection: "row",
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SocialIcon href="#" className="fb">
                  <Image src={Facebook} alt="Facebook" width={24} height={24} />
                </SocialIcon>
                <SocialIcon href="#" className="linkedin">
                  <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
                </SocialIcon>
                <SocialIcon href="#" className="youtube">
                  <YouTube />
                </SocialIcon>
                <SocialIcon href="#" className="zalo">
                  <Image src={Zalo} alt="Zalo" width={24} height={24} />
                </SocialIcon>
                <SocialIcon href="#" className="tiktok">
                  <Image src={TikTok} alt="TikTok" width={24} height={24} />
                </SocialIcon>
              </Column>
            </Column>
            <Column
              style={{
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ColumnTitle>Liên hệ</ColumnTitle>
              <ContactLink href="#" style={{ color: colors.brand.primary }}>
                ATM và chi nhánh
              </ContactLink>
            </Column>

            <PhoneSection
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <PhoneItem style={{ width: "100%", justifyContent: "center", alignItems: "center", gap: 10 }}>
                <PhoneLabel style={{ width: "30%", display: "block", textAlign: "right" }}>
                  Cá nhân
                </PhoneLabel>
                <PhoneNumber style={{ color: colors.brand.primary, textAlign: "left" }}>
                  1900 6083
                </PhoneNumber>
              </PhoneItem>
                <PhoneItem style={{ width: "100%", justifyContent: "center", alignItems: "center", gap: 10 }}>
                <PhoneLabel style={{ width: "30%", display: "block", textAlign: "right" }}>
                  Doanh nghiệp
                </PhoneLabel>
                <PhoneNumber style={{ color: colors.brand.primary, textAlign: "left" }}>
                  1800 6260
                </PhoneNumber>
              </PhoneItem>
              <PhoneItem style={{ width: "100%", justifyContent: "center", alignItems: "center", gap: 10 }}>
                <PhoneLabel style={{ width: "35%", display: "block", textAlign: "right" }}>
                  M-First
                </PhoneLabel>
                <PhoneNumber style={{ color: colors.brand.primary, textAlign: "left" }}>
                  1800 599 999
                </PhoneNumber>
              </PhoneItem>
            </PhoneSection>
          </NavigationGrid>
        ) : (
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
                  <Image
                    src={AppStore}
                    alt="App Store"
                    width={80}
                    height={40}
                  />
                </AppButton>
              </AppSection>
            </Column>
          </NavigationGrid>
        )}
      </TopSection>

      <BottomSection $isCollapsed={isCollapsed}>
        <CompanyInfo style={{ marginTop: -10 }}>
          <Image src={BrandLogo} alt="MSB" width={100} height={100} />
          <CompanyName>Ngân hàng TMCP Hàng Hải Việt Nam</CompanyName>
          <Address>
            Số 54A Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, Thành phố
            Hà Nội, Việt Nam
          </Address>
        </CompanyInfo>
        {!isMobile && (
          <ContactSection>
            <ContactTitle>Liên hệ</ContactTitle>
            <ContactLink href="#">ATM và chi nhánh</ContactLink>
            <SocialIcons>
              <SocialIcon href="#" className="fb">
                <Image src={Facebook} alt="Facebook" width={24} height={24} />
              </SocialIcon>
              <SocialIcon href="#" className="linkedin">
                <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
              </SocialIcon>
              <SocialIcon href="#" className="youtube">
                <YouTube />
              </SocialIcon>
              <SocialIcon href="#" className="zalo">
                <Image src={Zalo} alt="Zalo" width={24} height={24} />
              </SocialIcon>
              <SocialIcon href="#" className="tiktok">
                <Image src={TikTok} alt="TikTok" width={24} height={24} />
              </SocialIcon>
            </SocialIcons>
          </ContactSection>
        )}
        {!isMobile && (
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
        )}
        <div style={{ flex: 1 }}>
          {!isCollapsed && !isMobile && (
            <Column style={{ flex: 1 }}>
              <ColumnTitle>MSB Digital Bank</ColumnTitle>
              <AppSection style={{ flexDirection: "row" }}>
                <AppButton>
                  <Image
                    src={GooglePlay}
                    alt="Google Play"
                    width={80}
                    height={40}
                  />
                </AppButton>
                <AppButton>
                  <Image
                    src={AppStore}
                    alt="App Store"
                    width={80}
                    height={40}
                  />
                </AppButton>
              </AppSection>
            </Column>
          )}
        </div>
      </BottomSection>
      <Copyright />
    </FooterContainer>
  );
}
