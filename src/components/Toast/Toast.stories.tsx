import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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

// ─── Story container ──────────────────────────────────────────────────────────
// The Toast uses `position: fixed` in production. Inside Storybook's iframe,
// `fixed` anchors to the iframe viewport, which causes clipping and inversion.
// We wrap each story in a `position: relative` container with fixed dimensions
// so the toast positions itself correctly within the preview area.

const ToastStage = ({
  children,
  height = 280,
}: {
  children: React.ReactNode;
  height?: number;
}) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height,
      background: "var(--boulder-color-background-subtle)",
      borderRadius: "var(--boulder-radius-md)",
      border: "1px dashed var(--boulder-color-border)",
      overflow: "hidden",
    }}
  >
    {children}
  </div>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
The **Toast** component provides non-obtrusive, temporary notifications about the outcome of an action. In a scientific context, it's used for feedback like "Shapefile imported successfully" or "Error saving soil sample".

## Features

- **Positioning**: Supports 6 screen positions (top/bottom × left/right/center).
- **Variants**: Neutral (\`default\`) and state-based (\`success\`, \`danger\`, \`warning\`, \`info\`).
- **Time Control**: Automatic dismissal with a visual progress bar animated via CSS.
- **Persistence**: Can be "pinned" to the screen, requiring manual dismissal.
- **Rich Content**: Supports titles, descriptions, and custom icons.

## Usage

\`\`\`tsx
import { Toast } from "boulder-ui";

<Toast
  variant="success"
  title="Record Saved"
  description="The fauna occurrence has been added to the database."
  onClose={() => setVisible(false)}
/>
\`\`\`

> **Note on positioning**: The \`position\` prop uses CSS \`position: fixed\` to anchor the toast to the browser viewport. In the Storybook previews below, the toast is rendered inside a bounded container to illustrate the positioning behaviour correctly.
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
  name: "Default",
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return (
      <ToastStage>
        {visible && (
          <Toast
            {...args}
            style={{ position: "absolute" }}
            onClose={() => setVisible(false)}
          />
        )}
        {!visible && (
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "var(--boulder-spacing-sm) var(--boulder-spacing-md)",
              background: "var(--boulder-color-primary)",
              color: "var(--boulder-color-text-inverse)",
              border: "none",
              borderRadius: "var(--boulder-radius-sm)",
              cursor: "pointer",
              fontFamily: "var(--boulder-font-family)",
              fontSize: "var(--boulder-font-size-md)",
            }}
            onClick={() => setVisible(true)}
          >
            Show Toast Again
          </button>
        )}
      </ToastStage>
    );
  },
  args: {
    title: "Notification Title",
    description: "This is a neutral notification message.",
    variant: "default",
    position: "bottom-right",
    duration: 5000,
    showProgress: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Default neutral toast with a progress bar. When the timer expires or the close button is clicked, the toast disappears. Click 'Show Toast Again' to replay.",
      },
    },
  },
};

export const Success: Story = {
  name: "Success — Shapefile Imported",
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return (
      <ToastStage>
        {visible && (
          <Toast
            {...args}
            style={{ position: "absolute" }}
            onClose={() => setVisible(false)}
          />
        )}
      </ToastStage>
    );
  },
  args: {
    variant: "success",
    position: "bottom-right",
    title: "Shapefile Imported",
    description: "Atlantic Forest remnants (2023) successfully processed.",
    icon: <SuccessIcon />,
    persistent: true,
  },
};

export const Danger: Story = {
  name: "Danger — Save Error",
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return (
      <ToastStage>
        {visible && (
          <Toast
            {...args}
            style={{ position: "absolute" }}
            onClose={() => setVisible(false)}
          />
        )}
      </ToastStage>
    );
  },
  args: {
    variant: "danger",
    position: "bottom-right",
    title: "Failed to Save Sample",
    description: "Database connection lost. Please check your network.",
    icon: <ErrorIcon />,
    persistent: true,
  },
};

export const Warning: Story = {
  name: "Warning — GPS Accuracy",
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return (
      <ToastStage>
        {visible && (
          <Toast
            {...args}
            style={{ position: "absolute" }}
            onClose={() => setVisible(false)}
          />
        )}
      </ToastStage>
    );
  },
  args: {
    variant: "warning",
    position: "bottom-right",
    title: "Low GPS Accuracy",
    description: "Current precision is > 15m. Coordinates may be inaccurate.",
    icon: <WarningIcon />,
    persistent: true,
  },
};

export const Info: Story = {
  name: "Info — Background Task",
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return (
      <ToastStage>
        {visible && (
          <Toast
            {...args}
            style={{ position: "absolute" }}
            onClose={() => setVisible(false)}
          />
        )}
      </ToastStage>
    );
  },
  args: {
    variant: "info",
    position: "bottom-right",
    title: "Exporting Data",
    description: "Generating CSV for 1,432 fauna records...",
    icon: <InfoIcon />,
    persistent: true,
  },
};

export const Persistent: Story = {
  name: "Persistent — Manual Close Required",
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return (
      <ToastStage>
        {visible && (
          <Toast
            {...args}
            style={{ position: "absolute" }}
            onClose={() => setVisible(false)}
          />
        )}
        {!visible && (
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "var(--boulder-spacing-sm) var(--boulder-spacing-md)",
              background: "var(--boulder-color-primary)",
              color: "var(--boulder-color-text-inverse)",
              border: "none",
              borderRadius: "var(--boulder-radius-sm)",
              cursor: "pointer",
              fontFamily: "var(--boulder-font-family)",
              fontSize: "var(--boulder-font-size-md)",
            }}
            onClick={() => setVisible(true)}
          >
            Show Toast Again
          </button>
        )}
      </ToastStage>
    );
  },
  args: {
    variant: "default",
    position: "bottom-right",
    title: "System Update Available",
    description: "New species taxonomy database is ready to download.",
    persistent: true,
  },
  parameters: {
    docs: {
      description: {
        story: "A persistent (pinned) toast does not disappear automatically and hides the progress bar. It requires the user to explicitly click the close button.",
      },
    },
  },
};

export const AllPositions: Story = {
  name: "All Positions",
  render: () => (
    <ToastStage height={400}>
      {(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const).map((pos) => (
        <Toast
          key={pos}
          title={pos}
          variant="default"
          position={pos}
          persistent
          style={{ position: "absolute", minWidth: 160, maxWidth: 200 }}
        />
      ))}
    </ToastStage>
  ),
  parameters: {
    docs: {
      description: {
        story: "All 6 available positions rendered simultaneously inside a bounded container for comparison.",
      },
    },
  },
};
