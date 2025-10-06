"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { StaticImageData } from "next/image";
import bgHome from "@/assets/bg-home.png";
import bgAbout from "@/assets/bg-about.png";
import bgDautu from "@/assets/bg-dautu.png";
import bgCustomer from "@/assets/bg-customer.png";
import bgKinhdoanh from "@/assets/bg-kinhdoanh.png";
import bgEnterprise from "@/assets/bg-enterprise.png";
import bgVuontam from "@/assets/bg-vuontam.png";
import bgHomeMobile from "@/assets/bg-home-mobile.png";
import { useMobile } from "@/hooks";

interface BackgroundContextType {
  backgroundImage: StaticImageData;
  setBackgroundImage: (image: StaticImageData) => void;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const backgroundImages = {
  home: bgHome,
  about: bgAbout,
  dautu: bgDautu,
  customer: bgCustomer,
  kinhdoanh: bgKinhdoanh,
  enterprise: bgEnterprise,
  vuontam: bgVuontam,
};

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const isMobile = useMobile();
  const [backgroundImage, setBackgroundImage] = useState(bgHome);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setBackgroundImage(isMobile ? bgHomeMobile : bgHome);
  }, [isMobile]);

  return (
    <BackgroundContext.Provider value={{ backgroundImage, setBackgroundImage, isHovered, setIsHovered }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
}
