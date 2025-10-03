"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bar, Item } from "./styled";
import Chart from "@/assets/icons/chart.png";
import User from "@/assets/icons/user.png";
import Msb from "@/assets/msb-icon.png";
import Cart from "@/assets/icons/cart.png";
import Building from "@/assets/icons/building.png";
import Home from "@/assets/icons/home.png";

const items = [
  { key: "about", label: "Về chúng tôi", icon: Msb, href: "#" },
  { key: "invest", label: "Nhà đầu tư", icon: Chart, href: "#" },
  { key: "personal", label: "Cá nhân", icon: User, href: "#" },
  { key: "sme", label: "Hộ kinh doanh", icon: Cart, href: "#" },
  { key: "enterprise", label: "Doanh nghiệp", icon: Building, href: "/doanh-nghiep" },
  { key: "institute", label: "Định chế tài chính", icon: Home, href: "#" },
];

export default function BottomNav() {
  return (
    <Bar>
      {items.map((it) => (
        <Link key={it.key} href={it.href || "#"} passHref>
          <Item>
            <Image src={it.icon} alt={it.label} width={34} height={34} />
            <span>{it.label}</span>
          </Item>
        </Link>
      ))}
    </Bar>
  );
}
