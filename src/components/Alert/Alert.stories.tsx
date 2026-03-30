import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    variant: "info",
    title: "Alert title",
    children: "This is an informational message providing additional context.",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["info", "success", "warning", "danger"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**Alert** displays a prominent, inline message about the current page or a specific area of the UI. Unlike \`Toast\`, which is ephemeral and floats over content, \`Alert\` is persistent and part of the document flow.

## Import
\`\`\`tsx
import { Alert } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`'info' \\| 'success' \\| 'warning' \\| 'danger'\` | \`'info'\` | Visual style |
| \`title\` | \`ReactNode\` | — | Optional bold title |
| \`icon\` | \`ReactNode\` | default icon | Override the default icon |
| \`onClose\` | \`() => void\` | — | Renders a dismiss button |
| \`closeAriaLabel\` | \`string\` | \`'Dismiss alert'\` | Accessible label for close button |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Info: Story = {
  args: { variant: "info" },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Changes saved",
    children: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Low disk space",
    children: "You are running low on storage. Consider removing unused files.",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    title: "Authentication failed",
    children: "Invalid credentials. Please check your email and password.",
  },
};

export const Dismissible: Story = {
  args: {
    variant: "info",
    title: "New feature available",
    children: "Check out the new dashboard layout in your settings.",
    onClose: () => {},
  },
};

export const TitleOnly: Story = {
  args: {
    variant: "success",
    title: "Profile updated successfully.",
    children: undefined,
  },
};

export const NoIcon: Story = {
  args: {
    variant: "warning",
    title: "Maintenance scheduled",
    children: "The system will be unavailable on Saturday from 2–4 AM.",
    icon: null,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "480px" }}>
      <Alert variant="info" title="Info">This is an informational alert.</Alert>
      <Alert variant="success" title="Success">Operation completed successfully.</Alert>
      <Alert variant="warning" title="Warning">Please review before proceeding.</Alert>
      <Alert variant="danger" title="Error">Something went wrong. Please try again.</Alert>
    </div>
  ),
};
