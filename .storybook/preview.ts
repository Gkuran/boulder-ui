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
      //
      // Note: We intentionally do NOT specify `runOnly` here.
      // Storybook's a11y addon already defaults to running WCAG 2.0/2.1 Level A & AA
      // plus Best Practices rules. Specifying `runOnly` explicitly would override
      // the rule configuration set in `config.rules` above (e.g. the disabled `region`
      // rule), because `axe.run(options)` takes precedence over `axe.configure(config)`
      // when determining which rules to execute.
      options: {},
    },
  },
};

export default preview;
