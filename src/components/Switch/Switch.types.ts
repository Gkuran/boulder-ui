import type { InputHTMLAttributes } from "react";

export type SwitchSize = "sm" | "md" | "lg";

export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  id: string;
  label?: string;
  size?: SwitchSize;
}
