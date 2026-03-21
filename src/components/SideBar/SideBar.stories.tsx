import type { Meta, StoryObj } from "@storybook/react";
import { SideBar } from "./SideBar";
import { SideBarItem } from "./SideBarItem";

/* ─── Inline SVG icons for stories (consumers bring their own) ────────────── */

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const PackageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const LogoIcon = () => (
  <svg viewBox="0 0 32 32" fill="none">
    <path
      d="M16 4L6 10v12l10 6 10-6V10L16 4z"
      fill="#FF7F72"
      opacity="0.9"
    />
    <path
      d="M16 10l-4 2.5v5L16 20l4-2.5v-5L16 10z"
      fill="#1a1a1a"
    />
  </svg>
);

/* ─── Meta ────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof SideBar> = {
  title: "Components/SideBar",
  component: SideBar,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Overview

The **SideBar** is a floating vertical navigation component designed for the Virtu UI glassmorphism aesthetic. It renders as a solid black \`<nav>\` element with rounded corners, a logo slot at the top, and vertically stacked icon items.

## Installation

\`\`\`bash
npm install virtu-ui
\`\`\`

\`\`\`tsx
import { SideBar, SideBarItem } from "virtu-ui";
\`\`\`

## Composition

The SideBar is composed of three parts:

| Component | Role |
|---|---|
| \`SideBar\` | Root container (\`<nav>\`). Accepts a \`logo\` prop and \`SideBarItem\` children. |
| \`SideBarItem\` | A single navigation entry with icon, label, active state, and optional badge. |
| \`SideBarBadge\` | A small circular notification badge (used internally by \`SideBarItem\` via the \`badge\` prop). |

## SideBar Props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`logo\` | \`ReactNode\` | — | Brand element rendered at the top |
| \`children\` | \`ReactNode\` | — | SideBarItem elements |

## SideBarItem Props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`icon\` | \`ReactNode\` | — | Icon to display (SVG, img, component) |
| \`label\` | \`string\` | — | Text below the icon |
| \`active\` | \`boolean\` | \`false\` | Highlights the item as current page |
| \`badge\` | \`number\` | — | Notification count overlay |
| \`badgeMax\` | \`number\` | \`99\` | Max before showing "99+" |
| \`asButton\` | \`boolean\` | \`false\` | Render as \`<button>\` instead of \`<a>\` |

## Usage

\`\`\`tsx
<SideBar logo={<img src="/logo.svg" alt="Brand" />}>
  <SideBarItem icon={<HomeIcon />} label="Home" active badge={10} />
  <SideBarItem icon={<SettingsIcon />} label="Settings" />
</SideBar>
\`\`\`

The sidebar is **floating by design** — it does not touch the edges of the viewport. The consumer is responsible for positioning it (e.g., with \`position: fixed\` and appropriate margins).
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideBar>;

/* ─── Stories ─────────────────────────────────────────────────────────────── */

export const Default: Story = {
  render: () => (
    <SideBar logo={<LogoIcon />}>
      <SideBarItem icon={<HomeIcon />} label="Início" active badge={10} href="#" />
      <SideBarItem icon={<WalletIcon />} label="Financeiro" href="#" />
      <SideBarItem icon={<PackageIcon />} label="Produtos" href="#" />
      <SideBarItem icon={<CartIcon />} label="Checkout" href="#" />
      <SideBarItem icon={<UsersIcon />} label="Membros" href="#" />
      <SideBarItem icon={<LinkIcon />} label="Integrações" href="#" />
      <SideBarItem icon={<GridIcon />} label="Aplicativos" href="#" />
    </SideBar>
  ),
};

export const WithBadge: Story = {
  name: "Item with Badge",
  render: () => (
    <SideBar logo={<LogoIcon />}>
      <SideBarItem icon={<HomeIcon />} label="Início" active badge={10} href="#" />
      <SideBarItem icon={<WalletIcon />} label="Financeiro" badge={3} href="#" />
      <SideBarItem icon={<PackageIcon />} label="Produtos" href="#" />
    </SideBar>
  ),
};

export const NoBadge: Story = {
  name: "Without Badges",
  render: () => (
    <SideBar logo={<LogoIcon />}>
      <SideBarItem icon={<HomeIcon />} label="Início" href="#" />
      <SideBarItem icon={<WalletIcon />} label="Financeiro" active href="#" />
      <SideBarItem icon={<PackageIcon />} label="Produtos" href="#" />
      <SideBarItem icon={<CartIcon />} label="Checkout" href="#" />
    </SideBar>
  ),
};

export const HighBadgeCount: Story = {
  name: "Badge Overflow (99+)",
  render: () => (
    <SideBar logo={<LogoIcon />}>
      <SideBarItem icon={<HomeIcon />} label="Início" active badge={150} href="#" />
      <SideBarItem icon={<WalletIcon />} label="Financeiro" badge={42} href="#" />
    </SideBar>
  ),
};

export const NoLogo: Story = {
  name: "Without Logo",
  render: () => (
    <SideBar>
      <SideBarItem icon={<HomeIcon />} label="Início" active href="#" />
      <SideBarItem icon={<WalletIcon />} label="Financeiro" href="#" />
      <SideBarItem icon={<PackageIcon />} label="Produtos" href="#" />
    </SideBar>
  ),
};

export const FloatingLayout: Story = {
  name: "Floating in Page (Full Context)",
  render: () => (
    <div
      style={{
        position: "relative",
        width: "900px",
        height: "600px",
        background: "#1a1a1a",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
      }}
    >
      {/* Sidebar floating with margin */}
      <div style={{ padding: "16px 0 16px 16px" }}>
        <SideBar logo={<LogoIcon />}>
          <SideBarItem icon={<HomeIcon />} label="Início" active badge={10} href="#" />
          <SideBarItem icon={<WalletIcon />} label="Financeiro" href="#" />
          <SideBarItem icon={<PackageIcon />} label="Produtos" href="#" />
          <SideBarItem icon={<CartIcon />} label="Checkout" href="#" />
          <SideBarItem icon={<UsersIcon />} label="Membros" href="#" />
          <SideBarItem icon={<LinkIcon />} label="Integrações" href="#" />
          <SideBarItem icon={<GridIcon />} label="Aplicativos" href="#" />
        </SideBar>
      </div>

      {/* Content area placeholder */}
      <div style={{ flex: 1, padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <h1 style={{ margin: 0, color: "#f5f5f5", fontSize: "24px", fontWeight: 700 }}>Pedidos</h1>
        <div
          style={{
            flex: 1,
            background: "linear-gradient(135deg, rgba(172,172,172,0.19) 0%, rgba(70,70,70,0.19) 100%)",
            borderRadius: "15px",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "24px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.6)", margin: 0, fontSize: "14px" }}>
            Content area with glassmorphism Box
          </p>
        </div>
      </div>
    </div>
  ),
};
