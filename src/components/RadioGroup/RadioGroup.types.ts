import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export type RadioGroupOrientation = "horizontal" | "vertical";

export interface RadioGroupRootProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The name attribute shared by all radio inputs in the group.
   */
  name: string;
  /**
   * The value of the selected radio (controlled).
   */
  value?: string;
  /**
   * The default selected value (uncontrolled).
   */
  defaultValue?: string;
  /**
   * Called when the selected value changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * Layout direction of the radio items.
   * @default "vertical"
   */
  orientation?: RadioGroupOrientation;
  /**
   * When true, all radio items in the group are disabled.
   * @default false
   */
  disabled?: boolean;
  children: ReactNode;
}

export interface RadioGroupItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name"> {
  /**
   * The value this radio item represents.
   */
  value: string;
  /**
   * Label text displayed next to the radio input.
   */
  label: ReactNode;
  /** @internal */
  _name?: string;
  /** @internal */
  _selectedValue?: string;
  /** @internal */
  _onSelect?: (value: string) => void;
  /** @internal */
  _groupDisabled?: boolean;
}
