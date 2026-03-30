import type { Preview } from "@storybook/react-vite";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "error",

      // Options passed to axe.configure
      // See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axeconfigure
      config: {
        rules: [
          {
            // Disable the region rule because stories are individual components,
            // not full pages, so they won't have HTML5 landmark elements.
            id: "region",
            enabled: false,
          },
        ],
      },

      // axe's options parameter
      // See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
      options: {
        runOnly: {
          type: "tag",
          values: [
            "wcag2a",
            "wcag2aa",
            "wcag21a",
            "wcag21aa",
            "best-practice",
          ],
        },
      },
    },
  },
};

export default preview;
