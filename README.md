# virtu-ui

[![npm version](https://img.shields.io/npm/v/virtu-ui)](https://www.npmjs.com/package/virtu-ui)
[![tree-shakeable](https://img.shields.io/badge/tree--shakeable-yes-green)]()
[![license](https://img.shields.io/npm/l/virtu-ui)]()

A **modern, glassmorphism-inspired React component library** designed to build **consistent, accessible, and high-performance interfaces**.

---

## Features

- **Glassmorphism Aesthetic** — Beautiful translucent surfaces with backdrop blur and saturation, inspired by modern OS design.
- **Minimal & Composable** — Small, predictable components that work perfectly together.
- **Accessibility-First** — Built with ARIA, keyboard navigation, and semantic HTML in mind.
- **Design Tokens** — Fully controlled via CSS custom properties (`--virtu-*`).
- **Font Agnostic** — While we provide typography tokens, the library does not enforce a specific font family, allowing you to bring your own brand's typography.
- **Fully Typed** — Written in TypeScript with strict typing for an excellent developer experience.
- **Tree-Shakeable** — Optimized for small bundle sizes (ESM + CJS).

---

## Installation

```bash
npm install virtu-ui
```

---

## Setup

Import the design tokens and global styles once in your application entry point:

```tsx
import "virtu-ui/styles";
```

Then import components as needed:

```tsx
import { Box, Button, Header, SideBar } from "virtu-ui";
```

---

## Core Components

| Component | Description |
|---|---|
| `Box` | The foundational glassmorphism container for cards and sections. |
| `Header` | Sticky top navigation with glass blur and action slots. |
| `SideBar` | Floating vertical navigation with support for icons and badges. |
| `DataTable` | Complex data grid with search, filter tags, and pagination. |
| `SearchField` | Specialized search input with clear button and icon support. |
| `Tag` | Compact labels for filters and categories with removal support. |
| `Button` | Action button with variants (primary, secondary, danger) and loading state. |
| `Input` | Text input with glassmorphism styling and error states. |
| `Badge` | Status indicators and numeric counters. |

---

## Usage Examples

### Glassmorphism Card (Box)

```tsx
import { Box } from "virtu-ui";

<Box variant="glass" padding="lg">
  <h3>Revenue</h3>
  <p>$ 24,000.00</p>
</Box>
```

### Search & Filters

```tsx
import { SearchField, Tag } from "virtu-ui";

<SearchField placeholder="Search orders..." onSearchChange={handleSearch} />
<div style={{ display: 'flex', gap: '8px' }}>
  <Tag label="Approved" active />
  <Tag label="Pending" onRemove={handleRemove} />
</div>
```

---

## Design Tokens & Typography

Virtu UI is **font agnostic**. We provide tokens for font sizes, weights, and line heights, but we do not bundle or enforce a specific font file. You can easily integrate your own typography:

```css
:root {
  /* Bring your own font */
  --virtu-font-family: "Inter", system-ui, sans-serif;
  
  /* Override brand colors */
  --virtu-color-primary: #FF7F72;
  
  /* Adjust glass intensity */
  --virtu-glass-blur: 20px;
}
```

---

## License

MIT
