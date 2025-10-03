export const colors = {
  brand: {
    primary: "#FF4D00",
    primaryHover: "#FF6A26",
    primaryBg: "#FFF3E8",
    gradientFrom: "#FF4D00",
    gradientTo: "#FF0000",
  },
  text: {
    primary: "#1F1F1F",
    secondary: "#555555",
    inverse: "#FFFFFF",
  },
  surface: {
    base: "#FFFFFF",
    muted: "#F5F5F5",
  },
  border: {
    default: "#E5E5E5",
  },
};

export type BrandColors = typeof colors;

export const antdThemeTokens = {
  token: {
    colorPrimary: colors.brand.primary,
    colorPrimaryHover: colors.brand.primaryHover,
    colorLink: colors.brand.primary,
    colorTextBase: colors.text.primary,
    colorBgBase: colors.surface.base,
  },
};


