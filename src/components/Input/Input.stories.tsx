import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Type something...",
    variant: "outline",
    sizeVariant: "md",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["outline", "filled"],
    },
    sizeVariant: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Campo de entrada utilizado para coletar dados do usuário.

### Variants

- **outline** → estilo padrão
- **filled** → fundo destacado

### Sizes

- **sm**
- **md**
- **lg**
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const Small: Story = {
  args: {
    sizeVariant: "sm",
  },
};

export const Large: Story = {
  args: {
    sizeVariant: "lg",
  },
};

export const WithError: Story = {
  args: {
    error: "Invalid value",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
