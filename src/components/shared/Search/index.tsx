import React from "react";
import {  Input, Wrapper } from "./styled";
import SearchIcon from "@/assets/icons/search.png";
import Image from "next/image";

function SearchInput({
  placeholder,
  className,
}: {
  placeholder?: string;
  className?: string;
}) {
  return (
    <Wrapper className={className}>
      <Image src={SearchIcon} alt="Search" width={24} height={24} />
      <Input placeholder={placeholder || "Tín dụng, báo cáo tài chính..."} />
    </Wrapper>
  );
}

export default SearchInput;
