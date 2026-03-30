import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Overview

**Avatar** displays a user's profile image, initials, or a fallback icon. It supports three sizes and gracefully degrades: if the image fails to load, it shows initials derived from the \`alt\` prop; if no \`alt\` is provided, it shows a generic user icon.

## Import

\`\`\`tsx
import { Avatar } from "boulder-ui";
\`\`\`

## Fallback Hierarchy

1. **Image** — if \`src\` is provided and loads successfully
2. **Initials** — if \`alt\` is provided (e.g., "Jane Doe" → "JD")
3. **User icon** — generic SVG fallback
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?u=boulder",
    alt: "Jane Doe",
    size: "md",
  },
};

export const WithInitials: Story = {
  args: {
    alt: "Jane Doe",
    size: "md",
  },
};

export const FallbackIcon: Story = {
  args: {
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar src="https://i.pravatar.cc/150?u=sm" alt="Small" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?u=md" alt="Medium" size="md" />
      <Avatar src="/wesley-rosa.png" alt="Wesley Rosa" size="lg" />
    </div>
  ),
};

export const InitialsSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar alt="Alice Brown" size="sm" />
      <Avatar alt="Bob Carter" size="md" />
      <Avatar alt="Carol Davis" size="lg" />
    </div>
  ),
};

export const BrokenImage: Story = {
  args: {
    src: "https://broken-url.invalid/avatar.png",
    alt: "Broken Image",
    size: "md",
  },
};
