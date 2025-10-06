"use client";
import React from "react";
import {
  AppHeader,
  HeroSection,
  BottomNav,
  ChatWidget,
  MobileMenu,
} from "@/components";
import AwardsList from "@/components/shared/AwardsList";
import { Content, SearchBox } from "./styled";
import SearchInput from "@/components/shared/Search";
import {
  backgroundImages,
  BackgroundProvider,
  useBackground,
} from "@/contexts/BackgroundContext";
import {
  MobileMenuProvider,
  useMobileMenu,
} from "@/contexts/MobileMenuContext";
import { useMobile } from "@/hooks";

function HomeContent() {
  const { setBackgroundImage, setIsHovered, isHovered, backgroundImage } =
    useBackground();
  const { isMenuOpen, closeMenu } = useMobileMenu();
  const isMobile = useMobile();

  const handleMouseEnter = (bgKey: string) => {
    setBackgroundImage(
      backgroundImages[bgKey as keyof typeof backgroundImages]
    );
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(backgroundImages.home);
    setIsHovered(false);
  };

  const contentMap = {
    "bg-about": (
      <div>
        <h1>VƯƠN TẦM</h1>
        <h2>BỀN VỮNG</h2>
        <p>
          <span style={{ color: "#ff671f" }}>MSB</span> kiên định mô hình ngân
          hàng hài hòa giữa hiệu quả kinh doanh và trách nhiệm xã hội.
        </p>
        <p>
          <span style={{ color: "#ff671f" }}>Phát triển bền vững</span> không
          chỉ là chiến lược, mà là{" "}
          <span style={{ color: "#ff671f" }}>
            cam kết dài hạn của chúng tôi
          </span>
          .
        </p>
        <p>Tạo ra giá trị cho cả hiện tại và tương lai.</p>
      </div>
    ),
    "bg-dautu": (
      <div>
        <h1>
          CÙNG <br /> VƯƠN TẦM
        </h1>
        <p>Chuyển mình bản lĩnh, thành công không giới hạn</p>
      </div>
    ),
    "bg-customer": (
      <div>
        <h1>
          CÙNG <br /> VƯƠN TẦM
        </h1>
        <p>Tôi khởi đầu từ một căn hộ nhỏ</p>
      </div>
    ),
    "bg-kinhdoanh": (
      <div>
        <h1>
          CÙNG <br /> VƯƠN TẦM
        </h1>
        <p>Vì một cuộc sống thuận ích hơn</p>
      </div>
    ),
    "bg-enterprise": (
      <div>
        <h1>
          CÙNG <br /> VƯƠN TẦM
        </h1>
        <p>Chủ động dòng vốn, giữ vững tiến độ</p>
      </div>
    ),
    "bg-vuontam": (
      <div>
        <h1>
          CÙNG <br /> VƯƠN TẦM
        </h1>
        <p>Vì một cuộc sống thuận ích hơn</p>
      </div>
    ),
  };

  const getCurrentContent = () => {
    const bgKey = Object.keys(contentMap).find((key) =>
      backgroundImage.src.includes(key)
    );
    return bgKey ? (
      contentMap[bgKey as keyof typeof contentMap]
    ) : (
      <div>
        <h1>Chào buổi sáng</h1>
        <p>Quý khách đang quan tâm thông tin gì?</p>
      </div>
    );
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <HeroSection header={<AppHeader />} />
        <Content $isHovered={isHovered}>
          {getCurrentContent()}
          <SearchBox>
            <SearchInput />
          </SearchBox>
          {!isMobile && <AwardsList color={isHovered ? "#fff" : "#1f1f1f"} />}
        </Content>
      </div>
      <BottomNav
        isHome={true}
        onMouseEnter={(key) => handleMouseEnter(key)}
        onMouseLeave={handleMouseLeave}
      />
      <ChatWidget />
      {isMobile && <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />}
    </div>
  );
}

export default function HomePage() {
  return (
    <BackgroundProvider>
      <MobileMenuProvider>
        <HomeContent />
      </MobileMenuProvider>
    </BackgroundProvider>
  );
}
