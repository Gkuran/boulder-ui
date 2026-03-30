import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useId,
  useState,
} from "react";
import type {
  RadioGroupItemProps,
  RadioGroupRootProps,
} from "./RadioGroup.types";
import styles from "./RadioGroup.module.css";
import { cx } from "@/utils";

// ─── RadioGroupRoot ───────────────────────────────────────────────────────────
export const RadioGroupRoot = forwardRef<HTMLDivElement, RadioGroupRootProps>(
  (
    {
      name,
      value: controlledValue,
      defaultValue,
      onValueChange,
      orientation = "vertical",
      disabled = false,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const isControlled = controlledValue !== undefined;
    const selectedValue = isControlled ? controlledValue : internalValue;

    const handleSelect = useCallback(
      (val: string) => {
        if (!isControlled) setInternalValue(val);
        onValueChange?.(val);
      },
      [isControlled, onValueChange],
    );

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cx(styles.root, styles[orientation], className)}
        {...props}
      >
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return child;
          return cloneElement(child as React.ReactElement<Record<string, unknown>>, {
            _name: name,
            _selectedValue: selectedValue,
            _onSelect: handleSelect,
            _groupDisabled: disabled,
          });
        })}
      </div>
    );
  },
);
RadioGroupRoot.displayName = "RadioGroupRoot";

// ─── RadioGroupItem ───────────────────────────────────────────────────────────
export const RadioGroupItem = forwardRef<HTMLInputElement, RadioGroupItemProps>(
  (
    {
      value,
      label,
      disabled,
      className,
      _name,
      _selectedValue,
      _onSelect,
      _groupDisabled,
      onChange,
      ...props
    },
    ref,
  ) => {
    const inputId = useId();
    const isDisabled = disabled || _groupDisabled;
    const isChecked = _selectedValue === value;

    return (
      <label
        htmlFor={inputId}
        className={cx(styles.item, isDisabled && styles.disabled, className)}
      >
        <input
          ref={ref}
          id={inputId}
          type="radio"
          name={_name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          className={styles.input}
          onChange={(e) => {
            if (e.target.checked) _onSelect?.(value);
            onChange?.(e);
          }}
          {...props}
        />
        <span className={styles.label}>{label}</span>
      </label>
    );
  },
);
RadioGroupItem.displayName = "RadioGroupItem";

// ─── Namespace export ─────────────────────────────────────────────────────────
export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
};
