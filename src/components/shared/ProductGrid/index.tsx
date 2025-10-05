import React from "react";
import ProductCard from "../ProductCard";
import { GridContainer } from "./styled";
import { StaticImageData } from "next/image";

interface ProductGridProps {
  items: Array<{
    key: string;
    title: string;
    image: StaticImageData;
    href?: string;
  }>;
  gap?: number;
}

export default function ProductGrid({ items, gap = 12 }: ProductGridProps) {
  return (
    <GridContainer $gap={gap}>
      {items.map((item) => (
        <ProductCard
          key={item.key}
          title={item.title}
          image={item.image}
          href={item.href}
        />
      ))}
    </GridContainer>
  );
}
