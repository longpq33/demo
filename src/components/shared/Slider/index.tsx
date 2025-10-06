"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Wrapper, Inner, SlideItem, Card, CardMask, CardTitle, NavBtn } from "./styled";
import ChevronLeft from "@/assets/icons/chevron-left";
import ChevronRight from "@/assets/icons/chevron-right";

export interface SliderItemData {
  key: string;
  title?: string;
  description: string;
  image: StaticImageData | string;
  href?: string;
}

export interface SliderProps {
  items: SliderItemData[];
  gap?: number; // px
  peekRight?: number; // px shown on right to reveal next item
}

export default function Slider({ items, gap = 24, peekRight = 160 }: SliderProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollByAmount = () => {
    const el = ref.current;
    if (!el) return 0;
    const firstChild = el.querySelector<HTMLElement>("[data-slide]");
    const cardWidth = firstChild ? firstChild.offsetWidth : el.clientWidth / 4;
    return cardWidth + gap;
  };

  const handlePrev = () => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  };

  const handleNext = () => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  };

  return (
    <Wrapper $gap={gap} $peekRight={peekRight}>
      <NavBtn aria-label="prev" onClick={handlePrev}><ChevronLeft color="#0f2743" /></NavBtn>
      <Inner ref={ref} $gap={gap} $peekRight={peekRight}>
        {items.map((it) => (
          <SlideItem data-slide key={it.key}>
            <a href={it.href || "#"} aria-label={it.description}>
              <Card>
                <Image src={it.image} alt={it.description} width={340} height={300} style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 16 }} />
                <CardMask />
                <CardTitle>{it.description}</CardTitle>
              </Card>
            </a>
          </SlideItem>
        ))}
      </Inner>
      <NavBtn aria-label="next" data-right onClick={handleNext}><ChevronRight color="#0f2743" /></NavBtn>
    </Wrapper>
  );
}


