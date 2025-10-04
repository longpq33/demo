"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardImage,
  CardContent,
  CardDate,
  CardTitle,
  CardDescription,
  ProductSection,
  ProductHeader,
  ProductName,
  ProductDescription,
  ProductButton,
  ProductContent,
} from "./styled";
import { Flex } from "antd";

export interface ArticleCardProps {
  image: StaticImageData | string;
  date: string;
  title: string;
  description: string;
  productName: string;
  productDescription: string;
  productButtonText?: string;
  productButtonHref?: string;
}

export default function ArticleCard({
  image,
  date,
  title,
  description,
  productName,
  productDescription,
  productButtonText = "Tìm hiểu",
  productButtonHref = "#",
}: ArticleCardProps) {
  return (
    <Card>
      <CardImage>
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </CardImage>

      <CardContent>
        <CardDate>{date}</CardDate>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <ProductHeader>Sản phẩm gợi ý</ProductHeader>
        <ProductSection>
          <ProductContent>
            <ProductName>{productName}</ProductName>
            <ProductDescription>{productDescription}</ProductDescription>
          </ProductContent>
          <ProductButton href={productButtonHref}>
            {productButtonText}
          </ProductButton>
        </ProductSection>
      </CardContent>
    </Card>
  );
}
