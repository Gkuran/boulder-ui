import { cloneElement } from "react";
import type { FormFieldProps } from "./FormField.types";
import styles from "./FormField.module.css";
import { Label } from "../Label";

export function FormField({
  label,
  description,
  error,
  id,
  children,
}: FormFieldProps) {
  const fieldId = id || `field-${Math.random().toString(36).slice(2, 9)}`;

  const descriptionId = `${fieldId}-description`;
  const errorId = `${fieldId}-error`;

  const describedBy = error ? errorId : description ? descriptionId : undefined;

  const child = cloneElement(children as any, {
    id: fieldId,
    "aria-invalid": !!error,
    "aria-describedby": describedBy,
  });

  return (
    <div className={styles.wrapper}>
      {label && <Label htmlFor={fieldId}>{label}</Label>}

      {child}

      {description && !error && (
        <span id={descriptionId} className={styles.description}>
          {description}
        </span>
      )}

      {error && (
        <span id={errorId} className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}
