import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { HeaderSection } from "./Header";
import { HeaderAction } from "./Header";
import { SearchField } from "@/components/SearchField";
import { Button } from "@/components/Button";
import { SideBar, SideBarItem } from "@/components/SideBar";
import { Box } from "@/components/Box";

/* ─── Icon helpers ────────────────────────────────────────────────────────── */

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

/* Avatar placeholder */
const Avatar = ({ initials = "JD" }: { initials?: string }) => (
  <div
    aria-label="User avatar"
    style={{
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--virtu-color-primary)",
      color: "var(--virtu-color-text-inverse)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: 600,
      flexShrink: 0,
      cursor: "pointer",
      userSelect: "none",
    }}
  >
    {initials}
  </div>
);

/* ─── Meta ────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Header** is the top navigation anchor of the Virtu UI layout system. It uses glassmorphism with \`backdrop-filter: blur\` so that page content scrolling underneath creates the translucent glass effect characteristic of the Virtu UI aesthetic.

## Overview

The component is composed of three subcomponents exported from a single file:

- **Header** — The root \`<header>\` element. Manages sticky positioning, glass background, and the flex layout.
- **HeaderSection** — A flex group for aligning items to the left, center, or right. Use \`grow\` to fill remaining space.
- **HeaderAction** — An icon-only action button (or anchor) with an optional notification badge. Reuses the existing \`Badge\` component.

## Composition

\`\`\`tsx
import { Header, HeaderSection, HeaderAction } from 'virtu-ui';

<Header sticky>
  <HeaderSection>
    <h1>Orders</h1>
  </HeaderSection>

  <HeaderSection grow align="center">
    <SearchField placeholder="Search..." />
  </HeaderSection>

  <HeaderSection align="right">
    <HeaderAction icon={<BellIcon />} badge={3} aria-label="Notifications" />
    <HeaderAction icon={<SettingsIcon />} aria-label="Settings" />
    <Avatar />
  </HeaderSection>
</Header>
\`\`\`

## Key Props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`sticky\` | \`boolean\` | \`true\` | Sticks the header to the top of the viewport |
| \`variant\` | \`"glass" \\| "transparent"\` | \`"glass"\` | Visual style of the header |

### HeaderSection
| Prop | Type | Default | Description |
|---|---|---|---|
| \`align\` | \`"left" \\| "center" \\| "right"\` | \`"left"\` | Alignment of items inside the section |
| \`grow\` | \`boolean\` | \`false\` | Expands to fill remaining horizontal space |

### HeaderAction
| Prop | Type | Default | Description |
|---|---|---|---|
| \`icon\` | \`ReactNode\` | — | Icon element |
| \`badge\` | \`number\` | — | Notification count |
| \`badgeMax\` | \`number\` | \`99\` | Max value before showing "max+" |
| \`aria-label\` | \`string\` | — | Required accessible label |
| \`as\` | \`"button" \\| "a"\` | \`"button"\` | Render as button or anchor |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

/* ─── Stories ─────────────────────────────────────────────────────────────── */

export const Default: Story = {
  name: "Default (Title + Actions)",
  render: () => (
    <Header>
      <HeaderSection>
        <span style={{ fontSize: "var(--virtu-font-size-xl)", fontWeight: 600, color: "var(--virtu-color-text)" }}>
          Dashboard
        </span>
      </HeaderSection>

      <HeaderSection grow />

      <HeaderSection align="right">
        <HeaderAction icon={<BellIcon />} badge={10} aria-label="Notifications" />
        <HeaderAction icon={<SettingsIcon />} aria-label="Settings" />
        <Avatar />
      </HeaderSection>
    </Header>
  ),
};

export const WithSearch: Story = {
  name: "With Global Search",
  render: () => (
    <Header>
      <HeaderSection>
        <span style={{ fontSize: "var(--virtu-font-size-xl)", fontWeight: 600, color: "var(--virtu-color-text)", whiteSpace: "nowrap" }}>
          Orders
        </span>
      </HeaderSection>

      <HeaderSection grow align="center" style={{ padding: "0 var(--virtu-spacing-lg)" }}>
        <SearchField
          placeholder="Search system-wide..."
          leadingIcon={<SearchIcon />}
          style={{ width: "100%", maxWidth: 420 }}
        />
      </HeaderSection>

      <HeaderSection align="right">
        <HeaderAction icon={<BellIcon />} badge={3} aria-label="Notifications" />
        <HeaderAction icon={<SettingsIcon />} aria-label="Settings" />
        <Avatar />
      </HeaderSection>
    </Header>
  ),
};

