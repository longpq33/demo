"use client";
import React from "react";
import { Shell, Content, FooterArea } from "./styled";
import { ChatWidget } from "@/components";

export interface PageLayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export default function PageLayout({ header, footer, children }: PageLayoutProps) {
  return (
    <Shell>
      {header}
      <Content>{children}</Content>
      {/* {footer ? <FooterArea>{footer}</FooterArea> : null} */}
      {/* <ChatWidget /> */}
    </Shell>
  );
}


