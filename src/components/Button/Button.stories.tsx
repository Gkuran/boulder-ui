import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./";

/* ─── Search icon (inline SVG — consumers bring their own) ───────────────── */

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

/* ─── Meta ────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Button** component is a flexible and accessible button element that supports various styles, sizes, states, and an optional leading icon.

## Overview

This component provides a consistent button experience with built-in support for loading states, multiple variants, responsive sizing, and an optional icon rendered to the left of the label.

## Installation

\`\`\`bash
npm install virtu-ui
\`\`\`

## Import

\`\`\`tsx
import { Button } from 'virtu-ui';
\`\`\`

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger'\` | \`'primary'\` | Visual style of the button |
| \`size\` | \`'sm' \\| 'md' \\| 'lg'\` | \`'md'\` | Controls the button's size |
| \`icon\` | \`ReactNode\` | — | Optional icon rendered to the left of the label |
| \`isLoading\` | \`boolean\` | \`false\` | Shows a loading spinner and disables the button. Hides the icon while loading. |
| \`disabled\` | \`boolean\` | — | Disables the button interaction |
| \`children\` | \`ReactNode\` | — | The button's label content |

## Usage

### Basic

\`\`\`tsx
<Button>Click me</Button>
\`\`\`

### With icon

\`\`\`tsx
<Button icon={<SearchIcon />}>Search</Button>
\`\`\`

The \`icon\` prop accepts any \`ReactNode\`. The icon is automatically sized to \`1em\` relative to the button's font size and hidden during the loading state.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/* ─── Stories ─────────────────────────────────────────────────────────────── */

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "Delete",
    variant: "danger",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    variant: "primary",
    isLoading: true,
  },
};

export const WithIcon: Story = {
  name: "With Icon — Search Button",
  args: {
    children: "Search",
    variant: "secondary",
    icon: <SearchIcon />,
  },
};

export const IconVariants: Story = {
  name: "Icon — All Variants",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="primary" icon={<SearchIcon />}>Search</Button>
      <Button variant="secondary" icon={<SearchIcon />}>Search</Button>
      <Button variant="danger" icon={<SearchIcon />}>Search</Button>
    </div>
  ),
};

export const IconSizes: Story = {
  name: "Icon — All Sizes",
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
      <Button size="sm" icon={<SearchIcon />}>Search</Button>
      <Button size="md" icon={<SearchIcon />}>Search</Button>
      <Button size="lg" icon={<SearchIcon />}>Search</Button>
    </div>
  ),
};
