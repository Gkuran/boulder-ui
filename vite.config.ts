/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

/**
 * Custom Vite plugin to prepend tokens.css and global.css to the
 * generated CSS bundle. Vite library mode only includes CSS that is
 * imported by JS/TS files in the dependency graph (i.e. CSS Modules).
 * Our design tokens and global styles live in standalone CSS files
 * that are not imported by any component, so they get excluded.
 *
 * This plugin reads them after the bundle is written and prepends
 * their content to the generated CSS file.
 */
function prependGlobalCSS(): import("vite").Plugin {
  return {
    name: "virtu-prepend-global-css",
    apply: "build",
    closeBundle() {
      const cssPath = path.resolve(dirname, "dist/virtu-ui.css");
      if (!fs.existsSync(cssPath)) return;

      const tokensCSS = fs.readFileSync(
        path.resolve(dirname, "src/styles/tokens.css"),
        "utf-8"
      );
      const globalCSS = fs.readFileSync(
        path.resolve(dirname, "src/styles/global.css"),
        "utf-8"
      );
      const componentCSS = fs.readFileSync(cssPath, "utf-8");

      // Prepend tokens + global before component CSS modules
      fs.writeFileSync(
        cssPath,
        `/* === Virtu UI Design Tokens === */\n${tokensCSS}\n/* === Virtu UI Global Styles === */\n${globalCSS}\n/* === Virtu UI Component Styles === */\n${componentCSS}`
      );

      console.log("[virtu-prepend-global-css] Tokens and global styles prepended to dist/virtu-ui.css");
    },
  };
}

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

    prependGlobalCSS(),
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
