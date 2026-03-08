import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Input } from "../Input";
import { Button } from "../Button";

const meta: Meta<typeof FormField> = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Componente responsável por estruturar campos de formulário.

Ele combina:

- Label
- Input
- Descrição
- Mensagem de erro
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <FormField label="Email" htmlFor="email">
      <Input id="email" placeholder="Enter your email" />
    </FormField>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <FormField
      label="Username"
      description="This will be visible to other users"
      htmlFor="username"
    >
      <Input id="username" />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField label="Email" error="Invalid email address" htmlFor="email">
      <Input />
    </FormField>
  ),
};

export const FullFormExample: Story = {
  render: () => (
    <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <FormField label="Email" htmlFor="email">
        <Input id="email" />
      </FormField>

      <FormField label="Password" htmlFor="password">
        <Input id="password" type="password" />
      </FormField>

      <Button type="submit">Submit</Button>
    </form>
  ),
};
