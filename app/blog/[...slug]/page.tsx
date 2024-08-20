"use client";
import { usePathname } from "next/navigation";
import React from "react";

interface Product {
  slug: string;
}

interface Props {
  params: Product;
}

export default function Blog(props: Props) {
  const { params } = props;

  return <div>Bạn đang xem blog với đường dẫn: {params.slug}</div>;
}
