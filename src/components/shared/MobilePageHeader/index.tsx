"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMobile } from "@/hooks";
import BrandLogo from "../BrandLogo";
import ChevronDown from "@/assets/icons/chevron-down";
import SearchIcon from "@/assets/icons/search.png";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import {
  Bar,
  Left,
  Center,
  Right,
  Chip,
  IconBtn,
  Sheet,
  SheetInner,
  Backdrop,
} from "./styled";

interface MobilePageHeaderProps {
  title: string;
}

export default function MobilePageHeader({ title }: MobilePageHeaderProps) {
  const isMobile = useMobile();
  const { toggleMenu } = useMobileMenu();
  const [openSheet, setOpenSheet] = useState(false);
  const router = useRouter();

  if (!isMobile) return null;

  return (
    <>
      <Bar>
        <Left>
          <BrandLogo />
        </Left>
        <Center>
          <Chip aria-expanded={openSheet} onClick={() => setOpenSheet(!openSheet)}>
            <span>{title}</span>
            <span style={{ display: "inline-flex", transition: "transform .2s", transform: openSheet ? "rotate(180deg)" : "none" }}>
              <ChevronDown color="#0f2743" />
            </span>
          </Chip>
        </Center>
        <Right>
          <IconBtn aria-label="search" onClick={() => setOpenSheet(true)}>
            <Image src={SearchIcon} alt="search" width={18} height={18} />
          </IconBtn>
          <IconBtn aria-label="menu" onClick={toggleMenu}>
            <span style={{ display: "inline-block", width: 18, height: 2, background: "#0f2743", boxShadow: "0 6px 0 #0f2743, 0 -6px 0 #0f2743" }} />
          </IconBtn>
        </Right>
      </Bar>

      {openSheet && (
        <>
          <Backdrop onClick={() => setOpenSheet(false)} />
          <Sheet role="dialog" aria-modal="true">
            <SheetInner>
              {/* Temporary content: mirror Home MobileMenu sections */}
              <div style={{ padding: 12 }}>
                <input
                  placeholder="Quý khách cần tìm kiếm gì?"
                  style={{
                    width: "100%",
                    height: 40,
                    borderRadius: 20,
                    border: "1px solid #e5e6eb",
                    padding: "0 14px",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ borderTop: "1px solid #f0f0f0" }} />
              <button className="sheet-item" onClick={() => { router.push("/"); setOpenSheet(false); }}>
                <div>
                  <div className="title">Bạn đang xem trang</div>
                  <div className="sub">Trang chủ</div>
                </div>
                <span className="arrow">›</span>
              </button>
              <div className="divider" />
              <button className="sheet-item" onClick={() => setOpenSheet(false)}>
                <div>
                  <div className="title">Ngôn ngữ</div>
                  <div className="sub">Việt Nam</div>
                </div>
                <span style={{ fontSize: 18 }}>🇻🇳</span>
              </button>
              <div className="divider" />
              <button className="sheet-item" onClick={() => setOpenSheet(false)}>
                <div className="title">Liên hệ & Hỗ trợ</div>
              </button>
              <div className="divider" />
              <button className="sheet-item" onClick={() => setOpenSheet(false)}>
                <div className="title">Tải app MSB mBank</div>
              </button>
              <div className="divider" />
              <button className="sheet-item" onClick={() => setOpenSheet(false)}>
                <div className="title">Tuyển dụng</div>
              </button>
            </SheetInner>
          </Sheet>
        </>
      )}
    </>
  );
}


