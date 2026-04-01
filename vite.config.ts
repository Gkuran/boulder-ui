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
 * Plugin that prepends tokens.css + global.css into the generated
 * boulder-ui.css so consumers get the full design-token definitions
 * when they `import "boulder-ui/styles"`, and copies the styles.d.ts
 * type declaration into dist for proper TypeScript resolution.
 */
function prependGlobalStyles() {
  return {
    name: "boulder-ui:prepend-global-styles",
    closeBundle: {
      sequential: true,
      order: "post" as const,
      async handler() {
        // ── Prepend tokens + global CSS ──────────────────────────────────
        const distCss = path.resolve(dirname, "dist/boulder-ui.css");
        const tokensCss = path.resolve(dirname, "src/styles/tokens.css");
        const globalCss = path.resolve(dirname, "src/styles/global.css");

        const tokensContent = fs.readFileSync(tokensCss, "utf-8");
        const globalContent = fs.readFileSync(globalCss, "utf-8");

        let bundledCss = "";
        if (fs.existsSync(distCss)) {
          bundledCss = fs.readFileSync(distCss, "utf-8");
        }

        const finalCss = [
          "/* ─── Boulder UI — Design Tokens ─────────────────────────────────── */",
          tokensContent,
          "",
          "/* ─── Boulder UI — Global Styles ──────────────────────────────────── */",
          globalContent,
          "",
          "/* ─── Boulder UI — Component Styles ──────────────────────────────── */",
          bundledCss,
        ].join("\n");

        fs.writeFileSync(distCss, finalCss, "utf-8");

        // ── Copy styles.d.ts for TypeScript module resolution ────────────
        const srcDts = path.resolve(dirname, "src/styles.d.ts");
        const distDts = path.resolve(dirname, "dist/styles.d.ts");
        if (fs.existsSync(srcDts)) {
          fs.copyFileSync(srcDts, distDts);
        }
      },
    },
  };
}

export default defineConfig({
  plugins: [
    react(),

    dts({
      tsconfigPath: "./tsconfig.app.json",
      include: ["src"],
      exclude: [
        "src/**/*.stories.tsx",
        "src/**/*.stories.ts",
        "src/styles-entry.ts",
      ],
      rollupTypes: true,
      insertTypesEntry: true,
    }),

    prependGlobalStyles(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },

  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      name: "boulderUI",
      formats: ["es", "cjs"],
    },

    sourcemap: true,

    // Não copiar arquivos de public/ para dist (assets do Storybook)
    copyPublicDir: false,

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],

      output: [
        {
          format: "es",
          // Preserva a estrutura de módulos para tree-shaking granular
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
