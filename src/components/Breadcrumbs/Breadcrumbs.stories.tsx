import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta = {
  title: "Layout & Navigation/Breadcrumbs",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**Breadcrumbs** shows the user's location within the application hierarchy. It uses a \`<nav>\` landmark with \`aria-label\`, \`aria-current="page"\` on the current item, and a customizable separator.

## Import
\`\`\`tsx
import { Breadcrumbs } from 'boulder-ui';
\`\`\`

## Usage
\`\`\`tsx
<Breadcrumbs.Root>
  <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
  <Breadcrumbs.Separator />
  <Breadcrumbs.Item href="/projects">Projects</Breadcrumbs.Item>
  <Breadcrumbs.Separator />
  <Breadcrumbs.Item isCurrent>Boulder UI</Breadcrumbs.Item>
</Breadcrumbs.Root>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Breadcrumbs.Root>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Item href="/projects">Projects</Breadcrumbs.Item>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Item isCurrent>Boulder UI</Breadcrumbs.Item>
    </Breadcrumbs.Root>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumbs.Root>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Separator>›</Breadcrumbs.Separator>
      <Breadcrumbs.Item href="/docs">Docs</Breadcrumbs.Item>
      <Breadcrumbs.Separator>›</Breadcrumbs.Separator>
      <Breadcrumbs.Item isCurrent>Components</Breadcrumbs.Item>
    </Breadcrumbs.Root>
  ),
};

export const TwoLevels: Story = {
  render: () => (
    <Breadcrumbs.Root>
      <Breadcrumbs.Item href="/">Dashboard</Breadcrumbs.Item>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Item isCurrent>Settings</Breadcrumbs.Item>
    </Breadcrumbs.Root>
  ),
};
