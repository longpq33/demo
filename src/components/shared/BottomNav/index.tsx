"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bar, Item } from "./styled";
import Chart from "@/assets/icons/chart.png";
import User from "@/assets/icons/user.png";
import Msb from "@/assets/msb-icon.png";
import Cart from "@/assets/icons/cart.png";
import Building from "@/assets/icons/building.png";
import Home from "@/assets/icons/home.png";
import MsbHome from "@/assets/icons/home-icon.png";

interface BottomNavProps {
  isHome?: boolean;
  onMouseEnter?: (bgKey: string) => void;
  onMouseLeave?: () => void;
  className?: string;
}

export default function BottomNav({
  isHome = false,
  onMouseEnter,
  onMouseLeave,
  className,
}: BottomNavProps) {
  const router = useRouter();
  const items = [
    ...(!isHome
      ? [{ key: "home", label: "Trang chủ", icon: MsbHome, href: "/", bgKey: "home" }]
      : []),
    {
      key: "about",
      label: "Về chúng tôi",
      icon: Msb,
      href: "#",
      bgKey: "about",
    },
    {
      key: "invest",
      label: "Nhà đầu tư",
      icon: Chart,
      href: "#",
      bgKey: "dautu",
    },
    {
      key: "personal",
      label: "Cá nhân",
      icon: User,
      href: "#",
      bgKey: "customer",
    },
    {
      key: "sme",
      label: "Hộ kinh doanh",
      icon: Cart,
      href: "#",
      bgKey: "kinhdoanh",
    },
    {
      key: "enterprise",
      label: "Doanh nghiệp",
      icon: Building,
      href: "/doanh-nghiep",
      bgKey: "enterprise",
    },
    {
      key: "institute",
      label: "Định chế tài chính",
      icon: Home,
      href: "#",
      bgKey: "vuontam",
    },
  ];

  const handleItemClick = (href: string) => {
    if (href && href !== "#") {
      router.push(href);
    }
  };

  return (
    <Bar className={className}>
      {items.map((it) => (
        <Item
          key={it.key}
          onClick={() => handleItemClick(it.href || "#")}
          onMouseEnter={() => onMouseEnter?.(it.bgKey)}
          onMouseLeave={onMouseLeave}
        >
          <Image src={it.icon} alt={it.label} width={34} height={34} />
          <span>{it.label}</span>
        </Item>
      ))}
    </Bar>
  );
}
