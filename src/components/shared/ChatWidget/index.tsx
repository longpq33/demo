import React from "react";
import { Bubble, DownloadButton, Wrapper } from "./styled";
import Image from "next/image";
import BotIcon from "@/assets/icons/bot.png";
import { TabletOutlined } from "@ant-design/icons";

export default function ChatWidget() {
  return (
    <Wrapper>
      <Bubble>
        <p>Bạn cần hỗ trợ gì?</p>
        <Image src={BotIcon} alt="bot" width={48} height={48} />
      </Bubble>
      <DownloadButton>
          <TabletOutlined />
      </DownloadButton>
    </Wrapper>
  );
}


