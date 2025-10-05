"use client";
import React from 'react';
import { Slider } from '@/components';
import { useProducts } from '@/hooks';

export default function FeaturedProducts() {
  const { data: products, isLoading, error } = useProducts({ 
    per_page: 5,
  });

  console.log({products});

  if (isLoading) {
    return (
      <section style={{ marginBottom: 24 }}>
        <h2 style={{fontWeight: 600, fontSize: 24, color: "#0b1a3a"}}>Sản phẩm nổi bật</h2>
        <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
          Đang tải...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section style={{ marginBottom: 24 }}>
        <h2 style={{fontWeight: 600, fontSize: 24, color: "#0b1a3a"}}>Sản phẩm nổi bật</h2>
        <div style={{ padding: '40px', textAlign: 'center', color: '#ff4d4f' }}>
          Không thể tải sản phẩm. Vui lòng thử lại sau.
        </div>
      </section>
    );
  }

  if (!products || !products.data || products.data.length === 0) {
    return (
      <section style={{ marginBottom: 24 }}>
        <h2 style={{fontWeight: 600, fontSize: 24, color: "#0b1a3a"}}>Sản phẩm nổi bật</h2>
        <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
          Không có sản phẩm nào.
        </div>
      </section>
    );
  }

  const sliderItems = products.data.map(product => ({
    key: product.id.toString(),
    title: product.name,
    image: product.image,
    href: `/san-pham/${product.slug}`,
  }));

  return (
    <section style={{ marginBottom: 24 }}>
      <h2 style={{fontWeight: 600, fontSize: 24, color: "#0b1a3a"}}>Sản phẩm nổi bật</h2>
      <Slider
        items={sliderItems}
        gap={24}
        peekRight={160}
      />
    </section>
  );
}
