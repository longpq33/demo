"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "./styled";
import logo from "@/assets/logo.png";

export interface BrandLogoProps {
  href?: string;
}

export default function BrandLogo({ href = "/" }: BrandLogoProps) {
  return (
    <Wrapper>
      <Link href={href} aria-label="MSB Home">
        <Image src={logo} alt="MSB" width={88} height={28} priority />
      </Link>
    </Wrapper>
  );
}


