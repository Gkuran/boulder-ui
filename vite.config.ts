/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

import path from "node:path";
import { fileURLToPath } from "node:url";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),

    dts({
      tsconfigPath: "./tsconfig.app.json",
      include: ["src"],
      exclude: ["src/**/*.stories.tsx", "src/**/*.stories.ts"],
      rollupTypes: true,
      insertTypesEntry: true,
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },

  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      name: "virtuUI",
      formats: ["es", "cjs"],
    },

    sourcemap: true,

    // Do not copy public/ files to dist (Storybook assets only)
    copyPublicDir: false,

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],

      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
          exports: "named",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
          },
        },
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].cjs",
          exports: "named",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
          },
        },
      ],
    },
  },

  test: {
    projects: [
      {
        extends: true,

        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],

        test: {
          name: "storybook",

          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),

            instances: [
              {
                browser: "chromium",
              },
            ],
          },

          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
