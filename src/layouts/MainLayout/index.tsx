"use client";
import React from "react";
import { Layout } from "antd";
import { PageContainer } from "./styled";

export interface MainLayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export default function MainLayout({ header, footer, children }: MainLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {header}
      <Layout.Content>
        <PageContainer>{children}</PageContainer>
      </Layout.Content>
      {footer}
    </Layout>
  );
}


