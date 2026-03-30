import type { HTMLAttributes } from "react";

export interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  /**
   * Minimum value of the range.
   * @default 0
   */
  min?: number;
  /**
   * Maximum value of the range.
   * @default 100
   */
  max?: number;
  /**
   * Step increment between values.
   * @default 1
   */
  step?: number;
  /**
   * Controlled value.
   */
  value?: number;
  /**
   * Default value for uncontrolled usage.
   * @default 0
   */
  defaultValue?: number;
  /**
   * Called when the value changes.
   */
  onChange?: (value: number) => void;
  /**
   * When true, the slider cannot be interacted with.
   * @default false
   */
  disabled?: boolean;
  /**
   * Accessible label for the slider. Required when no visible label is provided.
   */
  "aria-label"?: string;
  /**
   * ID of an element that labels this slider.
   */
  "aria-labelledby"?: string;
}
