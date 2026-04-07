# boulder-ui

[![npm version](https://img.shields.io/npm/v/boulder-ui)](https://www.npmjs.com/package/boulder-ui)
[![tree-shakeable](https://img.shields.io/badge/tree--shakeable-yes-green)]()
[![license](https://img.shields.io/npm/l/boulder-ui)]()

A **geology-inspired UI kit for React**. From the **granular flexibility of sand** to the **solid reliability of boulders**, build accessible and consistent interfaces with nature-toned primitives.

---

## Storybook

<img src="./public/boulder-ui-gif.gif" alt="storybook boulder ui preview" />
- https://main--69c67eb2c82c38c85d7a3a11.chromatic.com/

## Playground
The playground is only for testing and visually validating boulder-ui components and it's not intended to be a production application.

<img src="./public/terra-playground-gif.gif" alt="playground preview" />
- https://github.com/Gkuran/boulder-playground.git


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
