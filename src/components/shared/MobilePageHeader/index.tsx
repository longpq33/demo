"use client";
import React from "react";
import Image from "next/image";
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
} from "./styled";
import router from "next/router";

interface MobilePageHeaderProps {
  title: string;
}

export default function MobilePageHeader({ title }: MobilePageHeaderProps) {
  const isMobile = useMobile();
  const { toggleMenu } = useMobileMenu();

  if (!isMobile) return null;

  const handleClick = () => {
    router.push("/");
  }

  return (
    <>
      <Bar>
        <Left onClick={handleClick}>
          <BrandLogo />
        </Left>
        <Center>
          <Chip aria-expanded={false} onClick={toggleMenu}>
            <span>{title}</span>
            <span style={{ display: "inline-flex" }}>
              <ChevronDown color="#0f2743" />
            </span>
          </Chip>
        </Center>
        <Right>
          <IconBtn aria-label="search" onClick={toggleMenu}>
            <Image src={SearchIcon} alt="search" width={18} height={18} />
          </IconBtn>
          <IconBtn aria-label="menu" onClick={toggleMenu}>
            <span style={{ display: "inline-block", width: 18, height: 2, background: "#0f2743", boxShadow: "0 6px 0 #0f2743, 0 -6px 0 #0f2743" }} />
          </IconBtn>
        </Right>
      </Bar>
    </>
  );
}


