import React from "react";
import Image, { StaticImageData } from "next/image";
import { Card, CardMask, CardTitle } from "./styled";

interface ProductCardProps {
  key: string;
  title: string;
  image: StaticImageData;
  href?: string;
}

export default function ProductCard({ key, title, image, href }: ProductCardProps) {
  return (
    <a href={href || "#"} aria-label={title}>
      <Card>
        <Image 
          src={image} 
          alt={title} 
          width={340} 
          height={300} 
          style={{ 
            width: "100%", 
            height: 300, 
            objectFit: "cover", 
            borderRadius: 16 
          }} 
        />
        <CardMask />
        <CardTitle>{title}</CardTitle>
      </Card>
    </a>
  );
}
