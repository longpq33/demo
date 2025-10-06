"use client";
import React from "react";
import {
  TopBar,
  TopBarMenu,
  QuickActions,
  CungVuonTam,
  OffersSection,
  MobilePageHeader,
  MobileMenu,
} from "@/components";
import { useMobile } from "@/hooks";
import {
  MobileMenuProvider,
  useMobileMenu,
} from "@/contexts/MobileMenuContext";
import { PageLayout } from "@/layouts";
import Image from "next/image";
import Banner from "@/assets/exterprise-banner.png";
import Img1 from "@/assets/enterprise/img-1.png";
import Img2 from "@/assets/enterprise/img-2.png";
import Img3 from "@/assets/enterprise/img-3.png";
import Img4 from "@/assets/enterprise/img-4.png";
import Img5 from "@/assets/enterprise/img-5.png";
import Img6 from "@/assets/enterprise/img-6.png";
import Img7 from "@/assets/enterprise/img-7.png";
import { Content } from "./styled";

function EnterpriseContent() {
  const isMobile = useMobile();
  const { isMenuOpen, closeMenu } = useMobileMenu();

  return (
    <PageLayout
      header={
        <>
          {isMobile ? <MobilePageHeader title="Doanh nghiệp" /> : <TopBar />}
          <TopBarMenu />
        </>
      }
    >
      <Content>
        <section
          style={{
            borderRadius: 16,
            background: "#0b1a3a",
            marginBottom: 24,
          }}
          className="hero-banner"
        >
          <Image src={Banner} alt="Hero Banner" />
        </section>

        <QuickActions />

        <OffersSection
          title="Sản phẩm nổi bật"
          items={[
            {
              key: "1",
              title: "Sản phẩm A",
              description: "Giải pháp toàn diện cho ngành Dược - Y tế",
              image: Img1,
            },
            { key: "2",  title: "Sản phẩm A", description: "Vay ngắn hạn theo hạn mức", image: Img2 },
            {
              key: "3",
              title: "Sản phẩm A",
              description: "Giải pháp cho Nhóm doanh nghiệp Logistic",
              image: Img3,
            },
            {
              key: "4",
              title: "Sản phẩm A",
              description: "Giải pháp chuyên biệt ngành nhựa",
              image: Img4,
            },
            ...isMobile ? [] : [
              {
                key: "5",
                title: "Sản phẩm A",
                description: "Giải pháp chuyên biệt ngành nhựa",
                image: Img5,
              },
            ],
          ]}
          gap={24}
          peekRight={160}
        />

        <OffersSection
          title="Ưu đãi nổi bật"
          items={[
            {
              key: "1",
              title: "Ưu đãi A",
              description: "M Tender - Phát hành bảo lãnh dự thầu 0 đồng",
              image: Img6,
            },
            { key: "2",  title: "Ưu đãi A", description: "Vay ngắn hạn theo hạn mức", image: Img7 },
            {
              key: "3",
              title: "Ưu đãi A",
              description: "Giải pháp cho Nhóm doanh nghiệp Logistic",
              image: Img5,
            },
            {
              key: "4",
              title: "Ưu đãi A",
              description: "Giải pháp chuyên biệt ngành nhựa",
              image: Banner,
            },
            ...isMobile ? [] : [
            {
              key: "5",
              title: "Ưu đãi A",
              description: "Giải pháp chuyên biệt ngành nhựa",
              image: Img5,
            }],
          ]}
          gap={24}
          peekRight={160}
        />

        <CungVuonTam />
      </Content>
      {isMobile && <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />}
    </PageLayout>
  );
}

export default function EnterprisePage() {
  return (
    <MobileMenuProvider>
      <EnterpriseContent />
    </MobileMenuProvider>
  );
}
