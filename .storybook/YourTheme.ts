import { create } from "storybook/theming";

export default create({
  base: "light",

  // UI
  appBg: "#FDF9F6",
  appContentBg: "#FFFFFF",
  appBorderColor: "#A55A2A",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Nunito Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#333333",
  textInverseColor: "#FFFFFF",
  textMutedColor: "#888888",

  // Toolbar default and active colors
  barTextColor: "#333333",
  barSelectedColor: "#B5651D",
  barBg: "#EFEBE8",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#D0D0D0",
  inputTextColor: "#333333",
  inputBorderRadius: 4,

  // Brand
  brandTitle: "Tempo-UI",
  brandUrl: "https://github.com/TempoJC/tempo-ui",
  brandImage: "./src/assets/kawhi/kahwi_title_logo.svg",
  brandTarget: "_self",
});
