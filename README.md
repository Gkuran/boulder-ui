# boulder-ui

[![npm version](https://img.shields.io/npm/v/boulder-ui)](https://www.npmjs.com/package/boulder-ui)
[![tree-shakeable](https://img.shields.io/badge/tree--shakeable-yes-green)]()
[![license](https://img.shields.io/npm/l/boulder-ui)]()

A **lightweight React component library** designed to build **consistent, accessible and composable interfaces**.

---

## Features

- Minimal and composable components
- Accessibility-first (ARIA, keyboard navigation, semantic HTML)
- Design tokens via CSS custom properties (`--boulder-*`)
- Fully typed with TypeScript
- Tree-shakeable (ESM + CJS, `preserveModules`)
- No runtime dependencies beyond React

---

## Installation

```bash
npm install boulder-ui
```

---

## Setup

Import the design tokens (CSS variables) once in your application entry point:

```tsx
import "boulder-ui/styles";
```

Then import components as needed:

```tsx
import { Button, Input, FormField } from "boulder-ui";
```

---

## Components

| Component | Description |
|---|---|
| `Button` | Action button with variants (primary, secondary, danger) and loading state |
| `Input` | Text input with outline/filled variants and error state |
| `Textarea` | Multi-line text input with outline/filled variants |
| `Checkbox` | Accessible checkbox with custom visual control |
| `Switch` | Toggle switch built on a native checkbox |
| `Label` | Accessible label for form controls |
| `FormField` | Composable wrapper combining Label, input, description and ErrorMessage |
| `ErrorMessage` | Accessible error message with `role="alert"` |

---

## Usage Examples

### Button

```tsx
import { Button } from "boulder-ui";

<Button variant="primary" size="md">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger" isLoading>Deleting...</Button>
```

### FormField + Input

```tsx
import { FormField, Input } from "boulder-ui";

<FormField label="Email" description="We'll never share your email.">
  <Input placeholder="you@example.com" />
</FormField>

<FormField label="Username" error="Username is already taken">
  <Input />
</FormField>
```

### Checkbox

```tsx
import { Checkbox } from "boulder-ui";

<Checkbox label="Accept terms and conditions" />
```

### Switch

```tsx
import { Switch } from "boulder-ui";

<Switch id="notifications" label="Enable notifications" size="md" />
```

---

## Design Tokens

All styling is driven by CSS custom properties prefixed with `--boulder-`. You can override them in your application:

```css
:root {
  --boulder-color-primary: #0070f3;
  --boulder-font-family: "Inter", sans-serif;
  --boulder-radius-md: 6px;
}
```

---

## License

MIT
