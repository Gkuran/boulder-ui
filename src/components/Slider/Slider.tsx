import { forwardRef, useCallback, useState } from "react";
import type { SliderProps } from "./Slider.types";
import styles from "./Slider.module.css";
import { cx } from "@/utils";

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      value: controlledValue,
      defaultValue = 0,
      onChange,
      disabled = false,
      className,
      style,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    const fillPercent = max > min
      ? ((currentValue - min) / (max - min)) * 100
      : 0;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const next = Number(e.target.value);
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
      },
      [isControlled, onChange],
    );

    return (
      <div
        ref={ref}
        className={cx(styles.wrapper, className)}
        style={style}
        {...props}
      >
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          disabled={disabled}
          className={styles.slider}
          style={{ "--slider-fill": `${fillPercent}%` } as React.CSSProperties}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          onChange={handleChange}
        />
      </div>
    );
  },
);

Slider.displayName = "Slider";
