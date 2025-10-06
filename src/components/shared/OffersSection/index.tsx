import React from "react";
import ProductGrid from "../ProductGrid";
import { useMobile } from "@/hooks";
import { SectionTitle } from "./styled";
import Slider from "../Slider";
import { StaticImageData } from "next/image";

interface OffersSectionProps {
  title: string;
  items: Array<{
    key: string;
    title: string;
    description: string;
    image: StaticImageData;
    href?: string;
  }>;
  gap?: number;
  peekRight?: number;
}

export default function OffersSection({ 
  title, 
  items, 
  gap = 24, 
  peekRight = 160 
}: OffersSectionProps) {
  const isMobile = useMobile();

  return (
    <section style={{ marginBottom: 24 }}>
      <SectionTitle>{title}</SectionTitle>
      {isMobile ? (
        <ProductGrid items={items} gap={gap} />
      ) : (
        <Slider items={items} gap={gap} peekRight={peekRight} />
      )}
    </section>
  );
}
