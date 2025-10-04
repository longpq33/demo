"use client";
import React from "react";
import { Shell, Content } from "./styled";
import { ChatWidget, Footer } from "@/components";

export interface PageLayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export default function PageLayout({ header, children }: PageLayoutProps) {
  return (
    <Shell>
      {header}
      <Content>{children}</Content>
      <Footer />
      <ChatWidget />
    </Shell>
  );
}


