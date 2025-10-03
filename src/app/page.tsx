"use client";
import React from "react";
import { AppHeader, HeroSection, BottomNav, ChatWidget } from "@/components";
import AwardsList from "@/components/shared/AwardsList";
import { Content, SearchBox } from "./styled";
import SearchInput from "@/components/shared/Search";

export default function HomePage() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <HeroSection header={<AppHeader />} />

        <Content>
          <div>
            <h1>Chào buổi sáng</h1>
            <p>Quý khách đang quan tâm thông tin gì?</p>
          </div>
          <SearchBox>
           <SearchInput />
          </SearchBox>
          <AwardsList />
        </Content>
      </div>
      <BottomNav />
      <ChatWidget />
    </div>
  );
}
