import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchField } from "./SearchField";

/* ─── Inline SVG icons ────────────────────────────────────────────────────── */

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

const AtIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>
);

/* ─── Meta ────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof SearchField> = {
  title: "Components/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **SearchField** is a purpose-built search input designed for real-time filtering scenarios — such as filtering a table by email, name, or ID as the user types.

## Overview

Unlike the general-purpose \`Input\`, the \`SearchField\` is opinionated:

- Dark, slightly translucent background with generous internal padding
- \`border-radius\` using \`--virtu-radius-lg\` (15px) for a pill-like feel
- Supports a **leading icon** (e.g. magnifying glass) and a **trailing icon** (e.g. keyboard hint)
- Automatically renders a **clear button** (×) when \`onClear\` is provided and the field has a value
- Renders as \`<input type="search">\` for semantic correctness and browser accessibility

## Installation

\`\`\`bash
npm install virtu-ui
\`\`\`

## Import

\`\`\`tsx
import { SearchField } from 'virtu-ui';
\`\`\`

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`size\` | \`'sm' \\| 'md' \\| 'lg'\` | \`'md'\` | Visual size of the field |
| \`leadingIcon\` | \`ReactNode\` | — | Icon on the left (typically a magnifying glass) |
| \`trailingIcon\` | \`ReactNode\` | — | Icon or hint on the right |
| \`onClear\` | \`() => void\` | — | When provided and the field has a value, renders a clear (×) button |
| \`value\` | \`string\` | — | Controlled value |
| \`onChange\` | \`ChangeEventHandler\` | — | Change handler for controlled usage |
| \`placeholder\` | \`string\` | — | Placeholder text |
| \`disabled\` | \`boolean\` | — | Disables the field |

## Usage

### Uncontrolled

\`\`\`tsx
<SearchField placeholder="Search..." leadingIcon={<SearchIcon />} />
\`\`\`

### Controlled with clear button

\`\`\`tsx
const [query, setQuery] = useState("");

<SearchField
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onClear={() => setQuery("")}
  leadingIcon={<SearchIcon />}
  placeholder="Search by email..."
/>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchField>;

/* ─── Stories ─────────────────────────────────────────────────────────────── */

export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
};

export const WithLeadingIcon: Story = {
  name: "With Leading Icon",
  args: {
    placeholder: "Search...",
    leadingIcon: <SearchIcon />,
  },
};

export const Sizes: Story = {
  name: "All Sizes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "360px" }}>
      <SearchField size="sm" placeholder="Small" leadingIcon={<SearchIcon />} />
      <SearchField size="md" placeholder="Medium (default)" leadingIcon={<SearchIcon />} />
      <SearchField size="lg" placeholder="Large" leadingIcon={<SearchIcon />} />
    </div>
  ),
};

export const WithClearButton: Story = {
  name: "With Clear Button (Interactive)",
  render: function WithClearStory() {
    const [value, setValue] = useState("instituto aurora");
    return (
      <div style={{ width: "360px" }}>
        <SearchField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue("")}
          leadingIcon={<SearchIcon />}
          placeholder="Search..."
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Search...",
    leadingIcon: <SearchIcon />,
    disabled: true,
  },
};

/* ─── Real-time filter demo ───────────────────────────────────────────────── */

const ROWS = [
  { id: "#30218", name: "Instituto Aurora", email: "financeiro@institutoaurora.com.br" },
  { id: "#30219", name: "Grupo Nexus", email: "contato@gruponexus.com.br" },
  { id: "#30220", name: "Clínica Viva", email: "admin@clinicaviva.com.br" },
  { id: "#30221", name: "Tech Solutions", email: "hello@techsolutions.io" },
  { id: "#30222", name: "Aurora Digital", email: "digital@aurora.com.br" },
];

export const RealTimeFilter: Story = {
  name: "Real-Time Table Filter (Interactive)",
  render: function RealTimeFilterStory() {
    const [query, setQuery] = useState("");

    const filtered = ROWS.filter(
      (r) =>
        r.id.toLowerCase().includes(query.toLowerCase()) ||
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.email.toLowerCase().includes(query.toLowerCase()),
    );

    const cellStyle: React.CSSProperties = {
      padding: "10px 12px",
      fontSize: "13px",
      color: "rgba(255,255,255,0.75)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    };

    const headStyle: React.CSSProperties = {
      ...cellStyle,
      color: "rgba(255,255,255,0.4)",
      fontSize: "11px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    };

    return (
      <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <SearchField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery("")}
          leadingIcon={<SearchIcon />}
          trailingIcon={<AtIcon />}
          placeholder="Search by ID, client or e-mail..."
        />

        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={headStyle}>ID</th>
                <th style={headStyle}>Client</th>
                <th style={headStyle}>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={3} style={{ ...cellStyle, textAlign: "center", color: "rgba(255,255,255,0.3)" }}>
                    No results found.
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id}>
                    <td style={cellStyle}>{r.id}</td>
                    <td style={cellStyle}>{r.name}</td>
                    <td style={{ ...cellStyle, color: "rgba(255,255,255,0.45)" }}>{r.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};
