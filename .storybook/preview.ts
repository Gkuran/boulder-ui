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
          value: [
            /*
             * Warm mesh gradient that mimics the Figma reference.
             * Uses warm oranges, soft browns and dark base to make
             * the glass backdrop-filter actually visible and luminous.
             */
            "radial-gradient(ellipse at 15% 80%, rgba(180, 100, 50, 0.35) 0%, transparent 50%)",
            "radial-gradient(ellipse at 75% 20%, rgba(160, 80, 40, 0.25) 0%, transparent 45%)",
            "radial-gradient(ellipse at 50% 50%, rgba(120, 70, 50, 0.15) 0%, transparent 55%)",
            "radial-gradient(ellipse at 90% 85%, rgba(100, 60, 40, 0.20) 0%, transparent 40%)",
            "radial-gradient(ellipse at 30% 20%, rgba(80, 50, 30, 0.15) 0%, transparent 50%)",
            "linear-gradient(135deg, #1a1a1a 0%, #252020 50%, #1a1a1a 100%)",
          ].join(", "),
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
