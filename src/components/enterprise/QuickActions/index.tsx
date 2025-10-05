"use client";
import React from "react";
import Image from "next/image";
import { Grid, Item } from "./styled";
import User from "@/assets/icons/register.png";
import Shield from "@/assets/icons/check.png";
import Rate from "@/assets/icons/reward.png";
import Fx from "@/assets/icons/percent.png";
import Doc from "@/assets/icons/prices.png";
import Star from "@/assets/icons/saleoff.png";
import { useMobile } from "@/hooks";



export default function QuickActions() {
  const isMobile = useMobile();

  const bl = isMobile ? "Tra cứu bảo lãnh" : "Kiểm tra bảo lãnh";
  const bm = isMobile ? "Biểu mẫu, biểu phí" : "Biểu mẫu & biểu phí";

  const items = [
    { key: "register", label: "Đăng ký", icon: User },
    { key: "guarantee", label: bl, icon: Shield },
    { key: "rate", label: "Lãi suất", icon: Rate },
    { key: "fx", label: "Tỷ giá", icon: Fx },
    { key: "fees", label: bm, icon: Doc },
    { key: "promo", label: "Ưu đãi", icon: Star },
  ];

  return (
    <Grid>
      {items.map((it) => (
        <Item key={it.key} href="#">
          <Image src={it.icon} alt={it.label} width={50} height={50} />
          <span>{it.label}</span>
        </Item>
      ))}
    </Grid>
  );
}


