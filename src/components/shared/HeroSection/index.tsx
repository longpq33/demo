"use client";
import React from "react";
import Image from "next/image";
import { Overlay, Wrapper, HeaderSlot } from "./styled";
import { useBackground } from "@/contexts/BackgroundContext";

export default function HeroSection({ header }: { header?: React.ReactNode }) {
  const { backgroundImage } = useBackground();
  
  return (
    <Wrapper>
      {header && <HeaderSlot>{header}</HeaderSlot>}
      <Image src={backgroundImage} alt="hero" fill priority style={{ objectFit: "cover" }} />
      <Overlay />
    </Wrapper>
  );
}
