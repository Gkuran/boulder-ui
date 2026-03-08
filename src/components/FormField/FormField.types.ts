import type { ReactElement } from "react";

export interface FormFieldProps {
  label?: string;
  description?: string;
  error?: string;
  htmlFor?: string;
  id?: string;
  children: ReactElement;
}
