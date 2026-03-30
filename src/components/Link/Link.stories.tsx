import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Controls/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    href: "#",
    children: "Click here",
    variant: "default",
    isExternal: false,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "subtle", "underline"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**Link** is a styled anchor element that uses design tokens for consistent navigation styling. It differs from \`Button\` in that it carries navigation semantics. The \`isExternal\` prop automatically adds \`target="_blank"\` and \`rel="noopener noreferrer"\`.

## Import
\`\`\`tsx
import { Link } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`'default' \\| 'subtle' \\| 'underline'\` | \`'default'\` | Visual style |
| \`isExternal\` | \`boolean\` | \`false\` | Opens in new tab with safe rel attributes |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const Subtle: Story = {
  args: { variant: "subtle", children: "View documentation" },
};

export const Underline: Story = {
  args: { variant: "underline", children: "Read more" },
};

export const External: Story = {
  args: {
    href: "https://storybook.js.org",
    children: "Open Storybook docs",
    isExternal: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Link href="#" variant="default">Default</Link>
      <Link href="#" variant="subtle">Subtle</Link>
      <Link href="#" variant="underline">Underline</Link>
    </div>
  ),
};

export const InlineText: Story = {
  render: () => (
    <p style={{ fontSize: "16px", lineHeight: "1.6", maxWidth: "400px" }}>
      Boulder UI is a minimal design system. Learn more in the{" "}
      <Link href="#" variant="default">documentation</Link> or explore{" "}
      <Link href="#" variant="underline">component examples</Link>.
    </p>
  ),
};
