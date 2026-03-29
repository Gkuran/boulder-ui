import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/docs/**/*.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["./public"],
  framework: "@storybook/react-vite",
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],
  viteFinal(config) {
    // Remove vite-plugin-dts from the Storybook build.
    // The DTS plugin is only needed for the library build (vite build),
    // not for the Storybook build, and it causes errors when running
    // "storybook build" because it tries to generate declaration files
    // and run api-extractor in a context where dist/index.d.ts doesn't exist.
    config.plugins = config.plugins?.filter(
      (plugin) =>
        !(plugin && typeof plugin === "object" && "name" in plugin && plugin.name === "vite:dts"),
    );

    return config;
  },
};

export default config;
