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
 * Virtu UI CSS Bundle Plugin
 *
 * Two responsibilities:
 *
 * 1. prependGlobalCSS (closeBundle):
 *    Prepends tokens.css + global.css to the generated virtu-ui.css file.
 *    Vite library mode only collects CSS Modules in the bundle; standalone
 *    CSS files that are not imported by any JS/TS file are excluded.
 *
 * 2. injectCSSImport (closeBundle):
 *    Appends a self-executing snippet to dist/index.js and dist/index.cjs
 *    that injects the bundled CSS into the document <head> at runtime.
 *    This makes the CSS load automatically when the consumer imports
 *    "virtu-ui" — no manual import required.
 */
function virtuCSSPlugin(): import("vite").Plugin {
  return {
    name: "virtu-css-plugin",
    apply: "build",
    closeBundle() {
      const cssPath = path.resolve(dirname, "dist/virtu-ui.css");
      if (!fs.existsSync(cssPath)) {
        console.warn("[virtu-css-plugin] dist/virtu-ui.css not found, skipping.");
        return;
      }

      // ── Step 1: prepend tokens + global to the CSS bundle ──────────────────
      const tokensCSS = fs.readFileSync(
        path.resolve(dirname, "src/styles/tokens.css"),
        "utf-8"
      );
      const globalCSS = fs.readFileSync(
        path.resolve(dirname, "src/styles/global.css"),
        "utf-8"
      );
      const componentCSS = fs.readFileSync(cssPath, "utf-8");

      const fullCSS =
        `/* === Virtu UI Design Tokens === */\n${tokensCSS}\n` +
        `/* === Virtu UI Global Styles === */\n${globalCSS}\n` +
        `/* === Virtu UI Component Styles === */\n${componentCSS}`;

      fs.writeFileSync(cssPath, fullCSS);
      console.log("[virtu-css-plugin] Tokens and global styles prepended to dist/virtu-ui.css");

      // ── Step 2: inject CSS auto-loader into index.js and index.cjs ─────────
      // Escape the CSS content so it can be embedded as a JS string literal.
      const escapedCSS = fullCSS
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$/g, "\\$");

      const injectorESM = `
// Auto-inject Virtu UI styles
(function(){
  if (typeof document === 'undefined') return;
  var id = '__virtu-ui-styles__';
  if (document.getElementById(id)) return;
  var style = document.createElement('style');
  style.id = id;
  style.textContent = \`${escapedCSS}\`;
  document.head.appendChild(style);
})();
`;

      const injectorCJS = `
// Auto-inject Virtu UI styles
(function(){
  if (typeof document === 'undefined') return;
  var id = '__virtu-ui-styles__';
  if (document.getElementById(id)) return;
  var style = document.createElement('style');
  style.id = id;
  style.textContent = ${JSON.stringify(fullCSS)};
  document.head.appendChild(style);
})();
`;

      const esmPath = path.resolve(dirname, "dist/index.js");
      const cjsPath = path.resolve(dirname, "dist/index.cjs");

      if (fs.existsSync(esmPath)) {
        const existing = fs.readFileSync(esmPath, "utf-8");
        fs.writeFileSync(esmPath, injectorESM + "\n" + existing);
        console.log("[virtu-css-plugin] CSS auto-injector prepended to dist/index.js");
      }

      if (fs.existsSync(cjsPath)) {
        const existing = fs.readFileSync(cjsPath, "utf-8");
        fs.writeFileSync(cjsPath, injectorCJS + "\n" + existing);
        console.log("[virtu-css-plugin] CSS auto-injector prepended to dist/index.cjs");
      }
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

    virtuCSSPlugin(),
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
