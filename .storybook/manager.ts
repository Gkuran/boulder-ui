import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

const virtuTheme = create({
  base: "dark",

  // Brand
  brandTitle: "Virtu UI",
  brandUrl: "https://github.com/Gkuran/boulder-ui/tree/virtu-ui",

  // UI colors
  colorPrimary: "#FF7F72",
  colorSecondary: "#FF7F72",

  // App
  appBg: "#111111",
  appContentBg: "#1a1a1a",
  appPreviewBg: "#1a1a1a",
  appBorderColor: "rgba(255, 255, 255, 0.08)",
  appBorderRadius: 10,

  // Text
  textColor: "#f5f5f5",
  textInverseColor: "#1a1a1a",
  textMutedColor: "rgba(255, 255, 255, 0.5)",

  // Toolbar default and active colors
  barTextColor: "rgba(255, 255, 255, 0.6)",
  barHoverColor: "#f5f5f5",
  barSelectedColor: "#FF7F72",
  barBg: "#111111",

  // Form colors
  inputBg: "rgba(255, 255, 255, 0.06)",
  inputBorder: "rgba(255, 255, 255, 0.12)",
  inputTextColor: "#f5f5f5",
  inputBorderRadius: 6,
});

addons.setConfig({
  theme: virtuTheme,
});
