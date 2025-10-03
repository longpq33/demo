"use client";
import React from "react";
import { Wrapper, Item, Title, By } from "./styled";

const items = [
  {
    title: "Thương hiệu Ngân hàng tốt nhất 2024",
    by: "bởi",
    name: "Global Brand Magazine",
  },
  {
    title: "Ngân hàng tốt nhất về Phát triển bền vững 2024",
    by: "bởi",
    name: "Global Brand Magazine & Euromoney",
  },
  {
    title: "Top 500 Doanh nghiệp lớn nhất Đông Nam Á",
    by: "xếp hạng bởi",
    name: "Fortune",
  },
];

export default function AwardsList() {
  return (
    <Wrapper>
      {items.map((it) => (
        <Item key={it.title}>
          <Title>{it.title}</Title>
          <By>{it.by} <strong style={{ color: "#1f1f1f" }}>{it.name}</strong></By>
        </Item>
      ))}
    </Wrapper>
  );
}


