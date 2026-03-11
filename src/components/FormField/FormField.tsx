import { cloneElement, useId } from "react";
import type { FormFieldProps } from "./FormField.types";
import styles from "./FormField.module.css";
import { Label } from "../Label";
import { ErrorMessage } from "../ErrorMessage";

export function FormField({
  label,
  description,
  error,
  id,
  children,
}: FormFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  const descriptionId = `${fieldId}-description`;
  const errorId = `${fieldId}-error`;

  const describedBy = error ? errorId : description ? descriptionId : undefined;

  const child = cloneElement(children as React.ReactElement<Record<string, unknown>>, {
    id: fieldId,
    "aria-invalid": error ? true : undefined,
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
        <ErrorMessage id={errorId}>{error}</ErrorMessage>
      )}
    </div>
  );
}
