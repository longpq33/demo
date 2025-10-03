"use client";
import React from "react";
import { Wrapper, Card } from "./styled";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Wrapper>
      <Card>{children}</Card>
    </Wrapper>
  );
}


