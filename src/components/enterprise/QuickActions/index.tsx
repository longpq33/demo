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

const items = [
  { key: "register", label: "Đăng ký", icon: User },
  { key: "guarantee", label: "Kiểm tra bảo lãnh", icon: Shield },
  { key: "rate", label: "Lãi suất", icon: Rate },
  { key: "fx", label: "Tỷ giá", icon: Fx },
  { key: "fees", label: "Biểu mẫu & biểu phí", icon: Doc },
  { key: "promo", label: "Ưu đãi", icon: Star },
];

export default function QuickActions() {
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