export const WithCTA: Story = {
  name: "With Primary CTA Button",
  render: () => (
    <Header>
      <HeaderSection>
        <span style={{ fontSize: "var(--virtu-font-size-xl)", fontWeight: 600, color: "var(--virtu-color-text)" }}>
          Products
        </span>
      </HeaderSection>

      <HeaderSection grow />

      <HeaderSection align="right">
        <Button variant="secondary" size="sm">Export</Button>
        <Button variant="primary" size="sm">+ New Product</Button>
        <HeaderAction icon={<BellIcon />} aria-label="Notifications" />
        <Avatar />
      </HeaderSection>
    </Header>
  ),
};

export const Transparent: Story = {
  name: "Transparent Variant",
  render: () => (
    <div style={{ background: "var(--virtu-color-background)", padding: "var(--virtu-spacing-md)" }}>
      <Header variant="transparent" sticky={false}>
        <HeaderSection>
          <span style={{ fontSize: "var(--virtu-font-size-xl)", fontWeight: 600, color: "var(--virtu-color-text)" }}>
            Dashboard
          </span>
        </HeaderSection>
        <HeaderSection grow />
        <HeaderSection align="right">
          <HeaderAction icon={<BellIcon />} badge={5} aria-label="Notifications" />
          <Avatar />
        </HeaderSection>
      </Header>
    </div>
  ),
};

export const PageLayout: Story = {
  name: "Full Page Layout (Header + SideBar + Content)",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "var(--virtu-color-background)",
        overflow: "hidden",
      }}
    >
      {/* SideBar */}
      <div style={{ padding: "var(--virtu-spacing-md) var(--virtu-spacing-sm)", flexShrink: 0 }}>
        <SideBar
          logo={
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--virtu-color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M20 7L12 3L4 7V17L12 21L20 17V7Z" />
              </svg>
            </div>
          }
        >
          <SideBarItem icon={<HomeIcon />} label="Home" active asButton />
          <SideBarItem icon={<GridIcon />} label="Products" asButton />
          <SideBarItem icon={<UserIcon />} label="Members" badge={10} asButton />
        </SideBar>
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header sticky */}
        <Header sticky>
          <HeaderSection>
            <span style={{ fontSize: "var(--virtu-font-size-xl)", fontWeight: 600, color: "var(--virtu-color-text)" }}>
              Orders
            </span>
          </HeaderSection>

          <HeaderSection grow align="center" style={{ padding: "0 var(--virtu-spacing-lg)" }}>
            <SearchField
              placeholder="Search system-wide..."
              leadingIcon={<SearchIcon />}
              style={{ width: "100%", maxWidth: 380 }}
            />
          </HeaderSection>

          <HeaderSection align="right">
            <HeaderAction icon={<BellIcon />} badge={10} aria-label="Notifications" />
            <HeaderAction icon={<SettingsIcon />} aria-label="Settings" />
            <Avatar />
          </HeaderSection>
        </Header>

        {/* Scrollable content — glass blur effect visible on scroll */}
        <div style={{ flex: 1, overflowY: "auto", padding: "var(--virtu-spacing-lg)" }}>
          {/* Metric cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--virtu-spacing-md)", marginBottom: "var(--virtu-spacing-lg)" }}>
            {[
              { label: "Released Orders", value: "50" },
              { label: "Approved", value: "$ 24,000.00" },
              { label: "Pending", value: "$ 4,000.00" },
            ].map((card) => (
              <Box key={card.label} variant="glass" padding="md">
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "var(--virtu-font-size-sm)", marginBottom: 8 }}>
                  {card.label}
                </div>
                <div style={{ color: "var(--virtu-color-text)", fontSize: "var(--virtu-font-size-xl)", fontWeight: 700 }}>
                  {card.value}
                </div>
              </Box>
            ))}
          </div>

          {/* Content boxes to enable scroll and show glass blur */}
          {Array.from({ length: 6 }).map((_, i) => (
            <Box key={i} variant="glass" padding="md" style={{ marginBottom: "var(--virtu-spacing-md)" }}>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "var(--virtu-font-size-sm)" }}>
                Section content {i + 1} — scroll up to see the Header's blur effect over this content.
              </div>
            </Box>
          ))}
        </div>
      </div>
    </div>
  ),
};
