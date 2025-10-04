"use client";
import React from "react";
import { TopBar, TopBarMenu, QuickActions, CungVuonTam } from "@/components";
import { PageLayout } from "@/layouts";
import Image from "next/image";
import Banner from "@/assets/exterprise-banner.png";
import Slider from "@/components/shared/Slider";
import Img1 from "@/assets/enterprise/img-1.png";
import Img2 from "@/assets/enterprise/img-2.png";
import Img3 from "@/assets/enterprise/img-3.png";
import Img4 from "@/assets/enterprise/img-4.png";
import Img5 from "@/assets/enterprise/img-5.png";
import Img6 from "@/assets/enterprise/img-6.png";
import Img7 from "@/assets/enterprise/img-7.png";

export default function EnterprisePage() {
  return (
    <PageLayout
      header={
        <>
          <TopBar />
          <TopBarMenu />
        </>
      }
    >
      {/* Hero banner / content sections sẽ được bổ sung sau */}
      <section
        style={{
          borderRadius: 16,
          background: "#0b1a3a",
          marginBottom: 24,
        }}
      >
        <Image src={Banner} alt="Hero Banner" />
      </section>

      <QuickActions />
      <section style={{ marginBottom: 24 }}>
        <h2 style={{fontWeight: 600, fontSize: 24, color: "#0b1a3a"}}>Sản phẩm nổi bật</h2>
        <Slider
          items={[
            { key: "1", title: "Giải pháp toàn diện cho ngành Dược - Y tế", image: Img1 },
            { key: "2", title: "Vay ngắn hạn theo hạn mức", image: Img2 },
            { key: "3", title: "Giải pháp cho Nhóm doanh nghiệp Logistic", image: Img3 },
            { key: "4", title: "Giải pháp chuyên biệt ngành nhựa", image: Img4 },
            { key: "5", title: "Giải pháp chuyên biệt ngành nhựa", image: Img5 },
          ]}
        />
      </section>
     
      <section style={{ marginBottom: 24 }}>
        <h2 style={{fontWeight: 600, fontSize: 24, color: "#0b1a3a"}}>Ưu đãi nổi bật</h2>
        <Slider
          items={[
            { key: "1", title: "M Tender - Phát hành bảo lãnh dự thầu 0 đồng", image: Img6 },
            { key: "2", title: "Vay ngắn hạn theo hạn mức", image: Img7 },
            { key: "3", title: "Giải pháp cho Nhóm doanh nghiệp Logistic", image: Img5 },
            { key: "4", title: "Giải pháp chuyên biệt ngành nhựa", image: Banner },
            { key: "5", title: "Giải pháp chuyên biệt ngành nhựa", image: Img5 },
          ]}
        />
      </section>

      <CungVuonTam />
    </PageLayout>
  );
}
