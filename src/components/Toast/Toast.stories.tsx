import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./";

// ─── Icons ────────────────────────────────────────────────────────────────────

const SuccessIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ErrorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const InfoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const WarningIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Toast** component provides non-obtrusive, temporary notifications about the outcome of an action. In a scientific context, it's used for alerts like "Shapefile imported successfully" or "Error saving soil sample".

## Features

- **Positioning**: Supports 6 screen positions (top/bottom x left/right/center).
- **Variants**: Neutral (default) and state-based (success, danger, warning, info).
- **Time Control**: Automatic dismissal with a visual progress bar.
- **Persistence**: Can be "pinned" to the screen, requiring manual dismissal.
- **Rich Content**: Supports titles, descriptions, and custom icons.

## Usage

\`\`\`tsx
import { Toast } from "boulder-ui";

<Toast 
  variant="success" 
  title="Record Saved" 
  description="The fauna occurrence has been added to the database." 
  onClose={() => console.log('closed')}
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "success", "danger", "warning", "info"],
    },
    position: {
      control: "select",
      options: ["top-left", "top-right", "top-center", "bottom-left", "bottom-right", "bottom-center"],
    },
    duration: { control: "number" },
    persistent: { control: "boolean" },
    showProgress: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    title: "Notification Title",
    description: "This is a neutral notification message.",
    variant: "default",
    position: "bottom-right",
    onClose: () => alert("Closed!"),
  },
};

export const Success: Story = {
  name: "Success — Data Imported",
  args: {
    variant: "success",
    title: "Shapefile Imported",
    description: "Atlantic Forest remnants (2023) successfully processed.",
    icon: <SuccessIcon />,
    onClose: () => {},
  },
};

export const Danger: Story = {
  name: "Danger — Save Error",
  args: {
    variant: "danger",
    title: "Failed to Save Sample",
    description: "Database connection lost. Please check your network.",
    icon: <ErrorIcon />,
    onClose: () => {},
  },
};

export const Warning: Story = {
  name: "Warning — GPS Accuracy",
  args: {
    variant: "warning",
    title: "Low GPS Accuracy",
    description: "Current precision is > 15m. Coordinates may be inaccurate.",
    icon: <WarningIcon />,
    onClose: () => {},
  },
};

export const Info: Story = {
  name: "Info — Background Task",
  args: {
    variant: "info",
    title: "Exporting Data",
    description: "Generating CSV for 1,432 fauna records...",
    icon: <InfoIcon />,
    onClose: () => {},
  },
};

export const Persistent: Story = {
  name: "Persistent — Manual Close Required",
  args: {
    variant: "default",
    title: "System Update Available",
    description: "New species taxonomy database is ready to download.",
    persistent: true,
    onClose: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: "A persistent toast (pinned) does not disappear automatically and hides the progress bar. It requires the user to click the close button.",
      },
    },
  },
};

export const NoProgressBar: Story = {
  name: "No Progress Bar",
  args: {
    title: "Simple Notification",
    showProgress: false,
    onClose: () => {},
  },
};

export const TopCenter: Story = {
  name: "Position — Top Center",
  args: {
    title: "Centered Alert",
    position: "top-center",
    variant: "info",
    onClose: () => {},
  },
};
