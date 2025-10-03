"use client";
import React from "react";
import Image from "next/image";
import { Bar, Item } from "./styled";
import Chart from "@/assets/icons/chart.png";
import User from "@/assets/icons/user.png";
import Msb from "@/assets/msb-icon.png";
import Cart from "@/assets/icons/cart.png";
import Building from "@/assets/icons/building.png";
import Home from "@/assets/icons/home.png";

const items = [
  { key: "about", label: "Về chúng tôi", icon: Msb },
  { key: "invest", label: "Nhà đầu tư", icon: Chart },
  { key: "personal", label: "Cá nhân", icon: User },
  { key: "sme", label: "Hộ kinh doanh", icon: Cart },
  { key: "enterprise", label: "Doanh nghiệp", icon: Building },
  { key: "institute", label: "Định chế tài chính", icon: Home },
];

export default function BottomNav() {
  return (
    <Bar>
      {items.map((it) => (
        <Item key={it.key} href="#">
          <Image src={it.icon} alt={it.label} width={34} height={34} />
          <span>{it.label}</span>
        </Item>
      ))}
    </Bar>
  );
}
