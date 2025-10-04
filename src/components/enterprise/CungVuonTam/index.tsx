"use client";
import React from "react";
import { Container, Header, Title, Subtitle, Content, CardsGrid } from "./styled";
import Banner1 from "@/assets/exterprise-banner.png";
import Banner2 from "@/assets/exterprise-banner.png";
import Banner3 from "@/assets/exterprise-banner.png";
import ArticleCard from "@/components/shared/ArticleCard";

const articles = [
  {
    image: Banner1,
    date: "22/08/2025",
    title: "Kim ngạch xuất khẩu tăng trong Quý 4",
    description: "Lorem ipsum dolor sit amet consectetur. Ac laoreet enim nec amet mi. Faucibus aliquet scelerisque metus in. Tortor consect...",
    productName: "Vay ngắn hạn",
    productDescription: "Giải ngân nhanh chỉ sau 4 tiếng là giải pháp huy động để luân chuyển dòng vốn linh hoạt cho c...",
    productButtonHref: "#"
  },
  {
    image: Banner2,
    date: "22/08/2025", 
    title: "Giá thép đã qua đáy và khởi đầu chu kỳ tăng mới",
    description: "Lorem ipsum dolor sit amet consectetur. Ac laoreet enim nec amet mi. Faucibus aliquet scelerisque metus in. Tortor consect...",
    productName: "Thư tín dụng nhập khẩu",
    productDescription: "Tỉ lệ ký quỹ thấp, chỉ từ 0%; chi phí tối ưu...",
    productButtonHref: "#"
  },
  {
    image: Banner3,
    date: "22/08/2025",
    title: "Tháng 5/2025: Xuất khẩu thủy sản Việt Nam tăng tốc trong \"thời gian vàng\"",
    description: "Lorem ipsum dolor sit amet consectetur. Ac laoreet enim nec amet mi. Faucibus aliquet scelerisque metus in. Tortor consect...",
    productName: "Cung cấp nguồn vốn lưu động",
    productDescription: "Ngành thủy hải sản \"Cung cấp nguồn vốn lưu động cần thiết để hỗ trợ quá trình thu mua và lư...",
    productButtonHref: "#"
  }
];

export default function CungVuonTam() {
  return (
    <Container>
      <Header>
        <Title>
          <span>CÙNG</span>
          <span>VƯƠN TẦM</span>
        </Title>
        <Subtitle>
          Chúng tôi đồng hành cùng bạn trên hành trình thành công và vươn tầm bền vững
        </Subtitle>
      </Header>

      <Content>
        <CardsGrid>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              image={article.image}
              date={article.date}
              title={article.title}
              description={article.description}
              productName={article.productName}
              productDescription={article.productDescription}
              productButtonHref={article.productButtonHref}
            />
          ))}
        </CardsGrid>
      </Content>
    </Container>
  );
}
