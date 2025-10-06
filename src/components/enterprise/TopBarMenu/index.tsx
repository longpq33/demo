import React from "react";
import { LeftMenu, MenuWrap } from "./styled";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { ButtonLogin } from "@/components/shared/AppHeader/styled";
import { useMobile } from "@/hooks";
import Menu from "@/assets/icons/menu-icon.png";


export default function TopBarMenu() {
  const isMobile = useMobile();

  const items = [
    { key: "home", label: "", href: isMobile ? "#" : "/", icon: isMobile ? Menu : logo },
    { key: "credit", label: "Tín dụng", href: "#" },
    { key: "cash", label: "Thanh toán & quản lý dòng tiền", href: "#" },
    { key: "fx", label: "Ngoại tệ", href: "#" },
    { key: "digital", label: "Ngân hàng số", href: "#" },
  ];
  
  
  return (
    <MenuWrap>
      <LeftMenu>
      {
        items.map((item) => (
          <Link key={item.key} href={item.href}>
            {item.icon ? <Image src={item.icon} alt="MSB" width={isMobile ? 44 : 88} height={isMobile ? 24 : 28} priority /> : null}
            {item.label}
          </Link>
        ))
      }
      </LeftMenu>
      {!isMobile && (
        <ButtonLogin>Đăng nhập</ButtonLogin>
      )}
    </MenuWrap>
  );
}


