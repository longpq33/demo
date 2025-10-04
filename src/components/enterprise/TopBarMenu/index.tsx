import React from "react";
import { LeftMenu, MenuWrap } from "./styled";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { ButtonLogin } from "@/components/shared/AppHeader/styled";


const items = [
  { key: "home", label: "", href: "/", icon: logo },
  { key: "credit", label: "Tín dụng", href: "#" },
  { key: "cash", label: "Thanh toán & quản lý dòng tiền", href: "#" },
  { key: "fx", label: "Ngoại tệ", href: "#" },
  { key: "digital", label: "Ngân hàng số", href: "#" },
];

export default function TopBarMenu() {
  return (
    <MenuWrap>
      <LeftMenu>
      {
        items.map((item) => (
          <Link key={item.key} href={item.href}>
            {item.icon ? <Image src={logo} alt="MSB" width={88} height={28} priority /> : null}
            {item.label}
          </Link>
        ))
      }
      </LeftMenu>
    
      <ButtonLogin>Đăng nhập</ButtonLogin>
    </MenuWrap>
  );
}


