"use client";
import React from "react";
import { TopBar, TopBarMenu, QuickActions } from "@/components";
import { PageLayout } from "@/layouts";
import Image from "next/image";
import Banner from "@/assets/exterprise-banner.png";
import Slider from "@/components/shared/Slider";

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
            { key: "1", title: "Giải pháp toàn diện cho ngành Dược - Y tế", image: Banner },
            { key: "2", title: "Vay ngắn hạn theo hạn mức", image: Banner },
            { key: "3", title: "Giải pháp cho Nhóm doanh nghiệp Logistic", image: Banner },
            { key: "4", title: "Giải pháp chuyên biệt ngành nhựa", image: Banner },
            { key: "5", title: "Giải pháp chuyên biệt ngành nhựa", image: Banner },
          ]}
        />
      </section>
     
      <section style={{ marginBottom: 24 }}>
        <h2 style={{fontWeight: 600, fontSize: 24, color: "#0b1a3a"}}>Ưu đãi nổi bật</h2>
        <Slider
          items={[
            { key: "1", title: "Giải pháp toàn diện cho ngành Dược - Y tế", image: Banner },
            { key: "2", title: "Vay ngắn hạn theo hạn mức", image: Banner },
            { key: "3", title: "Giải pháp cho Nhóm doanh nghiệp Logistic", image: Banner },
            { key: "4", title: "Giải pháp chuyên biệt ngành nhựa", image: Banner },
            { key: "5", title: "Giải pháp chuyên biệt ngành nhựa", image: Banner },
          ]}
        />
      </section>
     
    </PageLayout>
  );
}
