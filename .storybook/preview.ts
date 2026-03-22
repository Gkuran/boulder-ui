import type { Preview } from "@storybook/react-vite";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    layout: "centered",

    backgrounds: {
      default: "virtu-mesh",
      values: [
        {
          name: "virtu-mesh",
          value: "radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%), radial-gradient(at 0% 50%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 50% 50%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 100% 50%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 0% 100%, hsla(339,49%,30%,1) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 100%, hsla(253,16%,7%,1) 0, transparent 50%)",
        },
        {
          name: "dark",
          value: "#1a1a1a",
        },
        {
          name: "light",
          value: "#f5f5f5",
        },
      ],
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;
