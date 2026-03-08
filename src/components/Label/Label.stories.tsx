import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import { Input } from "../Input";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Email",
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Label htmlFor="email">Email</Label>
      <Input placeholder="Your email" />
    </div>
  ),
};
