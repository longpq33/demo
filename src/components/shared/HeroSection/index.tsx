"use client";
import React from "react";
import Image from "next/image";
import { Overlay, Wrapper, HeaderSlot } from "./styled";
import bg from "@/assets/bg-home.png";

export default function HeroSection({ header }: { header?: React.ReactNode }) {
  return (
    <Wrapper>
      {header && <HeaderSlot>{header}</HeaderSlot>}
      <Image src={bg} alt="hero" fill priority style={{ objectFit: "cover" }} />
      <Overlay />
    </Wrapper>
  );
}
